'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search, MapPinOff } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-white/20">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <div className="relative inline-flex items-center justify-center">
              <span className="text-[150px] md:text-[200px] font-black text-white/5 leading-none select-none">404</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 group">
                  <MapPinOff className="h-20 w-20 md:h-24 md:w-24 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              দুঃখিত, পাতাটি খুঁজে পাওয়া যায়নি!
            </h1>
            <p className="text-lg text-white/60 max-w-md mx-auto leading-relaxed">
              আপনি যে লিঙ্কটি খুঁজছেন তা হয়তো সরিয়ে ফেলা হয়েছে অথবা বর্তমানে উপলব্ধ নেই। অনুগ্রহ করে আবার চেষ্টা করুন।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-bold h-14 px-8 rounded-2xl shadow-xl flex items-center gap-2">
                <Home className="h-5 w-5" /> হোম পেজে ফিরে যান
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-2xl backdrop-blur-md font-bold flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" /> আগের পাতায় যান
            </Button>
          </div>

          <div className="pt-12">
            <div className="glass-card p-2 rounded-2xl flex items-center gap-2 max-w-sm mx-auto border-white/10">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="অন্য কিছু খুঁজুন..." 
                  className="w-full bg-transparent border-none text-white placeholder:text-white/30 pl-10 pr-4 h-10 text-sm focus:ring-0 outline-none"
                />
              </div>
              <Button size="sm" className="bg-white/20 text-white hover:bg-white/30 rounded-xl px-4 h-10 text-xs font-bold">
                সার্চ
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center border-t border-white/5 bg-black/10 backdrop-blur-sm">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
          ONGON BANGLADESH • Lost in Connection
        </p>
      </footer>
    </div>
  );
}
