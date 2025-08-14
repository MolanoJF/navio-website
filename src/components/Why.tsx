"use client"

import Image from "next/image"

export default function Why() {
  return (
    <section 
      className="py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white transition-colors duration-300">
          Activate Users. Transform Your Product.
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-white opacity-70 transition-colors duration-300">
          Drive adoption by solving user problems in real-time while uncovering the insights that build a better product.
          </p>
        </div>

        {/* 3-Column Grid with Separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Column 1: Slash Support Costs */}
          <div className="relative p-6 lg:p-8">
            <div className="text-left mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 transition-colors duration-300">
                Slash Your Support Costs
              </h3>
              <p className="leading-relaxed text-white opacity-70 transition-colors duration-300">
                Empower users to find answers and complete tasks on their own. Solving queries in-app before they become tickets.
              </p>
            </div>
            <div className="relative w-full h-50 sm:h-80">
              <Image src="/S2_I1.jpg" alt="Customer support automation illustration" fill className="object-cover rounded-lg" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
          </div>

          {/* Vertical Separator 1 */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/20"></div>

          {/* Column 2: Double User Activation */}
          <div className="relative p-6 lg:p-8">
            <div className="text-left mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 transition-colors duration-300">
                Double User Activation
              </h3>
              <p className="leading-relaxed text-white opacity-70 transition-colors duration-300">
              Eliminate the learning curve and drastically reduce time-to-value. Convert new sign-ups into deeply engaged, paying customers faster than ever before.
              </p>
            </div>
            <div className="relative w-full h-50 sm:h-80">
              <Image src="/S2_I2.jpg" alt="Activation rocket illustration" fill className="object-cover rounded-lg" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
          </div>

          {/* Vertical Separator 2 */}
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/20"></div>

          {/* Column 3: Uncover Actionable Insights */}
          <div className="relative p-6 lg:p-8">
            <div className="text-left mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 transition-colors duration-300">
                Get Actionable Insights
              </h3>
              <p className="leading-relaxed text-white opacity-70 transition-colors duration-300">
                Understand exactly where users get stuck and what they intend to do. Get actionable insights to help you build a better product.
              </p>
            </div>
            <div className="relative w-full h-50 sm:h-80">
              <Image src="/S2_I3.jpg" alt="Insights magnifying glass illustration" fill className="object-cover rounded-lg" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
