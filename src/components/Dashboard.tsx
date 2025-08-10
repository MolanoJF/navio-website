"use client"

import * as React from "react"
import { IconCamera, IconChartBar, IconDashboard, IconDatabase, IconFileAi, IconFileDescription, IconFileWord, IconFolder, IconHelp, IconInnerShadowTop, IconListDetails, IconReport, IconSearch, IconSettings, IconUsers } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for the dashboard
const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
]

const tableData = [
  { id: 1, header: "Cover page", type: "Cover page", status: "In Process", target: "18", limit: "5", reviewer: "Eddie Lake" },
  { id: 2, header: "Table of contents", type: "Table of contents", status: "Done", target: "29", limit: "24", reviewer: "Eddie Lake" },
  { id: 3, header: "Executive summary", type: "Narrative", status: "Done", target: "10", limit: "13", reviewer: "Eddie Lake" },
  { id: 4, header: "Technical approach", type: "Narrative", status: "Done", target: "27", limit: "23", reviewer: "Jamik Tashpulatov" },
  { id: 5, header: "Design", type: "Narrative", status: "In Process", target: "2", limit: "16", reviewer: "Jamik Tashpulatov" },
  { id: 6, header: "Capabilities", type: "Narrative", status: "In Process", target: "20", limit: "8", reviewer: "Jamik Tashpulatov" },
  { id: 7, header: "Integration with existing systems", type: "Narrative", status: "In Process", target: "19", limit: "21", reviewer: "Jamik Tashpulatov" },
  { id: 8, header: "Innovation and Advantages", type: "Narrative", status: "Done", target: "25", limit: "26", reviewer: "Assign reviewer" },
  { id: 9, header: "Overview of EMR's Innovative Solutions", type: "Technical content", status: "Done", target: "7", limit: "23", reviewer: "Assign reviewer" },
  { id: 10, header: "Advanced Algorithms and Machine Learning", type: "Narrative", status: "Done", target: "30", limit: "28", reviewer: "Assign reviewer" },
]

export default function Dashboard() {
  const [timeRange, setTimeRange] = React.useState("90d")
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set())
  const [currentPage, setCurrentPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  const handleRowSelection = (id: number) => {
    const newSelection = new Set(selectedRows)
    if (newSelection.has(id)) {
      newSelection.delete(id)
    } else {
      newSelection.add(id)
    }
    setSelectedRows(newSelection)
  }

  const handleSelectAll = () => {
    if (selectedRows.size === tableData.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(tableData.map(item => item.id)))
    }
  }

  const totalPages = Math.ceil(tableData.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentData = tableData.slice(startIndex, endIndex)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interactive Dashboard</h2>
          <p className="text-muted-foreground text-lg">Monitor your business metrics and track progress in real-time</p>
        </div>
        
        <div className="bg-card rounded-lg border shadow-lg">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-72 bg-card border-r min-h-screen p-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <IconInnerShadowTop className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">Acme Inc.</span>
              </div>
              
              <Button className="w-full mb-6 bg-primary text-primary-foreground hover:bg-primary/90">
                <IconDashboard className="w-4 h-4 mr-2" />
                Quick Create
              </Button>

              <nav className="space-y-2 mb-6">
                <Button variant="ghost" className="w-full justify-start">
                  <IconDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <IconListDetails className="w-4 h-4 mr-2" />
                  Lifecycle
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <IconChartBar className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <IconFolder className="w-4 h-4 mr-2" />
                  Projects
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <IconUsers className="w-4 h-4 mr-2" />
                  Team
                </Button>
              </nav>

              <Separator className="my-6" />

              <div className="space-y-2 mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Documents</h3>
                <Button variant="ghost" className="w-full justify-start">
                  <IconDatabase className="w-4 h-4 mr-2" />
                  Data Library
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <IconReport className="w-4 h-4 mr-2" />
                  Reports
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <IconFileWord className="w-4 h-4 mr-2" />
                  Word Assistant
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <IconFileAi className="w-4 h-4 mr-2" />
                  More...
                </Button>
              </div>

              <div className="mt-auto space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <IconSettings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <IconHelp className="w-4 h-4 mr-2" />
                  Get Help
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <IconSearch className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>

              <div className="mt-6 p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-sm font-medium">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-medium">shadcn</p>
                    <p className="text-xs text-muted-foreground">m@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">A dashboard with sidebar, charts and data table</h1>
                <p className="text-muted-foreground">Interactive dashboard with real-time data visualization</p>
              </div>

              {/* Section Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="text-2xl font-semibold">$1,250.00</CardTitle>
                    <CardAction>
                      <Badge variant="outline" className="text-green-600">
                        +12.5%
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="flex gap-2 font-medium">
                      Trending up this month
                    </div>
                    <div className="text-muted-foreground">
                      Visitors for the last 6 months
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardDescription>New Customers</CardDescription>
                    <CardTitle className="text-2xl font-semibold">1,234</CardTitle>
                    <CardAction>
                      <Badge variant="outline" className="text-red-600">
                        -20%
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="flex gap-2 font-medium">
                      Down 20% this period
                    </div>
                    <div className="text-muted-foreground">
                      Acquisition needs attention
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardDescription>Active Accounts</CardDescription>
                    <CardTitle className="text-2xl font-semibold">45,678</CardTitle>
                    <CardAction>
                      <Badge variant="outline" className="text-green-600">
                        +12.5%
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="flex gap-2 font-medium">
                      Strong user retention
                    </div>
                    <div className="text-muted-foreground">Engagement exceed targets</div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardDescription>Growth Rate</CardDescription>
                    <CardTitle className="text-2xl font-semibold">4.5%</CardTitle>
                    <CardAction>
                      <Badge variant="outline" className="text-green-600">
                        +4.5%
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="flex gap-2 font-medium">
                      Steady performance increase
                    </div>
                    <div className="text-muted-foreground">Meets growth projections</div>
                  </CardFooter>
                </Card>
              </div>

              {/* Chart Section */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Total Visitors</CardTitle>
                  <CardDescription>Total for the last 3 months</CardDescription>
                  <CardAction>
                    <div className="flex gap-2">
                      <Button
                        variant={timeRange === "90d" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTimeRange("90d")}
                      >
                        Last 3 months
                      </Button>
                      <Button
                        variant={timeRange === "30d" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTimeRange("30d")}
                      >
                        Last 30 days
                      </Button>
                      <Button
                        variant={timeRange === "7d" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTimeRange("7d")}
                      >
                        Last 7 days
                      </Button>
                    </div>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">Interactive Chart Area</p>
                      <p className="text-sm text-muted-foreground">
                        {filteredData.length} data points for {timeRange === "90d" ? "90 days" : timeRange === "30d" ? "30 days" : "7 days"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Document Sections</CardTitle>
                      <CardDescription>Manage and track document progress</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Customize Columns
                      </Button>
                      <Button variant="outline" size="sm">
                        + Add Section
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="outline" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="outline">Outline</TabsTrigger>
                      <TabsTrigger value="past-performance">
                        Past Performance <Badge variant="secondary">3</Badge>
                      </TabsTrigger>
                      <TabsTrigger value="key-personnel">
                        Key Personnel <Badge variant="secondary">2</Badge>
                      </TabsTrigger>
                      <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
                    </TabsList>

                    <TabsContent value="outline" className="mt-4">
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-12">
                                <Checkbox
                                  checked={selectedRows.size === currentData.length}
                                  onCheckedChange={handleSelectAll}
                                />
                              </TableHead>
                              <TableHead>Header</TableHead>
                              <TableHead>Section Type</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead className="text-right">Target</TableHead>
                              <TableHead className="text-right">Limit</TableHead>
                              <TableHead>Reviewer</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {currentData.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>
                                  <Checkbox
                                    checked={selectedRows.has(item.id)}
                                    onCheckedChange={() => handleRowSelection(item.id)}
                                  />
                                </TableCell>
                                <TableCell className="font-medium">{item.header}</TableCell>
                                <TableCell>
                                  <Badge variant="outline">{item.type}</Badge>
                                </TableCell>
                                <TableCell>
                                  <Badge variant={item.status === "Done" ? "default" : "secondary"}>
                                    {item.status}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">{item.target}</TableCell>
                                <TableCell className="text-right">{item.limit}</TableCell>
                                <TableCell>
                                  {item.reviewer === "Assign reviewer" ? (
                                    <Select>
                                      <SelectTrigger className="w-40">
                                        <SelectValue placeholder="Assign reviewer" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
                                        <SelectItem value="Jamik Tashpulatov">Jamik Tashpulatov</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  ) : (
                                    item.reviewer
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      {/* Pagination */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-sm text-muted-foreground">
                          {selectedRows.size} of {tableData.length} row(s) selected.
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Label htmlFor="rows-per-page" className="text-sm">
                              Rows per page
                            </Label>
                            <Select value={rowsPerPage.toString()} onValueChange={(value) => setRowsPerPage(Number(value))}>
                              <SelectTrigger className="w-20">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setCurrentPage(1)}
                              disabled={currentPage === 1}
                            >
                              First
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setCurrentPage(currentPage - 1)}
                              disabled={currentPage === 1}
                            >
                              Previous
                            </Button>
                            <span className="text-sm">
                              Page {currentPage} of {totalPages}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setCurrentPage(currentPage + 1)}
                              disabled={currentPage === totalPages}
                            >
                              Next
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setCurrentPage(totalPages)}
                              disabled={currentPage === totalPages}
                            >
                              Last
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="past-performance" className="mt-4">
                      <div className="h-64 w-full bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Past Performance Content</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="key-personnel" className="mt-4">
                      <div className="h-64 w-full bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Key Personnel Content</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="focus-documents" className="mt-4">
                      <div className="h-64 w-full bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Focus Documents Content</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
