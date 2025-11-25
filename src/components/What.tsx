"use client"

import * as React from "react"
import { motion, useInView } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn } from "@/components/ui/animated"

const tabs = [
  {
    name: "Guide",
    value: "guide",
    icon: (
      <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    description: "Real-time visual cues guide users through any workflow, step by step."
  },
  {
    name: "Autopilot",
    value: "autopilot",
    icon: (
      <svg className="w-8 h-10 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Navio autonomously completes entire tasks for users, from start to finish."
  }
]

export default function What() {
  const [activeTab, setActiveTab] = React.useState('guide')
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = React.useState({ left: 0, width: 0 })
  const sectionRef = React.useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -100px 0px" })
  const [shouldAnimate, setShouldAnimate] = React.useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const videoInView = useInView(videoRef, { amount: 1 })
  const [hasVideoStarted, setHasVideoStarted] = React.useState(false)

  React.useEffect(() => {
    if (isInView) {
      setShouldAnimate(true)
    }
  }, [isInView])

  React.useEffect(() => {
    if (videoRef.current && videoInView && !hasVideoStarted) {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Video autoplay failed:', error)
        })
      }
      setHasVideoStarted(true)
    }
  }, [videoInView, hasVideoStarted])

  React.useEffect(() => {
    if (videoRef.current && hasVideoStarted) {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Video autoplay failed on tab change:', error)
        })
      }
    }
  }, [activeTab, hasVideoStarted])

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
    <section id="what" className="py-20 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            style={{ pointerEvents: 'none' }}
          >
            From "How do I...?" to "Done."
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
            style={{ pointerEvents: 'none' }}
          >
            Navio understands your interface in real time, guiding users through every step, or executing workflows with total precision. All inside your app.
          </motion.p>
        </div>

        {/* Interactive Tabs */}
        <div className="w-full">
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 1.4, y: 200 }}
              animate={shouldAnimate ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.4, y: 200 }}
              transition={{ duration: 0.4, delay: 0.9, ease: "easeInOut" }}
              className="w-full relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-4xl border border-border/50 overflow-hidden">
                <video
                  ref={videoRef}
                  src={activeTab === 'guide' ? 'https://pub-7f94223bba044f018e2c8e158d67b673.r2.dev/navio-guide.mp4' : 'https://pub-7f94223bba044f018e2c8e158d67b673.r2.dev/navio-autopilot.mp4'}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
            </motion.div>
                        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                  className="text-center"
                >
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
                  <h4 className="text-3xl font-bold">{tab.name}</h4>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
              className="text-center mb-2"
            >
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                {tabs.find(tab => tab.value === activeTab)?.description}
              </p>
            </motion.div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
