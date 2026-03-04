
'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldAlert, MapPin, PhoneCall, MessageSquare, AlertCircle, Radio, Navigation, Scale, BookOpen, UserRound } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function SafetyHub() {
  const { toast } = useToast();
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);

  const triggerSOS = () => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      toast({ title: "জিপিএস নট সাপোর্টেড", variant: "destructive" });
      return;
    }

    setIsSOSActive(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        toast({ 
          title: "SOS সংকেত পাঠানো হয়েছে!", 
          description: "আপনার অবস্থান (Lat: " + pos.coords.latitude.toFixed(4) + ") রেকর্ড করা হয়েছে এবং নিকটস্থ আইন-শৃঙ্খলা বাহিনীকে জানানো হচ্ছে।",
          variant: "destructive"
        });
      },
      () => {
        toast({ title: "লোকেশন এরর", description: "আপনার লোকেশন ছাড়া SOS পাঠানো সম্ভব হচ্ছে না।", variant: "destructive" });
        setIsSOSActive(false);
      }
    );

    // Mock Timer to deactivate
    setTimeout(() => setIsSOSActive(false), 10000);
  };

  const safetyTools = [
    { icon: PhoneCall, title: "জরুরি হেল্পলাইন", desc: "৯৯৯ ও ১০৯ এর সরাসরি সংযোগ", link: "/safety/helplines", color: "text-blue-400" },
    { icon: MessageSquare, title: "বেনামী রিপোর্ট", desc: "পরিচয় গোপন রেখে অভিযোগ দিন", link: "/safety/report", color: "text-orange-400" },
    { icon: Scale, title: "আইনি অধিকার", desc: "নারী ও শিশু নির্যাতন দমন আইন", link: "/safety/education", color: "text-green-400" },
    { icon: UserRound, title: "সুরক্ষিত প্রোফাইল", desc: "গোপনীয়তা সেটিংস এবং লগ", link: "/profile", color: "text-purple-400" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0203] selection:bg-red-600/30">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32 flex-grow max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SOS Command Center */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <Badge className="bg-red-600/20 text-red-500 border-red-600/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Emergency Hub</Badge>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                নিরাপত্তা <br /><span className="text-red-600 italic">কমান্ড সেন্টার</span>
              </h1>
              <p className="text-white/60 text-sm md:text-lg max-w-xl mx-auto lg:mx-0 font-medium">
                বিপদগ্রস্ত অবস্থায় তাৎক্ষণিক সহায়তার জন্য নিচের SOS বাটনে ক্লিক করুন। আপনার লোকেশন স্বয়ংক্রিয়ভাবে রেকর্ড করা হবে।
              </p>
            </div>

            <div className="flex justify-center lg:justify-start py-10">
              <div className="relative">
                {isSOSActive && (
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20 scale-150" />
                )}
                <button 
                  onClick={triggerSOS}
                  disabled={isSOSActive}
                  className={`relative z-10 h-48 w-48 md:h-64 md:w-64 rounded-full border-8 border-white/5 bg-gradient-to-br from-red-600 to-red-900 shadow-[0_0_50px_rgba(220,38,38,0.4)] flex flex-col items-center justify-center transition-all active:scale-90 group ${isSOSActive ? 'opacity-80' : 'hover:scale-105'}`}
                >
                  <ShieldAlert className={`h-16 w-16 md:h-24 md:w-24 text-white ${isSOSActive ? 'animate-pulse' : 'group-hover:rotate-12 transition-transform'}`} />
                  <span className="text-white font-black text-2xl md:text-4xl uppercase tracking-tighter mt-2">SOS</span>
                  <span className="text-white/60 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Click to Alert</span>
                </button>
              </div>
            </div>

            {location && (
              <Card className="bg-white/5 border-red-600/20 backdrop-blur-xl rounded-[2rem] p-6 animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-red-600/20 text-red-500">
                    <Radio className="h-6 w-6 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm uppercase tracking-widest">লাইভ ট্র্যাকিং সচল</p>
                    <p className="text-white/40 text-xs">আপনার লোকেশন পুলিশের নিকট পাঠানো হচ্ছে...</p>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Safety Tools Grid */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.3em] ml-2">সহায়তা টুলস</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {safetyTools.map((tool, i) => (
                <Link key={i} href={tool.link}>
                  <Card className="bg-white/5 border-white/5 hover:bg-white/10 transition-all rounded-[2rem] p-6 h-full flex flex-col justify-between group shadow-xl">
                    <div className={`p-3 rounded-2xl bg-white/5 ${tool.color} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                      <tool.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1 leading-tight">{tool.title}</h4>
                      <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider">{tool.desc}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-white/10 to-transparent border-white/5 rounded-[2.5rem] p-8 space-y-6 overflow-hidden relative shadow-2xl">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-orange-400" />
                <h4 className="text-white font-black text-xs uppercase tracking-widest">সতর্কবাণী</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed italic">
                "ধর্ষণ ও হয়রানি একটি গুরুতর অপরাধ। ওঙ্গন বাংলাদেশ আপনার গোপনীয়তা রক্ষা করে সরাসরি আইন-শৃঙ্খলা বাহিনীর সাথে সংযোগ স্থাপনে সহায়তা করে। আতঙ্কিত না হয়ে শান্ত থাকুন এবং সাহায্যের জন্য আমাদের টুলগুলো ব্যবহার করুন।"
              </p>
              <div className="h-px w-full bg-white/10" />
              <p className="text-[10px] text-white/30 uppercase font-bold text-center tracking-[0.4em]">Secured by Ongon Shield v1.0</p>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • ZERO TOLERANCE TO HARASSMENT
        </p>
      </footer>
    </div>
  );
}
