'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { campaigns } from '@/lib/campaigns-data';

export default function CampaignsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">আমাদের ক্যাম্পেইনসমূহ</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">নির্দিষ্ট লক্ষ্য নিয়ে আমরা এই ক্যাম্পেইনগুলো পরিচালনা করছি। আপনার একটি অনুদান বদলে দিতে পারে একটি জীবন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {campaigns.map((camp) => (
            <Card key={camp.id} className="glass-card border-white/10 overflow-hidden flex flex-col group hover:scale-[1.02] transition-all duration-300">
              <div className="relative h-56 w-full">
                <Image src={camp.image} alt={camp.title} fill className="object-cover" unoptimized />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-primary font-bold">{camp.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-white/50 text-xs mb-2">
                  <Calendar className="h-3 w-3" /> {camp.date}
                </div>
                <CardTitle className="text-white text-xl line-clamp-2 leading-tight group-hover:text-primary-foreground transition-colors">{camp.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white/60 text-sm line-clamp-3">{camp.excerpt}</p>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs text-white/80">
                    <span>সংগৃহীত: ৳{camp.raised.toLocaleString()}</span>
                    <span>লক্ষ্য: ৳{camp.target.toLocaleString()}</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-1000" 
                      style={{ width: `${(camp.raised / camp.target) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 p-6">
                <Link href={`/campaigns/${camp.id}`} className="w-full">
                  <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold rounded-xl">
                    বিস্তারিত দেখুন <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
