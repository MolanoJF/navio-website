"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "@/lib/theme-context"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, Company Name",
    company: "Company Name",
    testimonial: "SAIL completely changed our onboarding game. We saw a 35% increase in user activation in the first month. It's the closest thing to having a personal tutor for every single user",
    stats: [
      {
        value: "2.2x",
        label: "Monthly Active Users",
        sublabel: "Since last month"
      },
      {
        value: "256%",
        label: "Increase in Revenue",
        sublabel: "Since last year"
      }
    ]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "CTO, TechCorp",
    company: "TechCorp",
    testimonial: "SAIL transformed our user onboarding process completely. We've seen incredible improvements in user activation and retention rates.",
    stats: [
      {
        value: "3.5x",
        label: "User Activation",
        sublabel: "Since implementation"
      },
      {
        value: "180%",
        label: "Support Efficiency",
        sublabel: "Reduced ticket volume"
      }
    ]
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Product Manager, InnovateLab",
    company: "InnovateLab",
    testimonial: "The actionable insights we get from SAIL have completely changed how we approach product development and user experience.",
    stats: [
      {
        value: "4.2x",
        label: "Feature Adoption",
        sublabel: "New user workflows"
      },
      {
        value: "320%",
        label: "User Satisfaction",
        sublabel: "NPS improvement"
      }
    ]
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { theme } = useTheme() // Removed setTheme
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  // Parallax scroll effect only (no theme transition)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate scroll progress within the testimonials section for parallax only
      let progress = 0
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Section is in view
        if (rect.top <= windowHeight * 0.5) {
          // Section is more than halfway in view
          progress = Math.min(1, (windowHeight * 0.5 - rect.top) / (windowHeight * 0.3))
        } else {
          // Section is entering
          progress = 0
        }
      } else if (rect.top < 0) {
        // Section is above viewport
        progress = 1
      }

      setScrollProgress(progress)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  // Consistent light theme styling (no color transitions)
  const bgColor = 'hsl(200, 50%, 95%)' // Light background only
  const textColor = 'text-gray-900' // Dark text only
  const cardBgColor = 'bg-white/90' // White card background only
  const cardBorderColor = 'border-gray-200' // Light border only

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden transition-all duration-1000"
      style={{ 
        backgroundColor: bgColor,
        transform: `translateY(${scrollProgress * 20}px)`, // Subtle parallax effect only
      }}
    >
      {/* Subtle background pattern with consistent opacity */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ${textColor}`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${textColor} opacity-70`}>
            See how SAIL is transforming user experiences and driving measurable business results across industries.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto">
          <Card className={`${cardBgColor} ${cardBorderColor} shadow-lg backdrop-blur-sm transition-all duration-1000 hover:shadow-2xl`}>
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Section: Profile and Testimonial */}
                <div className="space-y-6">
                  {/* Profile Section */}
                  <div className="flex items-start gap-4">
                    {/* Profile Picture/Logo Placeholder */}
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg">
                      {currentTestimonial.company.charAt(0)}
                    </div>
                    
                    {/* Name and Title */}
                    <div>
                      <h3 className={`text-xl font-bold transition-all duration-1000 ${textColor}`}>
                        {currentTestimonial.name}
                      </h3>
                      <p className={`opacity-60 text-sm transition-all duration-1000 ${textColor}`}>
                        {currentTestimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className={`text-lg leading-relaxed italic transition-all duration-1000 ${textColor} opacity-80`}>
                    "{currentTestimonial.testimonial}"
                  </blockquote>
                </div>

                {/* Right Section: Company and Stats */}
                <div className="space-y-6">
                  {/* Company Name with Checkmark */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <h4 className={`text-2xl font-bold transition-all duration-1000 ${textColor}`}>
                      {currentTestimonial.company}
                    </h4>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-300"></div>

                  {/* Statistics Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {currentTestimonial.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-3xl font-bold mb-1 transition-all duration-1000 ${textColor}`}>
                          {stat.value}
                        </div>
                        <div className={`text-sm font-medium transition-all duration-1000 ${textColor} opacity-70`}>
                          {stat.label}
                        </div>
                        <div className={`text-xs transition-all duration-1000 ${textColor} opacity-50`}>
                          {stat.sublabel}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-end mt-8">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="w-10 h-10 p-0 rounded-full border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="w-10 h-10 p-0 rounded-full border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
