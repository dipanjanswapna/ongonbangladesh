'use client';

import { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShieldAlert, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  AlertCircle, 
  Zap,
  EyeOff,
  Settings,
  Share2,
  ChevronRight,
  ShieldCheck,
  History,
  Navigation,
  CloudSun,
  Wind,
  Sunrise,
  Bot
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

// Dynamic import for Map to prevent SSR issues
const SOSMap = dynamic(() => import('@/components/blood/BloodMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse rounded-3xl" />
});

export default function SafetyHub() {
  const { toast } = useToast();
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [isDiscreetMode, setIsDiscreetMode] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [trackingLogs, setTrackingLogs] = useState<{time: string, status: string}[]>([]);
  const watchId = useRef<number | null>(null);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);

  const startTracking = () => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      toast({ title: "জিপিএস নট সাপোর্টেড", variant: "destructive" });
      return;
    }

    setIsSOSActive(true);
    setTrackingLogs(prev => [{ time: new Date().toLocaleTimeString(), status: "SOS সংকেত পাঠানো হয়েছে" }, ...prev]);

    watchId.current = navigator.geolocation.watchPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(coords);
        setTrackingLogs(prev => [{ time: new Date().toLocaleTimeString(), status: `লোকেশন আপডেট: ${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}` }, ...prev].slice(0, 5));
      },
      () => {
        toast({ title: "লোকেশন এরর", description: "আপনার লোকেশন পাওয়া যাচ্ছে না।", variant: "destructive" });
      },
      { enableHighAccuracy: true }
    );

    toast({ 
      title: "লাইভ ট্র্যাকিং সচল!", 
      description: "আপনার অবস্থান রিয়েল-টাইমে কন্ট্রোল রুমে পাঠানো হচ্ছে।",
      variant: "destructive"
    });
  };

  const stopTracking = () => {
    if (watchId.current) {
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }
    setIsSOSActive(false);
    toast({ title: "ট্র্যাকিং বন্ধ করা হয়েছে", description: "নিরাপত্তা নিশ্চিত করতে সর্বদা সজাগ থাকুন।" });
  };

  const handleStartPress = () => {
    longPressTimer.current = setTimeout(() => {
      setIsDiscreetMode(false);
      toast({ title: "ডিসক্রিট মোড বন্ধ করা হয়েছে" });
    }, 1500);
  };

  const handleEndPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  if (isDiscreetMode) {
    return (
      <div 
        className="min-h-screen p-6 flex flex-col gap-6 font-body animate-in fade-in duration-500 selection:bg-white/20" 
        style={{ backgroundColor: 'rgb(122, 16, 19)' }}
      >
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <CloudSun className="h-5 w-5 text-white/60" /> আজকের আবহাওয়া
          </h1>
          <button onClick={() => setIsDiscreetMode(false)} className="opacity-0 w-10 h-10 cursor-default" aria-hidden="true">Exit</button>
        </div>

        <div className="space-y-6">
          <Card className="p-8 glass-card border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="h-4 w-4" />
                <p className="text-sm font-bold uppercase tracking-widest">ঢাকা, বাংলাদেশ</p>
              </div>
              <div className="flex items-end gap-4">
                <h2 className="text-6xl font-black text-white leading-none tracking-tighter">৩২° সে.</h2>
                <div className="pb-1">
                  <p className="text-white/80 font-bold">আংশিক মেঘলা</p>
                  <p className="text-white/40 text-xs font-medium">আর্দ্রতা ৪৫%</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 glass-card rounded-3xl border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white/40">
                <Wind className="h-4 w-4" />
                <p className="text-[10px] uppercase font-black tracking-widest">বাতাস</p>
              </div>
              <p className="text-lg font-bold text-white">১২ কিমি/ঘণ্টা</p>
            </div>
            <div className="p-6 glass-card rounded-3xl border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white/40">
                <Sunrise className="h-4 w-4" />
                <p className="text-[10px] uppercase font-black tracking-widest">সূর্যোদয়</p>
              </div>
              <p className="text-lg font-bold text-white">০৫:৪৫ AM</p>
            </div>
          </div>

          <div className="mt-12 p-6 border-t border-white/5 text-center space-y-2">
            <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.3em]">
              {isSOSActive ? "ব্যাকগ্রাউন্ডে সিস্টেম সচল আছে..." : "সিস্টেম স্ট্যান্ডবাই"}
            </p>
            <div className="flex justify-center gap-1">
              <div className={cn("h-1 w-1 rounded-full", isSOSActive ? "bg-red-500 animate-pulse" : "bg-white/10")} />
              <div className={cn("h-1 w-1 rounded-full opacity-50", isSOSActive ? "bg-red-500 animate-pulse delay-75" : "bg-white/10")} />
              <div className={cn("h-1 w-1 rounded-full opacity-30", isSOSActive ? "bg-red-500 animate-pulse delay-150" : "bg-white/10")} />
            </div>
          </div>
        </div>
        
        <button 
          onMouseDown={handleStartPress} onMouseUp={handleEndPress} onMouseLeave={handleEndPress}
          onTouchStart={handleStartPress} onTouchEnd={handleEndPress}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full text-[10px] font-black text-white/30 border border-white/10 active:scale-95 transition-all select-none uppercase tracking-[0.2em] shadow-2xl"
        >
          লং প্রেস করে মূল অ্যাপে ফিরুন
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0203] selection:bg-red-600/30">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32 flex-grow max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main SOS Control */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-2">
                <Badge className="bg-red-600/20 text-red-500 border-red-600/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Emergency Hub</Badge>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                  নিরাপত্তা <br /><span className="text-red-600 italic">কমান্ড সেন্টার</span>
                </h1>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" onClick={() => setIsDiscreetMode(true)}
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-2xl h-12 px-6 font-bold flex items-center gap-2"
                >
                  <EyeOff className="h-4 w-4" /> ডিসক্রিট মোড
                </Button>
                <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-2xl h-12 w-12 p-0">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="flex justify-center relative z-10">
                <div className="relative">
                  {isSOSActive && <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20 scale-150" />}
                  <button 
                    onClick={isSOSActive ? stopTracking : startTracking}
                    className={`relative z-10 h-56 w-56 md:h-72 md:w-72 rounded-full border-8 border-white/5 bg-gradient-to-br from-red-600 to-red-900 shadow-[0_0_60px_rgba(220,38,38,0.4)] flex flex-col items-center justify-center transition-all active:scale-90 group ${isSOSActive ? 'opacity-90' : 'hover:scale-105'}`}
                  >
                    <ShieldAlert className={`h-20 w-20 md:h-28 md:w-28 text-white ${isSOSActive ? 'animate-pulse' : 'group-hover:rotate-12 transition-transform'}`} />
                    <span className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter mt-2">{isSOSActive ? 'STOP' : 'SOS'}</span>
                    <span className="text-white/60 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] mt-1">{isSOSActive ? 'Active Tracking' : 'Click to Alert'}</span>
                  </button>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="p-6 rounded-[2rem] bg-black/40 border border-white/5 backdrop-blur-md">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <History className="h-4 w-4 text-red-500" /> সাম্প্রতিক কার্যক্রম
                  </h3>
                  <div className="space-y-3">
                    {trackingLogs.length > 0 ? trackingLogs.map((log, i) => (
                      <div key={i} className="flex justify-between items-center text-[10px] font-medium">
                        <span className="text-white/40">{log.time}</span>
                        <span className="text-white/80">{log.status}</span>
                      </div>
                    )) : <p className="text-[10px] text-white/20 italic">কোনো সক্রিয় ট্র্যাকিং নেই</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/safety/chat" className="w-full">
                    <Button className="w-full bg-white text-[#7a1013] hover:bg-white/90 h-14 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95">
                      <Bot className="h-5 w-5" /> এআই সাপোর্ট চ্যাট (বিনা মূল্যে)
                    </Button>
                  </Link>
                  <Link href="/safety/helplines" className="w-full">
                    <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 h-14 rounded-2xl font-bold uppercase tracking-widest text-xs">
                      পুলিশ ও জরুরি হেল্পলাইন
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Live Map View */}
            <div className="h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl relative">
              {isSOSActive ? <SOSMap donors={[]} userLocation={userLocation} selectedDonor={null} onSelectDonor={() => {}} /> : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="p-6 rounded-full bg-white/5 text-white/20 mb-4"><MapPin className="h-12 w-12" /></div>
                  <h4 className="text-white font-bold text-lg mb-2">লাইভ ম্যাপ ভিউ</h4>
                  <p className="text-white/40 text-sm max-w-xs">SOS সক্রিয় করলে এখানে আপনার রিয়েল-টাইম অবস্থান দেখা যাবে।</p>
                </div>
              )}
              <div className="absolute top-6 left-6 z-[100] px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${isSOSActive ? 'bg-red-500 animate-pulse' : 'bg-white/20'}`} />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{isSOSActive ? 'Live Tracking Active' : 'GPS Standby'}</span>
              </div>
            </div>
          </div>

          {/* Sidebar Tools */}
          <div className="lg:col-span-4 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: PhoneCall, title: "জরুরি হেল্পলাইন", desc: "৯৯৯ ও ১০৯ এর সরাসরি সংযোগ", link: "/safety/helplines", color: "text-blue-400" },
                { icon: Bot, title: "এআই সাপোর্ট", desc: "মানসিক সহায়তা ও পরামর্শ", link: "/safety/chat", color: "text-pink-400" },
                { icon: MessageSquare, title: "বেনামী রিপোর্ট", desc: "পরিচয় গোপন রেখে অভিযোগ দিন", link: "/safety/report", color: "text-orange-400" },
                { icon: ShieldCheck, title: "আইনি অধিকার", desc: "নারী ও শিশু নির্যাতন দমন আইন", link: "/safety/education", color: "text-green-400" },
              ].map((tool, i) => (
                <Link key={i} href={tool.link}>
                  <Card className="bg-white/5 border-white/5 hover:bg-white/10 transition-all rounded-[2rem] p-6 group shadow-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl bg-white/5 ${tool.color} group-hover:scale-110 transition-transform`}><tool.icon className="h-6 w-6" /></div>
                      <div>
                        <h4 className="text-white font-bold text-base leading-tight">{tool.title}</h4>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider mt-1">{tool.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white/10 group-hover:text-white transition-all" />
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-red-600/10 to-transparent border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-orange-400" />
                <h4 className="text-white font-black text-xs uppercase tracking-widest">জরুরি বার্তা</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed italic">
                "বিপদে আতঙ্কিত না হয়ে শান্ত থাকুন। ওঙ্গন নিরাপত্তা ব্যবস্থা আপনার সহায়তায় সর্বদা সজাগ। আপনার স্মার্টফোনের পাওয়ার বাটন পরপর ৫ বার প্রেস করলেও SOS সক্রিয় হবে।"
              </p>
              <div className="h-px w-full bg-white/10" />
              <div className="flex items-center justify-between">
                <p className="text-[10px] text-white/30 uppercase font-bold tracking-[0.2em]">Ongon Shield v3.0</p>
                <Zap className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • ZERO TOLERANCE TO HARASSMENT
        </p>
      </footer>
    </div>
  );
}
