
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Heart, CreditCard, ShieldCheck, Smartphone, Building2 } from 'lucide-react';
import Image from 'next/image';
import { funds } from '@/lib/funds-data';
import { useToast } from '@/hooks/use-toast';

export default function FundDonationPage() {
  const params = useParams();
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const fund = funds.find(f => f.id === params.id);

  if (!fund) return <div className="min-h-screen bg-background flex items-center justify-center text-white">তহবিল পাওয়া যায়নি</div>;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount))) {
      toast({ title: "সঠিক অংক লিখুন", variant: "destructive" });
      return;
    }
    toast({ 
      title: "ধন্যবাদ!", 
      description: `আপনার ৳${amount} অনুদানের প্রতিশ্রুতি সফলভাবে গ্রহণ করা হয়েছে।` 
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background pb-20">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image src={fund.image} alt={fund.title} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{fund.title}</h1>
              </div>
            </div>

            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/90 leading-relaxed">
                  {fund.description}
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  আপনার ক্ষুদ্র দান হতে পারে কোনো পরিবারের মুখে হাসির কারণ। ওঙ্গন সবসময় আর্তমানবতার সেবায় আপনার পাশেই থাকবে। আমাদের স্বচ্ছতা ও সততা আমাদের মূল শক্তি। আপনার যাকাত বা সাধারণ অনুদান সরাসরি দুস্থদের কাছে পৌঁছে দিতে আমরা নিরলস কাজ করছি।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">১০০% স্বচ্ছতা</p>
                    <p className="text-white/40 text-[10px]">প্রতিটি টাকার হিসাব রাখা হয়</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/20 text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">সরাসরি প্রভাব</p>
                    <p className="text-white/40 text-[10px]">মাঠ পর্যায়ে সরাসরি বিতরণ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Card className="glass-card border-white/10 sticky top-28">
              <CardHeader>
                <CardTitle className="text-white text-xl font-bold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary fill-primary" /> এখনই দান করুন
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleDonate} className="space-y-6">
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
                    নিশ্চিত করুন
                  </Button>
                </form>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <h4 className="text-white font-bold text-sm mb-4">পেমেন্ট মেথডসমূহ:</h4>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <Smartphone className="h-5 w-5 text-pink-500" />
                      <div>
                        <p className="text-white font-bold text-xs">Mobile Banking</p>
                        <p className="text-white/40 text-[10px]">bkash, Nagad, Rocket</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <Building2 className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="text-white font-bold text-xs">Bank Transfer</p>
                        <p className="text-white/40 text-[10px]">Any Local Bank Card/Account</p>
                      </div>
                    </div>
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
