"use client"

import * as React from "react"
import { IconChevronDown, IconX, IconMicrophone, IconPlayerPlay } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

const expandAnimation = `
  @keyframes expandFromBottomRight {
    from {
      opacity: 0;
      transform: scale(0.3);
      transform-origin: bottom right;
    }
    to {
      opacity: 1;
      transform: scale(1);
      transform-origin: bottom right;
    }
  }

  .widget-expand {
    animation: expandFromBottomRight 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
`

if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = expandAnimation
  document.head.appendChild(style)
}

export function Widget() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true)
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
    <div className="absolute bottom-28 right-16" ref={containerRef}>
      {isExpanded && (
        <div className="absolute bottom-18 right-0 w-[420px] sm:w-[480px] bg-[#1a1a1a] rounded-4xl shadow-2xl overflow-hidden border border-white/10 widget-expand">
          {/* Header */}
          <div className="px-6 py-2 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">Navio</h2>
          </div>

          {/* Chat Content */}
          <div className="p-4">
            {/* Message Bubble */}
            <div className="bg-[#2a2a2a] rounded-3xl p-4 mb-4">
              <TextGenerateEffect
                words="Hello! I'm Navio, your AI assistant for web pages. I can answer questions about the content, guide you through tasks, and even perform actions for you."
                className="text-white text-sm leading-relaxed font-normal"
                filter={true}
                duration={0.5}
                staggerDelay={0.1}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-4">
              <button
                className="flex-1 bg-[#2a2a2a] hover:bg-[#2a2a2a]/60 text-white border border-transparent hover:border-blue-600 rounded-full py-3 text-sm font-medium transition-all duration-200"
              >
                Questions
              </button>
              <button
                className="flex-1 bg-[#2a2a2a] hover:bg-[#2a2a2a]/60 text-white border border-transparent hover:border-blue-600 rounded-full py-3 text-sm font-medium transition-all duration-200"
              >
                How do I
              </button>
              <button
                className="flex-1 bg-[#2a2a2a] hover:bg-[#2a2a2a]/60 text-white border border-transparent hover:border-blue-600 rounded-full py-3 text-sm font-medium transition-all duration-200"
              >
                Do it
              </button>
            </div>

            {/* Input Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Type what you'd like me to do..."
                className="w-full bg-[#2a2a2a] text-white placeholder-gray-400 rounded-3xl pl-6 pr-28 py-3 text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 flex gap-1">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg"
                >
                  <IconMicrophone className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  className="h-10 w-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  <IconPlayerPlay className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Toggle Button - Always visible in bottom right */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="h-14 w-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl"
      >
        {isExpanded ? (
          <IconX className="h-7 w-7 text-white" />
        ) : (
          <IconPlayerPlay className="h-7 w-7 text-white" />
        )}
      </Button>
    </div>
  )
}
