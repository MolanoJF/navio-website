"use client"

import * as React from "react"
import {
  IconChartBar,
  IconFileAi,
  IconInnerShadowTop,
  IconDashboard,
  IconListDetails,
  IconFolder,
  IconUsers,
  IconDatabase,
  IconReport,
  IconFileWord,
  IconSettings,
  IconHelp,
  IconSearch,
  IconCode,
  IconPalette,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { PanelGroup, Panel } from "react-resizable-panels"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function How() {
  const [activeTab, setActiveTab] = React.useState("analytics")

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-top mb-10">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white transition-colors duration-300">
              Powerful Intelligence. Effortless Control.
              </h2>
          </div>
          <div className="text-right justify-end">
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-white opacity-70 transition-colors duration-300">
              Get a real-time view of how users interact with your software
              </p>
          </div>
        </div>

          {/* Costumization Columns */}
        {/*<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          {/* Left Column - New Tab Navigation */}
          {/*<div className="h-full flex flex-col items-center justify-center">
            
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="analytics"
            >
              <AccordionItem value="analytics">
                <AccordionTrigger className="px-4 mb-8">
                  <div className="flex items-center gap-3">
                    <IconChartBar className="w-4 h-4" />
                    <span className="text-2xl lg:text-3xl text-white mb-4 transition-colors duration-300">Analytics</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 mb-8">
                  <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-white opacity-70 transition-colors duration-300">
                    Get a real-time view of how users interact with your software.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="insights">
                <AccordionTrigger className="px-4 mb-8">
                  <div className="flex items-center gap-3">
                    <IconInnerShadowTop className="w-4 h-4" />
                    <span className="text-2xl lg:text-3xl text-white mb-4 transition-colors duration-300">
                      Insights
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 mb-8">
                  <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-white opacity-70 transition-colors duration-300">
                    Get actionable feedback, Topics and bottlenecks
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="build">
                <AccordionTrigger className="px-4 mb-8">
                  <div className="flex items-center gap-3">
                    <IconFileAi className="w-4 h-4" />
                    <span className="text-2xl lg:text-3xl text-white mb-4 transition-colors duration-300">
                      Build
                      </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 mb-8">
                  <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-white opacity-70 transition-colors duration-300">
                    Customize agent behaviors, define goals, Knowledge base and workflows
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Main How Content */}
          {/*<div className="lg:col-span-4">
            <div className="bg-card rounded-lg border shadow-lg overflow-hidden h-[85vh]">
              <PanelGroup direction="horizontal">
                <Panel defaultSize={100} className="h-full">
                  <iframe
                    src="/dashboard"
                    title="Dashboard Embed"
                    loading="lazy"
                    className="w-full h-full"
                  />
                </Panel>
              </PanelGroup>
            </div>
          </div>
        </div> */} 

        {/* Horizontal Separator between How and Integration */}
        {/*<div className="w-full h-px bg-border"></div> */}

        {/* 2-Card Layout with Separator */}
        <div className="grid md:grid-cols-2 gap-0 relative">
          {/* Column 1: Integration */}
          <div className="relative p-6 lg:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <IconCode className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-card-foreground transition-colors duration-300 mb-4">
                Integration
              </h3>
              <p className="leading-relaxed text-muted-foreground transition-colors duration-300">
                Embed our lightweight agent with a single line of code. No complex SDKs.
              </p>
            </div>
          </div>

          {/* Vertical Separator between Integration Columns */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border"></div>

          {/* Column 2: Widget */}
          <div className="relative p-6 lg:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                <IconPalette className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-card-foreground transition-colors duration-300 mb-4">
                Widget
              </h3>
              <p className="leading-relaxed text-muted-foreground transition-colors duration-300">
                Fully integrated widget that respects your brand's design system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
