"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Element for unicord.studio interactive background */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-background/95 to-accent/10"
        id="unicord-background"
        aria-label="Interactive background element for unicord.studio"
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6">
            From confused to{" "}
            <span className="text-primary">power user.</span>{" "}
            <span className="block">Instantly.</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-3xl mb-8">
            SAIL is an intelligent layer that understands your app, enabling users to get guidance, take action, or automate entire workflows—right inside your product.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button size="lg" className="text-base px-8 py-3 h-12">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-3 h-12"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
