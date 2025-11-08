"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { motion } from "motion/react"

interface OceanParticlesBackgroundProps {
  className?: string
}

export default function OceanParticlesBackground({ className = "" }: OceanParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current

    // Device performance hints
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
    const particleCount = isMobile ? 3600 : 8100 // 60x60 or 90x90
    const gridSize = Math.sqrt(particleCount)
    const spacing = isMobile ? 2.0 : 1.5

    // Default parameters (no UI)
    const waveParams = {
      amplitude: 2,
      frequency: 2.5,
      speed: 1.5,
      noiseIntensity: 0.3,
      noiseScale: 1,
      turbulence: 0.05,
    }

    const rippleParams = {
      strength: 8,
      speed: 0.6,
      maxRadius: 90,
      maxRipples: 3,
    }

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      300
    )

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      precision: "mediump",
    })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight, false)

    // Geometry
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const randomFactors = new Float32Array(particleCount)

    // Pre-calc grid positions and initialize
    let index = 0
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = (i - gridSize / 2) * spacing
        const z = (j - gridSize / 2) * spacing
        positions[index] = x
        positions[index + 1] = 0
        positions[index + 2] = z
        index += 3
      }
    }

    for (let i = 0; i < particleCount; i++) {
      randomFactors[i] = Math.random() * 2 - 1
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    // Shaders (simplified circle points with additive blending)
    const vertexShader = `
      varying float vIntensity;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vIntensity = 0.5 + (position.y * 0.05);
        gl_PointSize = 2.5 * (150.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `

    const fragmentShader = `
      varying float vIntensity;
      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        if (dist > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        gl_FragColor = vec4(0.9 * vIntensity, 0.95 * vIntensity, vIntensity, alpha * 0.7);
      }
    `

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Camera
    camera.position.set(0, 10, 78)
    camera.lookAt(0, 0, 20)

    // Interaction (ripples)
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
    const intersectPoint = new THREE.Vector3()
    const ripples: Array<{ center: THREE.Vector3; radius: number; strength: number; speed: number }> = []
    let lastClickTime = 0

    function onPointerDown(event: PointerEvent) {
      const now = performance.now()
      if (now - lastClickTime < 150) return
      lastClickTime = now

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      raycaster.ray.intersectPlane(plane, intersectPoint)

      if (ripples.length >= rippleParams.maxRipples) ripples.shift()

      ripples.push({
        center: intersectPoint.clone(),
        radius: 0,
        strength: rippleParams.strength,
        speed: rippleParams.speed,
      })
    }

    canvas.addEventListener("pointerdown", onPointerDown, { passive: true })

    // Resize
    let resizeTimeout: number | undefined
    function onWindowResize() {
      if (resizeTimeout) window.clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(() => {
        const w = window.innerWidth
        const h = window.innerHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h, false)
      }, 250)
    }

    window.addEventListener("resize", onWindowResize, { passive: true })

    // Utility noise
    function fastNoise(x: number, y: number, scale: number) {
      const value = Math.sin(x * scale * 12.9898 + y * scale * 78.233) * 43758.5453
      return (value - Math.floor(value)) * 2 - 1
    }

    // Animation loop (with frame skipping for perf)
    let time = 0
    let frameCount = 0
    const skipFrames = isMobile ? 3 : 1

    const freq1 = 0.08
    const freq2 = 0.05
    const freq3 = 0.025

    let rafId = 0
    function animate() {
      rafId = requestAnimationFrame(animate)
      frameCount++
      if (frameCount % skipFrames !== 0) return

      time += 0.016

      const pos = geometry.attributes.position.array as Float32Array
      const { amplitude, frequency, speed, noiseIntensity, noiseScale, turbulence } = waveParams

      const timeSpeed = time * speed
      const slowTime = time * 0.05
      const organicOffset = Math.sin(slowTime) * 0.3

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const x = pos[i3]
        const z = pos[i3 + 2]

        let y = 0
        y += Math.sin((x + z + organicOffset) * freq1 * frequency + timeSpeed) * amplitude
        y += Math.sin((x - z * 0.7) * freq2 * frequency + timeSpeed * 0.8) * amplitude * 0.5
        y += Math.sin((x + z) * freq3 * frequency + timeSpeed * 0.3) * amplitude * 0.8

        if (noiseIntensity > 0.1) {
          y += fastNoise(x, z, noiseScale) * noiseIntensity * amplitude * 0.5
        }

        if (turbulence > 0.01) {
          const rand = randomFactors[i]
          y += Math.sin(timeSpeed * 10 + rand * 10) * turbulence * amplitude
        }

        for (let r = 0; r < ripples.length; r++) {
          const ripple = ripples[r]
          const dx = x - ripple.center.x
          const dz = z - ripple.center.z
          const distSq = dx * dx + dz * dz
          // Only compute distance if potentially inside (skip precise check)
          if (distSq < ripple.radius * ripple.radius) {
            const distance = Math.sqrt(distSq)
            const rippleHeight = Math.sin((distance - ripple.radius) * 0.5) *
              ripple.strength * Math.exp(-ripple.radius * 0.05)
            y += rippleHeight
          }
        }

        pos[i3 + 1] = y
      }

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].radius += ripples[i].speed
        if (ripples[i].radius > rippleParams.maxRadius) {
          ripples.splice(i, 1)
        }
      }

      geometry.attributes.position.needsUpdate = true

      if (frameCount % 10 === 0) {
        camera.position.x = Math.sin(time * 0.05) * 1.5
        camera.position.y = 10 + Math.sin(time * 0.1) * 0.5
        camera.lookAt(0, 0, 20)
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener("resize", onWindowResize)
      canvas.removeEventListener("pointerdown", onPointerDown)
      if (rafId) cancelAnimationFrame(rafId)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <motion.div
      initial={{ scale: 1.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: -0.2 }}
      className="absolute inset-0 w-full h-full"
      style={{ transformOrigin: "center" }}
    >
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full ${className}`}
        style={{ pointerEvents: "auto", zIndex: 1 }}
      />
    </motion.div>
  )
}


