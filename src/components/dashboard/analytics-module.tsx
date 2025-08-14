"use client"

import * as React from "react"
import { TrendingUp, TrendingDown, Users, MessageSquare, Clock, AlertCircle } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Progress } from "@/components/ui/progress"

// Mock data for analytics
const interactionData = [
  { date: "2024-01-01", interactions: 413, completedWorkflows: 297, guidedQuestions: 117 },
  { date: "2024-01-02", interactions: 460, completedWorkflows: 307, guidedQuestions: 153 },
  { date: "2024-01-03", interactions: 507, completedWorkflows: 367, guidedQuestions: 140 },
  { date: "2024-01-04", interactions: 560, completedWorkflows: 400, guidedQuestions: 160 },
  { date: "2024-01-05", interactions: 617, completedWorkflows: 450, guidedQuestions: 167 },
  { date: "2024-01-06", interactions: 573, completedWorkflows: 427, guidedQuestions: 147 },
  { date: "2024-01-07", interactions: 640, completedWorkflows: 473, guidedQuestions: 167 },
]

const performanceData = [
  { date: "2024-01-01", successRate: 94.2, errorRate: 5.8, avgResponseTime: 1.2, uptime: 99.9 },
  { date: "2024-01-02", successRate: 95.1, errorRate: 4.9, avgResponseTime: 1.1, uptime: 99.8 },
  { date: "2024-01-03", successRate: 93.8, errorRate: 6.2, avgResponseTime: 1.3, uptime: 99.9 },
  { date: "2024-01-04", successRate: 96.2, errorRate: 3.8, avgResponseTime: 1.0, uptime: 100.0 },
  { date: "2024-01-05", successRate: 94.7, errorRate: 5.3, avgResponseTime: 1.2, uptime: 99.9 },
  { date: "2024-01-06", successRate: 95.8, errorRate: 4.2, avgResponseTime: 1.1, uptime: 99.8 },
  { date: "2024-01-07", successRate: 97.1, errorRate: 2.9, avgResponseTime: 0.9, uptime: 100.0 },
]

const chartConfig = {
  interactions: {
    label: "Total Interactions",
    color: "var(--primary)",
  },
  completedWorkflows: {
    label: "Completed Workflows",
    color: "hsl(var(--chart-2))",
  },
  guidedQuestions: {
    label: "Guided Questions",
    color: "hsl(var(--chart-3))",
  },
  successRate: {
    label: "Success Rate",
    color: "hsl(var(--chart-1))",
  },
  errorRate: {
    label: "Error Rate",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

interface AnalyticsModuleProps {
  activeSubModule?: string
}

export function AnalyticsModule({ activeSubModule = "interactions" }: AnalyticsModuleProps) {
  const [timeRange, setTimeRange] = React.useState("7d")

  // Render different content based on active sub-module
  if (activeSubModule === "performance") {
    return <PerformanceAnalytics />
  }

  // Default to interactions view
  return <InteractionsAnalytics timeRange={timeRange} setTimeRange={setTimeRange} />
}

function InteractionsAnalytics({ timeRange, setTimeRange }: { timeRange: string; setTimeRange: (value: string) => void }) {
  return (
    <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Interactions</h2>
        </div>
      {/* KPI Cards */}
      <div className="flex flex-wrap gap-4">
        <Card className="flex-1 min-w-[200px] ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interactions</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,023</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5%
              </Badge>
                from last week
            </p>
          </CardContent>
        </Card>

        <Card className="flex-1 min-w-[200px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Workflows</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,973</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.2%
              </Badge>
              from last week
            </p>
          </CardContent>
        </Card>

        <Card className="flex-1 min-w-[200px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Guided Questions</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,050</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-red-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2.1%
              </Badge>
              from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Interactions Chart */}
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>User Interactions</CardTitle>
          <CardDescription>
            Track total interactions, completed workflows, and guided questions
          </CardDescription>
          <CardAction>
            <ToggleGroup
              type="single"
              value={timeRange}
              onValueChange={setTimeRange}
              variant="outline"
              className="*:data-[slot=toggle-group-item]:!px-4"
            >
              <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
              <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
              <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            </ToggleGroup>
          </CardAction>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[300px] w-full"
          >
            <AreaChart data={interactionData}>
              <defs>
                <linearGradient id="fillInteractions" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-interactions)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-interactions)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillWorkflows" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-completedWorkflows)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-completedWorkflows)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="guidedQuestions"
                type="natural"
                fill="var(--color-guidedQuestions)"
                fillOpacity={0.4}
                stroke="var(--color-guidedQuestions)"
                stackId="a"
              />
              <Area
                dataKey="completedWorkflows"
                type="natural"
                fill="url(#fillWorkflows)"
                stroke="var(--color-completedWorkflows)"
                stackId="a"
              />
              <Area
                dataKey="interactions"
                type="natural"
                fill="url(#fillInteractions)"
                stroke="var(--color-interactions)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Engagement Metrics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Engagement</CardTitle>
            <CardDescription>Session duration and return rates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Avg Session Duration</span>
                <span className="font-medium">4.2 minutes</span>
              </div>
              <Progress value={84} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Return Rate</span>
                <span className="font-medium">67%</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Task Completion</span>
                <span className="font-medium">89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interaction Types</CardTitle>
            <CardDescription>Breakdown by interaction category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Guided Questions</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Completed Workflows</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-secondary rounded-full h-2">
                    <div className="bg-chart-2 h-2 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                  <span className="text-sm font-medium">38%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Direct Queries</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-secondary rounded-full h-2">
                    <div className="bg-chart-3 h-2 rounded-full" style={{ width: '17%' }}></div>
                  </div>
                  <span className="text-sm font-medium">17%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function PerformanceAnalytics() {
  return (
    <div className="flex flex-col gap-6">
      {/* Performance KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95.8%</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +1.2%
              </Badge>
              from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2%</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-red-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                -0.8%
              </Badge>
              from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.1s</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                -0.2s
              </Badge>
              from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.1%
              </Badge>
              from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>System Performance</CardTitle>
          <CardDescription>
            Success rates, error tracking, and response times
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[300px] w-full"
          >
            <LineChart data={performanceData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent />}
              />
              <Line
                dataKey="successRate"
                type="monotone"
                stroke="var(--color-successRate)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Performance Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Error Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">4.7%</div>
            <p className="text-xs text-muted-foreground">
              Total error rate this week
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span>Timeout Errors</span>
                <span>2.1%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>API Failures</span>
                <span>1.8%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Parse Errors</span>
                <span>0.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Response Time Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Under 1s</span>
                <span className="font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>1-2s</span>
                <span className="font-medium">25%</span>
              </div>
              <Progress value={25} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>Over 2s</span>
                <span className="font-medium">10%</span>
              </div>
              <Progress value={10} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">CPU Usage</span>
                <Badge variant="secondary" className="text-green-600">Normal</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Memory Usage</span>
                <Badge variant="secondary" className="text-yellow-600">Moderate</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Network Latency</span>
                <Badge variant="secondary" className="text-green-600">Low</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Database</span>
                <Badge variant="secondary" className="text-green-600">Healthy</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
