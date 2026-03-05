'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Newspaper, Calendar, ArrowRight, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function NewsPage() {
  const newsItems = [
    { id: 1, title: "ওঙ্গন বাংলাদেশ-এর নতুন শাখা উদ্বোধন", date: "২০ মে ২০২৪", category: "সংবাদ", image: "https://picsum.photos/seed/news1/600/400", excerpt: "সিলেটের বন্যায় ক্ষতিগ্রস্তদের সহায়তায় ওঙ্গন এখন আরও সক্রিয়।" },
    { id: 2, title: "প্রেস বিজ্ঞপ্তি: বার্ষিক সাধারণ সভা ২০২৪", date: "১৫ মে ২০২৪", category: "প্রেস", image: "https://picsum.photos/seed/press1/600/400", excerpt: "আগামী মাসের ১০ তারিখ সংস্থার বার্ষিক সাধারণ সভা অনুষ্ঠিত হবে।" },
    { id: 3, title: "স্বাস্থ্যসেবা ক্যাম্পে ৫০০ পরিবারকে চিকিৎসা", date: "১০ মে ২০২৪", category: "সংবাদ", image: "https://picsum.photos/seed/news2/600/400", excerpt: "কুড়িগ্রামের প্রত্যন্ত অঞ্চলে বিনামূল্যে চিকিৎসা ও ঔষধ বিতরণ।" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <Newspaper className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">নিউজ ও <span className="text-white/40">প্রেস</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">আমাদের সাম্প্রতিক সংবাদ এবং অফিশিয়াল ঘোষণাগুলো এখানে দেখুন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <Card key={news.id} className="bg-white/5 border-white/10 rounded-xl overflow-hidden group hover:translate-y-[-4px] transition-all shadow-2xl">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-70" unoptimized />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-[#7a1013] font-bold text-[10px]">{news.category}</Badge>
                </div>
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">
                  <Calendar className="h-3 w-3" /> {news.date}
                </div>
                <CardTitle className="text-white text-xl leading-tight font-bold group-hover:text-white/80 transition-colors line-clamp-2">{news.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{news.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 border-t border-white/5 flex justify-between items-center">
                <Button variant="link" className="p-0 text-white font-black uppercase text-[10px] tracking-widest hover:gap-2 transition-all">বিস্তারিত পড়ুন <ArrowRight className="ml-2 h-4 w-4" /></Button>
                <Share2 className="h-4 w-4 text-white/20 hover:text-white cursor-pointer" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
