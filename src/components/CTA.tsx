"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Image Background */}
      <img
        src="/CTAB.png"
        alt="CTA Background"
        className="w-full h-full object-cover"
      />
      
      
      <div className="absolute inset-0 container mx-auto px-8 sm:px-12 lg:px-16 z-10 pt-0">
        <div className="flex flex-col lg:flex-row items-start justify-between max-w-6xl mx-auto">
          {/* Left Side Text */}
          <div className="text-left mb-10 lg:mb-0 lg:flex-1 lg:pt-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Intelligence that lives<br />
              inside your app.
            </h2>
            <div className="flex justify-start mt-8 ml-16">
              <Button type="button" size="lg" className="text-xl px-12 py-4 h-16 relative z-10 font-semibold rounded-full btn-3d" asChild>
                <Link href="https://cal.com/navio-owdjpk/navio-demo">
                  Try Now
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
