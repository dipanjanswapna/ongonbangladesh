'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Phone, Droplet, Navigation, Crosshair, List, Map as MapIcon, Loader2, Info, ChevronRight, ArrowLeft, X } from 'lucide-react';
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
          // Auto-switch to map on mobile when locating
          if (window.innerWidth < 1024) setViewMode('map');
        },
        () => {
          setIsLocating(false);
        },
        { enableHighAccuracy: true }
      );
    } else {
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
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] selection:bg-red-600/30 overflow-hidden">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20 overflow-hidden h-[100dvh]">
        <div className="h-full flex flex-col lg:flex-row overflow-hidden relative">
          
          {/* Mobile View Toggle - Floating at bottom */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[1001] bg-black/80 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full flex gap-1 shadow-2xl">
            <Button 
              size="sm"
              variant={viewMode === 'list' ? 'default' : 'ghost'} 
              className={cn(
                "rounded-full px-6 h-10 text-[10px] font-black uppercase tracking-widest transition-all", 
                viewMode === 'list' ? "bg-red-600 text-white shadow-xl" : "text-white/40 hover:text-white"
              )}
              onClick={() => setViewMode('list')}
            >
              <List className="h-3.5 w-3.5 mr-2" /> তালিকা
            </Button>
            <Button 
              size="sm"
              variant={viewMode === 'map' ? 'default' : 'ghost'} 
              className={cn(
                "rounded-full px-6 h-10 text-[10px] font-black uppercase tracking-widest transition-all", 
                viewMode === 'map' ? "bg-red-600 text-white shadow-xl" : "text-white/40 hover:text-white"
              )}
              onClick={() => setViewMode('map')}
            >
              <MapIcon className="h-3.5 w-3.5 mr-2" /> ম্যাপ
            </Button>
          </div>

          {/* Sidebar Section */}
          <aside className={cn(
            "w-full lg:w-[400px] h-full flex flex-col border-r border-white/5 bg-[#0f0203] z-[50] shrink-0 transition-transform duration-300",
            viewMode === 'map' ? 'hidden lg:flex' : 'flex'
          )}>
            {/* Sidebar Header */}
            <div className="p-6 space-y-4 bg-[#0f0203] border-b border-white/5 shrink-0">
              <div className="flex items-center justify-between">
                <Link href="/blood" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">ফিরে যান</span>
                </Link>
                <Badge className="bg-red-600/10 text-red-500 border-red-500/20 text-[9px] font-black tracking-widest px-2 py-0.5">LIVE PORTAL</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <Input 
                    placeholder="শহর বা ব্লাড গ্রুপ (উদা: A+)" 
                    className="bg-white/5 border-white/10 text-white pl-12 h-12 rounded-2xl focus:ring-red-600/50 focus:border-red-600 transition-all placeholder:text-white/20 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={handleNearMe}
                  disabled={isLocating}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black h-12 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 group text-xs uppercase tracking-wider"
                >
                  {isLocating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Crosshair className="h-4 w-4" />}
                  নিকটস্থ দাতা খুঁজুন (GPS)
                </Button>
              </div>
            </div>

            {/* Donor List */}
            <div className="flex-grow overflow-y-auto px-4 py-6 space-y-4 custom-scrollbar scroll-smooth pb-28 lg:pb-6">
              {filteredDonors.length > 0 ? filteredDonors.map((donor) => (
                <Card 
                  key={donor.id} 
                  className={cn(
                    "border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-[2rem] p-5 group relative overflow-hidden",
                    selectedDonor?.id === donor.id ? 'ring-2 ring-red-600 bg-white/10 shadow-xl' : ''
                  )}
                  onClick={() => {
                    setSelectedDonor(donor);
                    if (window.innerWidth < 1024) setViewMode('map');
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex flex-col items-center justify-center text-white font-black shadow-lg">
                        <span className="text-[8px] uppercase leading-none opacity-60 mb-0.5">Group</span>
                        <span className="text-2xl">{donor.group}</span>
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-white font-bold text-lg leading-tight">{donor.name}</h4>
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                          <MapPin className="h-3.5 w-3.5 text-red-600" /> {donor.location}
                        </div>
                        {donor.distance !== undefined && (
                          <div className="text-[10px] text-green-400 font-black flex items-center gap-1 mt-1">
                            <Navigation className="h-3 w-3" /> {donor.distance.toFixed(1)} km দূরে
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white/10 group-hover:text-red-600 transition-colors" />
                  </div>
                  
                  <div className="mt-5 flex gap-2">
                    <Link href={`tel:${donor.phone}`} className="flex-1" onClick={(e) => e.stopPropagation()}>
                      <Button className="w-full h-10 rounded-xl bg-white text-red-700 font-black text-[11px] hover:bg-white/90 shadow-lg uppercase tracking-wider">
                        <Phone className="h-3.5 w-3.5 mr-2" /> কল করুন
                      </Button>
                    </Link>
                  </div>
                </Card>
              )) : (
                <div className="text-center py-24 px-6">
                  <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/5">
                    <Search className="h-8 w-8 text-white/10" />
                  </div>
                  <h3 className="text-white font-bold text-base">দাতা পাওয়া যায়নি</h3>
                  <p className="text-white/20 text-[10px] mt-2 max-w-[180px] mx-auto leading-relaxed">আপনার এলাকা বা ব্লাড গ্রুপটি পুনরায় পরীক্ষা করে দেখুন।</p>
                </div>
              )}
            </div>
          </aside>

          {/* Map Section */}
          <div className={cn(
            "flex-grow relative bg-[#0a0a0a] overflow-hidden",
            viewMode === 'list' ? 'hidden lg:block' : 'block'
          )}>
            <BloodMap 
              donors={filteredDonors} 
              userLocation={userLocation} 
              selectedDonor={selectedDonor}
              onSelectDonor={(donor) => setSelectedDonor(donor)}
            />

            {/* Selection Card Overlay - Fixed UX for mobile and desktop */}
            {selectedDonor && (
              <div className="absolute bottom-24 lg:bottom-10 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-md z-[1000] animate-in slide-in-from-bottom-10 duration-500">
                <Card className="glass-card border-white/20 p-6 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border-b-8 border-red-600">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-3xl bg-red-600 flex flex-col items-center justify-center text-white font-black text-3xl shadow-xl ring-4 ring-white/5 shrink-0">
                        <span className="text-[8px] uppercase opacity-50 mb-0.5">Group</span>
                        {selectedDonor.group}
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-xl font-black text-white truncate">{selectedDonor.name}</h2>
                        <p className="text-white/50 text-xs flex items-center gap-1.5 font-bold mt-1">
                          <MapPin className="h-3.5 w-3.5 text-red-600" /> {selectedDonor.location}
                        </p>
                      </div>
                    </div>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="rounded-full h-10 w-10 text-white/20 hover:text-white hover:bg-white/10" 
                      onClick={() => setSelectedDonor(null)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`tel:${selectedDonor.phone}`} className="flex-1">
                      <Button className="w-full h-14 bg-white text-red-700 hover:bg-white/90 font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 uppercase tracking-tight">
                        <Phone className="h-5 w-5" /> এখনই কল দিন
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="h-14 w-14 border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-2xl flex items-center justify-center transition-all"
                      onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedDonor.lat},${selectedDonor.lng}`, '_blank')}
                    >
                      <Navigation className="h-6 w-6" />
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
