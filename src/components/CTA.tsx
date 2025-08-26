"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="min-h-screen pt-0 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Footer.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-start justify-between max-w-6xl mx-auto">
          {/* Left Side Text - Positioned Higher */}
          <div className="text-left mb-8 lg:mb-0 lg:flex-1 lg:pt-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Organize your<br />
              dev universe,
            </h2>
          </div>

          {/* Right Side Text and CTA - Positioned Lower */}
          <div className="text-right lg:flex-1 lg:pt-60">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              faster and easier.
            </h3>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-gradient-to-r from-orange-400 via-pink-500 to-blue-500 text-white hover:bg-white/10 transition-all duration-300 px-8 py-3 rounded-full" 
              asChild
            >
              <Link href="/dashboard">
                TRY NOW
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
