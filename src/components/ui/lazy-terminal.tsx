"use client"

import * as React from "react"
import {
  Terminal,
  AnimatedSpan,
} from "@/components/ui/shadcn-io/terminal"
import { Skeleton } from "@/components/ui/skeleton"

interface LazyTerminalProps {
  className?: string
}

export function LazyTerminal({ className }: LazyTerminalProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stop observing once loaded
          if (containerRef.current) {
            observer.unobserve(containerRef.current)
          }
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <Terminal>
          <div className="space-y-2">
            <AnimatedSpan delay={0} className="opacity-60">&lt;html&gt;</AnimatedSpan>
            <AnimatedSpan delay={500} className="opacity-60">&lt;body&gt;</AnimatedSpan>
            <Skeleton delay={1000} className="h-4 w-[220px]" />
            <Skeleton delay={1500} className="h-4 w-[180px]" />
            <AnimatedSpan delay={2000}>&lt;script src="https://naviobot.com/embed.min.js"&gt;&lt;/script&gt;</AnimatedSpan>
            <Skeleton delay={2500} className="h-4 w-[140px]" />
            <Skeleton delay={3000} className="h-4 w-[220px]" />
            <AnimatedSpan delay={3500} className="opacity-60">&lt;/body&gt;</AnimatedSpan>
            <AnimatedSpan delay={4000} className="opacity-60">&lt;/html&gt;</AnimatedSpan>
          </div>
        </Terminal>
      ) : (
        // Placeholder skeleton while not visible
        <div className="z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-border bg-background p-4">
          <div className="flex flex-col gap-y-2 border-b border-border p-4">
            <div className="flex flex-row gap-x-2">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="space-y-3 p-4">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[180px]" />
          </div>
        </div>
      )}
    </div>
  )
}
