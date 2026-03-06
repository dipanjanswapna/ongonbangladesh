'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Quote, Heart, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { stories } from '@/lib/media-data';
import { Button } from '@/components/ui/button';

export default function StoriesPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <Sparkles className="h-8 w-8 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">মানবিক <span className="text-white/40 italic">গল্পসমূহ</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">ওঙ্গন বাংলাদেশের সহায়তায় যাদের জীবন বদলেছে, তাদের সফলতার কথা জানুন।</p>
        </div>

        <div className="space-y-12">
          {stories.map((story, i) => (
            <div key={story.id} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="relative h-[400px] w-full md:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5 group">
                <Image src={story.image} alt={story.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" unoptimized />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="p-4 bg-white/10 rounded-2xl w-fit text-white">
                  <Quote className="h-8 w-8 fill-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">{story.title}</h2>
                <p className="text-white/70 text-xl leading-relaxed italic font-medium">"{story.content}"</p>
                <Button className="bg-white text-[#7a1013] font-black h-14 px-10 rounded-2xl shadow-xl uppercase tracking-widest text-xs active:scale-95 transition-all">সম্পূর্ণ পড়ুন <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3rem] bg-white text-[#7a1013] text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-[100px] pointer-events-none" />
          <Heart className="h-12 w-12 mx-auto fill-[#7a1013] animate-pulse" />
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">আপনার গল্পটি আমাদের জানান</h3>
          <p className="text-[#7a1013]/60 max-w-xl mx-auto font-bold leading-relaxed italic text-lg">"আপনি যদি ওঙ্গন-এর মাধ্যমে উপকৃত হন বা কোনো বিশেষ অভিজ্ঞতা থাকে, তবে সেটি শেয়ার করে অন্যদের অনুপ্রাণিত করুন।"</p>
          <Button className="bg-[#7a1013] text-white font-black h-14 px-12 rounded-xl uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">গল্প শেয়ার করুন</Button>
        </div>
      </main>
    </div>
  );
}
