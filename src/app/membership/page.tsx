
'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  UserCheck, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Star, 
  Users, 
  ArrowRight,
  Heart,
  Mail,
  Phone,
  MapPin,
  ClipboardCheck
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function MembershipPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({ 
        title: "আবেদন সফল!", 
        description: "আপনার মেম্বারশিপ আবেদনটি আমরা পেয়েছি। শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।",
      });
    }, 2000);
  };

  const membershipTiers = [
    {
      title: "আজীবন সদস্য",
      subtitle: "Life Member",
      desc: "এককালীন বড় অনুদানের মাধ্যমে সংস্থার আজীবন নীতিনির্ধারক সদস্য হওয়ার গৌরব অর্জন করুন।",
      icon: Star,
      color: "text-yellow-400"
    },
    {
      title: "দাতা সদস্য",
      subtitle: "Donor Member",
      desc: "নিয়মিত আর্থিক সহায়তার মাধ্যমে সংস্থার মানবিক প্রকল্পগুলোর অর্থায়ন নিশ্চিতকারী সদস্য।",
      icon: Award,
      color: "text-blue-400"
    },
    {
      title: "সাধারণ সদস্য",
      subtitle: "General Member",
      desc: "বার্ষিক ফি প্রদানের মাধ্যমে সংস্থার সাধারণ কার্যক্রম এবং সামাজিক উন্নয়নমূলক কাজে অংশ নিন।",
      icon: Users,
      color: "text-green-400"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
        <Navbar />
        <main className="container mx-auto px-4 py-32 flex-grow flex items-center justify-center">
          <Card className="max-w-xl w-full bg-white/5 border-white/10 backdrop-blur-3xl rounded-xl p-12 text-center space-y-8 shadow-2xl animate-in zoom-in-95 duration-500">
            <div className="relative inline-block">
              <div className="p-8 rounded-full bg-green-500/20 text-green-500 ring-4 ring-green-500/10">
                <ClipboardCheck className="h-16 w-16" />
              </div>
              <div className="absolute -top-2 -right-2 p-2 bg-white rounded-full text-green-600 shadow-xl">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-tight">আবেদন সফলভাবে গৃহীত হয়েছে!</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                ওঙ্গন বাংলাদেশে আপনার আগ্রহের জন্য ধন্যবাদ। আমাদের মেম্বারশিপ কমিটি আপনার আবেদনটি পর্যালোচনা করবে এবং আগামী ৫-৭ কর্মদিবসের মধ্যে আপনার দেওয়া মোবাইল নম্বর বা ইমেইলে যোগাযোগ করা হবে।
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-[#7a1013] font-bold h-14 px-8 rounded-xl shadow-xl hover:bg-white/90">
                  হোম পেজে ফিরে যান
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-white/20 text-white font-bold h-14 px-8 rounded-xl hover:bg-white/5">
                  আমাদের কাজ সম্পর্কে জানুন
                </Button>
              </Link>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <UserCheck className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">সদস্য হিসেবে যুক্ত হোন</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">ওঙ্গন বাংলাদেশের গর্বিত সদস্য হয়ে মানবিক লক্ষ্য অর্জনে সরাসরি ভূমিকা রাখুন। আপনার সদস্যপদ আমাদের শক্তি।</p>
        </div>

        {/* Tiers Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {membershipTiers.map((tier, i) => (
            <Card key={i} className="bg-white/5 border-white/5 rounded-xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-8 -mt-8" />
              <div className={`p-4 rounded-xl bg-white/5 ${tier.color} group-hover:bg-white group-hover:text-[#7a1013] transition-all w-fit mb-6`}>
                <tier.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{tier.title}</h3>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-4">{tier.subtitle}</p>
              <p className="text-sm text-white/50 leading-relaxed">{tier.desc}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white border-l-4 border-white pl-4">সদস্যপদ পাওয়ার সুবিধা</h2>
              <div className="grid gap-6">
                {[
                  { icon: ShieldCheck, title: "স্থায়ী অধিকার", desc: "সংস্থার নীতি নির্ধারণী প্রক্রিয়ায় মতামত দেওয়ার ও ভোটাধিকার প্রয়োগের সুযোগ।" },
                  { icon: Star, title: "বিশেষ স্বীকৃতি", desc: "বার্ষিক সাধারণ সভায় বিশেষ সম্মাননা এবং বার্ষিক রিপোর্টে দাতা হিসেবে নাম প্রকাশ।" },
                  { icon: Heart, title: "গ্লোবাল নেটওয়ার্ক", desc: "দেশি-বিদেশি মানবিক সংস্থার প্রতিনিধিদের সাথে সরাসরি কাজ করার অভিজ্ঞতা।" },
                  { icon: CheckCircle2, title: "স্বচ্ছতা নিশ্চিতকরণ", desc: "সংস্থার প্রতিটি প্রকল্পের অডিট রিপোর্ট ও কার্যক্রমের বিস্তারিত তথ্য পাওয়ার অধিকার।" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group">
                    <div className="p-3 rounded-xl bg-white/10 text-white h-fit group-hover:scale-110 transition-transform">
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

            <div className="p-8 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2"><Phone className="h-4 w-4" /> জরুরি যোগাযোগ</h4>
              <p className="text-xs text-white/60">মেম্বারশিপ সংক্রান্ত যেকোনো প্রয়োজনে কল করুন আমাদের হটলাইনে:</p>
              <p className="text-xl font-bold text-white tracking-tighter">+৮৮০ ১৭০০-০০০০০০</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card id="form" className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <CardHeader className="px-0 pt-0 mb-8 relative z-10">
                <CardTitle className="text-white text-2xl font-bold">মেম্বারশিপ আবেদন ফর্ম</CardTitle>
                <CardDescription className="text-white/40">সঠিক তথ্য দিয়ে মেম্বারশিপের জন্য আবেদন করুন</CardDescription>
              </CardHeader>
              <CardContent className="px-0 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <UserCheck className="h-3 w-3" /> পুরো নাম
                      </Label>
                      <Input placeholder="আপনার নাম লিখুন" className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:ring-white/20 transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <Award className="h-3 w-3" /> সদস্যতার ধরণ
                      </Label>
                      <Select required>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-14 rounded-xl">
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
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <Mail className="h-3 w-3" /> ইমেইল ঠিকানা
                      </Label>
                      <Input type="email" placeholder="email@example.com" className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:ring-white/20 transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <Phone className="h-3 w-3" /> মোবাইল নম্বর
                      </Label>
                      <Input placeholder="01XXX-XXXXXX" className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:ring-white/20 transition-all" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <MapPin className="h-3 w-3" /> বর্তমান ঠিকানা
                    </Label>
                    <Input placeholder="পুরো ঠিকানা লিখুন" className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:ring-white/20 transition-all" required />
                  </div>

                  <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-white mt-1 shrink-0" />
                    <p className="text-xs text-white/60 leading-relaxed font-medium">
                      আমি ওঙ্গন বাংলাদেশের লক্ষ্য ও উদ্দেশ্যের সাথে একমত পোষণ করছি এবং মেম্বারশিপ ফি ও নিয়মিত অনুদান প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমি সংস্থার সকল নিয়মনীতি মেনে চলব।
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-16 bg-white text-[#7a1013] hover:bg-white/90 font-bold text-lg rounded-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>প্রসেসিং হচ্ছে... <ShieldCheck className="h-5 w-5 animate-pulse" /></>
                    ) : (
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
          ONGON BANGLADESH • MEMBERSHIP & HONOR • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
