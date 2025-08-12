"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Import shaders as raw strings
const vertexShader = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform vec4  uMouse;
uniform float uTime;
uniform float uPixelSize;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

// Bayer matrix helpers (ordered dithering thresholds)
float Bayer2(vec2 a) {
    a = floor(a);
    return fract(a.x / 2. + a.y * a.y * .75);
}

#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.
#define FBM_SCALE       4.0

// 1-D hash and 3-D value-noise helpers
float hash11(float n) { return fract(sin(n)*43758.5453); }

float vnoise(vec3 p)
{
    vec3 ip = floor(p);
    vec3 fp = fract(p);

    float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
    float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
    float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
    float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
    float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
    float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
    float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
    float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));

    vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);

    float x00 = mix(n000, n100, w.x);
    float x10 = mix(n010, n110, w.x);
    float x01 = mix(n001, n101, w.x);
    float x11 = mix(n011, n111, w.x);

    float y0  = mix(x00, x10, w.y);
    float y1  = mix(x01, x11, w.y);

    return mix(y0, y1, w.z) * 2.0 - 1.0;
}

// Stable fBm
float fbm2(vec2 uv, float t)
{
    vec3 p   = vec3(uv * FBM_SCALE, t);
    float amp  = 1.;
    float freq = 1.;
    float sum  = 1.;

    for (int i = 0; i < FBM_OCTAVES; ++i)
    {
        sum  += amp * vnoise(p * freq);
        freq *= FBM_LACUNARITY;
        amp  *= FBM_GAIN;
    }
    
    return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov) {
    float r = sqrt(cov) * .25;
    float d = length(p - 0.5) - r;
    float aa = 0.5 * fwidth(d);
    return cov * (1.0 - smoothstep(-aa, aa, d * 2.));
}

float maskTriangle(vec2 p, vec2 id, float cov) {
    bool flip = mod(id.x + id.y, 2.0) > 0.5;
    if (flip) p.x = 1.0 - p.x;
    float r = sqrt(cov);
    float d  = p.y - r*(1.0 - p.x);
    float aa = fwidth(d);
    return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov) {
    float r = sqrt(cov) * 0.564;
    return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main() {
    float pixelSize = uPixelSize;
    vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;

    // Calculate the UV coordinates for the grid
    float aspectRatio = uResolution.x / uResolution.y;

    vec2 pixelId = floor(fragCoord / pixelSize);
    vec2 pixelUV = fract(fragCoord / pixelSize); 

    float cellPixelSize =  8. * pixelSize;
    vec2 cellId = floor(fragCoord / cellPixelSize);
    
    vec2 cellCoord = cellId * cellPixelSize;
    vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

    // Animated fbm feed
    float feed = fbm2(uv, uTime * 0.05);
    feed = feed * 0.5 - 0.65;

    // Ripple clicks
    const float speed     = 0.30;
    const float thickness = 0.10;
    const float dampT     = 1.0;
    const float dampR     = 10.0;

    for (int i = 0; i < MAX_CLICKS; ++i) {
        vec2 pos = uClickPos[i];
        if (pos.x < 0.0) continue;

        vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution) )) * vec2(aspectRatio, 1.0);

        float t = max(uTime - uClickTimes[i], 0.0);
        float r = distance(uv, cuv);

        float waveR = speed * t;
        float ring  = exp(-pow((r - waveR) / thickness, 2.0));
        float atten = exp(-dampT * t) * exp(-dampR * r);
        feed = max(feed, ring * atten);
    }

    float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
    float bw    = step(0.5, feed + bayer);

    // mask selection
    float coverage = bw;
    float M;
    if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
    else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
    else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
    else                                   M = coverage;

    vec3 color = uColor; 
    gl_FragColor = vec4(color, M);
}
`

interface WebGLBayerBackgroundProps {
  shapeType?: 'square' | 'circle' | 'triangle' | 'diamond'
  pixelSize?: number
  color?: string
  className?: string
}

export default function WebGLBayerBackground({ 
  shapeType = 'circle', 
  pixelSize = 6, 
  color = '#ffffff',
  className = ''
}: WebGLBayerBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    renderer?: THREE.WebGLRenderer
    scene?: THREE.Scene
    camera?: THREE.OrthographicCamera
    material?: THREE.ShaderMaterial
    uniforms?: any
    animationId?: number
    clock?: THREE.Clock
  }>({})

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl2')
    if (!gl) {
      console.warn('WebGL2 not supported, falling back to WebGL')
      const fallbackGl = canvas.getContext('webgl')
      if (!fallbackGl) {
        console.error('WebGL not supported')
        return
      }
    }

    // Shape mapping
    const SHAPE_MAP: Record<string, number> = {
      square: 0,
      circle: 1,
      triangle: 2,
      diamond: 3,
    }

    // Initialize Three.js
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      context: gl || undefined, 
      antialias: true,
      alpha: true
    })
    
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    
    // Uniforms
    const MAX_CLICKS = 10
    const uniforms = {
      uResolution: { value: new THREE.Vector2() },
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uClickPos: { value: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1, -1)) },
      uClickTimes: { value: new Float32Array(MAX_CLICKS) },
      uShapeType: { value: SHAPE_MAP[shapeType] ?? 1 },
      uPixelSize: { value: pixelSize },
      uMouse: { value: new THREE.Vector4() }
    }

    // Material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide
    })

    // Geometry
    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Store references
    sceneRef.current = {
      renderer,
      scene,
      camera,
      material,
      uniforms,
      clock: new THREE.Clock()
    }

    // Resize handler
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      const dpr = window.devicePixelRatio || 1
      
      renderer.setSize(w * dpr, h * dpr, false)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      uniforms.uResolution.value.set(w * dpr, h * dpr)
    }

    // Click handler
    let clickIx = 0
    const handlePointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      const fx = (e.clientX - rect.left) * dpr
      const fy = (rect.height - (e.clientY - rect.top)) * dpr

      uniforms.uClickPos.value[clickIx].set(fx, fy)
      uniforms.uClickTimes.value[clickIx] = uniforms.uTime.value
      clickIx = (clickIx + 1) % MAX_CLICKS
    }

    // Animation loop
    const animate = () => {
      if (!sceneRef.current.clock || !sceneRef.current.renderer || !sceneRef.current.scene || !sceneRef.current.camera) return
      
      uniforms.uTime.value = sceneRef.current.clock.getElapsedTime()
      sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera)
      sceneRef.current.animationId = requestAnimationFrame(animate)
    }

    // Initialize
    handleResize()
    window.addEventListener('resize', handleResize)
    canvas.addEventListener('pointerdown', handlePointerDown)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('pointerdown', handlePointerDown)
      
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId)
      }
      
      if (sceneRef.current.renderer) {
        sceneRef.current.renderer.dispose()
      }
      
      if (sceneRef.current.material) {
        sceneRef.current.material.dispose()
      }
      
      geometry.dispose()
    }
  }, [shapeType, pixelSize, color])

  // Update uniforms when props change
  useEffect(() => {
    if (sceneRef.current.uniforms) {
      const SHAPE_MAP: Record<string, number> = {
        square: 0,
        circle: 1,
        triangle: 2,
        diamond: 3,
      }
      
      sceneRef.current.uniforms.uShapeType.value = SHAPE_MAP[shapeType] ?? 1
      sceneRef.current.uniforms.uPixelSize.value = pixelSize
      sceneRef.current.uniforms.uColor.value = new THREE.Color(color)
    }
  }, [shapeType, pixelSize, color])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ 
        pointerEvents: 'auto',
        zIndex: 1
      }}
    />
  )
}
