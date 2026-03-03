'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserCheck, ShieldCheck, Award, Briefcase, CheckCircle2, Star, Users, ArrowRight } from 'lucide-react';
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

  const membershipTiers = [
    {
      title: "আজীবন সদস্য (Life Member)",
      desc: "এককালীন অনুদানের মাধ্যমে সংস্থার আজীবন নীতিনির্ধারক সদস্য হওয়ার সুযোগ।",
      icon: Star,
      color: "text-yellow-400"
    },
    {
      title: "দাতা সদস্য (Donor Member)",
      desc: "নিয়মিত বড় অংকের অনুদান প্রদানকারী সদস্য যারা প্রকল্পের অর্থায়ন নিশ্চিত করেন।",
      icon: Award,
      color: "text-blue-400"
    },
    {
      title: "সাধারণ সদস্য (General Member)",
      desc: "বার্ষিক ফি প্রদানের মাধ্যমে সংস্থার সাধারণ কার্যক্রম ও ভোটাধিকারে অংশ নিন।",
      icon: Users,
      color: "text-green-400"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <UserCheck className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">সদস্য হিসেবে যুক্ত হোন</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">ওঙ্গন বাংলাদেশের গর্বিত সদস্য হয়ে মানবিক লক্ষ্য অর্জনে সরাসরি ভূমিকা রাখুন। আপনার সদস্যপদ আমাদের শক্তি।</p>
        </div>

        {/* Tiers Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {membershipTiers.map((tier, i) => (
            <Card key={i} className="bg-white/5 border-white/5 rounded-[2rem] p-8 hover:bg-white/10 transition-all group border border-transparent hover:border-white/10">
              <div className={`p-4 rounded-2xl bg-white/5 ${tier.color} group-hover:bg-white group-hover:text-[#7a1013] transition-all w-fit mb-6`}>
                <tier.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tier.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{tier.desc}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-bold text-white border-l-4 border-white pl-4">সদস্যপদ পাওয়ার সুবিধা</h2>
            <div className="grid gap-6">
              {[
                { icon: ShieldCheck, title: "স্থায়ী অধিকার", desc: "সংস্থার নীতি নির্ধারণী প্রক্রিয়ায় মতামত দেওয়ার ও ভোটাধিকার প্রয়োগের সুযোগ।" },
                { icon: Star, title: "বিশেষ স্বীকৃতি", desc: "বার্ষিক সাধারণ সভায় বিশেষ সম্মাননা এবং বার্ষিক রিপোর্টে দাতা হিসেবে নাম প্রকাশ।" },
                { icon: Briefcase, title: "গ্লোবাল নেটওয়ার্ক", desc: "দেশি-বিদেশি মানবিক সংস্থার প্রতিনিধিদের সাথে সরাসরি কাজ করার অভিজ্ঞতা।" },
                { icon: CheckCircle2, title: "স্বচ্ছতা নিশ্চিতকরণ", desc: "সংস্থার প্রতিটি প্রকল্পের অডিট রিপোর্ট ও কার্যক্রমের বিস্তারিত তথ্য পাওয়ার অধিকার।" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all">
                  <div className="p-3 rounded-2xl bg-white/10 text-white h-fit">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <CardHeader className="px-0 pt-0 mb-8 relative z-10">
                <CardTitle className="text-white text-2xl font-bold">মেম্বারশিপ ফর্ম</CardTitle>
                <CardDescription className="text-white/40">সঠিক তথ্য দিয়ে মেম্বারশিপের জন্য আবেদন করুন</CardDescription>
              </CardHeader>
              <CardContent className="px-0 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">পুরো নাম</Label>
                      <Input placeholder="আপনার নাম লিখুন" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl focus:ring-white/20" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">সদস্যতার ধরণ</Label>
                      <Select required>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-14 rounded-2xl">
                          <SelectValue placeholder="নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#7a1013] border-white/10 text-white">
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
                      <Input placeholder="যেমন: শিক্ষক, ব্যবসায়ী" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl focus:ring-white/20" required />
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
                      আমি ওঙ্গন বাংলাদেশের লক্ষ্য ও উদ্দেশ্যের সাথে একমত পোষণ করছি এবং মেম্বারশিপ ফি ও নিয়মিত অনুদান প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমি সংস্থার সকল নিয়মনীতি মেনে চলব।
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-16 bg-white text-[#7a1013] hover:bg-white/90 font-bold text-lg rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "আবেদন জমা হচ্ছে..." : (
                      <>আবেদন জমা দিন <ArrowRight className="h-5 w-5" /></>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
          ONGON BANGLADESH • MEMBERSHIP & HONOR
        </p>
      </footer>
    </div>
  );
}
