
'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Smartphone, Monitor, CheckCircle2, Apple, ShieldCheck, Zap, ArrowDownToLine } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export default function InstallPage() {
  const { toast } = useToast();
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
      }

      const handleBeforeInstallPrompt = (e: any) => {
        e.preventDefault();
        setInstallPrompt(e);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }
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
      title: 'অ্যান্ড্রয়েড',
      icon: Smartphone,
      steps: [
        'Chrome থেকে এই সাইটটি ওপেন করুন।',
        'ডানদিকের ৩টি ডট আইকনে ক্লিক করুন।',
        '"Install App" অপশনে ক্লিক করুন।'
      ],
      badge: 'Mobile'
    },
    {
      id: 'ios',
      title: 'আইফোন',
      icon: Apple,
      steps: [
        'Safari থেকে এই সাইটটি ওপেন করুন।',
        '"Share" আইকনে ক্লিক করুন।',
        '"Add to Home Screen" সিলেক্ট করুন।'
      ],
      badge: 'iOS'
    },
    {
      id: 'desktop',
      title: 'ডেস্কটপ',
      icon: Monitor,
      steps: [
        'Chrome/Edge এর ইউআরএল বারে ক্লিক করুন।',
        'ডানপাশে থাকা ইনস্টল (➕) আইকনে ক্লিক করুন।',
        '"Install" বাটনটি নিশ্চিত করুন।'
      ],
      badge: 'Desktop'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0203] selection:bg-red-600/20">
      <Navbar />
      <main className="container mx-auto px-4 py-24 md:py-32 flex-grow max-w-5xl">
        
        <div className="text-center space-y-6 mb-16">
          <div className="relative inline-block">
            <div className="p-4 rounded-2xl bg-white text-primary shadow-2xl">
              <Download className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-1 -right-1 p-1.5 bg-green-500 rounded-full text-white ring-2 ring-[#0f0203]">
              <Zap className="h-3 w-3 fill-white" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              অ্যাপ <span className="text-white/40">ইনস্টল করুন</span>
            </h1>
            <p className="text-xs md:text-sm text-white/60 max-w-md mx-auto font-medium leading-relaxed">
              দ্রুত এবং নিরাপদ অভিজ্ঞতার জন্য সরাসরি আপনার ডিভাইসে ওঙ্গন বিডি যুক্ত করুন।
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            {isInstalled ? (
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-6 py-3 rounded-xl border border-green-500/30 font-bold text-xs">
                <CheckCircle2 className="h-4 w-4" /> অ্যাপটি আপনার ডিভাইসে ইনস্টল করা আছে
              </div>
            ) : (
              <Button 
                onClick={handleInstall}
                className="bg-white text-primary font-black h-12 px-8 rounded-xl text-sm shadow-xl hover:scale-105 transition-all active:scale-95 uppercase tracking-widest"
              >
                <ArrowDownToLine className="mr-2 h-4 w-4" /> ইনস্টল শুরু করুন
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platforms.map((platform) => (
            <Card key={platform.id} className="bg-white/5 border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl group hover:bg-white/10 transition-all flex flex-col shadow-xl">
              <CardHeader className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-xl bg-white/10 text-white group-hover:bg-white group-hover:text-primary transition-all">
                    <platform.icon className="h-5 w-5" />
                  </div>
                  <Badge className="bg-white/10 text-white border-white/20 font-bold uppercase tracking-widest text-[8px]">{platform.badge}</Badge>
                </div>
                <CardTitle className="text-lg font-bold text-white mb-1">{platform.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <div className="space-y-3">
                  {platform.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-white/5 flex items-center justify-center text-[8px] text-white/40 font-bold shrink-0 mt-0.5 border border-white/10">{idx + 1}</div>
                      <p className="text-[10px] text-white/70 leading-relaxed font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <div className="flex items-center gap-2 text-[8px] text-white/20 uppercase font-black tracking-widest">
                  <ShieldCheck className="h-3 w-3 text-green-500" /> Secure Install
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <footer className="py-8 text-center border-t border-white/5 bg-black/10">
        <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BD • PWA v3.5 • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
