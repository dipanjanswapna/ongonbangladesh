
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Newspaper, Megaphone } from 'lucide-react';
import Image from 'next/image';
import { newsItems } from '@/lib/media-data';

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <Newspaper className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">নিউজ ও <span className="text-white/40">প্রেস</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">ওঙ্গন বাংলাদেশের সকল সাম্প্রতিক খবর এবং অফিশিয়াল ঘোষণাসমূহ এখানে পাবেন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="bg-white/5 border-white/5 overflow-hidden flex flex-col group hover:translate-y-[-8px] transition-all duration-500 shadow-2xl rounded-xl">
              <div className="relative h-56 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" unoptimized />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-[#7a1013] font-black uppercase text-[8px] tracking-widest border-0 shadow-xl">
                    {item.category === 'প্রেস' ? <Megaphone className="h-2 w-2 mr-1 inline" /> : null}
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center gap-2 text-[9px] text-white/30 uppercase font-black tracking-widest mb-3">
                  <Calendar className="h-3 w-3" /> {item.date}
                </div>
                <CardTitle className="text-white text-xl leading-tight font-bold group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3 italic">
                  "{item.excerpt}"
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 border-t border-white/5 bg-white/5">
                <Button variant="link" className="p-0 text-white font-black uppercase text-[10px] tracking-widest">
                  বিস্তারিত পড়ুন <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
