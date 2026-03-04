'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShieldAlert, UserRound, Send, CheckCircle2, Lock, Camera, MapPin, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function AnonymousReport() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({ 
        title: "রিপোর্ট জমা হয়েছে", 
        description: "আপনার তথ্য সম্পূর্ণ বেনামে গ্রহণ করা হয়েছে এবং সংশ্লিষ্ট কর্তৃপক্ষকে জানানো হচ্ছে।" 
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0f0203]">
        <Navbar />
        <main className="container mx-auto px-4 py-32 flex-grow flex items-center justify-center">
          <Card className="max-w-xl w-full bg-white/5 border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 text-center space-y-8 shadow-2xl">
            <div className="p-8 rounded-full bg-green-500/20 text-green-500 inline-block">
              <CheckCircle2 className="h-16 w-16" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-tight">রিপোর্ট সফলভাবে গৃহীত!</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                আপনার সাহসিকতাকে আমরা সম্মান জানাই। আপনার পরিচয় আমরা কখনোই ফাঁস করব না। ওঙ্গন আপনার পাশে আছে।
              </p>
            </div>
            <Link href="/safety" className="inline-block pt-4">
              <Button className="bg-white text-[#7a1013] font-black h-14 px-10 rounded-2xl shadow-xl uppercase tracking-widest">ফিরে যান</Button>
            </Link>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0203]">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-white/5 border-white/10 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <CardHeader className="px-0 pt-0 mb-8 relative z-10 text-center space-y-4">
            <div className="inline-flex p-4 rounded-3xl bg-white/10 text-white mb-2 shadow-xl border border-white/10">
              <UserRound className="h-8 w-8" />
            </div>
            <CardTitle className="text-3xl font-black text-white uppercase tracking-tighter">বেনামী হয়রানি রিপোর্ট</CardTitle>
            <CardDescription className="text-white/40 font-medium">আপনার পরিচয় ১০০% গোপন থাকবে। কোনো ব্যক্তিগত তথ্য ছাড়াই রিপোর্ট দিন।</CardDescription>
          </CardHeader>

          <CardContent className="px-0 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <ShieldAlert className="h-3 w-3 text-red-500" /> ঘটনার ধরণ
                  </Label>
                  <Select required>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-14 rounded-2xl">
                      <SelectValue placeholder="নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a0405] border-white/10 text-white">
                      <SelectItem value="harassment">শারীরিক হয়রানি</SelectItem>
                      <SelectItem value="verbal">মৌখিক হয়রানি</SelectItem>
                      <SelectItem value="digital">ডিজিটাল/অনলাইন হয়রানি</SelectItem>
                      <SelectItem value="stalking">পিছু নেওয়া (Stalking)</SelectItem>
                      <SelectItem value="other">অন্যান্য</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-blue-400" /> এলাকা
                  </Label>
                  <Input placeholder="ঘটনার স্থান" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/60 text-[10px] font-black uppercase tracking-widest">ঘটনার বিস্তারিত বর্ণনা</Label>
                <Textarea placeholder="কী ঘটেছিল বিস্তারিত লিখুন... অপরাধীর বর্ণনা বা কোনো ক্লু থাকলে দিন।" className="min-h-[120px] bg-white/5 border-white/10 text-white rounded-2xl" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button type="button" variant="outline" className="border-white/10 text-white/60 hover:bg-white/5 h-14 rounded-2xl flex items-center gap-2 font-bold">
                  <Camera className="h-5 w-5" /> ছবি/ভিডিও আপলোড (ঐচ্ছিক)
                </Button>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Lock className="h-5 w-5 text-green-500" />
                  <span className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-none">End-to-End Encrypted</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-red-600/5 border border-red-600/10 flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1 shrink-0" />
                <p className="text-[10px] text-white/50 leading-relaxed font-medium italic">
                  মিথ্যা বা বানোয়াট রিপোর্ট আইনের অপব্যবহারের আওতায় পড়ে। অনুগ্রহ করে শুধুমাত্র সঠিক তথ্য প্রদান করুন। ওঙ্গন প্ল্যাটফর্ম আপনার তথ্যের সুরক্ষা নিশ্চিত করে।
                </p>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-16 bg-red-600 text-white hover:bg-red-700 font-black text-lg rounded-2xl shadow-[0_10px_30px_rgba(220,38,38,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest"
              >
                {isSubmitting ? "প্রসেসিং হচ্ছে..." : (
                  <>বেনামে রিপোর্ট পাঠান <Send className="h-5 w-5" /></>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}