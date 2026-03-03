'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserCheck, ShieldCheck, Award, Briefcase, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function MembershipPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ 
        title: "আবেদন সফল!", 
        description: "আপনার মেম্বারশিপ আবেদনটি আমরা পেয়েছি। শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(110, 14, 17)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <UserCheck className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">সদস্য হিসেবে যুক্ত হোন</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">ওঙ্গন বাংলাদেশের গর্বিত সদস্য হয়ে মানবিক লক্ষ্য অর্জনে সরাসরি ভূমিকা রাখুন।</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-bold text-white border-l-4 border-white pl-4">কেন সদস্য হবেন?</h2>
            <div className="grid gap-6">
              {[
                { icon: ShieldCheck, title: "স্থায়ী অধিকার", desc: "সংস্থার নীতি নির্ধারণী প্রক্রিয়ায় মতামত দেওয়ার সুযোগ।" },
                { icon: Award, title: "স্বীকৃতি", desc: "বার্ষিক মানবিক অ্যাওয়ার্ড এবং সার্টিফিকেট প্রদান।" },
                { icon: Briefcase, title: "নেটওয়ার্ক", desc: "দেশি-বিদেশি মানবিক কর্মীদের সাথে কাজ করার সুযোগ।" }
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/5 rounded-[2rem] p-6 hover:bg-white/10 transition-all group">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-[#6e0e11] transition-all h-fit">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="glass-card border-white/10 rounded-[3rem] p-8 shadow-2xl">
              <CardHeader className="px-0 pt-0 mb-8">
                <CardTitle className="text-white text-2xl font-bold">মেম্বারশিপ ফর্ম</CardTitle>
                <CardDescription className="text-white/40">সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">আপনার নাম</Label>
                      <Input placeholder="পুরো নাম লিখুন" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl focus:ring-white/20" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">সদস্যতার ধরণ</Label>
                      <Select required>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-14 rounded-2xl">
                          <SelectValue placeholder="নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#6e0e11] border-white/10 text-white">
                          <SelectItem value="life">আজীবন সদস্য (Life Member)</SelectItem>
                          <SelectItem value="donor">দাতা সদস্য (Donor Member)</SelectItem>
                          <SelectItem value="general">সাধারণ সদস্য (General Member)</SelectItem>
                          <SelectItem value="student">ছাত্র সদস্য (Student Member)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">পেশা</Label>
                      <Input placeholder="যেমন: শিক্ষক, ডাক্তার" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl focus:ring-white/20" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">মোবাইল নম্বর</Label>
                      <Input placeholder="01XXX-XXXXXX" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl focus:ring-white/20" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">বর্তমান ঠিকানা</Label>
                    <Input placeholder="পুরো ঠিকানা লিখুন" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl focus:ring-white/20" required />
                  </div>

                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-white mt-1 shrink-0" />
                    <p className="text-xs text-white/60 leading-relaxed font-medium">
                      আমি ওঙ্গন বাংলাদেশের লক্ষ্য ও উদ্দেশ্যের সাথে একমত পোষণ করছি এবং মেম্বারশিপ ফি ও নিয়মিত অনুদান প্রদান করতে প্রতিশ্রুতিবদ্ধ।
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-16 bg-white text-[#6e0e11] hover:bg-white/90 font-bold text-lg rounded-2xl shadow-xl transition-all active:scale-95"
                  >
                    {isSubmitting ? "প্রসেসিং..." : "আবেদন জমা দিন"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
