
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  Scale, 
  ShieldCheck, 
  PlayCircle, 
  FileText, 
  AlertCircle, 
  ChevronRight,
  Gavel,
  Video
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function SafetyEducation() {
  const laws = [
    { 
      title: "নারী ও শিশু নির্যাতন দমন আইন, ২০০০ (ধারা ৯)", 
      desc: "ধর্ষণের অপরাধের জন্য মৃত্যুদণ্ড বা যাবজ্জীবন সশ্রম কারাদণ্ড এবং অর্থদণ্ডের বিধান রয়েছে।",
      category: "গুরুতর অপরাধ"
    },
    { 
      title: "যৌন হয়রানি ও শ্লীলতাহানি (ধারা ১০)", 
      desc: "কোনো নারী বা শিশুকে যৌন হয়রানি করার অপরাধে অনধিক ১০ বছর এবং সর্বনিম্ন ৩ বছর সশ্রম কারাদণ্ডের বিধান রয়েছে।",
      category: "হয়রানি"
    },
    { 
      title: "ডিজিটাল নিরাপত্তা আইন (সাইবার বুলিং)", 
      desc: "অনলাইনে কোনো আপত্তিকর ছবি বা তথ্য ছড়ানো এবং মানহানিকর বক্তব্যের বিরুদ্ধে কঠোর আইনি ব্যবস্থার সুযোগ রয়েছে।",
      category: "সাইবার সুরক্ষা"
    },
    { 
      title: "ভুক্তভোগীর গোপনীয়তা রক্ষা", 
      desc: "আইন অনুযায়ী ভুক্তভোগীর পরিচয় বা ছবি গণমাধ্যমে প্রকাশ করা দণ্ডনীয় অপরাধ। এটি আপনার আইনি অধিকার।",
      category: "অধিকার"
    },
  ];

  const selfDefenseTips = [
    { title: "সিচুয়েশনাল অ্যাওয়ারনেস", desc: "আপনার চারপাশের পরিবেশ এবং মানুষ সম্পর্কে সর্বদা সজাগ থাকুন। কোনো অস্বাভাবিকতা দেখলে দ্রুত স্থান ত্যাগ করুন।" },
    { title: "ভয়েস কমান্ড ব্যবহার", desc: "বিপদে পড়লে উচ্চৈঃস্বরে এবং দৃঢ়ভাবে কথা বলুন। এতে আক্রমণকারী ঘাবড়ে যায় এবং মানুষের মনোযোগ আকর্ষণ করা সহজ হয়।" },
    { title: "দুর্বল পয়েন্টে আঘাত", desc: "শারীরিক আক্রমণ হলে আক্রমণকারীর চোখ, নাক বা গলায় আঘাত করে নিজেকে ছাড়িয়ে নেওয়ার চেষ্টা করুন।" },
    { title: "জরুরি সরঞ্জাম", desc: "গোলমরিচের গুঁড়া (Pepper Spray) বা একটি জোরালো হুইসেল আপনার ব্যাগে রাখা একটি ভালো অভ্যাস।" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-4 shadow-2xl">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
            সচেতনতা ও <br /><span className="text-white/40 italic">আইনি শিক্ষা</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
            আইন জানুন, সচেতন হোন। আপনার অধিকার এবং আত্মরক্ষার কৌশল আপনাকে বিপদে সাহসী হতে সাহায্য করবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Legal Rights Section */}
          <div className="lg:col-span-7 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/10 text-white border border-white/10">
                  <Gavel className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-widest">আইনি অধিকার ও সুরক্ষা</h2>
              </div>
              
              <div className="grid gap-4">
                {laws.map((law, i) => (
                  <Card key={i} className="bg-white/5 border-white/5 rounded-xl p-6 hover:bg-white/10 transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12" />
                    <div className="relative z-10">
                      <Badge variant="outline" className="mb-2 border-white/20 text-white/40 text-[8px] font-black uppercase tracking-widest">{law.category}</Badge>
                      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">{law.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed font-medium italic">"{law.desc}"</p>
                    </div>
                  </Card>
                ))}
              </div>
              
              <Button className="w-full h-16 bg-white text-[#7a1013] hover:bg-white/90 rounded-xl font-black shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs transition-all active:scale-95">
                <FileText className="h-5 w-5" /> আইনি সহায়িকা (PDF) ডাউনলোড করুন
              </Button>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/10 text-white border border-white/10">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-widest">আত্মরক্ষা (Self-Defense) টিপস</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selfDefenseTips.map((tip, i) => (
                  <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5 flex gap-4 text-white/70 text-sm leading-relaxed group hover:bg-white/10 transition-all">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.6)] group-hover:scale-125 transition-transform" />
                    <div>
                      <h5 className="font-bold text-white mb-1">{tip.title}</h5>
                      <p className="text-xs text-white/50">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Education Videos & Sidebar */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-6 ml-2 flex items-center gap-2">
                <Video className="h-4 w-4" /> টিউটোরিয়াল ভিডিও
              </h3>
              <div className="grid gap-6">
                {[
                  { title: "বেসিক আত্মরক্ষা কৌশল (পার্ট ১)", time: "১২:৪০", views: "৫কে+", image: "https://picsum.photos/seed/safe1/400/250" },
                  { title: "বিপদে শান্ত থাকার ৩টি উপায়", time: "০৮:১৫", views: "৩কে+", image: "https://picsum.photos/seed/safe2/400/250" },
                  { title: "আইনি লড়াইয়ের প্রাথমিক ধাপসমূহ", time: "১৫:২০", views: "২কে+", image: "https://picsum.photos/seed/safe3/400/250" },
                ].map((video, i) => (
                  <Card key={i} className="bg-white/5 border-white/5 rounded-xl overflow-hidden group shadow-2xl transition-all hover:translate-y-[-4px]">
                    <div className="relative aspect-video">
                      <img src={video.image} alt={video.title} className="object-cover w-full h-full opacity-60 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-4 rounded-full bg-white text-[#7a1013] shadow-2xl group-hover:scale-110 transition-transform">
                          <PlayCircle className="h-8 w-8 fill-[#7a1013]" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-[8px] font-bold rounded-md border border-white/10">{video.time}</div>
                    </div>
                    <CardContent className="p-5">
                      <h4 className="text-white font-bold text-base leading-tight mb-1">{video.title}</h4>
                      <p className="text-white/30 text-[9px] uppercase font-black tracking-widest">{video.views} ভিউস • ওঙ্গন একাডেমি</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 text-orange-400">
                <AlertCircle className="h-6 w-6" />
                <h4 className="text-sm font-black uppercase tracking-widest">ভুল ধারণা ও গুজব</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed italic font-medium">
                "অপরাধের জন্য কখনোই ভুক্তভোগীর পোশাক বা সময় দায়ী নয়। দোষ সর্বদা অপরাধীর। সমাজকে বদলানোর শুরু হোক নিজের পরিবার থেকে।"
              </p>
              <Link href="/blog" className="block">
                <Button variant="link" className="p-0 text-white font-bold text-xs uppercase tracking-widest hover:gap-2 transition-all">
                  কমিউনিটি ব্লগে অভিজ্ঞতা পড়ুন <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON ACADEMY • EMPOWERING THROUGH KNOWLEDGE • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
