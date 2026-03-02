'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Phone, Droplet, User, Navigation } from 'lucide-react';
import { bloodDonors } from '@/lib/blood-data';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function DonorsListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDonor, setSelectedDonor] = useState<any>(null);

  const filteredDonors = bloodDonors.filter(donor => 
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    donor.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="h-[calc(100vh-6rem)] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Left Column: Search & List */}
          <div className="lg:col-span-4 flex flex-col border-r border-white/5 bg-[#1a0405]">
            <div className="p-6 space-y-4">
              <h1 className="text-2xl font-bold text-white">রক্তদাতা অনুসন্ধান</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input 
                  placeholder="শহর বা ব্লাড গ্রুপ দিয়ে খুঁজুন" 
                  className="bg-white/5 border-white/10 text-white pl-10 h-12 rounded-xl focus:ring-red-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-grow overflow-y-auto px-6 space-y-4 pb-10">
              {filteredDonors.map((donor) => (
                <Card 
                  key={donor.id} 
                  className={`border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-2xl p-4 ${selectedDonor?.id === donor.id ? 'ring-2 ring-white border-transparent' : ''}`}
                  onClick={() => setSelectedDonor(donor)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-lg">
                        {donor.group}
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{donor.name}</h4>
                        <div className="flex items-center gap-1 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                          <MapPin className="h-3 w-3" /> {donor.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Map View */}
          <div className="lg:col-span-8 relative bg-white/5">
            {/* Visual Placeholder for a real Map (e.g. Google Maps) */}
            <div className="absolute inset-0 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" 
                alt="Map View" 
                fill 
                className="object-cover opacity-20 grayscale" 
                unoptimized 
              />
              
              {/* Simulated Map Markers */}
              {filteredDonors.map((donor) => (
                <div 
                  key={donor.id}
                  className="absolute cursor-pointer group"
                  style={{ 
                    top: `${(donor.lat - 23.7) * 400 + 40}%`, 
                    left: `${(donor.lng - 90.3) * 400 + 40}%` 
                  }}
                  onClick={() => setSelectedDonor(donor)}
                >
                  <div className={`p-2 rounded-full transition-all ${selectedDonor?.id === donor.id ? 'bg-red-600 scale-125' : 'bg-white text-red-600 hover:scale-110'}`}>
                    <div className="h-5 w-5 flex items-center justify-center">
                      <Droplet className="h-full w-full" />
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-white text-red-600 px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap z-50">
                    {donor.name} ({donor.group})
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Donor Info Overlay */}
            {selectedDonor && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-50 animate-in slide-in-from-bottom-5">
                <Card className="glass-card border-white/20 p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-2xl bg-red-600 flex items-center justify-center text-white font-bold text-2xl">
                        {selectedDonor.group}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{selectedDonor.name}</h2>
                        <p className="text-white/40">{selectedDonor.location}</p>
                      </div>
                    </div>
                    <Button size="icon" className="rounded-full bg-white/10 text-white" onClick={() => setSelectedDonor(null)}>×</Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/5">
                      <p className="text-[10px] text-white/40 uppercase font-bold mb-1">শেষ রক্তদান</p>
                      <p className="text-sm text-white font-bold">{selectedDonor.lastDonated}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5">
                      <p className="text-[10px] text-white/40 uppercase font-bold mb-1">ভেরিফাইড</p>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/20 text-[10px]">হ্যাঁ</Badge>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 h-14 bg-white text-red-600 hover:bg-white/90 font-bold rounded-2xl shadow-xl">
                      <Phone className="h-4 w-4 mr-2" /> কল করুন
                    </Button>
                    <Button variant="outline" className="flex-1 h-14 border-white/20 text-white hover:bg-white/5 rounded-2xl">
                      <Navigation className="h-4 w-4 mr-2" /> নেভিগেশন
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Floating Hint */}
            {!selectedDonor && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
                <div className="p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 inline-block">
                  <Droplet className="h-12 w-12 text-white/20 animate-pulse" />
                </div>
                <p className="text-white/40 font-bold uppercase tracking-widest">ম্যাপ থেকে দাতা নির্বাচন করুন</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
