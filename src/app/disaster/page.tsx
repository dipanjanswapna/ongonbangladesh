'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CloudLightning, 
  AlertTriangle, 
  MapPin, 
  HeartHandshake, 
  BookOpen, 
  PhoneCall, 
  FileText, 
  Navigation,
  Activity,
  Droplets,
  Wind,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function DisasterHub() {
  const tools = [
    { icon: AlertTriangle, title: "লাইভ অ্যালার্ট", desc: "জরুরি সতর্কতা ও আবহাওয়া আপডেট", link: "/disaster/alerts", color: "text-red-500" },
    { icon: MapPin, title: "রিসোর্স লোকেটার", desc: "আশ্রয়কেন্দ্র ও হাসপাতালের মানচিত্র", link: "/disaster/resources", color: "text-blue-400" },
    { icon: HeartHandshake, title: "সাহায্য ও সমন্বয়", desc: "এইড রিকোয়েস্ট ও ভলান্টিয়ারিং", link: "/disaster/requests", color: "text-green-400" },
    { icon: BookOpen, title: "সচেতনতা কেন্দ্র", desc: "প্রস্তুতি ও নিরাপত্তা গাইডলাইন", link: "/disaster/education", color: "text-orange-400" },
    { icon: FileText, title: "ক্ষয়ক্ষতি রিপোর্ট", desc: "পরিস্থিতি জানাতে রিপোর্ট করুন", link: "/disaster/report", color: "text-pink-400" },
    { icon: PhoneCall, title: "জরুরি নম্বর", desc: "প্রশাসন ও সেবা সংস্থাগুলোর লিস্ট", link: "/safety/helplines", color: "text-yellow-400" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-500/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32 flex-grow max-w-6xl">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="space-y-6 text-center md:text-left flex-1">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Disaster Resilience Hub</Badge>
              <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                দুর্যোগ <br /><span className="text-orange-500 italic">ব্যবস্থাপনা ও নিরাপত্তা</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                ঘূর্ণিঝড়, বন্যা ও প্রাকৃতিক দুর্যোগের সময় দ্রুত তথ্য ও সহায়তা পৌঁছে দিতে ওঙ্গন দুর্যোগ ব্যবস্থাপনা কেন্দ্র সর্বদা প্রস্তুত।
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link href="/disaster/alerts">
                  <Button className="bg-orange-500 text-white hover:bg-orange-600 h-14 px-8 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 group">
                    লাইভ অ্যালার্ট দেখুন <Navigation className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/disaster/report">
                  <Button variant="outline" className="h-14 px-8 border-white/10 text-white hover:bg-white/5 rounded-xl font-bold uppercase tracking-widest text-xs backdrop-blur-md transition-all active:scale-95">
                    রিপোর্ট করুন
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <Card className="p-6 bg-white/5 border-white/10 rounded-xl flex flex-col items-center justify-center space-y-2 text-center group hover:bg-white/10 transition-all">
                <Droplets className="h-8 w-8 text-blue-400" />
                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">বন্যা ঝুঁকি</p>
                <h3 className="text-xl font-black text-white uppercase">নিম্ন</h3>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 rounded-xl flex flex-col items-center justify-center space-y-2 text-center group hover:bg-white/10 transition-all">
                <Wind className="h-8 w-8 text-green-400" />
                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">বায়ু প্রবাহ</p>
                <h3 className="text-xl font-black text-white uppercase">স্বাভাবিক</h3>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 rounded-xl flex flex-col items-center justify-center space-y-2 text-center group hover:bg-white/10 transition-all">
                <Activity className="h-8 w-8 text-red-500" />
                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">ভূ-কম্পন</p>
                <h3 className="text-xl font-black text-white uppercase">স্থির</h3>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 rounded-xl flex flex-col items-center justify-center space-y-2 text-center group hover:bg-white/10 transition-all">
                <CloudLightning className="h-8 w-8 text-yellow-400" />
                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">বজ্রপাত</p>
                <h3 className="text-xl font-black text-white uppercase">৫% সতর্কতা</h3>
              </Card>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <Link key={i} href={tool.link}>
                <Card className="bg-white/5 border-white/5 hover:bg-white/10 transition-all rounded-xl p-8 group shadow-2xl relative overflow-hidden flex flex-col h-full border-b-4 border-b-white/5 hover:border-b-orange-500/50">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-3xl -mr-12 -mt-12 transition-all group-hover:bg-white/10" />
                  <div className={`p-4 rounded-xl bg-white/5 ${tool.color} group-hover:scale-110 transition-transform w-fit mb-6 shadow-xl`}>
                    <tool.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{tool.title}</h3>
                  <p className="text-white/40 text-xs font-bold leading-relaxed">{tool.desc}</p>
                </Card>
              </Link>
            ))}
          </div>

          {/* Special Aid Section Teaser */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-xl bg-green-500/20 text-green-400">
                  <HeartHandshake className="h-10 w-10" />
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/20 uppercase text-[8px] font-black">Community Link</Badge>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">স্বেচ্ছাসেবক হিসেবে যোগ দিন</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">দুর্যোগের সময় উদ্ধার কাজ এবং ত্রাণ বিতরণে সরাসরি অংশগ্রহণের মাধ্যমে মানুষের পাশে দাঁড়ান।</p>
              <Link href="/disaster/requests">
                <Button className="bg-white text-[#7a1013] font-black rounded-xl h-12 px-8 uppercase tracking-widest text-[10px]">পোর্টালে প্রবেশ করুন <ChevronRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </Card>

            <Card className="bg-white/5 border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-xl bg-blue-500/20 text-blue-400">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/20 uppercase text-[8px] font-black">Official Resources</Badge>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">আশ্রয়কেন্দ্র ও মেডিকেল গাইড</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">আপনার এলাকার নিকটস্থ সেফ জোন এবং জরুরি সেবা কেন্দ্রগুলোর হালনাগাদ তথ্য এখানে পাবেন।</p>
              <Link href="/disaster/resources">
                <Button variant="outline" className="border-white/10 text-white font-bold rounded-xl h-12 px-8 uppercase tracking-widest text-[10px]">রিসোর্স ম্যাপ দেখুন</Button>
              </Link>
            </Card>
          </div>

          {/* Disaster Helpline Banner */}
          <div className="bg-gradient-to-r from-orange-600/20 to-transparent border border-white/10 p-8 md:p-12 rounded-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">জরুরি দুর্যোগ সহায়তা প্রয়োজন?</h2>
                <p className="text-white/60 text-sm font-medium">আমাদের হটলাইনে কল দিন অথবা এআই অ্যাসিস্ট্যান্টের সাথে কথা বলুন।</p>
              </div>
              <div className="flex gap-4">
                <Link href="tel:999">
                  <Button className="bg-white text-[#7a1013] hover:bg-white/90 font-black h-14 px-8 rounded-xl text-xs uppercase tracking-widest shadow-xl active:scale-95">৯৯৯ এ কল দিন</Button>
                </Link>
                <Link href="/assistant">
                  <Button variant="outline" className="h-14 px-8 border-white/10 text-white hover:bg-white/5 rounded-xl font-black uppercase tracking-widest text-xs">এআই সহায়তা</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON DISASTER MANAGEMENT • SAVING LIVES THROUGH TECHNOLOGY
        </p>
      </footer>
    </div>
  );
}
