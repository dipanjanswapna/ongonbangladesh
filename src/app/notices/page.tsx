'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Megaphone, FileText, Download, Gavel, Calendar } from 'lucide-react';

export default function NoticeTenderPage() {
  const notices = [
    { id: 1, title: "জরুরি বিজ্ঞপ্তি: অফিস সময় পরিবর্তন", date: "২০ মে ২০২৪", type: "নোটিশ" },
    { id: 2, title: "স্বেচ্ছাসেবক নিয়োগ বিজ্ঞপ্তি ২০২৪", date: "১৮ মে ২০২৪", type: "নোটিশ" },
    { id: 3, title: "ঈদ বোনাস সংক্রান্ত অফিশিয়াল নোটিশ", date: "১৫ মে ২০২৪", type: "নোটিশ" },
  ];

  const tenders = [
    { id: 1, title: "টেন্ডার আহ্বান: খাদ্য সামগ্রী সরবরাহ (বন্যা ত্রাণ)", date: "২২ মে ২০২৪", deadline: "০৫ জুন ২০২৪", ref: "TEN-2024-001" },
    { id: 2, title: "অফিস লজিস্টিকস ও ফার্নিচার ক্রয়", date: "১০ মে ২০২৪", deadline: "২৫ মে ২০২৪", ref: "TEN-2024-002" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <Megaphone className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">নোটিশ ও <span className="text-white/40">টেন্ডার</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">সংস্থার অফিশিয়াল নোটিশ এবং বাণিজ্যিক দরপত্রসমূহ এখানে পাওয়া যাবে।</p>
        </div>

        <Tabs defaultValue="notices" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/5 p-1 rounded-xl h-auto border border-white/10">
              <TabsTrigger value="notices" className="rounded-lg px-8 py-3 data-[state=active]:bg-white data-[state=active]:text-[#7a1013] font-black text-[10px] text-white uppercase tracking-widest">নোটিশবোর্ড</TabsTrigger>
              <TabsTrigger value="tenders" className="rounded-lg px-8 py-3 data-[state=active]:bg-white data-[state=active]:text-[#7a1013] font-black text-[10px] text-white uppercase tracking-widest">টেন্ডার পোর্টাল</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="notices" className="space-y-4">
            {notices.map((notice) => (
              <Card key={notice.id} className="bg-white/5 border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-6">
                  <div className="p-3 rounded-xl bg-white/5 text-white shadow-xl group-hover:scale-110 transition-transform">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{notice.title}</h4>
                    <p className="text-[10px] text-white/30 uppercase font-black tracking-widest">{notice.date}</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="rounded-xl text-white/40 hover:text-white hover:bg-white/10">
                  <Download className="h-5 w-5" />
                </Button>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="tenders" className="space-y-6">
            {tenders.map((tender) => (
              <Card key={tender.id} className="bg-white/5 border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Gavel className="h-4 w-4 text-orange-400" />
                      <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Tender Ref: {tender.ref}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">{tender.title}</h3>
                    <div className="flex flex-wrap gap-6 text-white/40 text-[10px] font-bold uppercase tracking-widest pt-2">
                      <div className="flex items-center gap-2"><Calendar className="h-3 w-3" /> প্রকাশিত: {tender.date}</div>
                      <div className="flex items-center gap-2 text-red-400"><Calendar className="h-3 w-3" /> শেষ সময়: {tender.deadline}</div>
                    </div>
                  </div>
                  <Button className="bg-white text-[#7a1013] font-black h-12 px-8 rounded-xl uppercase tracking-widest text-[10px] shadow-xl hover:scale-105 transition-all">ডাউনলোড শিডিউল</Button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
