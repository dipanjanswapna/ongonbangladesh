'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  Wind, 
  Droplets, 
  Zap, 
  Navigation, 
  Clock, 
  Bell, 
  ArrowLeft,
  Activity,
  Info,
  Map as MapIcon
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import dynamic from 'next/dynamic';

const SOSMap = dynamic(() => import('@/components/blood/BloodMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse rounded-xl" />
});

export default function DisasterAlerts() {
  const [activeAlerts] = useState([
    { id: 1, type: 'cyclone', title: 'ঘূর্ণিঝড় সতর্কতা: মোখা আপডেট', severity: 'high', time: '১০ মিনিট আগে', location: 'চট্টগ্রাম ও কক্সবাজার উপকূল', desc: 'বঙ্গোপসাগরে সৃষ্ট গভীর নিম্নচাপটি ঘূর্ণিঝড়ে রূপ নিতে পারে। মৎস্যজীবীদের গভীর সমুদ্রে না যাওয়ার পরামর্শ।' },
    { id: 2, type: 'flood', title: 'বন্যা পূর্বাভাস', severity: 'medium', time: '১ ঘণ্টা আগে', location: 'সিলেট ও সুনামগঞ্জ এলাকা', desc: 'টানা বর্ষণে সুরমা ও কুশিয়ারা নদীর পানি বিপৎসীমার ওপর দিয়ে প্রবাহিত হতে পারে।' },
    { id: 3, type: 'weather', title: 'কালবৈশাখী ঝড়', severity: 'low', time: '৩ ঘণ্টা আগে', location: 'রাজশাহী ও পাবনা জেলা', desc: 'বজ্রপাতসহ তীব্র ঝড় হওয়ার সম্ভাবনা রয়েছে। নিরাপদ আশ্রয়ে থাকুন।' },
  ]);

  const hazardMarkers = [
    { id: 'h1', name: 'উচ্চ ঘূর্ণিঝড় ঝুঁকি এলাকা', group: 'Danger', location: 'কক্সবাজার সমুদ্র সৈকত', lat: 21.4272, lng: 91.9702, phone: '0' },
    { id: 'h2', name: 'পানি বিপৎসীমার উপরে', group: 'Flood', location: 'সিলেট পয়েন্ট', lat: 24.8917, lng: 91.8667, phone: '0' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-500/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32 flex-grow max-w-7xl">
        <Link href="/disaster" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">ফিরে যান</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Alerts Feed */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <Badge className="bg-red-600/20 text-red-500 border-red-600/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Real-time Feed</Badge>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">লাইভ <span className="text-white/40">অ্যালার্ট</span></h1>
            </div>

            <div className="space-y-4">
              {activeAlerts.map((alert) => (
                <Card key={alert.id} className="bg-white/5 border-white/5 rounded-xl overflow-hidden shadow-2xl relative group">
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${alert.severity === 'high' ? 'bg-red-600' : alert.severity === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'}`} />
                  <CardHeader className="p-6 pb-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                          <Clock className="h-3 w-3" /> {alert.time}
                        </div>
                        <CardTitle className="text-white text-lg font-black uppercase tracking-tight group-hover:text-white/80 transition-colors">{alert.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className={`border-white/10 ${alert.severity === 'high' ? 'text-red-500' : 'text-orange-400'} text-[8px] font-black`}>
                        {alert.severity === 'high' ? 'জরুরি' : 'সতর্কতা'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 space-y-4">
                    <div className="flex items-center gap-2 text-white/60 text-xs font-bold">
                      <Navigation className="h-3 w-3 text-white/20" /> {alert.location}
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed font-medium italic">"{alert.desc}"</p>
                    <Button variant="link" className="p-0 h-auto text-white/40 hover:text-white text-[10px] font-bold uppercase tracking-widest">আরও জানুন</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full bg-white text-[#7a1013] hover:bg-white/90 h-14 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl transition-all active:scale-95">
              <Bell className="h-4 w-4 mr-2" /> নোটিফিকেশন অন করুন
            </Button>
          </div>

          {/* Hazard Map & Weather Widgets */}
          <div className="lg:col-span-7 space-y-8">
            <div className="h-[500px] w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl relative">
              <SOSMap 
                donors={hazardMarkers} 
                userLocation={null} 
                selectedDonor={null} 
                onSelectDonor={() => {}} 
              />
              <div className="absolute top-6 left-6 z-[100] px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                <Activity className="h-3 w-3 text-red-500 animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">বিপদ এলাকা মানচিত্র</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-6 bg-white/5 border-white/10 rounded-xl space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-white/40">
                  <Wind className="h-4 w-4" />
                  <p className="text-[10px] uppercase font-black tracking-widest">বাতাস</p>
                </div>
                <h3 className="text-2xl font-black text-white leading-none">১৮ <span className="text-xs text-white/40">কিমি/ঘ</span></h3>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 rounded-xl space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-white/40">
                  <Droplets className="h-4 w-4 text-blue-400" />
                  <p className="text-[10px] uppercase font-black tracking-widest">আর্দ্রতা</p>
                </div>
                <h3 className="text-2xl font-black text-white leading-none">৮৫%</h3>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 rounded-xl space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-white/40">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <p className="text-[10px] uppercase font-black tracking-widest">বজ্রঝড়</p>
                </div>
                <h3 className="text-2xl font-black text-white leading-none">নিম্ন</h3>
              </Card>
            </div>

            <Card className="p-8 bg-white/5 border border-white/10 rounded-xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 text-orange-400 mb-4">
                <Info className="h-6 w-6" />
                <h4 className="text-sm font-black uppercase tracking-widest">সতর্ক বার্তা</h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed italic font-medium">
                "আবহাওয়ার পূর্বাভাস অনুযায়ী আগামী ৪৮ ঘণ্টা উপকূলীয় এলাকায় ভারী বৃষ্টিপাত হতে পারে। জরুরি নথিপত্র ও ওষুধ শুকনা স্থানে রাখুন।"
              </p>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON ALERTS • LIVE MONITORING SYSTEM v4.0
        </p>
      </footer>
    </div>
  );
}
