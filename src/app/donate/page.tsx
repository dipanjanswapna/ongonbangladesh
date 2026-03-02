
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, HandCoins, GraduationCap, Stethoscope, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { funds } from '@/lib/funds-data';
import { campaigns } from '@/lib/campaigns-data';

const fundIcons: Record<string, any> = {
  Heart,
  HandCoins,
  GraduationCap,
  Stethoscope,
};

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">অনুদান কেন্দ্র</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            আপনার দান একটি সুন্দর পরিবর্তন আনতে পারে। নিচের যেকোনো তহবিল বা চলমান ক্যাম্পেইনে সরাসরি অনুদান প্রদান করুন।
          </p>
        </div>

        {/* General Funds Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-white rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">সাধারণ অনুদান তহবিলসমূহ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funds.map((fund) => {
              const Icon = fundIcons[fund.icon] || Heart;
              return (
                <Card key={fund.id} className="glass-card border-white/10 overflow-hidden flex flex-col group hover:scale-[1.02] transition-all">
                  <div className="relative h-32 w-full">
                    <Image src={fund.image} alt={fund.title} fill className="object-cover opacity-40 group-hover:opacity-60 transition-opacity" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`p-2 rounded-lg ${fund.color} text-white shadow-lg`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pt-2">
                    <CardTitle className="text-white text-lg font-bold">{fund.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-white/60 text-xs leading-relaxed">{fund.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link href={`/donate/${fund.id}`} className="w-full">
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-primary font-bold rounded-xl h-10 text-xs">
                        অনুদান দিন
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Active Campaigns Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-white rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">চলমান ক্যাম্পেইনসমূহ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((camp) => (
              <Card key={camp.id} className="glass-card border-white/10 overflow-hidden flex flex-col group">
                <div className="relative h-48 w-full">
                  <Image src={camp.image} alt={camp.title} fill className="object-cover" unoptimized />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-primary font-bold">{camp.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-xl font-bold line-clamp-1">{camp.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-white/60 text-sm line-clamp-2 mb-6">{camp.excerpt}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/80 font-bold">
                      <span>সংগৃহীত: ৳{camp.raised.toLocaleString()}</span>
                      <span>{Math.round((camp.raised / camp.target) * 100)}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white transition-all duration-1000" style={{ width: `${(camp.raised / camp.target) * 100}%` }} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 p-6">
                  <Link href={`/campaigns/${camp.id}`} className="w-full">
                    <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold rounded-xl h-12">
                      বিস্তারিত ও অনুদান <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Trust Badge Section */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-md">
          <ShieldCheck className="h-12 w-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">আপনার অনুদান আমাদের কাছে আমানত</h3>
          <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
            ওঙ্গন বাংলাদেশ প্রতিটি অনুদানের শতভাগ স্বচ্ছতা নিশ্চিত করে। আমরা সরাসরি মাঠ পর্যায়ে গিয়ে সাহায্য পৌঁছে দিই এবং নিয়মিত অডিট রিপোর্ট প্রকাশ করি।
          </p>
        </div>
      </main>
    </div>
  );
}
