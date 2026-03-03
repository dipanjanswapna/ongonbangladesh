'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const leadershipMessages = [
  {
    slug: "chairman",
    role: "চেয়ারম্যান",
    name: "দীপাঞ্জন স্বপ্ন প্রাঙ্গণ",
    image: "https://picsum.photos/seed/chairman/400/400",
    message: "আমাদের লক্ষ্য শুধু সাহায্য করা নয়, বরং এমন একটি সমাজ তৈরি করা যেখানে কেউ নিজেকে অসহায় মনে করবে না। প্রযুক্তির সঠিক ব্যবহার করে আমরা প্রতিটি মানুষের দুয়ারে মানবিকতা পৌঁছে দিতে চাই। ওঙ্গন বাংলাদেশ সবসময় আপনার পাশে থাকবে।",
    hint: "chairman portrait"
  },
  {
    slug: "vice-chairman",
    role: "ভাইস চেয়ারম্যান",
    name: "মোঃ আরিফুর রহমান",
    image: "https://picsum.photos/seed/vice/400/400",
    message: "স্বচ্ছতা এবং সততা আমাদের কাজের মূল ভিত্তি। আমরা বিশ্বাস করি ছোট ছোট পদক্ষেপই একদিন বড় পরিবর্তনের সূচনা করবে। আপনাদের সহযোগিতা আমাদের এই যাত্রাকে আরও শক্তিশালী করবে।",
    hint: "vice chairman portrait"
  },
  {
    slug: "secretary-general",
    role: "সেক্রেটারি জেনারেল",
    name: "সাদিয়া ইসলাম",
    image: "https://picsum.photos/seed/secretary/400/400",
    message: "আমাদের স্বেচ্ছাসেবক এবং দাতা সদস্যদের অক্লান্ত পরিশ্রমই আমাদের প্রাণশক্তি। আমরা প্রতিটি অনুদানের সঠিক ব্যবহার নিশ্চিত করি এবং সরাসরি মাঠ পর্যায়ে কাজ করতে পছন্দ করি।",
    hint: "secretary general portrait"
  }
];

export default function LeadershipMessagesPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">নেতৃত্বের বাণী</h1>
          <p className="text-white/60 text-lg">আমাদের পথপ্রদর্শক ও পরিচালনা পর্ষদের বার্তা</p>
        </div>

        <div className="space-y-12">
          {leadershipMessages.map((leader, i) => (
            <Card key={i} className="bg-white/5 border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl group">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
                    <div className="relative h-56 w-56 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                      <Image 
                        src={leader.image} 
                        alt={leader.name} 
                        fill 
                        className="object-cover"
                        data-ai-hint={leader.hint}
                        unoptimized 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white tracking-tight uppercase">{leader.name}</h3>
                      <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{leader.role}, ওঙ্গন বাংলাদেশ</p>
                    </div>
                  </div>
                  <div className="md:col-span-8 space-y-6">
                    <div className="inline-flex p-3 rounded-xl bg-white/10 text-white mb-2">
                      <Quote className="h-8 w-8 text-white fill-white" />
                    </div>
                    <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed line-clamp-4">
                      "{leader.message}"
                    </p>
                    <div className="h-px w-24 bg-white/20" />
                    <Link href={`/leadership/messages/${leader.slug}`}>
                      <Button variant="link" className="p-0 text-white font-black uppercase tracking-widest text-xs hover:gap-3 transition-all">
                        সম্পূর্ণ বাণী পড়ুন <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • LEADERSHIP & GUIDANCE
        </p>
      </footer>
    </div>
  );
}
