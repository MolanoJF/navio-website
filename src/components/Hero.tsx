"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import OceanParticlesBackground from "./OceanParticlesBackground"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-start overflow-hidden pt-25">
      {/* Ocean Particles Background */}
      <OceanParticlesBackground className="opacity-100" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
        <div className="max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight mb-2">
          Your Software, <br />Effortless
          </h1>
          
          {/* Sub-headline */}
          <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-6">
          An intelligent layer that understands your product, delivering instant, in-app guidance and powerful one-click automation.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button type="button" size="lg" className="text-xl px-12 py-4 h-16 relative z-10 font-semibold rounded-full btn-3d" asChild>
              <Link href="/dashboard">
                Try Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  )
}
