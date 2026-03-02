'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Menu, User, LogIn, UserPlus, Globe } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  return (
    <nav className="fixed top-2 md:top-4 left-0 right-0 z-50 px-2 md:px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl shadow-xl h-12 md:h-14 flex items-center justify-between px-3 md:px-6">
          
          <Link href="/" className="flex items-center gap-1.5 md:gap-2 group">
            <div className="bg-primary/10 p-1 md:p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Heart className="h-4 w-4 md:h-5 md:w-5 text-primary fill-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-bold text-gray-900 leading-none tracking-tight uppercase">ONGON BANGLADESH</span>
              <span className="hidden lg:block text-[7px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Sister concern of PRANGON'S ECOSYSTEM</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-xs font-bold text-gray-600 hover:text-primary transition-colors">আমাদের সম্পর্কে</Link>
            <Link href="/campaigns" className="text-xs font-bold text-gray-600 hover:text-primary transition-colors">ক্যাম্পেইনসমূহ</Link>
            <Link href="/blog" className="text-xs font-bold text-gray-600 hover:text-primary transition-colors">ব্লগ</Link>
            <Link href="/requests" className="text-xs font-bold text-gray-600 hover:text-primary transition-colors">সাহায্য অনুরোধ</Link>
          </div>

          <div className="flex items-center gap-1.5 md:gap-3">
            <div className="hidden sm:flex bg-gray-100 rounded-lg p-0.5 border border-gray-200">
              <button 
                onClick={() => setLang('bn')}
                className={cn(
                  "px-2 py-0.5 text-[10px] font-bold rounded-md transition-all",
                  lang === 'bn' ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                )}
              >
                বাং
              </button>
              <button 
                onClick={() => setLang('en')}
                className={cn(
                  "px-2 py-0.5 text-[10px] font-bold rounded-md transition-all",
                  lang === 'en' ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                )}
              >
                EN
              </button>
            </div>

            <Link href="/login">
              <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9 bg-orange-50 hover:bg-orange-100 border border-orange-100 rounded-lg text-orange-600 transition-colors">
                <User className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>

            <Link href="/donate">
              <Button className="bg-[#008744] hover:bg-[#007038] text-white font-bold px-3 md:px-5 h-8 md:h-9 rounded-lg shadow-sm transition-all text-[10px] md:text-xs">
                Donate
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden text-gray-700 p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white border-l-0 rounded-l-3xl p-0 overflow-hidden">
                <div className="h-full flex flex-col bg-gradient-to-b from-white to-gray-50">
                  <SheetHeader className="p-6 border-b border-gray-100">
                    <SheetTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary fill-primary" />
                      <span className="text-lg font-bold tracking-tighter">ONGON</span>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex-grow p-6 space-y-2">
                    <Link href="/about" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 text-gray-700 font-bold transition-all">আমাদের সম্পর্কে</Link>
                    <Link href="/campaigns" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 text-gray-700 font-bold transition-all">ক্যাম্পেইনসমূহ</Link>
                    <Link href="/blog" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 text-gray-700 font-bold transition-all">ব্লগ</Link>
                    <Link href="/requests" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 text-gray-700 font-bold transition-all">সাহায্য অনুরোধ</Link>
                    <Link href="/volunteer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 text-gray-700 font-bold transition-all">স্বেচ্ছাসেবক হন</Link>
                    <Link href="/donate" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 text-gray-700 font-bold transition-all">অনুদান কেন্দ্র</Link>
                    <Link href="/profile" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 text-gray-700 font-bold transition-all">ইউজার পোর্টাল</Link>
                  </div>

                  <div className="p-6 bg-white border-t border-gray-100 space-y-4">
                    <Link href="/login" className="w-full">
                      <Button className="w-full bg-primary text-white font-bold h-12 rounded-xl">লগইন করুন</Button>
                    </Link>
                    <div className="flex items-center justify-between bg-gray-100 p-1 rounded-xl">
                      <button onClick={() => setLang('bn')} className={cn("flex-1 py-2 text-xs font-bold rounded-lg transition-all", lang === 'bn' ? "bg-white shadow-sm text-gray-900" : "text-gray-500")}>বাংলা</button>
                      <button onClick={() => setLang('en')} className={cn("flex-1 py-2 text-xs font-bold rounded-lg transition-all", lang === 'en' ? "bg-white shadow-sm text-gray-900" : "text-gray-500")}>English</button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
