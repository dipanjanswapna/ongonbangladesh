'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  FileText, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Camera, 
  ShieldAlert, 
  ArrowLeft,
  Users,
  Home
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function DisasterReport() {
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
        description: "আপনার পরিস্থিতি সম্পর্কে প্রশাসন ও সাহায্যকারী সংস্থাকে অবহিত করা হয়েছে।" 
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col selection:bg-orange-500/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
        <Navbar />
        <main className="container mx-auto px-4 py-32 flex-grow flex items-center justify-center">
          <Card className="max-w-xl w-full bg-white/5 border-white/10 backdrop-blur-3xl rounded-xl p-12 text-center space-y-8 shadow-2xl">
            <div className="p-8 rounded-full bg-green-500/20 text-green-500 inline-block">
              <CheckCircle2 className="h-16 w-16" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-tight">আপনার রিপোর্টটি সফলভাবে গৃহীত হয়েছে!</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                ধন্যবাদ। আপনার দেওয়া তথ্য আমাদের রেসকিউ টিম এবং ত্রাণ বিতরণে সরাসরি সাহায্য করবে। ওঙ্গন আপনার পাশে আছে।
              </p>
            </div>
            <Link href="/disaster" className="inline-block pt-4">
              <Button className="bg-white text-[#7a1013] font-black h-14 px-10 rounded-xl shadow-xl uppercase tracking-widest">ফিরে যান</Button>
            </Link>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-500/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-white/5 backdrop-blur-3xl border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <CardHeader className="px-0 pt-0 mb-8 relative z-10 text-center space-y-4">
            <Link href="/disaster" className="self-start">
              <Button variant="ghost" size="sm" className="text-white/40 hover:text-white rounded-lg flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> ফিরে যান
              </Button>
            </Link>
            <div className="inline-flex p-4 rounded-xl bg-white/10 text-white mb-2 shadow-xl border border-white/10 mx-auto">
              <FileText className="h-8 w-8 text-orange-500" />
            </div>
            <CardTitle className="text-3xl font-black text-white uppercase tracking-tighter leading-none">দুর্যোগ <span className="text-white/40">রিপোর্ট ও ক্ষয়ক্ষতি</span></CardTitle>
            <CardDescription className="text-white/40 font-medium">আপনার এলাকার বর্তমান পরিস্থিতি এবং ক্ষয়ক্ষতির তথ্য দিয়ে আমাদের সাহায্য ত্বরান্বিত করুন।</CardDescription>
          </CardHeader>

          <CardContent className="px-0 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-white font-bold text-lg border-l-4 border-orange-500 pl-3 uppercase tracking-widest">পরিস্থিতি তথ্য</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <ShieldAlert className="h-3 w-3 text-orange-500" /> দুর্যোগের ধরণ
                    </Label>
                    <Select required>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white h-14 rounded-xl">
                        <SelectValue placeholder="নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a0405] border-white/10 text-white">
                        <SelectItem value="flood">বন্যা</SelectItem>
                        <SelectItem value="cyclone">ঘূর্ণিঝড়</SelectItem>
                        <SelectItem value="earthquake">ভূমিকম্প</SelectItem>
                        <SelectItem value="landslide">ভূমিধস</SelectItem>
                        <SelectItem value="other">অন্যান্য</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-blue-400" /> বর্তমান এলাকা
                    </Label>
                    <Input placeholder="যেমন: উখিয়া, কক্সবাজার" className="bg-white/5 border-white/10 text-white h-14 rounded-xl" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <Users className="h-3 w-3 text-pink-400" /> ক্ষতিগ্রস্ত সংখ্যা (পরিবার)
                    </Label>
                    <Input type="number" placeholder="আনুমানিক সংখ্যা" className="bg-white/5 border-white/10 text-white h-14 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <Home className="h-3 w-3 text-green-400" /> ঘরবাড়ি ক্ষয়ক্ষতি
                    </Label>
                    <Select required>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white h-14 rounded-xl">
                        <SelectValue placeholder="ক্ষয়ক্ষতির মাত্রা" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a0405] border-white/10 text-white">
                        <SelectItem value="none">নেই</SelectItem>
                        <SelectItem value="partial">আংশিক</SelectItem>
                        <SelectItem value="severe">গুরুতর</SelectItem>
                        <SelectItem value="total">সম্পূর্ণ ধ্বংস</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/60 text-[10px] font-black uppercase tracking-widest">বিস্তারিত বর্ণনা ও প্রয়োজনীয়তা</Label>
                  <Textarea placeholder="কী ধরণের সাহায্য প্রয়োজন? (যেমন: খাবার, ঔষধ, উদ্ধারকর্মী)..." className="min-h-[100px] bg-white/5 border-white/10 text-white rounded-xl" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button type="button" variant="outline" className="border-white/10 text-white/60 hover:bg-white/5 h-14 rounded-xl flex items-center gap-2 font-bold">
                  <Camera className="h-5 w-5" /> ছবি আপলোড (ঐচ্ছিক)
                </Button>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-none">Verified Channel</span>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-16 bg-orange-500 text-white hover:bg-orange-600 font-black text-lg rounded-xl shadow-[0_10px_30px_rgba(249,115,22,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest"
              >
                {isSubmitting ? "পাঠানো হচ্ছে..." : (
                  <>রিপোর্ট সাবমিট করুন <Send className="h-5 w-5" /></>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
