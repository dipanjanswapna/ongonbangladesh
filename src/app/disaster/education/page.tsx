'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  Wind, 
  Droplets, 
  Zap, 
  ShieldCheck, 
  PlayCircle, 
  FileText, 
  AlertCircle, 
  ChevronRight,
  Stethoscope,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DisasterEducation() {
  const guidelines = [
    { 
      type: "cyclone", 
      title: "ঘূর্ণিঝড় মোকাবিলায় প্রস্তুতি", 
      steps: [
        "শেল্টারের পথ আগে থেকে চিনে রাখুন।",
        "জরুরি ড্রাই ফুড ও পানি স্টক করুন।",
        "জরুরি ব্যাগে ওষুধ ও টর্চলাইট রাখুন।",
        "রেডিও বা মোবাইলে নিয়মিত খবর শুনুন।"
      ]
    },
    { 
      type: "flood", 
      title: "বন্যা থেকে জীবন রক্ষা", 
      steps: [
        "মূল্যবান জিনিসপত্র উঁচুতে সরিয়ে নিন।",
        "পানির মাধ্যমে ছড়ায় এমন রোগ থেকে বাঁচতে ফিটকিরি বা পানিশোধন বড়ি রাখুন।",
        "বিদ্যুতের মেইন সুইচ অফ রাখুন।",
        "গবাদি পশুর নিরাপদ স্থান নিশ্চিত করুন।"
      ]
    },
    { 
      type: "earthquake", 
      title: "ভূমিকম্পে করণীয়", 
      steps: [
        "শান্ত থাকুন, লিফট ব্যবহার করবেন না।",
        "টেবিল বা শক্ত আসবাবের নিচে আশ্রয় নিন।",
        "খোলা মাঠে বা বড় দালান থেকে দূরে দাঁড়ান।",
        "মেইন গ্যাস ও পাওয়ার লাইন বন্ধ করুন।"
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-orange-500/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-4 shadow-2xl">
            <BookOpen className="h-8 w-8 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
            দুর্যোগ <br /><span className="text-white/40 italic">সচেতনতা কেন্দ্র</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            প্রস্তুতি জীবন বাঁচায়। দুর্যোগের আগে, চলাকালীন ও পরে করণীয় বিষয়গুলো জেনে নিজেকে ও পরিবারকে নিরাপদ রাখুন।
          </p>
        </div>

        <Tabs defaultValue="guidelines" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/5 p-1 rounded-xl h-auto border border-white/10 backdrop-blur-md">
              <TabsTrigger value="guidelines" className="rounded-lg px-8 py-3 data-[state=active]:bg-white data-[state=active]:text-[#7a1013] font-black text-[10px] md:text-xs text-white uppercase tracking-widest">গাইডলাইন</TabsTrigger>
              <TabsTrigger value="vulnerable" className="rounded-lg px-8 py-3 data-[state=active]:bg-white data-[state=active]:text-[#7a1013] font-black text-[10px] md:text-xs text-white uppercase tracking-widest">শিশু ও বৃদ্ধদের সুরক্ষা</TabsTrigger>
              <TabsTrigger value="firstaid" className="rounded-lg px-8 py-3 data-[state=active]:bg-white data-[state=active]:text-[#7a1013] font-black text-[10px] md:text-xs text-white uppercase tracking-widest">ফার্স্ট এইড</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="guidelines" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guidelines.map((guide, i) => (
                <Card key={i} className="bg-white/5 border-white/5 rounded-xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-white/10 transition-all" />
                  <div className="relative z-10 space-y-6">
                    <div className="p-4 rounded-xl bg-white/5 text-orange-500 w-fit shadow-xl group-hover:scale-110 transition-transform">
                      {guide.type === 'cyclone' ? <Wind className="h-8 w-8" /> : guide.type === 'flood' ? <Droplets className="h-8 w-8" /> : <Zap className="h-8 w-8" />}
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight leading-none">{guide.title}</h3>
                    <ul className="space-y-3">
                      {guide.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-3 text-xs text-white/60 leading-relaxed font-medium">
                          <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vulnerable" className="max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/5 rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 rounded-xl bg-white/5 text-pink-400 shadow-xl"><Users className="h-6 w-6" /></div>
                    <h3 className="text-xl font-black uppercase tracking-widest">শিশুদের জন্য টিপস</h3>
                  </div>
                  <ul className="space-y-4 text-white/60 text-sm font-medium">
                    <li className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-green-500 shrink-0" /> শিশুর পকেটে সর্বদা বাবা-মায়ের নাম ও ফোন নম্বর সংবলিত চিরকুট রাখুন।</li>
                    <li className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-green-500 shrink-0" /> শিশুকে শান্ত রাখার জন্য তার প্রিয় ছোট খেলনা সাথে রাখুন।</li>
                    <li className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-green-500 shrink-0" /> উঁচু স্থানে শিশুকে ধরে রাখার জন্য লাইফ জ্যাকেট ব্যবহার নিশ্চিত করুন।</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 rounded-xl bg-white/5 text-blue-400 shadow-xl"><Users className="h-6 w-6" /></div>
                    <h3 className="text-xl font-black uppercase tracking-widest">বৃদ্ধদের সুরক্ষা</h3>
                  </div>
                  <ul className="space-y-4 text-white/60 text-sm font-medium">
                    <li className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-blue-400 shrink-0" /> বয়স্কদের নিয়মিত ওষুধগুলো ওয়াটারপ্রুফ ব্যাগে রাখুন।</li>
                    <li className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-blue-400 shrink-0" /> তাদের হাঁটার লাঠি বা প্রয়োজনীয় ডিভাইস সাথে নিতে ভুলবেন না।</li>
                    <li className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-blue-400 shrink-0" /> শেল্টারের আরামদায়ক ও আলোযুক্ত স্থানে তাদের বসার ব্যবস্থা করুন।</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="firstaid" className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "কাটা ও ক্ষত", desc: "পরিষ্কার পানি ও ডেটল দিয়ে ক্ষত স্থান ধুয়ে পরিষ্কার কাপড় দিয়ে বেঁধে রাখুন।" },
                { title: "শ্বাসকষ্ট", desc: "রোগীকে সোজা হয়ে বসিয়ে খোলা বাতাসে রাখুন। জরুরি ইনহেলার সাথে রাখুন।" },
                { title: "ডায়রিয়া", desc: "প্রচুর স্যালাইন ও নিরাপদ পানি পান করান। জিংক ট্যাবলেট সাথে রাখুন।" },
                { title: "পুড়ে যাওয়া", desc: "প্রচুর ঠাণ্ডা পানি ঢালুন। টুথপেস্ট বা ডিম না দিয়ে স্যাভলন বা পরিষ্কার পানি ব্যবহার করুন।" },
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/5 rounded-xl p-6 flex gap-4 hover:bg-white/10 transition-all shadow-xl group">
                  <div className="p-3 rounded-xl bg-white/5 text-red-500 h-fit group-hover:scale-110 transition-transform shadow-xl"><Stethoscope className="h-6 w-6" /></div>
                  <div className="space-y-1">
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-20 p-10 rounded-xl bg-white/5 border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl font-black text-white uppercase tracking-widest">ভিডিও টিউটোরিয়াল প্রয়োজন?</h3>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed italic text-lg">
            "ওঙ্গন একাডেমিতে আমাদের ভিডিও গাইডলাইনগুলো দেখে আপনি আরও বিস্তারিত প্রস্তুতি নিতে পারেন। আমরা আপনার সুরক্ষায় সর্বদা সচেষ্ট।"
          </p>
          <Link href="/safety/education">
            <Button className="bg-white text-[#7a1013] font-black h-12 px-8 rounded-xl uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl">
              একাডেমি ভিজিট করুন <PlayCircle className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON DISASTER ACADEMY • EMPOWERING COMMUNITIES
        </p>
      </footer>
    </div>
  );
}
