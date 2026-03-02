
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { BarChart3, Users, HeartHandshake, AlertTriangle, CheckCircle, XCircle, LogOut, ShieldCheck, Activity } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const router = useRouter();
  const { toast } = useToast();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    toast({ title: "লগআউট সফল", description: "অ্যাডমিন সেশন শেষ করা হয়েছে।" });
    router.push('/admin/login');
  };

  if (!isAuthorized) return null;

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
    <div className="min-h-screen flex flex-col bg-[#0f0203]">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-primary" /> কমান্ড সেন্টার
            </h1>
            <p className="text-white/40 mt-2">সিস্টেম স্ট্যাটাস: অনলাইন • সিকিউরিটি লেভেল: হাই</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none border-white/10 text-white hover:bg-white/5 rounded-xl">
              <BarChart3 className="h-4 w-4 mr-2" /> এক্সপোর্ট রিপোর্ট
            </Button>
            <Button variant="destructive" className="flex-1 md:flex-none rounded-xl" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> লগআউট
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="border-white/5 bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{stat.title}</p>
                    <h3 className="text-2xl md:text-4xl font-bold mt-1 text-white">{stat.value}</h3>
                  </div>
                  <div className={`p-4 rounded-2xl bg-white/5 ${stat.color}`}>
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
          <Card className="lg:col-span-2 border-white/5 bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
            <CardHeader className="border-b border-white/5">
              <CardTitle className="font-bold text-white flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" /> পেন্ডিং রিভিউ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-white/5">
                      <TableHead className="text-white/40 uppercase text-[10px] font-bold">ID</TableHead>
                      <TableHead className="text-white/40 uppercase text-[10px] font-bold">আবেদনকারী</TableHead>
                      <TableHead className="text-white/40 uppercase text-[10px] font-bold hidden md:table-cell">শিরোনাম</TableHead>
                      <TableHead className="text-white/40 uppercase text-[10px] font-bold">সময়</TableHead>
                      <TableHead className="text-right text-white/40 uppercase text-[10px] font-bold">অ্যাকশন</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingRequests.map((req) => (
                      <TableRow key={req.id} className="border-white/5 hover:bg-white/5">
                        <TableCell className="font-mono text-[10px] text-white/40">{req.id}</TableCell>
                        <TableCell className="text-white font-medium">{req.user}</TableCell>
                        <TableCell className="max-w-[200px] truncate text-white/60 text-sm hidden md:table-cell">{req.title}</TableCell>
                        <TableCell className="text-white/40 text-xs">{req.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="icon" variant="ghost" className="h-9 w-9 text-green-500 hover:bg-green-500/10 rounded-xl">
                              <CheckCircle className="h-5 w-5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-9 w-9 text-primary hover:bg-primary/10 rounded-xl">
                              <XCircle className="h-5 w-5" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar Notifications/Activity */}
          <Card className="border-white/5 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl">
            <CardHeader className="border-b border-white/5">
              <CardTitle className="font-bold text-white">সিস্টেম অ্যাক্টিভিটি</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {[
                { user: "Admin-X", action: "Approved RQ-88", time: "5m ago" },
                { user: "User-44", action: "New message in Thread #2", time: "12m ago" },
                { user: "System", action: "AI categorized 10 items", time: "30m ago" },
                { user: "Admin-Z", action: "Blocked IP 192.168.1.1", time: "1h ago" },
              ].map((activity, i) => (
                <div key={i} className="flex gap-4 items-start pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                  <div>
                    <p className="text-sm font-medium text-white">{activity.action}</p>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">{activity.user} • {activity.time}</p>
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
