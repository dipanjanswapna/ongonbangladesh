
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Droplet, Heart, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function DonorRegistrationPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ 
        title: "অভিনন্দন!", 
        description: "আপনি সফলভাবে ওঙ্গন ব্লাড ডোনার হিসেবে তালিকাভুক্ত হয়েছেন।",
        variant: "default"
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-2xl glass-card border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <CardHeader className="text-center pb-8 border-b border-white/5">
            <div className="inline-flex p-4 rounded-3xl bg-red-500/20 text-red-500 mb-4 ring-2 ring-red-500/40">
              <Droplet className="h-8 w-8" />
            </div>
            <CardTitle className="text-3xl font-bold text-white">রক্তদাতা হিসেবে যোগ দিন</CardTitle>
            <CardDescription className="text-white/60">আপনার দেওয়া তথ্য অন্যদের জীবন বাঁচাতে সাহায্য করবে।</CardDescription>
          </CardHeader>
          <CardContent className="pt-8 px-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">আপনার নাম</Label>
                  <Input placeholder="পুরো নাম" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">ব্লাড গ্রুপ</Label>
                  <Select required>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl">
                      <SelectValue placeholder="গ্রুপ নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a0405] border-white/10 text-white">
                      {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(g => (
                        <SelectItem key={g} value={g}>{g}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">মোবাইল নম্বর</Label>
                  <Input placeholder="01XXX-XXXXXX" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">শহর/এলাকা</Label>
                  <Input placeholder="যেমন: ঢাকা, সিলেট" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">শেষ রক্তদানের তারিখ (যদি থাকে)</Label>
                <Input type="date" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" />
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <p className="text-[10px] text-white/50 leading-relaxed font-medium">
                  আমি নিশ্চিত করছি যে আমি স্বেচ্ছায় এবং সচেতনভাবে রক্তদানে আগ্রহী এবং আমার প্রদানকৃত সকল তথ্য সঠিক। ওঙ্গন আমার গোপনীয়তা রক্ষা করবে।
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 bg-white text-red-600 hover:bg-white/90 font-bold rounded-2xl shadow-xl transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "প্রসেসিং..." : (
                  <>রক্তদাতা হিসেবে নিবন্ধিত হোন <Heart className="ml-2 h-4 w-4 fill-red-600" /></>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
