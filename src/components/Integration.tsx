"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconCode, IconPalette } from "@tabler/icons-react"
import { useTheme } from "@/lib/theme-context"

export default function Integration() {
  const { theme } = useTheme()
  
  return (
    <section className="py-30 relative overflow-hidden bg-background ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground transition-all duration-1000">
            Powerful Intelligence. Effortless Control.
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground transition-all duration-1000">
            Seamlessly integrate SAIL into your existing workflow with our lightweight, brand-aware solutions.
          </p>
        </div>

        {/* 2-Card Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Integration */}
          <Card className="bg-card backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <IconCode className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-card-foreground transition-all duration-1000">Integration</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base leading-relaxed text-muted-foreground transition-all duration-1000">
                Embed our lightweight agent with a single line of code. No complex SDKs.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Card 2: Widget */}
          <Card className="bg-card backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                <IconPalette className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-card-foreground transition-all duration-1000">Widget</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base leading-relaxed text-muted-foreground transition-all duration-1000">
                Fully integrated widget that respects your brand's design system.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
