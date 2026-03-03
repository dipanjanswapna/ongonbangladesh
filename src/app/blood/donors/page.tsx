'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Phone, Droplet, Navigation, Crosshair, List, Map as MapIcon, Loader2, Info, ChevronRight } from 'lucide-react';
import { bloodDonors } from '@/lib/blood-data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Dynamically import the Map component to avoid SSR issues with Leaflet
const BloodMap = dynamic(() => import('@/components/blood/BloodMap'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <Droplet className="h-16 w-16 text-red-600 animate-pulse fill-red-600" />
        <div className="absolute inset-0 bg-red-600/20 blur-2xl animate-pulse rounded-full" />
      </div>
      <p className="text-white/20 font-black uppercase tracking-[0.4em] text-xs animate-pulse">ম্যাপ লোড হচ্ছে...</p>
    </div>
  )
});

export default function DonorsListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDonor, setSelectedDonor] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  // Haversine formula to calculate distance in km
  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const handleNearMe = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setIsLocating(false);
          setViewMode('map');
        },
        () => {
          alert("আপনার লোকেশন পাওয়া যায়নি। দয়া করে জিপিএস পারমিশন চেক করুন।");
          setIsLocating(false);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("আপনার ব্রাউজার জিপিএস সাপোর্ট করে না।");
      setIsLocating(false);
    }
  };

  const filteredDonors = useMemo(() => {
    let result = bloodDonors.filter(donor => 
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      donor.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.group.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (userLocation) {
      result = result.map(donor => ({
        ...donor,
        distance: getDistance(userLocation.lat, userLocation.lng, donor.lat, donor.lng)
      })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    return result;
  }, [searchTerm, userLocation]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] selection:bg-red-600/30">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20">
        <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col lg:flex-row overflow-hidden relative">
          
          {/* Mobile View Toggle */}
          <div className="lg:hidden flex bg-[#1a0405] border-b border-white/5 p-2 gap-2 sticky top-0 z-[60]">
            <Button 
              variant={viewMode === 'list' ? 'default' : 'ghost'} 
              className={cn(
                "flex-1 rounded-xl h-11 text-xs font-bold transition-all", 
                viewMode === 'list' ? "bg-white text-red-600 shadow-xl" : "text-white/40"
              )}
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4 mr-2" /> তালিকা
            </Button>
            <Button 
              variant={viewMode === 'map' ? 'default' : 'ghost'} 
              className={cn(
                "flex-1 rounded-xl h-11 text-xs font-bold transition-all", 
                viewMode === 'map' ? "bg-white text-red-600 shadow-xl" : "text-white/40"
              )}
              onClick={() => setViewMode('map')}
            >
              <MapIcon className="h-4 w-4 mr-2" /> লাইভ ম্যাপ
            </Button>
          </div>

          {/* Sidebar Section */}
          <div className={cn(
            "w-full lg:w-[420px] flex flex-col border-r border-white/5 bg-[#0f0203] transition-all duration-300 z-50",
            viewMode === 'map' ? 'hidden lg:flex' : 'flex'
          )}>
            {/* Search Header */}
            <div className="p-6 space-y-4 bg-[#0f0203] border-b border-white/5 shadow-2xl z-20">
              <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
                  <Droplet className="h-6 w-6 text-red-600 fill-red-600 animate-pulse" />
                  রক্তদাতা খুঁজুন
                </h1>
                <Badge className="bg-red-600 text-white animate-pulse text-[10px] font-black tracking-widest px-2 py-0.5">LIVE</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 group-focus-within:text-red-600 transition-colors" />
                  <Input 
                    placeholder="শহর বা ব্লাড গ্রুপ (উদা: A+)" 
                    className="bg-white/5 border-white/10 text-white pl-12 h-14 rounded-2xl focus:ring-red-600/50 focus:border-red-600 transition-all placeholder:text-white/20"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={handleNearMe}
                  disabled={isLocating}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black h-14 rounded-2xl flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(220,38,38,0.2)] active:scale-95 transition-all group"
                >
                  {isLocating ? <Loader2 className="h-5 w-5 animate-spin" /> : <Crosshair className="h-5 w-5 group-hover:rotate-90 transition-transform" />}
                  Blood Near Me (GPS)
                </Button>
              </div>
            </div>

            {/* Donor List - Smooth Scroll System */}
            <div className="flex-grow overflow-y-auto px-4 md:px-6 py-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {filteredDonors.length > 0 ? filteredDonors.map((donor) => (
                <Card 
                  key={donor.id} 
                  className={cn(
                    "border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-[2rem] p-5 group relative overflow-hidden",
                    selectedDonor?.id === donor.id ? 'ring-2 ring-red-600 bg-white/10 shadow-2xl' : ''
                  )}
                  onClick={() => {
                    setSelectedDonor(donor);
                    if (window.innerWidth < 1024) setViewMode('map');
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-[1.25rem] bg-gradient-to-br from-red-600 to-red-800 flex flex-col items-center justify-center text-white font-black shadow-lg group-hover:scale-105 transition-transform duration-500">
                        <span className="text-[9px] uppercase leading-none opacity-60">Group</span>
                        <span className="text-2xl">{donor.group}</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-white font-bold text-lg leading-tight group-hover:text-red-400 transition-colors">{donor.name}</h4>
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase tracking-widest font-black">
                          <MapPin className="h-3.5 w-3.5 text-red-600" /> {donor.location}
                        </div>
                        {donor.distance !== undefined && (
                          <div className="text-[10px] text-green-400 font-black flex items-center gap-1">
                            <Navigation className="h-3 w-3" /> {donor.distance.toFixed(1)} km দূরে
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white/10 group-hover:text-red-600 transition-colors" />
                  </div>
                  
                  <div className="mt-5 flex gap-2">
                    <Link href={`tel:${donor.phone}`} className="flex-1">
                      <Button className="w-full h-10 rounded-xl bg-white text-red-700 font-black text-xs hover:bg-white/90 shadow-lg">
                        <Phone className="h-3.5 w-3.5 mr-2" /> কল করুন
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      className="h-10 px-4 rounded-xl text-white/40 hover:text-white hover:bg-white/10 text-[10px] font-bold"
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              )) : (
                <div className="text-center py-24 px-6">
                  <div className="h-24 w-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/5">
                    <Search className="h-10 w-10 text-white/10" />
                  </div>
                  <h3 className="text-white font-bold text-lg">কোনো দাতা পাওয়া যায়নি</h3>
                  <p className="text-white/20 text-xs mt-2 max-w-[200px] mx-auto leading-relaxed">আপনার এলাকা বা ব্লাড গ্রুপটি পুনরায় পরীক্ষা করে দেখুন।</p>
                </div>
              )}
            </div>
          </div>

          {/* Live Map Interface */}
          <div className={cn(
            "flex-grow relative bg-[#0a0a0a] overflow-hidden transition-all duration-700",
            viewMode === 'list' ? 'hidden lg:block' : 'block'
          )}>
            <BloodMap 
              donors={filteredDonors} 
              userLocation={userLocation} 
              selectedDonor={selectedDonor}
              onSelectDonor={(donor) => setSelectedDonor(donor)}
            />

            {/* Selection Card Overlay */}
            {selectedDonor && (
              <div className="absolute bottom-6 md:bottom-10 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-md z-[1000] animate-in slide-in-from-bottom-10 duration-500">
                <Card className="glass-card border-white/20 p-6 md:p-8 rounded-[3rem] shadow-[0_32px_80px_rgba(0,0,0,0.9)] border-b-8 border-red-600">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-5">
                      <div className="h-20 w-20 rounded-[2rem] bg-red-600 flex flex-col items-center justify-center text-white font-black text-4xl shadow-2xl ring-4 ring-white/10">
                        <span className="text-[10px] uppercase opacity-50 mb-1">Group</span>
                        {selectedDonor.group}
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-white tracking-tighter">{selectedDonor.name}</h2>
                        <p className="text-white/50 text-sm flex items-center gap-1.5 font-bold mt-1">
                          <MapPin className="h-4 w-4 text-red-600" /> {selectedDonor.location}
                        </p>
                      </div>
                    </div>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="rounded-full h-12 w-12 text-white/20 hover:text-white hover:bg-white/10" 
                      onClick={() => setSelectedDonor(null)}
                    >
                      <Crosshair className="h-6 w-6 rotate-45" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">রক্তদান স্থিতি</p>
                      <Badge className="bg-green-500/20 text-green-400 border-0 text-[10px] font-black">উপলব্ধ</Badge>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">শেষবার দান</p>
                      <p className="text-xs text-white font-bold">{selectedDonor.lastDonated}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link href={`tel:${selectedDonor.phone}`} className="flex-1">
                      <Button className="w-full h-16 bg-white text-red-700 hover:bg-white/90 font-black text-xl rounded-2xl shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3">
                        <Phone className="h-7 w-7" /> কল দিন
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="h-16 w-16 md:w-20 border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-2xl flex items-center justify-center transition-all"
                      onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedDonor.lat},${selectedDonor.lng}`, '_blank')}
                    >
                      <Navigation className="h-7 w-7" />
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Map UI Controls */}
            <div className="absolute top-6 right-6 flex flex-col gap-3 z-[1000]">
              <Button 
                size="icon" 
                className="bg-[#0f0203]/80 backdrop-blur-2xl border border-white/10 text-white hover:bg-white hover:text-red-600 rounded-2xl shadow-2xl h-14 w-14 transition-all" 
                onClick={() => window.location.reload()}
              >
                <Navigation className="h-6 w-6" />
              </Button>
              <Button 
                size="icon" 
                className="bg-[#0f0203]/80 backdrop-blur-2xl border border-white/10 text-white hover:bg-white hover:text-red-600 rounded-2xl shadow-2xl h-14 w-14 transition-all" 
                onClick={handleNearMe}
              >
                <Crosshair className="h-6 w-6" />
              </Button>
            </div>

            {/* Map Hint */}
            {!selectedDonor && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="text-center space-y-4">
                  <div className="h-32 w-32 md:h-48 md:w-48 rounded-full border-2 border-dashed border-white/10 animate-[spin_20s_linear_infinite] flex items-center justify-center">
                    <Droplet className="h-16 w-16 md:h-24 md:w-24 text-red-600" />
                  </div>
                  <p className="text-white/40 font-black uppercase tracking-[0.5em] text-xs md:text-sm">লাইভ ম্যাপ ব্রাউজ করুন</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
