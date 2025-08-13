"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import WebGLBayerBackground from "./WebGLBayerBackground"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-start overflow-hidden pt-40">
      {/* WebGL Bayer Dithering Background */}
      <WebGLBayerBackground 
        shapeType="diamond"
        pixelSize={8}
        color="#ffffff"
        className="opacity-40"
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-background/80 via-background/60 to-accent/5 pointer-events-none"
        aria-label="Background gradient overlay"
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
        <div className="max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            Your product's new <br />Built-in expert
          </h1>
          
          {/* Sub-headline */}
          <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
          An intelligent layer that understands your product, delivering instant, in-app guidance and powerful one-click automation.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="lg" className="text-base px-8 py-3 h-12" asChild>
              <Link href="/dashboard">
                View Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  )
}
