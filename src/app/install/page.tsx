'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, Smartphone, Monitor, Tablet, ChevronRight, CheckCircle2, Apple, Chrome, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function InstallPage() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) {
      alert('আপনার ব্রাউজার সরাসরি ইনস্টল সাপোর্ট করছে না অথবা অ্যাপটি ইতিমধ্যে ইনস্টল করা আছে। "Add to Home Screen" অপশনটি ব্যবহার করুন।');
      return;
    }
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  const platforms = [
    {
      id: 'android',
      title: 'অ্যান্ড্রয়েড (Android)',
      icon: Smartphone,
      steps: [
        'Google Chrome ব্রাউজার থেকে সাইটটি ওপেন করুন।',
        'নিচে আসা "Install App" বাটনে ক্লিক করুন অথবা ব্রাউজার মেনু থেকে "Install App" সিলেক্ট করুন।',
        'হোম স্ক্রিনে শর্টকাট যুক্ত করতে "Install" কনফার্ম করুন।'
      ],
      badge: 'প্রস্তাবিত'
    },
    {
      id: 'ios',
      title: 'আইফোন (iOS)',
      icon: Apple,
      steps: [
        'Safari ব্রাউজার ব্যবহার করে সাইটটি ওপেন করুন।',
        'ব্রাউজারের নিচের "Share" (তীর চিহ্ন) বাটনে ক্লিক করুন।',
        'মেনু থেকে "Add to Home Screen" অপশনটি খুঁজে বের করুন এবং ক্লিক করুন।'
      ],
      badge: 'সহজ'
    },
    {
      id: 'desktop',
      title: 'ডেস্কটপ (PC/Laptop)',
      icon: Monitor,
      steps: [
        'Chrome বা Edge ব্রাউজারের অ্যাড্রেস বারের ডান পাশে ইনস্টল আইকনটি খুঁজুন।',
        'সরাসরি ইনস্টল করতে "Install ONGON BD" বাটনে ক্লিক করুন।',
        'এখন থেকে আপনি আপনার টাস্কবার বা স্টার্ট মেনু থেকে সরাসরি এক্সেস করতে পারবেন।'
      ],
      badge: 'প্রিমিয়াম অভিজ্ঞতা'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-5xl">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl animate-bounce">
            <Download className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            ওঙ্গন বাংলাদেশ <br /><span className="text-primary-foreground">অ্যাপটি ডাউনলোড করুন</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
            এখন আপনার প্রিয় ওঙ্গন প্ল্যাটফর্ম এক ক্লিকেই অ্যাক্সেস করুন। দ্রুত, নিরাপদ এবং স্মার্ট অভিজ্ঞতার জন্য নিচের নির্দেশনা অনুযায়ী ইনস্টল করুন।
          </p>
          
          <Button 
            onClick={handleInstall}
            className="bg-white text-[#7a1013] font-black h-16 px-12 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 uppercase tracking-widest"
          >
            সরাসরি ইনস্টল করুন <Download className="ml-3 h-6 w-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <Card key={platform.id} className="bg-white/5 border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl group hover:bg-white/10 transition-all flex flex-col">
              <CardHeader className="p-8 pb-4">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-[#7a1013] transition-all">
                    <platform.icon className="h-8 w-8" />
                  </div>
                  <Badge className="bg-white text-[#7a1013] font-bold">{platform.badge}</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">{platform.title}</CardTitle>
                <CardDescription className="text-white/40 font-medium">কিভাবে ইনস্টল করবেন:</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow">
                <div className="space-y-4">
                  {platform.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white font-bold shrink-0 mt-0.5">{idx + 1}</div>
                      <p className="text-sm text-white/70 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="p-8 pt-0 mt-auto">
                <div className="h-px w-full bg-white/5 mb-6" />
                <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase font-black tracking-[0.2em]">
                  <CheckCircle2 className="h-3 w-3 text-green-500" /> ১-ক্লিক রেডি
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-white/5 border border-white/10 text-center relative overflow-hidden backdrop-blur-md">
          <div className="relative z-10 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-3">
              <Globe className="h-6 w-6 text-blue-400" /> মাল্টি-ডিভাইস সিংক্রোনাইজেশন
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              একবার ইনস্টল করলে আপনার অ্যাকাউন্ট এবং সকল তথ্য সব ডিভাইসে একসাথে সিংক্রোনাইজ হবে। মোবাইল দিয়ে করা আবেদন আপনি ডেস্কটপ থেকেও ট্র্যাক করতে পারবেন।
            </p>
          </div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 bg-primary/10 rounded-full blur-[100px]" />
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • SECURE APPLICATION INFRASTRUCTURE
        </p>
      </footer>
    </div>
  );
}
