"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, transparent pricing that scales with you.
          </h2>
        </div>

        {/* 3-Column Pricing Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Column 1: Starter */}
          <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                Starter
              </CardTitle>
              <p className="text-foreground/70 text-sm leading-relaxed">
                For individuals and early projects exploring interactive guidance.
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">Free</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Up to 250 Guided Users / mo</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Interactive Guidance ("Show Me")</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">1 Agent</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Community Support</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="w-full" variant="outline">
                  Start for Free
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Column 2: Growth - Highlighted */}
          <Card className="h-full border-2 border-primary/30 bg-primary/5 relative hover:shadow-xl transition-all duration-300">
            {/* Most Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center pb-4 pt-6">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                Growth
              </CardTitle>
              <p className="text-foreground/70 text-sm leading-relaxed">
                For startups and teams ready to activate and retain their users.
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">$99</span>
                <span className="text-foreground/70 text-lg ml-1">/ mo</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Up to 2,000 Guided Users / mo</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Autonomous Actions ("Do It For Me")</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Core Analytics Dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Up to 5 Agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Email & Chat Support</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="w-full">
                  Choose Growth
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Column 3: Enterprise */}
          <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                Enterprise
              </CardTitle>
              <p className="text-foreground/70 text-sm leading-relaxed">
                For scaled companies requiring advanced security, insights, and unlimited potential.
              </p>
              <div className="mt-6">
                <span className="text-2xl font-bold text-foreground">Let's Talk</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Unlimited Users & Actions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Advanced Security & Compliance (SOC 2)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Actionable Product Insight Engine</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Unlimited Agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">Dedicated Success Manager</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Centered Final CTA */}
        <div className="text-center">
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Have complex needs or high-volume traffic? Let's design the perfect enterprise solution together.
          </p>
          <Button size="lg" className="text-base px-8 py-3 h-12">
            Build Your First Agent
          </Button>
        </div>
      </div>
    </section>
  )
}
