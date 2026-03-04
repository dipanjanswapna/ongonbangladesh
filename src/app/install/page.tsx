'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, Smartphone, Monitor, CheckCircle2, Apple, ShieldCheck, Globe, Zap, ArrowDownToLine, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export default function InstallPage() {
  const { toast } = useToast();
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) {
      toast({
        title: "ব্রাউজার সাপোর্ট করছে না",
        description: "দয়া করে আপনার ব্রাউজার মেনু থেকে 'Add to Home Screen' অপশনটি ব্যবহার করুন।",
        variant: "destructive"
      });
      return;
    }
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
      toast({ title: "ইনস্টল শুরু হয়েছে!", description: "ওঙ্গন বাংলাদেশ আপনার ডিভাইসে যুক্ত হচ্ছে।" });
    }
  };

  const platforms = [
    {
      id: 'android',
      title: 'অ্যান্ড্রয়েড (Android)',
      icon: Smartphone,
      steps: [
        'Google Chrome বা Edge ব্রাউজার থেকে এই সাইটটি ওপেন করুন।',
        'ব্রাউজারের ডানদিকের ৩টি ডট (Menu) আইকনে ক্লিক করুন।',
        'নিচে থাকা "Install App" বা "Add to Home Screen" অপশনে ক্লিক করুন।',
        'কিছুক্ষণ অপেক্ষা করুন, অ্যাপটি আপনার ফোনের হোম স্ক্রিনে চলে আসবে।'
      ],
      badge: 'মোবাইল'
    },
    {
      id: 'ios',
      title: 'আইফোন (iOS)',
      icon: Apple,
      steps: [
        'Safari ব্রাউজার ব্যবহার করে ওঙ্গন বাংলাদেশ সাইটটি ওপেন করুন।',
        'নিচের দিকে মাঝখানে থাকা "Share" (তীর চিহ্ন সহ বক্স) আইকনে ক্লিক করুন।',
        'মেনু থেকে নিচে স্ক্রল করে "Add to Home Screen" অপশনটি সিলেক্ট করুন।',
        'এরপর "Add" বাটনে ক্লিক করলে এটি আপনার ডিভাইসে অ্যাপ হিসেবে সেভ হবে।'
      ],
      badge: 'আইফোন'
    },
    {
      id: 'desktop',
      title: 'ডেস্কটপ (Windows/Mac)',
      icon: Monitor,
      steps: [
        'Chrome বা Edge ব্রাউজারের অ্যাড্রেস বারের (URL Bar) ডান পাশে একটি ➕ বা কম্পিউটার আইকন দেখা যাবে।',
        'সেখানে ক্লিক করুন এবং "Install ONGON BD" কনফার্ম করুন।',
        'অ্যাপটি সাথে সাথে আপনার ডেস্কটপে এবং টাস্কবারে যুক্ত হয়ে যাবে।'
      ],
      badge: 'কম্পিউটার'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        
        {/* Main Download Hero */}
        <div className="text-center space-y-8 mb-20">
          <div className="relative inline-block">
            <div className="p-6 rounded-[2.5rem] bg-white text-[#7a1013] shadow-[0_0_50px_rgba(255,255,255,0.3)] animate-pulse">
              <Download className="h-12 w-12" />
            </div>
            <div className="absolute -bottom-2 -right-2 p-2 bg-green-500 rounded-full text-white ring-4 ring-[#7a1013]">
              <Zap className="h-4 w-4 fill-white" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              সরাসরি অ্যাপ <br /><span className="text-white/40">ডাউনলোড করুন</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium">
              ওঙ্গন বাংলাদেশ এখন আপনার হাতের মুঠোয়। দ্রুত এবং নিরাপদ অভিজ্ঞতার জন্য সরাসরি আপনার মোবাইল বা পিসিতে ইনস্টল করুন।
            </p>
          </div>

          {isInstalled ? (
            <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-8 py-4 rounded-2xl border border-green-500/30 font-bold">
              <CheckCircle2 className="h-6 w-6" /> অ্যাপটি আপনার ডিভাইসে ইতিমধ্যে ইনস্টল করা আছে
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <Button 
                onClick={handleInstall}
                className="bg-white text-[#7a1013] font-black h-20 px-16 rounded-[2rem] text-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:scale-105 transition-all active:scale-95 uppercase tracking-widest group"
              >
                <ArrowDownToLine className="mr-4 h-8 w-8 group-hover:animate-bounce" /> ইনস্টল বাটন চাপুন
              </Button>
              {!installPrompt && (
                <div className="flex items-center gap-2 text-white/40 text-xs font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Info className="h-3 w-3" /> ব্রাউজারে ইনস্টল অপশন না দেখলে নিচের গাইড ফলো করুন
                </div>
              )}
            </div>
          )}
        </div>

        {/* Platform Specific Guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <Card key={platform.id} className="bg-white/5 border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl group hover:bg-white/10 transition-all flex flex-col shadow-2xl">
              <CardHeader className="p-8 pb-4">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-[#7a1013] transition-all">
                    <platform.icon className="h-8 w-8" />
                  </div>
                  <Badge className="bg-white/10 text-white border-white/20 font-bold uppercase tracking-widest text-[10px]">{platform.badge}</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">{platform.title}</CardTitle>
                <CardDescription className="text-white/40 font-medium">কিভাবে ইনস্টল করবেন:</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow">
                <div className="space-y-4">
                  {platform.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-white/40 font-bold shrink-0 mt-0.5 border border-white/10">{idx + 1}</div>
                      <p className="text-sm text-white/70 leading-relaxed font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="p-8 pt-0 mt-auto">
                <div className="h-px w-full bg-white/5 mb-6" />
                <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase font-black tracking-[0.2em]">
                  <ShieldCheck className="h-3 w-3 text-green-500" /> ১-ক্লিক নিরাপদ ইনস্টলেশন
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust & Sync Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden backdrop-blur-md">
            <div className="relative z-10 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">মাল্টি-ডিভাইস সাপোর্ট</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                আপনার স্মার্টফোন, ট্যাবলেট এবং ল্যাপটপ থেকে সরাসরি অ্যাপটি ব্যবহার করুন। সব তথ্য ক্লাউডে সিঙ্ক হবে।
              </p>
            </div>
          </div>
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden backdrop-blur-md">
            <div className="relative z-10 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">সর্বদা আপডেট থাকে</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                অ্যাপটি রি-ইনস্টল করার ঝামেলা নেই। আমাদের নতুন আপডেটগুলো অটোমেটিক অ্যাপে যুক্ত হয়ে যাবে।
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • SECURE INFRASTRUCTURE • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}