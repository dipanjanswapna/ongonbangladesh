
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Camera, Bell, ShieldCheck, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function PermissionManager() {
  const [showBanner, setShowBanner] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if permissions were already prompted in this session
    const hasPrompted = sessionStorage.getItem('permissions_prompted');
    if (!hasPrompted) {
      const timer = setTimeout(() => setShowBanner(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const requestLocation = async () => {
    if (!navigator.geolocation) {
      toast({ title: "জিপিএস নট সাপোর্টেড", variant: "destructive" });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      () => {
        toast({ title: "লোকেশন পারমিশন গ্রান্টেড", description: "এখন থেকে আপনি নিকটস্থ সেবা সহজে পাবেন।" });
        setShowBanner(false);
      },
      () => {
        toast({ title: "পারমিশন এরর", description: "লোকেশন অ্যাক্সেস ডিনাইড করা হয়েছে।", variant: "destructive" });
      }
    );
  };

  const closeBanner = () => {
    sessionStorage.setItem('permissions_prompted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[1500] w-[90%] max-w-md">
      <div className="bg-[#1a0405]/95 backdrop-blur-xl border border-white/10 p-5 rounded-[2rem] shadow-2xl space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Permission Settings</span>
          </div>
          <button onClick={closeBanner} className="text-white/20 hover:text-white"><X className="h-4 w-4" /></button>
        </div>
        
        <h3 className="text-lg font-bold text-white leading-tight">স্মার্ট ফিচারের জন্য পারমিশন প্রয়োজন</h3>
        <p className="text-xs text-white/50 leading-relaxed">সেরা ইউজার অভিজ্ঞতার জন্য নিচের সার্ভিসগুলো সচল করার অনুরোধ করছি।</p>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            onClick={requestLocation}
            className="border-white/10 text-white hover:bg-white/5 rounded-xl h-12 flex items-center justify-start gap-3 px-4"
          >
            <MapPin className="h-4 w-4 text-blue-400" />
            <span className="text-[10px] font-bold">জিপিএস</span>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => toast({ title: "ক্যামেরা পারমিশন চাইবে যখন প্রয়োজন হবে।" })}
            className="border-white/10 text-white hover:bg-white/5 rounded-xl h-12 flex items-center justify-start gap-3 px-4"
          >
            <Camera className="h-4 w-4 text-orange-400" />
            <span className="text-[10px] font-bold">ক্যামেরা</span>
          </Button>
        </div>
        
        <Button 
          onClick={closeBanner}
          className="w-full bg-white text-[#7a1013] font-black h-12 rounded-xl text-xs uppercase tracking-widest shadow-xl"
        >
          সব ঠিক আছে
        </Button>
      </div>
    </div>
  );
}
