
'use client';

import { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ShieldAlert, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  AlertCircle, 
  Zap,
  EyeOff,
  Settings,
  ChevronRight,
  History,
  CloudSun,
  Wind,
  Sunrise,
  Bot,
  BookOpen,
  Map as MapIcon,
  Navigation,
  WifiOff
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const SOSMap = dynamic(() => import('@/components/blood/BloodMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse rounded-xl" />
});

export default function SafetyHub() {
  const { toast } = useToast();
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [isDiscreetMode, setIsDiscreetMode] = useState(false);
  const [showSafeRoutes, setShowSafeRoutes] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [trackingLogs, setTrackingLogs] = useState<{time: string, status: string}[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const watchId = useRef<number | null>(null);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const safetyMarkers = [
    { id: 's1', name: 'পুলিশ চেকপোস্ট (নিরাপদ)', group: 'Safe', location: 'ধানমন্ডি ২৭', lat: 23.7509, lng: 90.3843, phone: '999' },
    { id: 's2', name: 'উচ্চ ঝুঁকি এলাকা (সতর্ক থাকুন)', group: 'Risk', location: 'হাতিরঝিল (অন্ধকার এলাকা)', lat: 23.7709, lng: 90.4043, phone: '0' },
  ];

  const startTracking = () => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      toast({ title: "জিপিএস নট সাপোর্টেড", variant: "destructive" });
      return;
    }

    setIsSOSActive(true);
    const logMsg = isOnline ? "SOS সংকেত পাঠানো হয়েছে" : "অফলাইন SOS রেকর্ড করা হয়েছে (SMS Fallback)";
    setTrackingLogs(prev => [{ time: new Date().toLocaleTimeString(), status: logMsg }, ...prev]);

    if (!isOnline) {
      toast({ 
        title: "আপনি অফলাইনে আছেন", 
        description: "আপনার লোকেশন রেকর্ড করা হয়েছে। জরুরি সাহায্যের জন্য এসএমএস বাটন ব্যবহার করুন।",
        variant: "destructive"
      });
    }

    watchId.current = navigator.geolocation.watchPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(coords);
        if (!isOnline) {
          localStorage.setItem('last_sos_location', JSON.stringify(coords));
        }
        setTrackingLogs(prev => [{ time: new Date().toLocaleTimeString(), status: `লোকেশন আপডেট: ${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}` }, ...prev].slice(0, 5));
      },
      () => {
        toast({ title: "লোকেশন এরর", description: "আপনার লোকেশন পাওয়া যাচ্ছে না।", variant: "destructive" });
      },
      { enableHighAccuracy: true }
    );
  };

  const stopTracking = () => {
    if (watchId.current) {
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }
    setIsSOSActive(false);
    toast({ title: "ট্র্যাকিং বন্ধ করা হয়েছে" });
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
          <button onClick={() => setIsDiscreetMode(false)} className="opacity-0 w-10 h-10 cursor-default">Exit</button>
        </div>

        <div className="space-y-6">
          <Card className="p-8 glass-card border-white/10 rounded-xl shadow-2xl relative overflow-hidden">
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
            <div className="p-6 glass-card rounded-xl border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white/40">
                <Wind className="h-4 w-4" />
                <p className="text-[10px] uppercase font-black tracking-widest">বাতাস</p>
              </div>
              <p className="text-lg font-bold text-white">১২ কিমি/ঘণ্টা</p>
            </div>
            <div className="p-6 glass-card rounded-xl border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white/40">
                <Sunrise className="h-4 w-4" />
                <p className="text-[10px] uppercase font-black tracking-widest">সূর্যোদয়</p>
              </div>
              <p className="text-lg font-bold text-white">০৫:৪৫ AM</p>
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
        {!isOnline && (
          <div className="mb-6 p-4 bg-red-600/20 border border-red-600/30 rounded-xl flex items-center justify-between animate-in slide-in-from-top-4">
            <div className="flex items-center gap-3">
              <WifiOff className="h-5 w-5 text-red-500" />
              <p className="text-xs font-bold text-white">আপনি অফলাইনে আছেন। জরুরি প্রয়োজনে এসএমএস ফলব্যাক ব্যবহার করুন।</p>
            </div>
            <Link href="sms:999?body=SOS! My location: http://maps.google.com/maps?q=">
              <Button size="sm" className="bg-white text-red-600 font-bold rounded-lg h-8 text-[10px] uppercase">SMS SOS</Button>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
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
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl h-12 px-6 font-bold flex items-center gap-2"
                >
                  <EyeOff className="h-4 w-4" /> ডিসক্রিট মোড
                </Button>
                <Button 
                  variant="outline" onClick={() => setShowSafeRoutes(!showSafeRoutes)}
                  className={cn(
                    "border-white/10 rounded-xl h-12 px-6 font-bold flex items-center gap-2 transition-all",
                    showSafeRoutes ? "bg-green-600 text-white border-green-500" : "bg-white/5 text-white hover:bg-white/10"
                  )}
                >
                  <MapIcon className="h-4 w-4" /> {showSafeRoutes ? 'রুট ম্যাপ অফ' : 'সেফ রুট ম্যাপ'}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 overflow-hidden relative shadow-2xl">
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
                <div className="p-6 rounded-xl bg-black/40 border border-white/5 backdrop-blur-md">
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
                    <Button className="w-full bg-white text-[#7a1013] hover:bg-white/90 h-14 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95">
                      <Bot className="h-5 w-5" /> এআই সাপোর্ট চ্যাট (বিনা মূল্যে)
                    </Button>
                  </Link>
                  {!isOnline && (
                    <Link href="tel:999" className="w-full">
                      <Button className="w-full bg-red-600 text-white font-black h-14 rounded-xl shadow-xl flex items-center justify-center gap-2">
                        <PhoneCall className="h-5 w-5" /> সরাসরি কল (৯৯৯)
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="h-[400px] w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl relative">
              <SOSMap 
                donors={showSafeRoutes ? safetyMarkers : []} 
                userLocation={userLocation} 
                selectedDonor={null} 
                onSelectDonor={() => {}} 
              />
              <div className="absolute top-6 left-6 z-[100] px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${isSOSActive ? 'bg-red-500 animate-pulse' : 'bg-white/20'}`} />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{showSafeRoutes ? 'Safe Route View' : isSOSActive ? 'Live Tracking Active' : 'GPS Standby'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: PhoneCall, title: "জরুরি হেল্পলাইন", desc: "৯৯৯ ও ১০৯ এর সরাসরি সংযোগ", link: "/safety/helplines", color: "text-blue-400" },
                { icon: Bot, title: "এআই সাপোর্ট", desc: "মানসিক সহায়তা ও পরামর্শ", link: "/safety/chat", color: "text-pink-400" },
                { icon: BookOpen, title: "সচেতনতা ও শিক্ষা", desc: "আইনি অধিকার ও আত্মরক্ষা টিপস", link: "/safety/education", color: "text-green-400" },
                { icon: MessageSquare, title: "বেনামী রিপোর্ট ও সার্ভে", desc: "পরিচয় গোপন রেখে অভিযোগ দিন", link: "/safety/report", color: "text-orange-400" },
              ].map((tool, i) => (
                <Link key={i} href={tool.link}>
                  <Card className="bg-white/5 border-white/5 hover:bg-white/10 transition-all rounded-xl p-6 group shadow-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-white/5 ${tool.color} group-hover:scale-110 transition-transform`}><tool.icon className="h-6 w-6" /></div>
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
          </div>
        </div>
      </main>
    </div>
  );
}
