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
  Activity,
  ArrowUpDown
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

// Mock data for insights
const frequentWorkflows = [
  {
    id: 1,
    name: "1. Password Reset Assistance",
    usage: 949,
    completion: 94.2,
    avgTime: "2.3 minutes"
  },
  {
    id: 2,
    name: "2. Account Setup Guidance",
    usage: 641,
    completion: 87.6,
    avgTime: "4.7 minutes"
  },
  {
    id: 3,
    name: "3. Feature Discovery",
    usage: 551,
    completion: 76.4,
    avgTime: "3.2 minutes"
  },
  {
    id: 4,
    name: "4. Billing Inquiries",
    usage: 477,
    completion: 91.8,
    avgTime: "3.8 minutes"
  },
  {
    id: 5,
    name: "5. Integration with Third-Party Tools",
    usage: 278,
    completion: 74.5,
    avgTime: "8.2 minutes"
  },
  {
    id: 6,
    name: "6. Team Member Onboarding",
    usage: 233,
    completion: 85.2,
    avgTime: "6.0 minutes"
  },
  {
    id: 7,
    name: "7. Profile Customization",
    usage: 210,
    completion: 92.4,
    avgTime: "2.8 minutes"
  }
]

const bottlenecks = [
  {
    step: 2,
    stepName: "Data Import & Setup",
    dropOffRate: "40.0%",
    severity: "Critical",
    primaryIssues: "CSV formatting errors, API complexity, timeout issues",
    avgTimeStuck: "25 mins",
  },
  {
    step: 4,
    stepName: "Integration Setup", 
    dropOffRate: "35.0%",
    severity: "Critical",
    primaryIssues: "OAuth confusion, admin permissions, integration selection",
    avgTimeStuck: "18 mins",
  },
  {
    step: 3,
    stepName: "Workflow Configuration",
    dropOffRate: "29.6%",
    severity: "High",
    primaryIssues: "Decision paralysis, complex setup options, unclear guidance",
    avgTimeStuck: "15 mins",
  }
]

type BottleneckRow = {
  step: number
  stepName: string
  dropOffRate: string
  severity: "Critical" | "High" | "Medium" | "Low"
  primaryIssues: string
  avgTimeStuck: string
}

type WorkflowRow = {
  id: number
  name: string
  usage: number
  completion: number
  avgTime: string
}

function DataTable<TData, TValue>({
  tableColumns,
  data,
}: {
  tableColumns: ColumnDef<TData, TValue>[]
  data: TData[]
}) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns: tableColumns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-md border bg-card">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup: any) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: any) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell: any) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={tableColumns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

const bottlenecksColumns: ColumnDef<BottleneckRow>[] = [
  {
    id: "bottleneck",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Step
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }: { row: any }) => (
      <div>
        <div className="font-medium">Step {row.original.step}</div>
        <div className="text-sm text-muted-foreground">{row.original.stepName}</div>
      </div>
    ),
  },
  {
    accessorKey: "severity",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Severity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }: { row: any }) => (
      <Badge
        variant={
          row.original.severity === 'Critical' ? 'destructive' :
          row.original.severity === 'High' ? 'default' : 'secondary'
        }
      >
        {row.original.severity}
      </Badge>
    ),
  },
  {
    accessorKey: "dropOffRate",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Drop-off Rate
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <span>{row.original.dropOffRate}</span>,
  },
  {
    accessorKey: "avgTimeStuck",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Avg Time Stuck
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <span>{row.original.avgTimeStuck}</span>,
  },
  {
    accessorKey: "primaryIssues",
    header: "Primary Issues",
    cell: ({ row }) => <span className="text-sm">{row.original.primaryIssues}</span>,
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <Button variant="outline" size="sm">View details</Button>
    ),
    enableSorting: false,
    enableHiding: false,
  },
]

const workflowColumns: ColumnDef<WorkflowRow>[] = [
  {
    accessorKey: "name",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Workflow
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <span className="font-medium">{row.original.name}</span>,
  },
  {
    accessorKey: "usage",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Uses
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <span>{row.original.usage.toLocaleString()}</span>,
  },
  {
    accessorKey: "avgTime",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Avg Time
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "completion",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Completion
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="font-medium">{row.original.completion}%</span>
        <Progress value={row.original.completion} className="w-16 h-2" />
      </div>
    ),
  },

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
            Frequent workflows and  usage patterns
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

      {/* Detailed Workflow Analysis */}
      <DataTable<WorkflowRow, unknown>
            tableColumns={workflowColumns}
            data={frequentWorkflows as WorkflowRow[]}
          />


      {/* User Journey Visualization */}
      <div>
          <h2 className="text-2xl font-bold tracking-tight">User Path Visualization</h2>
                    <p className="text-muted-foreground">
                    Most common user journeys through your application
          </p>
        </div>
      
      <Card>
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
                    <h2 className="text-2xl font-bold tracking-tight">Identified Bottlenecks</h2>
                    <p className="text-muted-foreground">
                    Areas where users experience friction or delays
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

      {/* Detailed Bottleneck Analysis */}
      <DataTable<BottleneckRow, unknown>
            tableColumns={bottlenecksColumns}
            data={bottlenecks as BottleneckRow[]}
          />
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
