'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RefreshCcw, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function RefundRequestPage() {
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
        title: "অনুরোধ গৃহীত হয়েছে", 
        description: "আপনার রিফান্ড আবেদনটি পর্যালোচনার জন্য পাঠানো হয়েছে।",
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
        <Navbar />
        <main className="container mx-auto px-4 py-32 flex-grow flex items-center justify-center">
          <Card className="max-w-xl w-full bg-white/5 border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 text-center space-y-8 shadow-2xl">
            <div className="p-8 rounded-full bg-blue-500/20 text-blue-400 inline-block mx-auto">
              <RefreshCcw className="h-16 w-16 animate-spin-slow" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-tight">আপনার আবেদনটি প্রক্রিয়াধীন!</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                ধন্যবাদ। আপনার রিফান্ড অনুরোধটি সফলভাবে জমা হয়েছে। আমাদের অ্যাকাউন্টস টিম আপনার ট্রানজ্যাকশনটি যাচাই করে আগামী ৩-৫ কার্যদিবসের মধ্যে আপডেট জানাবে।
              </p>
            </div>
            <Link href="/" className="inline-block pt-4">
              <Button className="bg-white text-[#7a1013] font-bold h-14 px-8 rounded-2xl shadow-xl">হোমে ফিরে যান</Button>
            </Link>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <CardHeader className="px-0 pt-0 mb-8 relative z-10 text-center">
            <div className="inline-flex p-4 rounded-3xl bg-white/10 text-white mb-4">
              <RefreshCcw className="h-8 w-8" />
            </div>
            <CardTitle className="text-3xl font-bold text-white">রিফান্ড আবেদন ফর্ম</CardTitle>
            <CardDescription className="text-white/40">সঠিক তথ্য দিয়ে দ্রুত রিফান্ড নিশ্চিত করুন</CardDescription>
          </CardHeader>

          <CardContent className="px-0 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">আপনার নাম</Label>
                  <Input placeholder="পুরো নাম লিখুন" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">ইমেইল ঠিকানা</Label>
                  <Input type="email" placeholder="example@mail.com" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">ট্রানজ্যাকশন আইডি (TXNID)</Label>
                  <Input placeholder="যেমন: 8K9LW2M..." className="bg-white/5 border-white/10 text-white h-14 rounded-2xl font-mono uppercase" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">টাকার পরিমাণ (৳)</Label>
                  <Input type="number" placeholder="0.00" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">রিফান্ডের কারণ</Label>
                <Textarea placeholder="বিস্তারিত লিখুন..." className="min-h-[120px] bg-white/5 border-white/10 text-white rounded-2xl" required />
              </div>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-4">
                <ShieldAlert className="h-6 w-6 text-white mt-1 shrink-0 opacity-50" />
                <p className="text-[10px] text-white/50 leading-relaxed font-medium">
                  আমি নিশ্চিত করছি যে উপরে প্রদানকৃত সকল তথ্য সঠিক। ভুল বা বিভ্রান্তিকর তথ্য প্রদানের ফলে রিফান্ড বাতিল হতে পারে। ওঙ্গন বাংলাদেশ আপনার আবেদন যাচাই করার অধিকার রাখে।
                </p>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-16 bg-white text-[#7a1013] hover:bg-white/90 font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "পাঠানো হচ্ছে..." : (
                  <>আবেদন জমা দিন <Send className="h-5 w-5" /></>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
