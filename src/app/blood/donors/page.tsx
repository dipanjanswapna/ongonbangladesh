'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Phone, Droplet, Navigation, Crosshair, List, Map as MapIcon, Loader2 } from 'lucide-react';
import { bloodDonors } from '@/lib/blood-data';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function DonorsListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDonor, setSelectedDonor] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [sortedDonors, setSortedDonors] = useState(bloodDonors);

  // Calculate distance between two points (Haversine formula simplified for mock)
  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // km
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
          
          // Sort donors by distance
          const sorted = [...bloodDonors].sort((a, b) => {
            const distA = getDistance(latitude, longitude, a.lat, a.lng);
            const distB = getDistance(latitude, longitude, b.lat, b.lng);
            return distA - distB;
          });
          
          setSortedDonors(sorted);
          setIsLocating(false);
          setViewMode('list');
        },
        () => {
          alert("অবস্থান পাওয়া যায়নি। দয়া করে GPS অন করুন।");
          setIsLocating(false);
        }
      );
    }
  };

  const filteredDonors = sortedDonors.filter(donor => 
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    donor.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-red-500/30">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20">
        <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col lg:flex-row overflow-hidden relative">
          
          {/* Mobile View Toggler */}
          <div className="lg:hidden flex bg-[#1a0405] border-b border-white/5 p-2 gap-2 sticky top-0 z-40">
            <Button 
              variant={viewMode === 'list' ? 'default' : 'ghost'} 
              className={cn("flex-1 rounded-xl h-10 text-xs font-bold", viewMode === 'list' ? "bg-white text-red-600" : "text-white/60")}
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4 mr-2" /> তালিকা
            </Button>
            <Button 
              variant={viewMode === 'map' ? 'default' : 'ghost'} 
              className={cn("flex-1 rounded-xl h-10 text-xs font-bold", viewMode === 'map' ? "bg-white text-red-600" : "text-white/60")}
              onClick={() => setViewMode('map')}
            >
              <MapIcon className="h-4 w-4 mr-2" /> ম্যাপ
            </Button>
          </div>

          {/* Search & List Sidebar */}
          <div className={cn(
            "w-full lg:w-[400px] flex flex-col border-r border-white/5 bg-[#0f0203] transition-all duration-300 overflow-y-auto",
            viewMode === 'map' ? 'hidden lg:flex' : 'flex'
          )}>
            <div className="p-6 space-y-4 sticky top-0 bg-[#0f0203] z-20 pb-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">রক্তদাতা অনুসন্ধান</h1>
                <Badge className="bg-red-600 text-white animate-pulse">LIVE</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input 
                    placeholder="শহর বা ব্লাড গ্রুপ দিয়ে খুঁজুন" 
                    className="bg-white/5 border-white/10 text-white pl-10 h-12 rounded-2xl focus:ring-red-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={handleNearMe}
                  disabled={isLocating}
                  className="w-full bg-white/10 border border-white/10 text-white hover:bg-white hover:text-red-600 font-bold h-12 rounded-2xl flex items-center justify-center gap-2"
                >
                  {isLocating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Crosshair className="h-4 w-4" />}
                  আমার কাছের রক্তদাতা খুঁজুন
                </Button>
              </div>
            </div>

            <div className="flex-grow px-4 md:px-6 space-y-4 pb-10">
              {filteredDonors.length > 0 ? filteredDonors.map((donor) => (
                <Card 
                  key={donor.id} 
                  className={cn(
                    "border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-[1.5rem] p-4 group",
                    selectedDonor?.id === donor.id ? 'ring-2 ring-white border-transparent' : ''
                  )}
                  onClick={() => {
                    setSelectedDonor(donor);
                    if (window.innerWidth < 1024) setViewMode('map');
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-red-600 flex flex-col items-center justify-center text-white font-bold shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform">
                        <span className="text-xs uppercase leading-none opacity-60">Group</span>
                        <span className="text-lg">{donor.group}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold group-hover:text-red-400 transition-colors">{donor.name}</h4>
                        <div className="flex items-center gap-1 text-[10px] text-white/40 uppercase tracking-widest font-bold mt-1">
                          <MapPin className="h-3 w-3" /> {donor.location}
                        </div>
                      </div>
                    </div>
                    {userLocation && (
                      <Badge variant="outline" className="text-[10px] border-white/10 text-white/60">
                        {getDistance(userLocation.lat, userLocation.lng, donor.lat, donor.lng).toFixed(1)} km দূরে
                      </Badge>
                    )}
                  </div>
                </Card>
              )) : (
                <div className="text-center py-20">
                  <Droplet className="h-12 w-12 text-white/10 mx-auto mb-4" />
                  <p className="text-white/40 font-bold">কোনো দাতা পাওয়া যায়নি</p>
                </div>
              )}
            </div>
          </div>

          {/* Map View */}
          <div className={cn(
            "flex-grow relative bg-[#120304]",
            viewMode === 'list' ? 'hidden lg:block' : 'block'
          )}>
            {/* Visual Placeholder for a real Map */}
            <div className="absolute inset-0 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" 
                alt="Map View" 
                fill 
                className="object-cover opacity-20 grayscale scale-110" 
                unoptimized 
              />
              
              {/* Simulated Map Markers */}
              {filteredDonors.map((donor) => (
                <div 
                  key={donor.id}
                  className="absolute cursor-pointer group z-10"
                  style={{ 
                    top: `${(donor.lat - 23.7) * 500 + 40}%`, 
                    left: `${(donor.lng - 90.3) * 500 + 40}%` 
                  }}
                  onClick={() => setSelectedDonor(donor)}
                >
                  <div className={cn(
                    "p-2 rounded-full transition-all shadow-2xl",
                    selectedDonor?.id === donor.id ? 'bg-red-600 scale-150 ring-4 ring-white/20' : 'bg-white text-red-600 hover:scale-125'
                  )}>
                    <div className="h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                      <Droplet className="h-full w-full fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-white text-red-600 px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap z-50 shadow-2xl">
                    {donor.name} ({donor.group})
                  </div>
                </div>
              ))}

              {/* User Current Location Marker */}
              {userLocation && (
                <div 
                  className="absolute z-20"
                  style={{ 
                    top: `${(userLocation.lat - 23.7) * 500 + 40}%`, 
                    left: `${(userLocation.lng - 90.3) * 500 + 40}%` 
                  }}
                >
                  <div className="relative">
                    <div className="h-4 w-4 bg-blue-500 rounded-full border-2 border-white shadow-xl animate-pulse" />
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping" />
                  </div>
                </div>
              )}
            </div>

            {/* Selected Donor Info Overlay */}
            {selectedDonor && (
              <div className="absolute bottom-6 md:bottom-10 left-0 right-0 px-4 md:px-0 flex justify-center z-50 animate-in slide-in-from-bottom-5 duration-300">
                <Card className="glass-card border-white/20 p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] w-full max-w-md">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-2xl bg-red-600 flex flex-col items-center justify-center text-white font-bold text-2xl shadow-xl">
                        <span className="text-[10px] uppercase opacity-50">Group</span>
                        {selectedDonor.group}
                      </div>
                      <div className="space-y-0.5">
                        <h2 className="text-xl md:text-2xl font-bold text-white">{selectedDonor.name}</h2>
                        <p className="text-white/40 text-xs flex items-center gap-1"><MapPin className="h-3 w-3" /> {selectedDonor.location}</p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 text-white/40 hover:text-white" onClick={() => setSelectedDonor(null)}>
                      <Crosshair className="h-4 w-4 rotate-45" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <p className="text-[10px] text-white/40 uppercase font-bold mb-1">শেষ রক্তদান</p>
                      <p className="text-sm text-white font-bold">{selectedDonor.lastDonated}</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <p className="text-[10px] text-white/40 uppercase font-bold mb-1">অবস্থান</p>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/20 text-[10px] font-bold">ভেরিফাইড দাতা</Badge>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`tel:${selectedDonor.phone}`} className="flex-1">
                      <Button className="w-full h-12 md:h-14 bg-white text-red-600 hover:bg-white/90 font-bold rounded-2xl shadow-xl transition-all active:scale-95">
                        <Phone className="h-4 w-4 mr-2" /> কল করুন
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1 h-12 md:h-14 border-white/20 text-white hover:bg-white/5 rounded-2xl font-bold">
                      <Navigation className="h-4 w-4 mr-2" /> নেভিগেশন
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Floating Instructions */}
            {!selectedDonor && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4 pointer-events-none">
                <div className="p-5 md:p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 inline-block shadow-2xl">
                  <Droplet className="h-10 w-10 md:h-16 md:w-16 text-red-600/20 animate-pulse mx-auto" />
                </div>
                <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">ম্যাপ থেকে রক্তদাতা নির্বাচন করুন</p>
              </div>
            )}

            {/* Map Controls */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 z-30">
              <Button size="icon" className="bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-red-600 rounded-xl shadow-xl h-10 w-10 md:h-12 md:w-12" onClick={() => window.location.reload()}>
                <Navigation className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button size="icon" className="bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-red-600 rounded-xl shadow-xl h-10 w-10 md:h-12 md:w-12" onClick={handleNearMe}>
                <Crosshair className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
