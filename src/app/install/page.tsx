
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
        title: "ইনস্টলেশন গাইড",
        description: "আপনার ব্রাউজার মেনু থেকে 'Install App' বা 'Add to Home Screen' বাটনে ক্লিক করুন।",
        variant: "default"
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
        'Google Chrome ব্রাউজার থেকে এই সাইটটি ওপেন করুন।',
        'ব্রাউজারের ডানদিকের ৩টি ডট (Menu) আইকনে ক্লিক করুন।',
        'তালিকায় থাকা "Install App" বা "Add to Home Screen" অপশনে ক্লিক করুন।',
        'অ্যাপটি কিছুক্ষণের মধ্যে আপনার ফোনের অ্যাপ লিস্টে চলে আসবে।'
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
        'এরপর "Add" বাটনে ক্লিক করলে এটি আপনার হোম স্ক্রিনে সেভ হবে।'
      ],
      badge: 'আইফোন'
    },
    {
      id: 'desktop',
      title: 'ডেস্কটপ (Windows/Mac)',
      icon: Monitor,
      steps: [
        'Chrome বা Edge ব্রাউজারের ইউআরএল বারের ডান পাশে একটি ➕ আইকন দেখা যাবে।',
        'সেখানে ক্লিক করুন এবং "Install ONGON BD" অপশনটি নির্বাচন করুন।',
        'অ্যাপটি সাথে সাথে আপনার ডেস্কটপে এবং টাস্কবারে যুক্ত হয়ে যাবে।'
      ],
      badge: 'কম্পিউটার'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-24 md:py-32 flex-grow max-w-6xl">
        
        <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-20">
          <div className="relative inline-block">
            <div className="p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] bg-white text-[#7a1013] shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-pulse">
              <Download className="h-8 w-8 md:h-12 md:w-12" />
            </div>
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 p-1.5 md:p-2 bg-green-500 rounded-full text-white ring-2 md:ring-4 ring-[#7a1013]">
              <Zap className="h-3 w-3 md:h-4 md:w-4 fill-white" />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              সরাসরি অ্যাপ <br /><span className="text-white/40">ইনস্টল করুন</span>
            </h1>
            <p className="text-sm md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              ওঙ্গন বাংলাদেশ এখন আপনার হাতের মুঠোয়। দ্রুত এবং নিরাপদ অভিজ্ঞতার জন্য সরাসরি আপনার মোবাইল বা পিসিতে ইনস্টল করুন।
            </p>
          </div>

          {isInstalled ? (
            <div className="inline-flex items-center gap-2 md:gap-3 bg-green-500/20 text-green-400 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-green-500/30 font-bold text-xs md:text-base">
              <CheckCircle2 className="h-4 w-4 md:h-6 md:w-6" /> অ্যাপটি আপনার ডিভাইসে সফলভাবে ইনস্টল করা আছে
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <Button 
                onClick={handleInstall}
                className="bg-white text-[#7a1013] font-black h-14 md:h-16 px-8 md:px-12 rounded-xl md:rounded-2xl text-base md:text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-all active:scale-95 uppercase tracking-widest group border-none"
              >
                <ArrowDownToLine className="mr-3 md:mr-4 h-5 w-5 md:h-6 md:w-6 group-hover:animate-bounce" /> {installPrompt ? "এখনই ইনস্টল করুন" : "ইনস্টলেশন শুরু করুন"}
              </Button>
              <div className="flex items-center gap-2 text-white/40 text-[10px] md:text-xs font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Info className="h-3 w-3" /> ব্রাউজারে ইনস্টল অপশন না দেখলে নিচের গাইডগুলো দেখুন
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((platform) => (
            <Card key={platform.id} className="bg-white/5 border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden backdrop-blur-xl group hover:bg-white/10 transition-all flex flex-col shadow-2xl">
              <CardHeader className="p-6 md:p-8 pb-4">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-[#7a1013] transition-all">
                    <platform.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <Badge className="bg-white/10 text-white border-white/20 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">{platform.badge}</Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{platform.title}</CardTitle>
                <CardDescription className="text-white/40 font-medium text-xs md:text-sm">কিভাবে ইনস্টল করবেন:</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 pt-0 flex-grow">
                <div className="space-y-3 md:space-y-4">
                  {platform.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-white/40 font-bold shrink-0 mt-0.5 border border-white/10">{idx + 1}</div>
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="p-6 md:p-8 pt-0 mt-auto">
                <div className="h-px w-full bg-white/5 mb-4 md:mb-6" />
                <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-white/30 uppercase font-black tracking-[0.2em]">
                  <ShieldCheck className="h-3 w-3 md:h-4 md:w-4 text-green-500" /> নিরাপদ এবং অনুমোদিত ইনস্টলেশন
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <footer className="py-8 md:py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • SECURE PWA INFRASTRUCTURE • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
