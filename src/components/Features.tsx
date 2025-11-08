"use client"

import * as React from "react"
import { LazyTerminal } from "@/components/ui/lazy-terminal"
import { Widget } from "@/components/ui/widget"

export default function Features() {

  return (
    <section id="features" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-top mb-10">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white transition-colors duration-300">
              Intelligence That Works Inside Your Product
              </h2>
          </div>
          <div className="text-right justify-end">
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-white opacity-70 transition-colors duration-300">
              Navio integrates seamlessly into your platform, guiding users in real time, automating key workflows, and revealing insights that drive adoption and growth.
              </p>
          </div>
        </div>

        {/* 2-Card Layout with Separator */}
        <div className="grid md:grid-cols-2 gap-0 relative">
          {/* Column 1: Integration */}
          <div className="relative p-6 lg:p-8 flex flex-col items-center justify-center">
            <LazyTerminal />
              <div className="text-center mt-8">
              <h3 className="text-2xl lg:text-3xl  font-bold text-card-foreground transition-colors duration-300 mb-4">
                Seamless Integration
              </h3>
              <p className="leading-relaxed text-muted-foreground transition-colors duration-300">
                Embed our lightweight agent with a single line of code. No complex SDKs.
              </p>
            </div>
          </div>

          {/* Vertical Separator between Integration Columns */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border"></div>

          {/* Column 2: Widget */}
          <div className="relative p-6 lg:p-8 flex flex-col">
            <Widget />
            <div className="text-center mt-auto pt-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground transition-colors duration-300 mb-4">
                Custom In-App Widget 
              </h3>
              <p className="leading-relaxed text-muted-foreground transition-colors duration-300">
                Fully integrated widget that respects your brand's design system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
