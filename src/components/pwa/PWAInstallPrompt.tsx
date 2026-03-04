
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function PWAInstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
      // Only show if not already installed
      if (!window.matchMedia('(display-mode: standalone)').matches) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-80 bg-white text-[#7a1013] p-4 rounded-2xl shadow-2xl z-[2000] border-none animate-in slide-in-from-bottom-10">
      <div className="flex items-start gap-4">
        <div className="bg-[#7a1013]/10 p-3 rounded-xl">
          <Download className="h-6 w-6 text-[#7a1013]" />
        </div>
        <div className="flex-grow space-y-1">
          <h4 className="font-bold text-sm">অ্যাপটি ইনস্টল করুন</h4>
          <p className="text-[10px] text-[#7a1013]/60 leading-tight">দ্রুত এক্সেস এবং সেরা অভিজ্ঞতার জন্য হোম স্ক্রিনে যুক্ত করুন।</p>
          <div className="flex gap-2 pt-2">
            <Button size="sm" onClick={handleInstall} className="bg-[#7a1013] text-white hover:bg-[#5a0c0f] rounded-lg h-8 text-[10px] font-bold px-4">ইনস্টল</Button>
            <Button size="sm" variant="ghost" onClick={() => setIsVisible(false)} className="text-[#7a1013]/40 hover:text-[#7a1013] rounded-lg h-8 p-2"><X className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
