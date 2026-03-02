'use client';

import { useState, useEffect, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Phone, Droplet, Navigation, Crosshair, List, Map as MapIcon, Loader2, Info } from 'lucide-react';
import { bloodDonors } from '@/lib/blood-data';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function DonorsListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDonor, setSelectedDonor] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

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

  // Map scaling logic for simulation
  const centerLat = 23.75; // Approx center for Dhaka
  const centerLng = 90.40;
  const zoomFactor = 1500; // Scaling for visualization

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-red-500/30">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20">
        <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col lg:flex-row overflow-hidden relative">
          
          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex bg-[#1a0405] border-b border-white/5 p-2 gap-2 sticky top-0 z-40">
            <Button 
              variant={viewMode === 'list' ? 'default' : 'ghost'} 
              className={cn("flex-1 rounded-xl h-10 text-xs font-bold", viewMode === 'list' ? "bg-white text-red-600 shadow-lg" : "text-white/60")}
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4 mr-2" /> তালিকা
            </Button>
            <Button 
              variant={viewMode === 'map' ? 'default' : 'ghost'} 
              className={cn("flex-1 rounded-xl h-10 text-xs font-bold", viewMode === 'map' ? "bg-white text-red-600 shadow-lg" : "text-white/60")}
              onClick={() => setViewMode('map')}
            >
              <MapIcon className="h-4 w-4 mr-2" /> লাইভ ম্যাপ
            </Button>
          </div>

          {/* Sidebar: Search & Donor List */}
          <div className={cn(
            "w-full lg:w-[420px] flex flex-col border-r border-white/5 bg-[#0f0203] transition-all duration-300 z-30",
            viewMode === 'map' ? 'hidden lg:flex' : 'flex'
          )}>
            <div className="p-6 space-y-4 bg-[#0f0203] shadow-2xl z-40 border-b border-white/5">
              <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Droplet className="h-6 w-6 text-red-600 fill-red-600 animate-pulse" />
                  রক্তদাতা অনুসন্ধান
                </h1>
                <Badge className="bg-red-600 text-white animate-pulse text-[10px] font-bold">LIVE MAP</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 group-focus-within:text-red-500 transition-colors" />
                  <Input 
                    placeholder="শহর বা ব্লাড গ্রুপ দিয়ে খুঁজুন" 
                    className="bg-white/5 border-white/10 text-white pl-12 h-14 rounded-2xl focus:ring-red-600 focus:border-red-600/50 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={handleNearMe}
                  disabled={isLocating}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-14 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-red-900/20 active:scale-95 transition-all"
                >
                  {isLocating ? <Loader2 className="h-5 w-5 animate-spin" /> : <Crosshair className="h-5 w-5" />}
                  আমার কাছের রক্তদাতা খুঁজুন (GPS)
                </Button>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto px-4 md:px-6 py-6 space-y-4 scrollbar-hide">
              {filteredDonors.length > 0 ? filteredDonors.map((donor) => (
                <Card 
                  key={donor.id} 
                  className={cn(
                    "border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-3xl p-4 group relative overflow-hidden",
                    selectedDonor?.id === donor.id ? 'ring-2 ring-red-600 border-transparent bg-white/10' : ''
                  )}
                  onClick={() => {
                    setSelectedDonor(donor);
                    if (window.innerWidth < 1024) setViewMode('map');
                  }}
                >
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex flex-col items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-[10px] uppercase leading-none opacity-70">Group</span>
                        <span className="text-xl">{donor.group}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors">{donor.name}</h4>
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase tracking-widest font-bold mt-1">
                          <MapPin className="h-3.5 w-3.5 text-red-500" /> {donor.location}
                        </div>
                      </div>
                    </div>
                    {donor.distance !== undefined && (
                      <Badge variant="outline" className="text-[10px] border-red-500/30 text-red-400 bg-red-500/5">
                        {donor.distance.toFixed(1)} km
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 rounded-xl text-[10px] font-bold text-white/40 hover:text-white hover:bg-white/10">
                      <Info className="h-3 w-3 mr-1" /> বিস্তারিত
                    </Button>
                    <Link href={`tel:${donor.phone}`} className="flex-1">
                      <Button size="sm" className="w-full h-8 rounded-xl text-[10px] font-bold bg-white text-red-600 hover:bg-red-50">
                        <Phone className="h-3 w-3 mr-1" /> কল করুন
                      </Button>
                    </Link>
                  </div>
                </Card>
              )) : (
                <div className="text-center py-24">
                  <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                    <Search className="h-10 w-10 text-white/10" />
                  </div>
                  <p className="text-white/40 font-bold">কোনো দাতা পাওয়া যায়নি</p>
                  <p className="text-white/20 text-xs mt-2">অন্য কোনো এলাকা বা ব্লাড গ্রুপ দিয়ে চেষ্টা করুন।</p>
                </div>
              )}
            </div>
          </div>

          {/* Main Map Visual Component */}
          <div className={cn(
            "flex-grow relative bg-[#0a0a0a] overflow-hidden transition-all duration-500",
            viewMode === 'list' ? 'hidden lg:block' : 'block'
          )}>
            <div className="absolute inset-0 opacity-40">
              <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" 
                alt="Map Background" 
                fill 
                className="object-cover grayscale"
                onLoad={() => setIsMapLoaded(true)}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0f0203] via-transparent to-[#0f0203]" />
            </div>

            {/* Map Grid Overlay for simulation */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            {/* Simulated Live Markers */}
            <div className="absolute inset-0 z-10">
              {filteredDonors.map((donor) => {
                // Coordinate to Pixel Mapping (Simplified)
                const top = 50 - (donor.lat - centerLat) * zoomFactor;
                const left = 50 + (donor.lng - centerLng) * zoomFactor;

                return (
                  <div 
                    key={donor.id}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group"
                    style={{ top: `${top}%`, left: `${left}%` }}
                    onClick={() => setSelectedDonor(donor)}
                  >
                    <div className={cn(
                      "relative p-3 rounded-full shadow-2xl transition-all duration-300",
                      selectedDonor?.id === donor.id ? 'bg-red-600 scale-150 ring-4 ring-white/20' : 'bg-white text-red-600 hover:scale-125'
                    )}>
                      <Droplet className={cn("h-5 w-5", selectedDonor?.id === donor.id ? 'fill-white' : 'fill-red-600')} />
                      
                      {/* Badge on Marker */}
                      <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-800 text-white text-[8px] font-bold rounded-full flex items-center justify-center border border-white/20">
                        {donor.group}
                      </div>

                      {/* Radar Effect for Selected */}
                      {selectedDonor?.id === donor.id && (
                        <div className="absolute -inset-4 bg-red-600/30 rounded-full animate-ping" />
                      )}
                    </div>
                    
                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#1a0405] border border-white/10 text-white px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shadow-2xl z-50">
                      {donor.name} • {donor.group}
                    </div>
                  </div>
                );
              })}

              {/* User Current Location Pointer */}
              {userLocation && (
                <div 
                  className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    top: `${50 - (userLocation.lat - centerLat) * zoomFactor}%`, 
                    left: `${50 + (userLocation.lng - centerLng) * zoomFactor}%` 
                  }}
                >
                  <div className="relative">
                    <div className="h-6 w-6 bg-blue-600 rounded-full border-4 border-white shadow-2xl animate-pulse" />
                    <div className="absolute -inset-6 bg-blue-600/20 rounded-full animate-ping" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-blue-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                      আপনি এখানে
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Selected Donor Info Card (Overlay) */}
            {selectedDonor && (
              <div className="absolute bottom-8 left-0 right-0 px-4 md:px-0 flex justify-center z-50 animate-in slide-in-from-bottom-10 fade-in duration-500">
                <Card className="glass-card border-white/20 p-6 md:p-8 rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.8)] w-full max-w-lg border-b-8 border-red-600">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-5">
                      <div className="h-20 w-20 rounded-3xl bg-red-600 flex flex-col items-center justify-center text-white font-bold text-3xl shadow-2xl ring-4 ring-white/10">
                        <span className="text-[10px] uppercase opacity-60 font-black">Group</span>
                        {selectedDonor.group}
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{selectedDonor.name}</h2>
                        <p className="text-white/50 text-sm flex items-center gap-1.5 font-medium">
                          <MapPin className="h-4 w-4 text-red-500" /> {selectedDonor.location}
                        </p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full h-10 w-10 text-white/20 hover:text-white hover:bg-white/10" onClick={() => setSelectedDonor(null)}>
                      <Crosshair className="h-5 w-5 rotate-45" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md">
                      <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">শেষ দান</p>
                      <p className="text-sm text-white font-bold">{selectedDonor.lastDonated}</p>
                    </div>
                    <div className="p-4 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md">
                      <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">ভেরিফিকেশন</p>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/20 text-[10px] font-bold px-2">সক্রিয় দাতা</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link href={`tel:${selectedDonor.phone}`} className="flex-1">
                      <Button className="w-full h-16 bg-white text-red-700 hover:bg-white/90 font-black text-lg rounded-2xl shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2">
                        <Phone className="h-6 w-6" /> কল করুন
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1 h-16 border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-2xl font-bold transition-all">
                      <Navigation className="h-6 w-6 mr-2" /> লোকেশন
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Map Controls */}
            <div className="absolute top-8 right-8 flex flex-col gap-3 z-40">
              <Button size="icon" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white hover:text-red-600 rounded-2xl shadow-2xl h-12 w-12 md:h-14 md:w-14" onClick={() => window.location.reload()}>
                <Navigation className="h-6 w-6" />
              </Button>
              <Button size="icon" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white hover:text-red-600 rounded-2xl shadow-2xl h-12 w-12 md:h-14 md:w-14" onClick={handleNearMe}>
                <Crosshair className="h-6 w-6" />
              </Button>
            </div>

            {/* Empty State Instruction */}
            {!selectedDonor && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-6 pointer-events-none opacity-40">
                <div className="p-10 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 inline-block shadow-2xl">
                  <Droplet className="h-16 w-16 md:h-24 md:w-24 text-red-600/30 animate-pulse mx-auto fill-red-600" />
                </div>
                <p className="text-white/40 font-black uppercase tracking-[0.4em] text-xs md:text-sm">ম্যাপ থেকে রক্তদাতা নির্বাচন করুন</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}