'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ShieldCheck, FileBarChart, Mail, Download, ExternalLink, FileArchive } from 'lucide-react';

export default function ResourcesPage() {
  const sections = [
    {
      title: "পলিসি ও ফ্রেমওয়ার্ক",
      icon: ShieldCheck,
      color: "text-blue-400",
      items: [
        { name: "চাইল্ড সেফগার্ড পলিসি", size: "১.২ এমবি" },
        { name: "অপারেশনাল গাইডলাইন", size: "৮০০ কেবি" },
        { name: "প্রাইভেসি অ্যান্ড ডাটা পলিসি", size: "৫০৫ কেবি" }
      ]
    },
    {
      title: "রিপোর্ট ও পাবলিকেশন",
      icon: FileBarChart,
      color: "text-green-400",
      items: [
        { name: "বার্ষিক অডিট রিপোর্ট ২০২৩", size: "৩.৫ এমবি" },
        { name: "মাঠ পর্যায়ের ইমপ্যাক্ট স্টাডি", size: "২.১ এমবি" },
        { name: "ওঙ্গন ম্যাগাজিন - ভলিউম ৫", size: "৫.৮ এমবি" }
      ]
    },
    {
      title: "নিউজলেটার আর্কাইভ",
      icon: Mail,
      color: "text-orange-400",
      items: [
        { name: "নিউজলেটার মে ২০২৪", size: "১.১ এমবি" },
        { name: "নিউজলেটার এপ্রিল ২০২৪", size: "১.০ এমবি" },
        { name: "নিউজলেটার মার্চ ২০২৪", size: "১.২ এমবি" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">রিসোর্স ও <span className="text-white/40">ডকুমেন্ট সেন্টার</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">স্বচ্ছতা ও জবাবদিহিতার জন্য আমাদের সকল গাইডলাইন এবং রিপোর্ট সবার জন্য উন্মুক্ত।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <div key={i} className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <section.icon className={cn("h-6 w-6", section.color)} />
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{section.title}</h3>
              </div>
              <div className="space-y-3">
                {section.items.map((item, idx) => (
                  <Card key={idx} className="bg-white/5 border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group shadow-xl border-l-4 border-l-transparent hover:border-l-white">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h4 className="text-white font-bold text-sm leading-tight group-hover:text-white/80">{item.name}</h4>
                        <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">{item.size}</p>
                      </div>
                      <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg text-white/20 hover:text-white">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-xl bg-white/5 border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-3"><FileArchive className="h-6 w-6 text-white/40" /> আরও ডকুমেন্টস প্রয়োজন?</h3>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed italic text-lg">
            "আপনার যদি কোনো নির্দিষ্ট তথ্য বা রিপোর্ট প্রয়োজন হয় যা এখানে নেই, তবে অনুগ্রহ করে আমাদের আর্কাইভ টিমের সাথে যোগাযোগ করুন।"
          </p>
          <Button variant="outline" className="border-white/20 text-white font-bold h-12 px-8 rounded-xl uppercase tracking-widest text-[10px] shadow-xl hover:bg-white/5">আর্কাইভ রিকোয়েস্ট পাঠান</Button>
        </div>
      </main>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
