
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Scale, Video, ShieldCheck, HeartPulse, AlertCircle, PlayCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function SafetyEducation() {
  const laws = [
    { title: "ধারা ৯(১)", desc: "ধর্ষণের সর্বোচ্চ শাস্তি মৃত্যুদণ্ড বা যাবজ্জীবন কারাদণ্ড।" },
    { title: "ধারা ১০", desc: "যৌন হয়রানির জন্য কারাদণ্ড ও অর্থদণ্ডের বিধান।" },
    { title: "সুরক্ষা আইন", desc: "ভুক্তভোগীর পরিচয় প্রকাশ করা আইনত দণ্ডনীয় অপরাধ।" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0203]">
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-green-600/20 text-green-500 border-green-600/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Knowledge Base</Badge>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">সচেতনতা ও <br /><span className="text-green-500 italic">আইনি শিক্ষা</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">আপনার অধিকার সম্পর্কে জানুন এবং প্রতিকূল পরিস্থিতিতে নিজেকে রক্ষা করার কৌশল শিখুন।</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Legal Rights Section */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-blue-600/20 text-blue-400">
                  <Scale className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-widest">আইনি অধিকার ও সুরক্ষা</h2>
              </div>
              <div className="grid gap-4">
                {laws.map((law, i) => (
                  <Card key={i} className="bg-white/5 border-white/5 rounded-3xl p-6 hover:bg-white/10 transition-all border-l-4 border-l-blue-600 group">
                    <h4 className="text-white font-black text-xl mb-1 group-hover:text-blue-400 transition-colors">{law.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{law.desc}</p>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full h-14 border-white/10 text-white hover:bg-white/5 rounded-2xl font-bold flex items-center gap-3">
                <FileText className="h-5 w-5" /> পূর্ণাঙ্গ আইনি হ্যান্ডবুক ডাউনলোড করুন
              </Button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-green-600/20 text-green-400">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-widest">আত্মরক্ষা (Self-Defense) টিপস</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "সবসময় চারপাশের পরিবেশ সম্পর্কে সচেতন থাকুন (Situational Awareness)।",
                  "বিপদ বুঝলে সরাসরি চোখের দিকে তাকিয়ে দৃঢ় কণ্ঠে প্রতিবাদ করুন।",
                  "জরুরি টুলস যেমন গোল মরিচের গুঁড়া (Pepper Spray) সাথে রাখুন।",
                  "শারীরিক আক্রমণের ক্ষেত্রে শরীরের দুর্বল পয়েন্টে আঘাত করে পালানোর পথ খুঁজুন।"
                ].map((tip, i) => (
                  <div key={i} className="p-5 rounded-3xl bg-white/5 border border-white/5 flex gap-4 text-white/70 text-sm leading-relaxed italic">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Videos & Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.3em] ml-2">টিউটোরিয়াল ভিডিও</h3>
            <div className="grid gap-6">
              {[
                { title: "বেসিক আত্মরক্ষা কৌশল", time: "১২ মিনিট", views: "৫কে+", image: "https://picsum.photos/seed/safety1/400/250" },
                { title: "বিপদে শান্ত থাকার উপায়", time: "০৮ মিনিট", views: "৩কে+", image: "https://picsum.photos/seed/safety2/400/250" },
              ].map((video, i) => (
                <Card key={i} className="bg-white/5 border-white/5 rounded-3xl overflow-hidden group shadow-xl">
                  <div className="relative aspect-video">
                    <img src={video.image} alt={video.title} className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 rounded-full bg-white text-black shadow-2xl group-hover:scale-110 transition-transform">
                        <PlayCircle className="h-8 w-8 fill-black" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-[8px] font-bold rounded-md">{video.time}</div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-white font-bold text-lg leading-tight mb-1">{video.title}</h4>
                    <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">{video.views} ভিউস • ওঙ্গন একাডেমি</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-orange-600/10 border border-orange-600/20 rounded-[2.5rem] p-8 space-y-4 shadow-2xl">
              <div className="flex items-center gap-3 text-orange-400">
                <AlertCircle className="h-6 w-6" />
                <h4 className="text-sm font-black uppercase tracking-widest">ভুল ধারণা (Myth)</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed italic">
                "ধর্ষণের জন্য ভুক্তভোগীর পোশাক বা চলাফেরা দায়ী নয়। অপরাধীই ১০০% দায়ী। সামাজিকভাবে ভুক্তভোগীকে দোষারোপ করা বন্ধ করতে হবে।"
              </p>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON ACADEMY • EMPOWERING THROUGH KNOWLEDGE
        </p>
      </footer>
    </div>
  );
}
