"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import OceanParticlesBackground from "./OceanParticlesBackground"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-start overflow-hidden pt-30">
      {/* Ocean Particles Background */}
      <OceanParticlesBackground className="opacity-80" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
        <div className="max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight mb-4">
          Your Software, <br />Effortless
          </h1>
          
          {/* Sub-headline */}
          <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-4">
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
