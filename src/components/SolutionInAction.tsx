"use client"

import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
  {
    name: 'Guide',
    value: 'guide',
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    description: 'Real-time visual cues guide users through any workflow, step by step.'
  },
  {
    name: 'Autopilot',
    value: 'autopilot',
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Autopilot navigates, clicks, and completes workflows intelligently, from start to finish.'
  }
]

export default function SolutionInAction() {
  const [activeTab, setActiveTab] = React.useState('guide')
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = React.useState({ left: 0, width: 0 })

  React.useLayoutEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.value === activeTab)
    const activeTabElement = tabRefs.current[activeIndex]

    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement

      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth
      })
    }
  }, [activeTab])

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From "How do I...?" to "Done."
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          Users tell Sailbot what they need, and it guides them step-by-step or gets it done—right inside your app..
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="w-full">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="gap-6">
                         <TabsList className="bg-background relative rounded-none border-b p-0 max-w-2xl mx-auto mb-2">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  ref={el => {
                    tabRefs.current[index] = el
                  }}
                  className="bg-background dark:data-[state=active]:bg-background relative z-10 rounded-none border-0 data-[state=active]:shadow-none px-6 py-3 h-14 text-base font-medium"
                >
                  {tab.icon}
                  {tab.name}
                </TabsTrigger>
              ))}

              <div
                className="bg-primary absolute bottom-0 z-20 h-0.5 transition-all duration-300 ease-out"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width
                }}
              />
            </TabsList>

            {tabs.map(tab => (
              <TabsContent key={tab.value} value={tab.value} className="space-y-6">
                               <div className="text-center mb-6">
                 <h3 className="text-xl font-medium text-foreground/80">
                   {tab.description}
                 </h3>
               </div>
                <div className="w-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 overflow-hidden">
                    <video
                      src="/PH.mp4"
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
