'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Users, ShieldCheck, User, Quote } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">আমাদের সম্পর্কে</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              ONGON BANGLADESH - মানবিক সহায়তায় আমরা আপনার পাশে। আমরা হৃদয়ের সাথে হৃদয়ের সেতুবন্ধন তৈরি করি।
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card border-white/10 rounded-[2.5rem] p-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-3 rounded-2xl bg-primary/20">
                    <Target className="h-6 w-6 text-primary" />
                  </div> 
                  আমাদের লক্ষ্য
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 leading-relaxed text-lg">
                আমাদের মূল লক্ষ্য হলো বাংলাদেশের যেকোনো প্রান্তের দুস্থ মানুষের কাছে দ্রুত এবং স্বচ্ছভাবে মানবিক সহায়তা পৌঁছে দেওয়া। এআই প্রযুক্তির মাধ্যমে আমরা সরাসরি দাতা ও সাহায্যপ্রার্থীর মাঝে সংযোগ তৈরি করি।
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 rounded-[2.5rem] p-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-3 rounded-2xl bg-primary/20">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  আমাদের ভিশন
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 leading-relaxed text-lg">
                একটি ক্ষুধামুক্ত এবং সুস্থ বাংলাদেশ গড়ে তোলা যেখানে মানুষের বিপদে মানুষ এগিয়ে আসবে কোনো দ্বিধা ছাড়াই। আমরা একটি শক্তিশালী সামাজিক নেটওয়ার্ক তৈরি করতে চাই যা প্রজন্ম থেকে প্রজন্মান্তরে টিকে থাকবে।
              </CardContent>
            </Card>
          </div>

          {/* Key Values */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-white text-center">কেন আমরা আলাদা?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "স্বচ্ছতা", desc: "আমরা প্রতিটি লেনদেন এবং সহায়তার স্বচ্ছতা নিশ্চিত করি।" },
                { icon: Users, title: "কমিউনিটি শক্তি", desc: "হাজারো স্বেচ্ছাসেবকের এক বিশাল নেটওয়ার্ক আমাদের মূল চালিকাশক্তি।" },
                { icon: Heart, title: "সরাসরি প্রভাব", desc: "মাঝারি কোনো খরচ ছাড়াই সাহায্য সরাসরি প্রাপকের কাছে পৌঁছায়।" }
              ].map((item, i) => (
                <div key={i} className="p-8 glass-card rounded-[2rem] text-center space-y-4 hover:bg-white/10 transition-all border-white/5">
                  <div className="inline-flex p-4 rounded-2xl bg-white/5 text-white shadow-xl">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section (Founder Message) - Moved to bottom */}
          <div className="relative p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="relative h-48 w-48 rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <Image 
                    src="https://picsum.photos/seed/founder/400/400" 
                    alt="DIPANJAN SWAPNA PRANGON" 
                    fill 
                    className="object-cover"
                    unoptimized 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight uppercase">দীপাঞ্জন স্বপ্ন প্রাঙ্গণ</h3>
                  <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">প্রতিষ্ঠাতা, ওঙ্গন বাংলাদেশ</p>
                </div>
              </div>
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex p-3 rounded-2xl bg-primary/20 text-white mb-2">
                  <Quote className="h-6 w-6 text-primary fill-primary" />
                </div>
                <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed">
                  "আমাদের লক্ষ্য শুধু সাহায্য করা নয়, বরং এমন একটি সমাজ তৈরি করা যেখানে কেউ নিজেকে অসহায় মনে করবে না। প্রযুক্তির সঠিক ব্যবহার করে আমরা প্রতিটি মানুষের দুয়ারে মানবিকতা পৌঁছে দিতে চাই।"
                </p>
                <div className="h-px w-24 bg-white/20" />
                <p className="text-sm text-white/50 font-bold uppercase tracking-widest">— ফাউন্ডার মেসেজ</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • LEAD BY DIPANJAN SWAPNA PRANGON
        </p>
      </footer>
    </div>
  );
}
