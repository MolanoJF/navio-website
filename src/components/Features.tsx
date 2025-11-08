"use client"

import * as React from "react"
import { LazyTerminal } from "@/components/ui/lazy-terminal"
import { Widget } from "@/components/ui/widget"
import { FadeIn } from "@/components/ui/animated"

export default function Features() {

  return (
    <section id="features" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white transition-colors duration-300">
                Intelligence That Works Inside Your Product
                </h2>
            </div>
            <div className="text-center md:text-right justify-end">
              <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-white opacity-70 transition-colors duration-300">
                Navio integrates seamlessly into your platform, guiding users in real time, automating key workflows, and revealing insights that drive adoption and growth.
                </p>
            </div>
          </div>
        </FadeIn>

        {/* 2-Card Layout with Separator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
          {/* Column 1: Integration */}
          <FadeIn delay={0.3}>
            <div className="relative p-6 lg:p-8 flex flex-col items-center min-h-[400px] md:min-h-[480px]">
              <div className="w-full mb-18">
                <LazyTerminal />
              </div>
              <div className="text-center mt-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground transition-colors duration-300 mb-4">
                  Seamless Integration
                </h3>
                <p className="leading-relaxed text-muted-foreground transition-colors duration-300">
                  Embed our lightweight agent with a single line of code. No complex SDKs.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Vertical Separator between Integration Columns */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border"></div>

          {/* Column 2: Widget */}
          <FadeIn delay={0.6}>
            <div className="relative p-6 lg:p-8 flex flex-col items-center min-h-[400px] md:min-h-[480px]">
              <div className="w-full mb-2">
                <Widget />
              </div>
              <div className="text-center mt-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground transition-colors duration-300 mb-4">
                  Custom In-App Widget
                </h3>
                <p className="leading-relaxed text-muted-foreground transition-colors duration-300">
                  Fully integrated widget that respects your brand's design system.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
