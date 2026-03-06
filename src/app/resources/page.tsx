'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ShieldCheck, Download, Mail, PieChart, FileStack } from 'lucide-react';
import { resourceArchive } from '@/lib/media-data';

export default function ResourcesPage() {
  const categories = [
    { title: "পলিসি ও ফ্রেমওয়ার্ক", icon: ShieldCheck, color: "text-blue-400" },
    { title: "বার্ষিক রিপোর্ট", icon: PieChart, color: "text-green-400" },
    { title: "নিউজলেটার আর্কাইভ", icon: Mail, color: "text-pink-400" },
    { title: "পাবলিকেশন", icon: FileStack, color: "text-orange-400" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">রিসোর্স ও <span className="text-white/40">আর্কাইভ</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">আমাদের পলিসি, পাবলিকেশন এবং বার্ষিক রিপোর্টগুলো এক নজরে দেখুন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 transition-all shadow-xl">
              <div className={`p-4 rounded-xl bg-white/5 ${cat.color} group-hover:scale-110 transition-transform w-fit mx-auto mb-6`}>
                <cat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-widest">{cat.title}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceArchive.map((res) => (
            <Card key={res.id} className="bg-white/5 border-white/5 rounded-xl hover:bg-white/10 transition-all group shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12" />
              <CardContent className="p-6 flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-white/10 text-white/40 text-[8px] font-black uppercase tracking-widest">{res.type}</Badge>
                    <span className="text-[8px] text-white/20 font-bold uppercase tracking-widest">{res.format} • {res.size}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">{res.title}</h4>
                </div>
                <Button className="bg-white text-[#7a1013] hover:bg-white/90 font-black h-12 w-12 rounded-xl shadow-xl">
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
