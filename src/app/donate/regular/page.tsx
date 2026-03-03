'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Heart, Calendar, CreditCard, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function RegularDonationPage() {
  const { toast } = useToast();
  const [amount, setAmount] = useState('1000');
  const [interval, setInterval] = useState('monthly');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ 
        title: "অসংখ্য ধন্যবাদ!", 
        description: `আপনার ${interval === 'monthly' ? 'মাসিক' : 'বাৎসরিক'} ৳${amount} অনুদানের প্রতিশ্রুতি সফলভাবে গ্রহণ করা হয়েছে।`,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-white mx-auto lg:mx-0">
                <Heart className="h-6 w-6 fill-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">নিয়মিত দাতা হিসেবে <br />পাশে থাকুন</h1>
              <p className="text-lg text-white/70 leading-relaxed">
                আপনার একটি ছোট নিয়মিত অনুদান আমাদের দীর্ঘমেয়াদী পরিকল্পনাগুলো বাস্তবায়নে সাহায্য করে। প্রতিটি টাকা সরাসরি দুস্থদের সেবায় ব্যবহৃত হয়।
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Calendar, title: "স্থায়িত্ব", desc: "মাসিক ছোট অনুদান বড় পরিবর্তনের সূচনা করে।" },
                { icon: ShieldCheck, title: "স্বচ্ছতা", desc: "আপনার প্রতিটি টাকার নিয়মিত অডিট রিপোর্ট পাবেন।" },
                { icon: Sparkles, title: "ইমপ্যাক্ট", desc: "শতশত শিশুর শিক্ষা ও চিকিৎসা নিশ্চিত হয়।" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-5 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                  <div className="p-3 rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-[#7a1013] transition-all">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="glass-card border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <CardHeader className="p-8 pb-4 text-center lg:text-left">
              <CardTitle className="text-white text-2xl font-bold">অনুদান ফর্ম</CardTitle>
              <CardDescription className="text-white/40">পছন্দমতো প্যাকেজ নির্বাচন করুন</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">অনুদান ফ্রিকোয়েন্সি</Label>
                  <RadioGroup defaultValue="monthly" onValueChange={setInterval} className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                      <Label htmlFor="monthly" className="flex flex-col items-center justify-center rounded-2xl border-2 border-white/5 bg-white/5 p-4 text-white hover:bg-white/10 peer-data-[state=checked]:border-white peer-data-[state=checked]:bg-white/10 cursor-pointer transition-all">
                        <span className="text-sm font-bold">মাসিক</span>
                      </Label>
                    </div>
                    <div className="relative">
                      <RadioGroupItem value="yearly" id="yearly" className="peer sr-only" />
                      <Label htmlFor="yearly" className="flex flex-col items-center justify-center rounded-2xl border-2 border-white/5 bg-white/5 p-4 text-white hover:bg-white/10 peer-data-[state=checked]:border-white peer-data-[state=checked]:bg-white/10 cursor-pointer transition-all">
                        <span className="text-sm font-bold">বাৎসরিক</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">অংক নির্বাচন করুন (৳)</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {['500', '1000', '2000'].map((amt) => (
                      <Button 
                        key={amt}
                        type="button"
                        variant="outline"
                        className={`h-12 rounded-xl border-white/10 text-white font-bold hover:bg-white hover:text-[#7a1013] ${amount === amt ? 'bg-white text-[#7a1013] shadow-lg' : 'bg-white/5'}`}
                        onClick={() => setAmount(amt)}
                      >
                        ৳{amt}
                      </Button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 font-bold">৳</span>
                    <Input 
                      placeholder="অন্যান্য পরিমাণ" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-white/5 border-white/10 text-white pl-10 h-14 rounded-2xl focus:ring-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">আপনার তথ্য</Label>
                  <div className="grid grid-cols-1 gap-4">
                    <Input placeholder="আপনার নাম" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" required />
                    <Input type="email" placeholder="আপনার ইমেইল" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" required />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-16 bg-white text-[#7a1013] hover:bg-white/90 font-bold text-lg rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "প্রসেসিং..." : (
                    <>সাবস্ক্রাইব করুন <ArrowRight className="h-5 w-5" /></>
                  )}
                </Button>

                <p className="text-[10px] text-white/20 text-center uppercase tracking-widest font-bold">
                  SECURE RECURRING PAYMENT • SSL ENCRYPTED
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
