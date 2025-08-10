"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function SolutionInAction() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Solution in Action
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            See how SAIL transforms user onboarding with intelligent guidance, seamless approvals, and powerful automation.
          </p>
        </div>

        {/* Interactive Tabs */}
        <Tabs defaultValue="visual-guidance" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12 h-14">
            <TabsTrigger 
              value="visual-guidance" 
              className="text-base font-medium px-6 py-3"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Visual Guidance
            </TabsTrigger>
            <TabsTrigger 
              value="user-approval" 
              className="text-base font-medium px-6 py-3"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              User Approval
            </TabsTrigger>
            <TabsTrigger 
              value="automated" 
              className="text-base font-medium px-6 py-3"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Automated
            </TabsTrigger>
          </TabsList>

          {/* Visual Guidance Tab */}
          <TabsContent value="visual-guidance" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Visual Guidance
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  SAIL provides real-time visual cues and step-by-step guidance, helping users navigate complex workflows with confidence. No more confusion or guesswork.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">Interactive tooltips and highlights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">Contextual help and explanations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">Progress indicators and checklists</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 overflow-hidden">
                  <video
                    src="/7947406-hd_1920_1080_30fps.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </TabsContent>

          {/* User Approval Tab */}
          <TabsContent value="user-approval" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  User Approval
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Maintain control while accelerating workflows. SAIL intelligently suggests actions and waits for user confirmation, ensuring quality and compliance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">Smart action recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">One-click approval workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">Audit trails and compliance</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 overflow-hidden">
                  <video
                    src="/7947406-hd_1920_1080_30fps.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </TabsContent>

          {/* Automated Tab */}
          <TabsContent value="automated" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Automated
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Let SAIL handle repetitive tasks automatically. From data entry to complex workflows, automation that learns and improves over time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">Intelligent task automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">Workflow orchestration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">Continuous learning and optimization</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 overflow-hidden">
                  <video
                    src="/7947406-hd_1920_1080_30fps.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
