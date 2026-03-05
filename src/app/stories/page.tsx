'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Quote, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      name: "রাহিমা বেগম",
      location: "কুড়িগ্রাম",
      category: "সাফল্য",
      summary: "বন্যার পর একটি সেলাই মেশিন এবং ওঙ্গন-এর প্রশিক্ষণে এখন তিনি স্বাবলম্বী।",
      image: "https://picsum.photos/seed/story1/600/800",
      quote: "আমি ভাবিনি আবার উঠে দাঁড়াতে পারব। ওঙ্গন আমাকে নতুন করে বাঁচতে শিখিয়েছে।"
    },
    {
      id: 2,
      name: "ছোট্ট আরিয়ান",
      location: "ঢাকা",
      category: "চিকিৎসা",
      summary: "জরুরি হার্ট সার্জারির জন্য ওঙ্গন-এর মাধ্যমে সাহায্য পেয়ে এখন সে স্কুলে যাচ্ছে।",
      image: "https://picsum.photos/seed/story2/600/800",
      quote: "আপনারাই আমার ছেলের প্রাণ বাঁচিয়েছেন। আমরা আপনাদের কাছে ঋণী।"
    },
    {
      id: 3,
      name: "ম্রো গ্রামবাসী",
      location: "বান্দরবান",
      category: "শিক্ষা",
      summary: "নিজস্ব ভাষায় প্রথম বই পেয়ে শিশুদের মাঝে এখন পড়াশোনার ধুম পড়েছে।",
      image: "https://picsum.photos/seed/story3/600/800",
      quote: "এখন আমাদের শিশুরা নিজেদের ভাষায় গল্প বলতে পারে।"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <Heart className="h-8 w-8 text-primary fill-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">মানবিক <span className="text-white/40">সাফল্যের গল্প</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">আপনার অনুদান যেভাবে মানুষের জীবন বদলে দিচ্ছে।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="bg-white/5 border-white/10 rounded-xl overflow-hidden group shadow-2xl flex flex-col h-full hover:border-white/20 transition-all">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image src={story.image} alt={story.name} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7a1013] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-white text-[#7a1013] font-bold text-[10px] mb-3 uppercase tracking-widest">{story.category}</Badge>
                  <h3 className="text-2xl font-black text-white leading-none uppercase tracking-tight">{story.name}</h3>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">{story.location}</p>
                </div>
              </div>
              <CardContent className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="relative">
                  <Quote className="h-10 w-10 text-white/10 absolute -top-4 -left-4" />
                  <p className="text-lg text-white font-medium italic relative z-10 leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-white/50 leading-relaxed">{story.summary}</p>
                  <div className="h-px w-full bg-white/10" />
                  <Button variant="link" className="p-0 text-white font-black uppercase text-[10px] tracking-widest hover:gap-3 transition-all">সম্পূর্ণ গল্পটি পড়ুন <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-xl bg-white/5 border border-white/10 text-center space-y-8 shadow-2xl backdrop-blur-md">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">একটি সুন্দর আগামীর স্বপ্ন</h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">আপনার একটি অনুদান হতে পারে পরবর্তী একটি সাফল্যের গল্পের শুরু। আজই আমাদের সাথে যুক্ত হোন।</p>
          <Button className="bg-white text-[#7a1013] font-black h-16 px-12 rounded-xl text-lg uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">এখনি দান করুন</Button>
        </div>
      </main>
    </div>
  );
}
