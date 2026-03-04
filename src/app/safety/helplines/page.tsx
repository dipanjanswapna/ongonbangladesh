
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PhoneCall, ShieldCheck, HeartPulse, Scale, MessageSquare, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function SafetyHelplines() {
  const helplines = [
    { number: "999", title: "জাতীয় জরুরি সেবা", desc: "পুলিশ, অ্যাম্বুলেন্স ও ফায়ার সার্ভিস", color: "bg-red-600" },
    { number: "109", title: "নারী ও শিশু নির্যাতন প্রতিরোধ", desc: "জাতীয় হেল্পলাইন (২৪/৭ খোলা)", color: "bg-pink-600" },
    { number: "10921", title: "আইনগত সহায়তা", desc: "বিনামূল্যে আইনি পরামর্শ ও সহায়তা", color: "bg-blue-600" },
    { number: "106", title: "দুর্নীতি দমন কমিশন", desc: "যেকোনো অনিয়ম বা হয়রানির রিপোর্ট", color: "bg-green-600" },
  ];

  const ngoCenters = [
    { name: "ব্র্যাক সামাজিক সুরক্ষা", location: "ঢাকা হেড অফিস", type: "আইনি ও মানসিক সহায়তা" },
    { name: "আইন ও সালিশ কেন্দ্র (ASK)", location: "লালমাটিয়া, ঢাকা", type: "আইনি সহায়তা" },
    { name: "বাংলাদেশ মহিলা পরিষদ", location: "সেগুনবাগিচা, ঢাকা", type: "নারী অধিকার ও আশ্রয়" },
    { name: "ওঙ্গন সাপোর্ট সেন্টার", location: "ধানমণ্ডি (অনলাইন)", type: "প্রাথমিক তথ্য ও SOS" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0203]">
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">জরুরি <span className="text-red-600">হেল্পলাইনসমূহ</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">নিচের নম্বরগুলো আপনার ডায়ালে সেভ করে রাখুন। বিপদে এক কলেই সাহায্য পাবেন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {helplines.map((help, i) => (
            <Card key={i} className="bg-white/5 border-white/5 rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <CardContent className="p-8 flex items-center justify-between gap-6">
                <div className="space-y-2 flex-grow">
                  <div className={`px-3 py-1 ${help.color} text-white text-[10px] font-black rounded-full w-fit uppercase tracking-widest mb-2`}>Emergency</div>
                  <h3 className="text-white font-black text-2xl uppercase tracking-tighter">{help.title}</h3>
                  <p className="text-white/40 text-xs font-bold leading-relaxed">{help.desc}</p>
                </div>
                <Link href={`tel:${help.number}`}>
                  <Button className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white text-black hover:bg-white/90 shadow-xl flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneCall className="h-6 w-6 md:h-8 md:w-8 mb-1" />
                    <span className="text-sm md:text-xl font-black">{help.number}</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="h-10 w-1 bg-red-600 rounded-full" />
            <h2 className="text-2xl font-black text-white uppercase tracking-widest">সহায়তা প্রদানকারী এনজিও ও সংস্থা</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ngoCenters.map((ngo, i) => (
              <Card key={i} className="bg-white/5 border-white/5 rounded-3xl p-6 hover:bg-white/10 transition-all flex items-start gap-4 shadow-xl">
                <div className="p-3 rounded-2xl bg-white/5 text-white">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-lg leading-tight">{ngo.name}</h4>
                  <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin className="h-3 w-3" /> {ngo.location}
                  </div>
                  <Badge variant="outline" className="text-[10px] border-white/10 text-white/60 mt-2">{ngo.type}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-red-600/10 to-transparent border border-red-600/20 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <h3 className="text-2xl font-black text-white uppercase tracking-widest">আপনি কি একা নন?</h3>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed italic">
            "ওঙ্গন বাংলাদেশ আপনার সাহসিকতাকে সমর্থন করে। আমরা আপনাকে আইনি লড়াই থেকে শুরু করে মানসিক কাউন্সিলিং—সবক্ষেত্রেই পাশে থাকব। ভয় পাবেন না, আমরা আছি আপনার সাথে।"
          </p>
          <Button variant="link" className="text-white font-black uppercase tracking-widest text-xs hover:gap-3 transition-all">
            সরাসরি আমাদের সাথে কথা বলুন <MessageSquare className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
}
