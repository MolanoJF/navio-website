"use client"

import * as React from "react"
import { 
  Bot, 
  Database, 
  Workflow, 
  Settings, 
  Upload, 
  Save, 
  Play, 
  Pause,
  RotateCcw,
  FileText,
  Link,
  Code,
  Palette,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  ArrowUpDown,
  ChevronDown
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
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

// Mock data for knowledge base sources
const knowledgeBaseSources = [
  {
    id: 1,
    type: "Url",
    name: "Company Documentation",
    source: "https://docs.company.com",
    status: "active",
    lastUpdated: "2 hours ago",
    documents: 247
  },
  {
    id: 2,
    type: "file",
    name: "Product Manual v2.1",
    source: "product-manual-v2.1.pdf",
    status: "processing",
    lastUpdated: "5 minutes ago",
    documents: 1
  },
  {
    id: 3,
    type: "Url",
    name: "FAQ Database",
    source: "https://help.company.com/faq",
    status: "active",
    lastUpdated: "1 day ago",
    documents: 156
  },

]

// Mock workflow data
const workflows = [
  {
    id: 1,
    name: "New User Onboarding",
    description: "Guides new users through account setup and basic features",
    status: "active",
    triggers: ["first_login", "welcome_message"],
    steps: 8,
    completionRate: 87.3
  },
  {
    id: 2,
    name: "Password Reset Flow",
    description: "Automated password reset with security verification",
    status: "active",
    triggers: ["forgot_password", "login_failed"],
    steps: 5,
    completionRate: 94.8
  },
  {
    id: 3,
    name: "Feature Discovery",
    description: "Interactive tour of premium features for trial users",
    status: "draft",
    triggers: ["trial_started", "feature_request"],
    steps: 12,
    completionRate: 0
  }
]

// Mock rules data
const rules = [

  {
    rule: "Suggest Teams plan when multiple users are invited",
    goalType: "Revenue Goal",
    goalDescription: "Upsell collaborative features to growing teams",
    trigger: "User on individual plan invites more than 2 colleagues"
  },
  {
    rule: "Explain the benefit of a key feature on first view",
    goalType: "Activation Goal",
    goalDescription: "Improve contextual feature discovery and understanding",
    trigger: "User navigates to the 'Automations' page for the first time"
  },
  {
    rule: "Request feedback upon subscription cancellation",
    goalType: "Retention Goal",
    goalDescription: "Gather actionable data on reasons for churn",
    trigger: "User initiates the subscription cancellation workflow"
  },
  {
    rule: "Offer a 'pause' subscription option during cancellation flow",
    goalType: "Retention Goal",
    goalDescription: "Reduce churn by offering an alternative to outright cancelling",
    trigger: "User selects 'I don't need it right now' as a cancellation reason"
  },
]

// Types for tables
interface KnowledgeSourceRow {
  id: number
  type: string
  name: string
  source: string
  status: string
  lastUpdated: string
  documents: number
}

interface RuleRow {
  rule: string
  goalType: "Revenue Goal" | "Retention Goal " 
  goalDescription: string
  trigger: string
}

// Generic DataTable component (shadcn + TanStack Table)
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
    <div className="w-full max-w-full">
      <div className="overflow-x-auto rounded-md border bg-card">
        <Table className="w-full table-fixed">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup: any) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => {
                  return (
                    <TableHead key={header.id} style={{width: header.getSize()}}>
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

// Columns for Knowledge Sources
const knowledgeSourcesColumns: ColumnDef<KnowledgeSourceRow>[] = [
  {
    accessorKey: "type",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Type
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }: { row: any }) => (
      <div className="flex items-center gap-2">
        <div className="p-2 bg-muted rounded-lg">
          {row.original.type === "url" ? <Link className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
        </div>
        <span className="capitalize">{row.original.type}</span>
      </div>
    ),
    size: 15,
  },
  {
    accessorKey: "name",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }: { row: any }) => <span className="font-medium">{row.original.name}</span>,
    size: 35,
  },
  {
    accessorKey: "source",
    header: "Source",
    cell: ({ row }: { row: any }) => <span className="text-muted-foreground whitespace-pre-wrap break-words">{row.original.source}</span>,
    size: 35,
  },

  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
    size: 15,
  },
]

// Columns for Rules
const rulesColumns: ColumnDef<RuleRow>[] = [
  {
    accessorKey: "rule",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Rule
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <span className="font-medium whitespace-pre-wrap break-words">{row.original.rule}</span>,
    size: 40,
  },
  {
    accessorKey: "goalType",
    header: ({ column }: { column: any }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Goal Type
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }: { row: any }) => (
      <Badge variant={row.original.goalType === 'Revenue Goal' ? 'default' : 'secondary'}>
        {row.original.goalType}
      </Badge>
    ),
    size: 20,
  },

  {
    accessorKey: "trigger",
    header: "Trigger Condition",
    cell: ({ row }) => <span className="whitespace-pre-wrap break-words max-w-xs">{row.original.trigger}</span>,
    size: 40,
  },
]

interface BuildModuleProps {
  activeSubModule?: string
}

export function BuildModule({ activeSubModule = "agent" }: BuildModuleProps) {
  // Render different content based on active sub-module
  if (activeSubModule === "knowledge") {
    return <KnowledgeBaseView />
  }
  
  if (activeSubModule === "workflows") {
    return <WorkflowsView />
  }

  // Default to agent config view
  return <AgentConfigView />
}

function AgentConfigView() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Agent Configuration</h2>
      </div>

      {/* Agent Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Configuration</CardTitle>
          <CardDescription>
            Core settings for your AI assistant
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="agent-name">Agent Name</Label>
              <Input id="agent-name" placeholder="SAIL Assistant" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agent-role">Role</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer-support">Customer Support</SelectItem>
                  <SelectItem value="sales-assistant">Sales Assistant</SelectItem>
                  <SelectItem value="technical-support">Technical Support</SelectItem>
                  <SelectItem value="general-assistant">General Assistant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="agent-description">Description</Label>
            <Textarea 
              id="agent-description" 
              placeholder="Describe your assistant's purpose and capabilities..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Personality Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Personality & Tone</CardTitle>
          <CardDescription>
            Define how your assistant communicates with users
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="tone">Communication Tone</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="personality">Personality Traits</Label>
            <Textarea 
              id="personality" 
              placeholder="Describe your assistant's personality (e.g., helpful, patient, knowledgeable)..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle>Capabilities & Features</CardTitle>
          <CardDescription>
            Enable or disable specific assistant features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>File Upload Support</Label>
                <p className="text-sm text-muted-foreground">
                  Allow users to upload files for analysis
                </p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Multi-language Support</Label>
                <p className="text-sm text-muted-foreground">
                  Respond in user's preferred language
                </p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Context Memory</Label>
                <p className="text-sm text-muted-foreground">
                  Remember conversation history
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Workflow Automation</Label>
                <p className="text-sm text-muted-foreground">
                  Execute automated workflows
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end gap-2">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Configuration
        </Button>
      </div>
    </div>
  )
}

function KnowledgeBaseView() {
  return (
    <div className="flex flex-col gap-6">
      {/* Knowledge Sources Table */}
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Knowledge Sources</h2>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Add Source
        </Button>
      </div>

             <div className="overflow-x-auto">
               <DataTable<KnowledgeSourceRow, unknown>
                 tableColumns={knowledgeSourcesColumns}
                 data={knowledgeBaseSources as KnowledgeSourceRow[]}
               />
             </div>

      {/* Rules Table (DataTable) */}
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Rules</h2>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Add Rule
        </Button>
      </div>
             <div className="overflow-x-auto">
               <DataTable<RuleRow, unknown>
                 tableColumns={rulesColumns}
                 data={rules as RuleRow[]}
               />
             </div>
      
    </div>
  )
}

function WorkflowsView() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Workflow Builder</h2>
        </div>
        <Button>
          <Workflow className="h-4 w-4 mr-2" />
          Create Workflow
        </Button>
      </div>

      {/* Workflow Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Workflows</CardTitle>
            <Workflow className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{workflows.length}</div>
            <p className="text-xs text-muted-foreground">
              Created workflows
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <Play className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {workflows.filter(w => w.status === 'active').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently running
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Completion</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(workflows.reduce((sum, w) => sum + w.completionRate, 0) / workflows.length)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Success rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {workflows.filter(w => w.status === 'draft').length}
            </div>
            <p className="text-xs text-muted-foreground">
              In development
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Workflows List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Workflows</CardTitle>
          <CardDescription>
            Manage and monitor your automated workflows
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {workflows.map((workflow) => (
              <div key={workflow.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">{workflow.name}</h4>
                    <p className="text-sm text-muted-foreground">{workflow.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={workflow.status === 'active' ? 'default' : 'secondary'}>
                        {workflow.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {workflow.steps} steps • {workflow.completionRate}% completion
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {workflow.status === 'active' ? (
                    <Button variant="outline" size="sm">
                      <Pause className="h-3 w-3 mr-1" />
                      Pause
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      <Play className="h-3 w-3 mr-1" />
                      Activate
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Settings className="h-3 w-3 mr-1" />
                    Edit
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
