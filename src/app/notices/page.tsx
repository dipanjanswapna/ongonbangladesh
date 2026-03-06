'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Gavel, Bell } from 'lucide-react';
import { notices } from '@/lib/media-data';

export default function NoticesPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <Bell className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">নোটিশ ও <span className="text-white/40">টেন্ডার</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">অফিশিয়াল ঘোষণা এবং টেন্ডার সংক্রান্ত তথ্যের জন্য নিয়মিত চোখ রাখুন।</p>
        </div>

        <div className="grid gap-4">
          {notices.map((notice) => (
            <Card key={notice.id} className="bg-white/5 border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all group shadow-xl">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-xl ${notice.type === 'Tender' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'} shadow-inner`}>
                    {notice.type === 'Tender' ? <Gavel className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <Badge variant="outline" className="border-white/10 text-white/40 text-[8px] font-black uppercase">{notice.type}</Badge>
                      <span className="text-[10px] text-white/30 font-bold">{notice.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight">{notice.title}</h3>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="rounded-xl h-12 w-12 text-white/20 hover:text-white hover:bg-white/10">
                  <Download className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
