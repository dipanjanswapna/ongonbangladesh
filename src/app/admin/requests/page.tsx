
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Eye, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const requests = [
  { id: "RQ-101", user: "Rahim Ahmed", title: "Emergency meds for heart patient", category: "Medical", date: "10 mins ago", status: "Pending" },
  { id: "RQ-102", user: "Sara Islam", title: "Textbooks for local library", category: "Education", date: "45 mins ago", status: "Approved" },
  { id: "RQ-103", user: "Tanvir Hasan", title: "Warm clothes for winter drive", category: "Clothing", date: "2 hours ago", status: "Pending" },
  { id: "RQ-104", user: "Kamrul Islam", title: "Food packages for flood victims", category: "Food", date: "5 hours ago", status: "Rejected" },
];

export default function RequestsManagement() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">সাহায্য আবেদন ম্যানেজমেন্ট</h1>
        <p className="text-white/40 mt-1">আবেদনগুলো যাচাই করুন এবং অনুমোদন দিন।</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <Input placeholder="আবেদনকারী বা আইডি দিয়ে খুঁজুন" className="bg-white/5 border-white/10 text-white pl-10 rounded-xl" />
        </div>
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-xl w-full md:w-auto">
          <Filter className="h-4 w-4 mr-2" /> ফিল্টার
        </Button>
      </div>

      <Card className="border-white/5 bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-white/5">
                  <TableHead className="text-white/40 uppercase text-[10px] font-bold">ID</TableHead>
                  <TableHead className="text-white/40 uppercase text-[10px] font-bold">আবেদনকারী</TableHead>
                  <TableHead className="text-white/40 uppercase text-[10px] font-bold">বিভাগ</TableHead>
                  <TableHead className="text-white/40 uppercase text-[10px] font-bold">স্থিতি</TableHead>
                  <TableHead className="text-right text-white/40 uppercase text-[10px] font-bold">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((req) => (
                  <TableRow key={req.id} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell className="font-mono text-[10px] text-white/40">{req.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-white font-medium">{req.user}</span>
                        <span className="text-[10px] text-white/40">{req.date}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[10px] border-white/10 text-white/60">{req.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={cn(
                        "text-[10px] font-bold border-0",
                        req.status === "Pending" ? "bg-orange-500/10 text-orange-400" :
                        req.status === "Approved" ? "bg-green-500/10 text-green-400" :
                        "bg-red-500/10 text-red-400"
                      )}>
                        {req.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="icon" variant="ghost" className="h-9 w-9 text-blue-400 hover:bg-blue-400/10 rounded-xl">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-9 w-9 text-green-500 hover:bg-green-500/10 rounded-xl">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-9 w-9 text-primary hover:bg-primary/10 rounded-xl">
                          <XCircle className="h-4 w-4" />
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
    </div>
  );
}
