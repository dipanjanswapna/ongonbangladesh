'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Calendar, Heart, Share2, ShieldCheck, CreditCard } from 'lucide-react';
import Image from 'next/image';
import { campaigns } from '@/lib/campaigns-data';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function CampaignDetailsPage() {
  const params = useParams();
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  
  const campaign = campaigns.find(c => c.id === params.id);

  if (!campaign) return <div className="min-h-screen bg-background flex items-center justify-center text-white">ক্যাম্পেইন পাওয়া যায়নি</div>;

  const progress = (campaign.raised / campaign.target) * 100;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount))) {
      toast({ title: "সঠিক অংক লিখুন", variant: "destructive" });
      return;
    }
    toast({ 
      title: "ধন্যবাদ!", 
      description: `আপনার ৳${amount} অনুদানের প্রতিশ্রুতি গ্রহণ করা হয়েছে। পেমেন্ট সম্পন্ন করতে পরবর্তী ধাপে যান।` 
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background pb-20">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image src={campaign.image} alt={campaign.title} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 text-white/80">
                  <Calendar className="h-4 w-4" /> {campaign.date}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{campaign.title}</h1>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-2xl">
                  <Share2 className="h-4 w-4 mr-2" /> শেয়ার করুন
                </Button>
                <div className="flex items-center gap-2 text-green-400 bg-green-500/10 px-4 py-2 rounded-2xl border border-green-500/20 text-xs font-bold">
                  <ShieldCheck className="h-4 w-4" /> ভেরিফাইড ক্যাম্পেইন
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/90 leading-relaxed font-medium">
                  {campaign.description}
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  আপনার ক্ষুদ্র দান হতে পারে বড় কোনো পরিবর্তনের সূচনা। ওঙ্গন সবসময় আর্তমানবতার সেবায় আপনার পাশেই থাকবে। আমাদের স্বচ্ছতা ও সততা আমাদের মূল শক্তি।
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Donation Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="glass-card border-white/10 sticky top-28">
              <CardHeader>
                <CardTitle className="text-white text-xl font-bold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary fill-primary" /> অনুদান দিন
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">সংগৃহীত: ৳{campaign.raised.toLocaleString()}</span>
                    <span className="text-white font-bold">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-white/10" />
                  <p className="text-xs text-center text-white/40">লক্ষ্যমাত্রা: ৳{campaign.target.toLocaleString()}</p>
                </div>

                <form onSubmit={handleDonate} className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[500, 1000, 2000].map((amt) => (
                      <Button 
                        key={amt}
                        type="button"
                        variant="outline"
                        className={`border-white/20 text-white h-12 rounded-xl hover:bg-white hover:text-primary font-bold ${amount === amt.toString() ? 'bg-white text-primary' : ''}`}
                        onClick={() => setAmount(amt.toString())}
                      >
                        ৳{amt}
                      </Button>
                    ))}
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-bold">৳</span>
                    <Input 
                      placeholder="অন্যান্য পরিমাণ" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-8 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl"
                    />
                  </div>

                  <Button className="w-full h-14 bg-white text-primary hover:bg-white/90 font-bold text-lg rounded-xl shadow-xl">
                    এখনি দান করুন
                  </Button>
                </form>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-white/60 text-xs">
                    <CreditCard className="h-4 w-4" />
                    <span>সুরক্ষিত পেমেন্ট গেটওয়ে (বিকাশ, নগদ, কার্ড)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
