"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SiteHeader } from "@/components/dashboard/site-header"
import { AnalyticsModule } from "@/components/dashboard/analytics-module"
import { InsightsModule } from "@/components/dashboard/insights-module"
import { ActivityModule } from "@/components/dashboard/activity-module"
import { BuildModule } from "@/components/dashboard/build-module"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function DashboardPage() {
  const [activeModule, setActiveModule] = useState("analytics")

  const handleModuleChange = (module: string) => {
    setActiveModule(module)
  }

  const renderModule = () => {
    // Handle main module navigation
    if (activeModule === "analytics") return <AnalyticsModule />
    if (activeModule === "insights") return <InsightsModule />
    if (activeModule === "activity") return <ActivityModule />
    if (activeModule === "build") return <BuildModule />
    
    // Handle sub-module navigation
    if (activeModule.startsWith("analytics-")) {
      const subModule = activeModule.replace("analytics-", "")
      return <AnalyticsModule activeSubModule={subModule} />
    }
    if (activeModule.startsWith("insights-")) {
      const subModule = activeModule.replace("insights-", "")
      return <InsightsModule activeSubModule={subModule} />
    }
    if (activeModule.startsWith("activity-")) {
      const subModule = activeModule.replace("activity-", "")
      return <ActivityModule activeSubModule={subModule} />
    }
    if (activeModule.startsWith("build-")) {
      const subModule = activeModule.replace("build-", "")
      return <BuildModule activeSubModule={subModule} />
    }
    
    // Default to analytics
    return <AnalyticsModule />
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar 
        variant="inset" 
        onModuleChange={handleModuleChange}
        activeModule={activeModule}
      />
      <SidebarInset>
        <div className="flex h-[calc(100vh-var(--header-height))] flex-col">
          {/* Fixed Header */}
          <SiteHeader />
          
          {/* Scrollable Main Content */}
          <main className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto p-4 lg:p-6">
              {renderModule()}
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
