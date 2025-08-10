"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BusinessROI() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Business ROI
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            See the measurable impact SAIL delivers across your organization, from cost savings to user engagement and product insights.
          </p>
        </div>

        {/* 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Slash Support Costs */}
          <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <CardTitle className="text-xl lg:text-2xl font-bold text-foreground">
                Slash Your Support Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/70 leading-relaxed">
                Empower users to find answers and complete tasks on their own. By resolving queries in-app before they become tickets, our partners see an average of{" "}
                <span className="font-semibold text-primary">70% fewer support requests</span>{" "}
                and a dramatic increase in team efficiency.
              </p>
            </CardContent>
          </Card>

          {/* Column 2: Double User Activation */}
          <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <CardTitle className="text-xl lg:text-2xl font-bold text-foreground">
                Double User Activation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/70 leading-relaxed">
                Turn confusing first-run experiences into guided "Aha!" moments. SAIL helps new users master your product's core workflow in minutes, not hours, leading to{" "}
                <span className="font-semibold text-primary">2x faster activation rates</span>{" "}
                and much higher long-term retention.
              </p>
            </CardContent>
          </Card>

          {/* Column 3: Uncover Actionable Insights */}
          <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <CardTitle className="text-xl lg:text-2xl font-bold text-foreground">
                Uncover Actionable Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/70 leading-relaxed">
                Go beyond simple analytics. SAIL's intelligence layer identifies exactly where users get stuck and what they intend to do. This provides a continuous stream of{" "}
                <span className="font-semibold text-primary">actionable insights</span>{" "}
                to help you build a better product.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
