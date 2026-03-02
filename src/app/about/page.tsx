'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Users, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">আমাদের সম্পর্কে</h1>
            <p className="text-lg text-white/70">ONGON BANGLADESH - মানবিক সহায়তায় আমরা আপনার পাশে।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Target className="h-6 w-6 text-primary" /> আমাদের লক্ষ্য
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 leading-relaxed">
                আমাদের মূল লক্ষ্য হলো বাংলাদেশের যেকোনো প্রান্তের দুস্থ মানুষের কাছে দ্রুত এবং স্বচ্ছভাবে মানবিক সহায়তা পৌঁছে দেওয়া। এআই প্রযুক্তির মাধ্যমে আমরা সরাসরি দাতা ও সাহায্যপ্রার্থীর মাঝে সংযোগ তৈরি করি।
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Heart className="h-6 w-6 text-primary" /> আমাদের ভিশন
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 leading-relaxed">
                একটি ক্ষুধামুক্ত এবং সুস্থ বাংলাদেশ গড়ে তোলা যেখানে মানুষের বিপদে মানুষ এগিয়ে আসবে কোনো দ্বিধা ছাড়াই। আমরা একটি শক্তিশালী সামাজিক নেটওয়ার্ক তৈরি করতে চাই।
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">কেন আমরা আলাদা?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "স্বচ্ছতা", desc: "আমরা প্রতিটি লেনদেন এবং সহায়তার স্বচ্ছতা নিশ্চিত করি।" },
                { icon: Users, title: "কমিউনিটি শক্তি", desc: "হাজারো স্বেচ্ছাসেবকের এক বিশাল নেটওয়ার্ক আমাদের মূল চালিকাশক্তি।" },
                { icon: Heart, title: "সরাসরি প্রভাব", desc: "মাঝারি কোনো খরচ ছাড়াই সাহায্য সরাসরি প্রাপকের কাছে পৌঁছায়।" }
              ].map((item, i) => (
                <div key={i} className="p-6 glass-card rounded-2xl text-center space-y-3">
                  <div className="inline-flex p-3 rounded-xl bg-white/10 text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
