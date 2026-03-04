'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Navigation, 
  Home, 
  Stethoscope, 
  PhoneCall, 
  Search, 
  ArrowLeft,
  ShieldCheck,
  Building2,
  Zap,
  Info
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import dynamic from 'next/dynamic';

const ResourceMap = dynamic(() => import('@/components/blood/BloodMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse rounded-xl" />
});

export default function ResourceLocator() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setType] = useState('all');

  const resources = [
    { id: 'r1', name: 'সাইক্লোন শেল্টার (সরকার)', type: 'shelter', group: 'Safe', location: 'মহেশখালী, কক্সবাজার', lat: 21.5167, lng: 91.9500, phone: '999' },
    { id: 'r2', name: 'উদ্ধার ও ত্রাণ কেন্দ্র', type: 'hospital', group: 'Help', location: 'সদর হাসপাতাল, চট্টগ্রাম', lat: 22.3333, lng: 91.8333, phone: '106' },
    { id: 'r3', name: 'জরুরি পানীয় জল বিতরণ', type: 'water', group: 'Drink', location: 'কালুরঘাট এলাকা', lat: 22.3833, lng: 91.8667, phone: '0' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32 flex-grow max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-2">
              <Link href="/disaster" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-4 group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">দুর্যোগ ব্যবস্থাপনা</span>
              </Link>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">রিসোর্স <span className="text-white/40">লোকেটর</span></h1>
              <p className="text-white/60 text-sm font-medium leading-relaxed">নিকটস্থ আশ্রয়কেন্দ্র, হাসপাতাল ও সহায়তা কেন্দ্র খুঁজে পেতে জিপিএস ব্যবহার করুন।</p>
            </div>

            <div className="space-y-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 group-focus-within:text-blue-400 transition-colors" />
                <Input 
                  placeholder="এলাকা বা রিসোর্স খুঁজুন" 
                  className="bg-white/5 border-white/10 text-white pl-12 h-12 rounded-xl focus:ring-blue-500/30"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {['all', 'shelter', 'hospital', 'food', 'water'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setType(type)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${filterType === type ? 'bg-blue-600 border-blue-500 text-white shadow-xl scale-105' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`}
                  >
                    {type === 'all' ? 'সব' : type === 'shelter' ? 'আশ্রয়কেন্দ্র' : type === 'hospital' ? 'হাসপাতাল' : type === 'food' ? 'খাবার' : 'পানি'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
              {resources.map((res) => (
                <Card key={res.id} className="bg-white/5 border-white/5 rounded-xl p-5 hover:bg-white/10 transition-all cursor-pointer group shadow-2xl relative overflow-hidden">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 group-hover:scale-110 transition-transform shadow-xl">
                        {res.type === 'shelter' ? <Home className="h-6 w-6" /> : <Stethoscope className="h-6 w-6" />}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-white font-bold text-sm leading-tight uppercase tracking-tight">{res.name}</h4>
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                          <MapPin className="h-3 w-3 text-red-500" /> {res.location}
                        </div>
                      </div>
                    </div>
                    <Link href={`tel:${res.phone}`}>
                      <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10 text-white/20 hover:text-green-500 hover:bg-green-500/10">
                        <PhoneCall className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="h-[600px] w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl relative">
              <ResourceMap 
                donors={resources} 
                userLocation={null} 
                selectedDonor={null} 
                onSelectDonor={() => {}} 
              />
              <div className="absolute top-6 left-6 z-[100] flex gap-2">
                <Badge className="bg-blue-600/80 backdrop-blur-md text-white border-0 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl">
                  Resource Navigator Active
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/5 border-white/10 rounded-xl flex items-center gap-4 shadow-xl">
                <div className="p-3 rounded-xl bg-green-500/20 text-green-400"><ShieldCheck className="h-6 w-6" /></div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-widest">যাচাইকৃত তথ্য</h4>
                  <p className="text-white/40 text-[10px]">তথ্যগুলো সরাসরি প্রশাসন ও NGO কর্তৃক প্রদত্ত।</p>
                </div>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 rounded-xl flex items-center gap-4 shadow-xl">
                <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400"><Zap className="h-6 w-6" /></div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-widest">লাইভ আপডেট</h4>
                  <p className="text-white/40 text-[10px]">জরুরি পরিস্থিতিতে নতুন সেন্টার যোগ করা হচ্ছে।</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON RESOURCE FINDER • COMMUNITY RESILIENCE v2.1
        </p>
      </footer>
    </div>
  );
}
