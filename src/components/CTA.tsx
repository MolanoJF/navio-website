"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left Side Text - Stacks on mobile, overlays on desktop */}
        <div className="w-full lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:z-10 px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-0 flex flex-col justify-start lg:justify-start lg:pt-18">
          <div className="max-w-7xl mx-auto w-full lg:pl-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 sm:mb-8">
                Intelligence that lives<br />
                inside your app.
              </h2>
              <div className="flex justify-start mt-6 sm:mt-8">
                <Button type="button" size="lg" className="text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 h-14 sm:h-16 relative z-10 font-semibold rounded-full btn-3d" asChild>
                  <Link href="https://demo.naviobot.com">
                    Try Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Background */}
        <div className="w-full lg:flex-1 relative">
          <motion.img
            src="/CTAB.png"
            alt="CTA Background"
            className="w-full h-auto lg:h-full object-contain lg:object-cover"
            initial={{
              opacity: 0,
              filter: "blur(30px)",
              scale: 1.2,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </section>
  )
}
