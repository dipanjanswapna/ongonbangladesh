
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, Users, HeartHandshake, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "1,248", icon: Users, color: "text-blue-500" },
    { title: "Active Requests", value: "86", icon: HeartHandshake, color: "text-primary" },
    { title: "Resolved Cases", value: "432", icon: CheckCircle, color: "text-green-500" },
    { title: "Pending Review", value: "12", icon: AlertTriangle, color: "text-orange-500" },
  ];

  const pendingRequests = [
    { id: "RQ-101", user: "Rahim Ahmed", title: "Emergency meds for heart patient", date: "10 mins ago", status: "Pending" },
    { id: "RQ-102", user: "Sara Islam", title: "Textbooks for local library", date: "45 mins ago", status: "Pending" },
    { id: "RQ-103", user: "Tanvir Hasan", title: "Warm clothes for winter drive", date: "2 hours ago", status: "Pending" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-headline font-bold">Admin Command Center</h1>
          <Button variant="outline" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" /> Export Report
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="border-white/5 bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                    <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Tabs Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Table */}
          <Card className="lg:col-span-2 border-white/5 bg-card">
            <CardHeader>
              <CardTitle className="font-headline font-bold">Recent Pending Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-white/5">
                    <TableHead>Request ID</TableHead>
                    <TableHead>Submitted By</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingRequests.map((req) => (
                    <TableRow key={req.id} className="border-white/5 hover:bg-white/5">
                      <TableCell className="font-mono text-xs">{req.id}</TableCell>
                      <TableCell>{req.user}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{req.title}</TableCell>
                      <TableCell className="text-muted-foreground text-xs">{req.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-green-500 hover:bg-green-500/10">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-primary hover:bg-primary/10">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Sidebar Notifications/Activity */}
          <Card className="border-white/5 bg-card">
            <CardHeader>
              <CardTitle className="font-headline font-bold">System Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { user: "Admin-X", action: "Approved RQ-88", time: "5m ago" },
                { user: "User-44", action: "New message in Thread #2", time: "12m ago" },
                { user: "System", action: "AI successfully categorized 10 items", time: "30m ago" },
                { user: "Admin-Z", action: "Blocked IP 192.168.1.1", time: "1h ago" },
              ].map((activity, i) => (
                <div key={i} className="flex gap-4 items-start pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
