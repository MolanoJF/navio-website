"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, Company Name",
    company: "Company Name",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            See how SAIL is transforming user experiences and driving measurable business results across industries.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-muted/30 border-border/50 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Section: Profile and Testimonial */}
                <div className="space-y-6">
                  {/* Profile Section */}
                  <div className="flex items-start gap-4">
                    {/* Profile Picture/Logo Placeholder */}
                    <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center">
                        <svg className="w-5 h-5 text-background" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Name and Title */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-foreground/60 text-sm">
                        {currentTestimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-lg text-foreground/80 leading-relaxed italic">
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
                    <h4 className="text-2xl font-bold text-foreground">
                      {currentTestimonial.company}
                    </h4>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border/50"></div>

                  {/* Statistics Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {currentTestimonial.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-foreground mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-foreground/70 font-medium">
                          {stat.label}
                        </div>
                        <div className="text-xs text-foreground/50">
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
                    className="w-10 h-10 p-0 rounded-full"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="w-10 h-10 p-0 rounded-full"
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
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-border'
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
