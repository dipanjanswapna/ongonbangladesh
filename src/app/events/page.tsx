'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function EventsPage() {
  const events = [
    { id: 1, title: "শীতবস্ত্র বিতরণ অভিযান ২০২৪", date: "১৫ ডিসেম্বর ২০২৪", time: "১০:০০ AM", location: "কুড়িগ্রাম, উত্তরবঙ্গ", status: "আসছে", image: "https://picsum.photos/seed/event1/600/400" },
    { id: 2, title: "রক্তদান ও সচেতনতা ক্যাম্প", date: "০৫ নভেম্বর ২০২৪", time: "০৯:০০ AM", location: "ঢাকা বিশ্ববিদ্যালয়", status: "আসছে", image: "https://picsum.photos/seed/event2/600/400" },
    { id: 3, title: "ইফতার বিতরণ (২০২৪ আর্কাইভ)", date: "১০ মার্চ ২০২৪", time: "০৫:০০ PM", location: "ধানমণ্ডি লেক", status: "সম্পন্ন", image: "https://picsum.photos/seed/event3/600/400" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <CalendarIcon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">আমাদের <span className="text-white/40">ইভেন্টসমূহ</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">সরাসরি মানবিক কাজে অংশ নিতে আমাদের ইভেন্টগুলোতে যোগ দিন।</p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="bg-white/5 border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all shadow-2xl group">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0 overflow-hidden">
                  <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" unoptimized />
                </div>
                <div className="p-8 flex flex-col justify-center flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className={cn(
                      "text-[8px] font-black uppercase tracking-widest px-3 py-1",
                      event.status === 'আসছে' ? "border-green-500/50 text-green-400" : "border-white/20 text-white/40"
                    )}>
                      {event.status}
                    </Badge>
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      <CalendarIcon className="h-3 w-3" /> {event.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
                      <Clock className="h-4 w-4 text-white/20" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
                      <MapPin className="h-4 w-4 text-white/20" /> {event.location}
                    </div>
                  </div>
                  <Button className="w-fit bg-white text-[#7a1013] font-black rounded-xl h-10 px-6 text-[10px] uppercase tracking-widest hover:scale-105 transition-all">রেজিস্ট্রেশন করুন <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
