"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "@/lib/theme-context"

export default function BusinessROI() {
  const { themeProgress } = useTheme()
  
  // Calculate background color based on theme progress
  const bgColor = `hsl(${200 + themeProgress * 60} ${20 + themeProgress * 30}% ${90 + themeProgress * 10}%)`
  const textColor = themeProgress > 0.5 ? 'text-gray-900' : 'text-white'
  const cardBgColor = themeProgress > 0.5 ? 'bg-white/90' : 'bg-gray-800/90'
  const cardBorderColor = themeProgress > 0.5 ? 'border-gray-200' : 'border-gray-700'

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: bgColor,
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${themeProgress * 100}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${textColor}`}>
          Activate Users. Transform Your Product.
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${textColor} opacity-70`}>
          Drive adoption by solving user problems in real-time while uncovering the insights that build a better product.
          </p>
        </div>

        {/* 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Slash Support Costs */}
          <Card className={`h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 ${cardBgColor} ${cardBorderColor} backdrop-blur-sm`}>
            <CardHeader className="text-center pb-4">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <CardTitle className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${textColor}`}>
                Slash Your Support Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className={`leading-relaxed transition-colors duration-300 ${textColor} opacity-70`}>
                Empower users to find answers and complete tasks on their own. Solving queries in-app before they become tickets.
              </p>
            </CardContent>
          </Card>

          {/* Column 2: Double User Activation */}
          <Card className={`h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 ${cardBgColor} ${cardBorderColor} backdrop-blur-sm`}>
            <CardHeader className="text-center pb-4">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <CardTitle className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${textColor}`}>
                Double User Activation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className={`leading-relaxed transition-colors duration-300 ${textColor} opacity-70`}>
              Eliminate the learning curve and drastically reduce time-to-value. Convert new sign-ups into deeply engaged, paying customers faster than ever before.
              </p>
            </CardContent>
          </Card>

          {/* Column 3: Uncover Actionable Insights */}
          <Card className={`h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 ${cardBgColor} ${cardBorderColor} backdrop-blur-sm`}>
            <CardHeader className="text-center pb-4">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <CardTitle className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${textColor}`}>
                Get Actionable Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className={`leading-relaxed transition-colors duration-300 ${textColor} opacity-70`}>
                Understand exactly where users get stuck and what they intend to do. Get actionable insights to help you build a better product.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
