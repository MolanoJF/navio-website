"use client"

import * as React from "react"
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MessageSquare, 
  Clock, 
  AlertCircle,
  Download,
  Filter,
  Calendar,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

// Mock data for insights
const frequentWorkflows = [
  {
    id: 1,
    name: "Password Reset Assistance",
    usage: 2847,
    completion: 94.2,
    avgTime: "2.3 minutes",
    trend: "up",
    change: 12.5
  },
  {
    id: 2,
    name: "Account Setup Guidance",
    usage: 1923,
    completion: 87.6,
    avgTime: "4.7 minutes",
    trend: "up",
    change: 8.3
  },
  {
    id: 3,
    name: "Feature Discovery",
    usage: 1654,
    completion: 76.4,
    avgTime: "3.2 minutes",
    trend: "down",
    change: -5.2
  },
  {
    id: 4,
    name: "Billing Inquiries",
    usage: 1432,
    completion: 91.8,
    avgTime: "3.8 minutes",
    trend: "up",
    change: 15.7
  },
  {
    id: 5,
    name: "Technical Troubleshooting",
    usage: 1287,
    completion: 82.3,
    avgTime: "6.1 minutes",
    trend: "down",
    change: -2.1
  }
]

const bottlenecks = [
  {
    id: 1,
    type: "Drop-off Point",
    location: "Account Verification Step 3",
    impact: "High",
    affectedUsers: 1247,
    dropoffRate: 34.2,
    description: "Users abandoning during phone verification"
  },
  {
    id: 2,
    type: "Slow Response",
    location: "Payment Processing",
    impact: "Medium",
    affectedUsers: 892,
    avgDelay: "12.3s",
    description: "Extended processing times for card validation"
  },
  {
    id: 3,
    type: "Unresolved Query",
    location: "Advanced Settings",
    impact: "Medium",
    affectedUsers: 654,
    resolutionRate: 67.8,
    description: "Complex configuration questions remain unanswered"
  },
  {
    id: 4,
    type: "Performance Issue",
    location: "File Upload",
    impact: "Low",
    affectedUsers: 423,
    errorRate: 8.7,
    description: "Occasional timeouts during large file uploads"
  }
]

const reportTemplates = [
  {
    id: 1,
    name: "Weekly Performance Summary",
    description: "Comprehensive overview of system performance and user engagement",
    lastGenerated: "2 hours ago",
    frequency: "Weekly"
  },
  {
    id: 2,
    name: "User Journey Analysis",
    description: "Detailed analysis of user paths and conversion funnels",
    lastGenerated: "1 day ago",
    frequency: "Bi-weekly"
  },
  {
    id: 3,
    name: "Feature Utilization Report",
    description: "Breakdown of feature usage and adoption rates",
    lastGenerated: "3 days ago",
    frequency: "Monthly"
  },
  {
    id: 4,
    name: "Error Analysis Report",
    description: "Comprehensive error tracking and resolution metrics",
    lastGenerated: "5 days ago",
    frequency: "Weekly"
  }
]

interface InsightsModuleProps {
  activeSubModule?: string
}

export function InsightsModule({ activeSubModule = "workflows" }: InsightsModuleProps) {
  // Render different content based on active sub-module
  if (activeSubModule === "bottlenecks") {
    return <BottlenecksInsights />
  }
  
  if (activeSubModule === "reports") {
    return <ReportsInsights />
  }

  // Default to workflows view
  return <WorkflowsInsights />
}

function WorkflowsInsights() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header with Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Workflow Insights</h2>
          <p className="text-muted-foreground">
            Actionable intelligence about user behavior and system performance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="7d">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 3 months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Workflow Overview Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Popular Workflow</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Password Reset</div>
            <p className="text-xs text-muted-foreground">
              2,847 uses this week (+12.5%)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Completion Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">86.5%</div>
            <p className="text-xs text-muted-foreground">
              Across all workflows (+3.2%)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">4.0 min</div>
            <p className="text-xs text-muted-foreground">
              Per workflow completion (-0.8%)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Workflow Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Workflow Performance Analysis</CardTitle>
          <CardDescription>
            Detailed breakdown of your most frequently used workflows
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {frequentWorkflows.map((workflow) => (
              <div key={workflow.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{workflow.name}</h4>
                    <Badge variant={workflow.trend === 'up' ? 'default' : 'secondary'}>
                      {workflow.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {workflow.change > 0 ? '+' : ''}{workflow.change}%
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{workflow.usage.toLocaleString()} uses</span>
                    <span>{workflow.completion}% completion</span>
                    <span>{workflow.avgTime} avg time</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-sm font-medium">{workflow.completion}%</div>
                    <Progress value={workflow.completion} className="w-16 h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Journey Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>User Path Visualization</CardTitle>
          <CardDescription>
            Most common user journeys through your assistant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Entry Point → First Interaction</span>
              <Badge variant="outline">89% continue</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">First Interaction → Workflow Selection</span>
              <Badge variant="outline">76% continue</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Workflow Selection → Completion</span>
              <Badge variant="outline">82% complete</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Completion → Return Visit</span>
              <Badge variant="outline">67% return</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function BottlenecksInsights() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Bottleneck Analysis</h2>
          <p className="text-muted-foreground">
            Identify and resolve user friction points in your workflows
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="7d">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 3 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Bottleneck Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Issues</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">1</div>
            <p className="text-xs text-muted-foreground">
              Requires immediate attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medium Priority</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <p className="text-xs text-muted-foreground">
              Should be addressed soon
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Priority</CardTitle>
            <AlertCircle className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">1</div>
            <p className="text-xs text-muted-foreground">
              Monitor for changes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Affected</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,216</div>
            <p className="text-xs text-muted-foreground">
              Users impacted this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Bottleneck Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Identified Bottlenecks</CardTitle>
          <CardDescription>
            Areas where users experience friction or delays
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bottlenecks.map((bottleneck) => (
              <div key={bottleneck.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={
                        bottleneck.impact === 'High' ? 'destructive' :
                        bottleneck.impact === 'Medium' ? 'default' : 'secondary'
                      }
                    >
                      {bottleneck.impact} Impact
                    </Badge>
                    <span className="font-medium">{bottleneck.type}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                
                <h4 className="font-medium mb-1">{bottleneck.location}</h4>
                <p className="text-sm text-muted-foreground mb-3">{bottleneck.description}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <span><strong>{bottleneck.affectedUsers.toLocaleString()}</strong> affected users</span>
                  {bottleneck.dropoffRate && (
                    <span><strong>{bottleneck.dropoffRate}%</strong> drop-off rate</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Friction Points Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>User Friction Heatmap</CardTitle>
          <CardDescription>
            Visual representation of where users encounter difficulties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={i}
                className={`aspect-square rounded ${
                  i < 10 ? 'bg-red-200' :
                  i < 25 ? 'bg-yellow-200' :
                  i < 45 ? 'bg-green-200' :
                  'bg-gray-100'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
            <span>Low friction</span>
            <span>High friction</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ReportsInsights() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Reports & Analytics</h2>
          <p className="text-muted-foreground">
            Generate custom reports and manage automated insights
          </p>
        </div>
      </div>

      {/* Report Generation */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Generate Custom Report</CardTitle>
            <CardDescription>
              Create a tailored report based on your specific needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Report Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="performance">Performance Analysis</SelectItem>
                  <SelectItem value="user-behavior">User Behavior</SelectItem>
                  <SelectItem value="workflow-analysis">Workflow Analysis</SelectItem>
                  <SelectItem value="error-tracking">Error Tracking</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Range</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 3 months</SelectItem>
                  <SelectItem value="custom">Custom range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scheduled Reports</CardTitle>
            <CardDescription>
              Automated reports delivered to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Weekly Summary</p>
                <p className="text-sm text-muted-foreground">Every Monday at 9:00 AM</p>
              </div>
              <Badge variant="outline">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Monthly Deep Dive</p>
                <p className="text-sm text-muted-foreground">First Monday of each month</p>
              </div>
              <Badge variant="outline">Active</Badge>
            </div>
            
            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              Manage Schedule
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Available Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <CardDescription>
            Pre-built reports ready for immediate generation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {reportTemplates.map((template) => (
              <div key={template.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">{template.name}</h4>
                  <Badge variant="outline">{template.frequency}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Last generated: {template.lastGenerated}
                  </span>
                  <Button size="sm" variant="outline">
                    <Download className="h-3 w-3 mr-1" />
                    Generate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
