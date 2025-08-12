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
  CheckCircle
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

// Mock data for knowledge base sources
const knowledgeBaseSources = [
  {
    id: 1,
    type: "url",
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
    type: "url",
    name: "FAQ Database",
    source: "https://help.company.com/faq",
    status: "active",
    lastUpdated: "1 day ago",
    documents: 156
  },
  {
    id: 4,
    type: "file",
    name: "Training Materials",
    source: "training-docs.zip",
    status: "error",
    lastUpdated: "3 days ago",
    documents: 0
  }
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
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Agent Configuration</h2>
        <p className="text-muted-foreground">
          Customize your AI assistant's behavior, personality, and capabilities
        </p>
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
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Knowledge Base</h2>
          <p className="text-muted-foreground">
            Manage your assistant's knowledge sources and training data
          </p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Add Source
        </Button>
      </div>

      {/* Knowledge Base Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sources</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{knowledgeBaseSources.length}</div>
            <p className="text-xs text-muted-foreground">
              Knowledge sources
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {knowledgeBaseSources.reduce((sum, source) => sum + source.documents, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Indexed documents
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sources</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {knowledgeBaseSources.filter(s => s.status === 'active').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <RotateCcw className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {knowledgeBaseSources.filter(s => s.status === 'processing').length}
            </div>
            <p className="text-xs text-muted-foreground">
              In progress
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Knowledge Sources List */}
      <Card>
        <CardHeader>
          <CardTitle>Knowledge Sources</CardTitle>
          <CardDescription>
            Manage your data sources and their processing status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {knowledgeBaseSources.map((source) => (
              <div key={source.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    {source.type === 'url' ? (
                      <Link className="h-4 w-4" />
                    ) : (
                      <FileText className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{source.name}</h4>
                    <p className="text-sm text-muted-foreground">{source.source}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={source.status === 'active' ? 'default' : source.status === 'processing' ? 'secondary' : 'destructive'}>
                        {source.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {source.documents} documents • {source.lastUpdated}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <RotateCcw className="h-3 w-3 mr-1" />
                    Refresh
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="h-3 w-3 mr-1" />
                    Configure
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

function WorkflowsView() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Workflow Builder</h2>
          <p className="text-muted-foreground">
            Create and manage automated workflows for your users
          </p>
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
