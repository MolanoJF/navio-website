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
  Building,
  ChevronDown,
  ChevronRight,
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
      icon: BarChart3,
      items: [
        {
          title: "Interactions",
          key: "analytics-interactions",
          icon: ChartBar,
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
          title: "Workflows",
          key: "insights-workflows",
          icon: Workflow,
        },
        {
          title: "Bottlenecks",
          key: "insights-bottlenecks",
          icon: TrendingUp,
        },
        {
          title: "Reports",
          key: "insights-reports",
          icon: BarChart3,
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
  const [collapsedItems, setCollapsedItems] = React.useState<Set<string>>(new Set(["insights", "activity", "build"]))

  const handleModuleClick = (moduleKey: string) => {
    // Only toggle collapse for main items, don't navigate
    if (data.navMain.find(item => item.key === moduleKey)?.items) {
      toggleCollapse(moduleKey)
    } else {
      // For sub-items, navigate to them
      onModuleChange(moduleKey)
    }
  }

  const toggleCollapse = (itemKey: string) => {
    setCollapsedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemKey)) {
        newSet.delete(itemKey)
      } else {
        newSet.add(itemKey)
      }
      return newSet
    })
  }

  const isCollapsed = (itemKey: string) => collapsedItems.has(itemKey)

  return (
    <Sidebar collapsible={collapsible} variant={variant} side={side} {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <Building className="!size-5" />
                <span className="text-base font-semibold">SAIL Assistant</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
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
                    <div className="flex items-center gap-2">
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </div>
                    {item.items && item.items.length > 0 && (
                      <div className="ml-auto">
                        {isCollapsed(item.key) ? (
                          <ChevronRight className="size-4" />
                        ) : (
                          <ChevronDown className="size-4" />
                        )}
                      </div>
                    )}
                  </SidebarMenuButton>
                  {item.items && item.items.length > 0 && !isCollapsed(item.key) && (
                    <SidebarMenu className="ml-4 border-l border-sidebar-border pl-4">
                      {item.items.map((subItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton 
                            tooltip={subItem.title} 
                            className={`text-sm ${activeModule === subItem.key ? "bg-accent text-accent-foreground" : ""}`}
                            onClick={() => onModuleChange(subItem.key)}
                          >
                            {subItem.icon && <subItem.icon className="size-3" />}
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
