"use client"

import * as React from "react"
import {
  BarChart3,
  Brain,
  Activity,
  Settings,
  ChartBar,
  TrendingUp,
  MessageCircle,
  Bot,
  Database,
  Workflow,
  AlertTriangle,
  FileText,
  MessageSquare,
  PieChart,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"

interface SidebarProps {
  onModuleChange: (module: string) => void
  activeModule: string
  variant?: "sidebar" | "floating" | "inset"
  side?: "left" | "right"
  collapsible?: "offcanvas" | "icon" | "none"
}

const data = {
  user: {
    name: "Sarah Johnson",
    email: "sarah@sail-assistant.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Analytics",
      key: "analytics",
      icon: PieChart,
      items: [
        {
          title: "Interactions",
          key: "analytics-interactions",
          icon: BarChart3,
        },
        {
          title: "Performance",
          key: "analytics-performance",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Insights",
      key: "insights",
      icon: Brain,
      items: [
        {
          title: "Usage",
          key: "insights-workflows",
          icon: Workflow,
        },
        {
          title: "Bottlenecks",
          key: "insights-bottlenecks",
          icon: AlertTriangle,
        },
        {
          title: "Reports",
          key: "insights-reports",
          icon: FileText,
        },
      ],
    },
    {
      title: "Activity",
      key: "activity",
      icon: Activity,
      items: [
        {
          title: "Chat Logs",
          key: "activity-chat",
          icon: MessageCircle,
        },
      ],
    },
    {
      title: "Build",
      key: "build",
      icon: Settings,
      items: [
        {
          title: "Agent Config",
          key: "build-agent",
          icon: Bot,
        },
        {
          title: "Knowledge Base",
          key: "build-knowledge",
          icon: Database,
        },
        {
          title: "Workflows",
          key: "build-workflows",
          icon: Workflow,
        },
      ],
    },
  ],
}

export function AppSidebar({ onModuleChange, activeModule, variant = "sidebar", side = "left", collapsible = "offcanvas", ...props }: SidebarProps) {
  const handleModuleClick = (moduleKey: string) => {
    // For items with sub-items, do nothing (they're always expanded)
    // For sub-items, navigate to them
    if (!data.navMain.find(item => item.key === moduleKey)?.items) {
      onModuleChange(moduleKey)
    }
  }

  return (
    <Sidebar collapsible={collapsible} variant={variant} side={side} {...props}>
      <SidebarHeader>
        <div className="px-3 py-2">
          <span className="text-base font-bold">NAVIO PLATFORM</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    onClick={() => handleModuleClick(item.key)}
                    className={`flex items-center justify-between ${activeModule === item.key ? "bg-accent text-accent-foreground" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon className="size-5" />}
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                  {item.items && item.items.length > 0 && (
                    <SidebarMenu className="ml-4 border-l border-sidebar-border pl-4">
                      {item.items.map((subItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton 
                            tooltip={subItem.title} 
                            className={`text-sm ${activeModule === subItem.key ? "bg-accent text-accent-foreground" : ""}`}
                            onClick={() => onModuleChange(subItem.key)}
                          >
                            {subItem.icon && <subItem.icon className="size-2" />}
                            <span>{subItem.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
