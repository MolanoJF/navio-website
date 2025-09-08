"use client"

import * as React from "react"
import { 
  Search, 
  Download, 
  MessageSquare, 
  User, 
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  CheckCircle,
  Eye
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

// Mock data for chat logs
const chatLogs = [
  {
    id: "conv_001",
    userId: "user_12847",
    userName: "Sarah Johnson",
    userEmail: "sarah.johnson@example.com",
    startTime: "2024-01-15T10:30:00Z",
    endTime: "2024-01-15T10:35:30Z",
    sentiment: "positive",
    topic: "Password Reset",
    resolution: "Resolved",
    conversation: [
      { role: "user", content: "I can't log into my account", timestamp: "10:30:15" },
      { role: "assistant", content: "I'd be happy to help you with your login issue. Let me guide you through resetting your password.", timestamp: "10:30:18" },
      { role: "user", content: "That would be great, thank you", timestamp: "10:30:45" },
      { role: "assistant", content: "First, let's verify your email address. Can you confirm the email associated with your account?", timestamp: "10:30:48" },
      { role: "user", content: "It's sarah.johnson@example.com", timestamp: "10:31:12" },
      { role: "assistant", content: "Perfect! I've sent a password reset link to sarah.johnson@example.com. Please check your inbox and spam folder.", timestamp: "10:31:15" },
    ]
  },
  {
    id: "conv_002",
    userId: "user_12848",
    userName: "Michael Chen",
    userEmail: "m.chen@company.com",
    startTime: "2024-01-15T11:15:00Z",
    endTime: "2024-01-15T11:22:15Z",
    sentiment: "neutral",
    topic: "Feature Request",
    resolution: "Escalated",
    conversation: [
      { role: "user", content: "How can I export my data?", timestamp: "11:15:30" },
      { role: "assistant", content: "I can help you export your data. What type of data are you looking to export?", timestamp: "11:15:33" },
      { role: "user", content: "All my project files and settings", timestamp: "11:16:00" },
      { role: "assistant", content: "Currently, you can export project files through the dashboard. However, settings export is not available yet. Would you like me to show you how to export your projects?", timestamp: "11:16:05" },
    ]
  },
  {
    id: "conv_003",
    userId: "user_12849",
    userName: "Emma Davis",
    userEmail: "emma.d@startup.io",
    startTime: "2024-01-15T14:20:00Z",
    endTime: "2024-01-15T14:28:45Z",
    sentiment: "negative",
    topic: "Technical Issue",
    resolution: "Unresolved",
    conversation: [
      { role: "user", content: "Your service is not working properly", timestamp: "14:20:15" },
      { role: "assistant", content: "I'm sorry to hear you're experiencing issues. Can you tell me more about what's not working?", timestamp: "14:20:18" },
      { role: "user", content: "The upload feature keeps failing", timestamp: "14:20:45" },
      { role: "assistant", content: "I understand your frustration with the upload feature. Let me help you troubleshoot this issue.", timestamp: "14:20:48" },
    ]
  },
  {
    id: "conv_004",
    userId: "user_12850",
    userName: "David Kim",
    userEmail: "david@techcorp.com",
    startTime: "2024-01-15T15:45:00Z",
    endTime: "2024-01-15T15:51:20Z",
    sentiment: "positive",
    topic: "Account Setup",
    resolution: "Resolved",
    conversation: [
      { role: "user", content: "I need help setting up my team account", timestamp: "15:45:10" },
      { role: "assistant", content: "I'd be delighted to help you set up your team account! Let me walk you through the process step by step.", timestamp: "15:45:13" },
      { role: "user", content: "Perfect, I have 5 team members to add", timestamp: "15:45:30" },
      { role: "assistant", content: "Great! With 5 team members, you'll want to use our Team plan. Let me show you how to invite them and set up their permissions.", timestamp: "15:45:35" },
    ]
  },
  {
    id: "conv_005",
    userId: "user_12851",
    userName: "Lisa Wong",
    userEmail: "lisa.wong@design.co",
    startTime: "2024-01-15T16:30:00Z",
    endTime: "2024-01-15T16:35:10Z",
    sentiment: "positive",
    topic: "Billing Inquiry",
    resolution: "Resolved",
    conversation: [
      { role: "user", content: "Can you help me understand my billing?", timestamp: "16:30:05" },
      { role: "assistant", content: "Absolutely! I'd be happy to explain your billing details. Let me pull up your account information.", timestamp: "16:30:08" },
      { role: "user", content: "I see a charge I don't recognize", timestamp: "16:30:25" },
      { role: "assistant", content: "Let me help you identify that charge. Can you tell me the amount and date of the charge you're questioning?", timestamp: "16:30:28" },
    ]
  }
]

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return 'text-green-600 bg-green-50'
    case 'negative': return 'text-red-600 bg-red-50'
    default: return 'text-yellow-600 bg-yellow-50'
  }
}

const getSentimentIcon = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return <ThumbsUp className="h-3 w-3" />
    case 'negative': return <ThumbsDown className="h-3 w-3" />
    default: return <AlertCircle className="h-3 w-3" />
  }
}

interface ActivityModuleProps {
  activeSubModule?: string
}

export function ActivityModule({ activeSubModule = "chat" }: ActivityModuleProps) {
  // For now, all activity sub-modules show the same chat logs view
  // In the future, this could be expanded to show different activity types
  return <ChatLogsView />
}

function ChatLogsView() {
  const [selectedConversation, setSelectedConversation] = React.useState<string | null>(null)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [sentimentFilter, setSentimentFilter] = React.useState("all")

  const filteredLogs = chatLogs.filter(log => {
    const matchesSearch = log.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.userEmail.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSentiment = sentimentFilter === "all" || log.sentiment === sentimentFilter
    
    return matchesSearch && matchesSentiment
  })

  const selectedLog = chatLogs.find(log => log.id === selectedConversation)

  return (
    <div className="flex flex-col gap-6">
      {/* Header with Search and Filters */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Chat Logs</h2>
          <p className="text-muted-foreground">
            Monitor and review all system interactions and conversations
          </p>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Select value={sentimentFilter} onValueChange={setSentimentFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sentiment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sentiments</SelectItem>
                <SelectItem value="positive">Positive</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="negative">Negative</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Activity Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{chatLogs.length}</div>
            <p className="text-xs text-muted-foreground">
              Today's activity
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((chatLogs.filter(log => log.resolution === 'Resolved').length / chatLogs.length) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Successfully resolved
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chat Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Conversation History</CardTitle>
          <CardDescription>
            Detailed log of all user interactions and conversations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-md border">
            <Table className="w-full table-fixed">
              <TableHeader>
                <TableRow>
                  <TableHead style={{width: "30%"}}>User</TableHead>
                  <TableHead style={{width: "20%"}}>Topic</TableHead>
                  <TableHead style={{width: "15%"}}>Sentiment</TableHead>
                  <TableHead style={{width: "15%"}}>Resolution</TableHead>
                  <TableHead style={{width: "10%"}}>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium whitespace-pre-wrap break-words">{log.userName}</div>
                          <div className="text-xs text-muted-foreground whitespace-pre-wrap break-words">{log.userEmail}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium whitespace-pre-wrap break-words">{log.topic}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(log.startTime).toLocaleString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getSentimentColor(log.sentiment)}>
                        {getSentimentIcon(log.sentiment)}
                        <span className="ml-1 capitalize">{log.sentiment}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={log.resolution === 'Resolved' ? 'default' : 'secondary'}>
                        {log.resolution}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSelectedConversation(log.id)}
                          >
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View conversation</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh]">
                          <DialogHeader>
                            <DialogTitle>Conversation Details</DialogTitle>
                            <DialogDescription>
                              Full conversation log for {log.userName}
                            </DialogDescription>
                          </DialogHeader>
                          
                          {selectedLog && (
                            <div className="space-y-4">
                              {/* Conversation Metadata */}
                              <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                                <div>
                                  <p className="text-sm font-medium">User</p>
                                  <p className="text-sm text-muted-foreground">{selectedLog.userName}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Resolution</p>
                                  <p className="text-sm text-muted-foreground">{selectedLog.resolution}</p>
                                </div>
                              </div>
                              
                              {/* Conversation Messages */}
                              <ScrollArea className="h-[400px] w-full border rounded-lg p-4">
                                <div className="space-y-4">
                                  {selectedLog.conversation.map((message, index) => (
                                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                      <div className={`max-w-[80%] rounded-lg p-3 ${
                                        message.role === 'user' 
                                          ? 'bg-primary text-primary-foreground' 
                                          : 'bg-muted'
                                      }`}>
                                        <p className="text-sm">{message.content}</p>
                                        <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredLogs.length === 0 && (
            <div className="text-center py-8">
              <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-2 text-sm font-semibold">No conversations found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
