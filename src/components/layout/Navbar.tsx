'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, User, Bell } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl h-16 md:h-20 flex items-center justify-between px-4 md:px-8">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-bold text-gray-900 leading-none tracking-tight uppercase">ONGON BANGLADESH</span>
              <span className="hidden md:block text-[8px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Sister concern of PRANGON'S ECOSYSTEM</span>
            </div>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Language Toggle (Image Style) */}
            <div className="hidden sm:flex bg-gray-100 rounded-lg p-1 border border-gray-200">
              <button 
                onClick={() => setLang('bn')}
                className={cn(
                  "px-3 py-1 text-xs font-bold rounded-md transition-all",
                  lang === 'bn' ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                )}
              >
                বাং
              </button>
              <button 
                onClick={() => setLang('en')}
                className={cn(
                  "px-3 py-1 text-xs font-bold rounded-md transition-all",
                  lang === 'en' ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                )}
              >
                EN
              </button>
            </div>

            {/* Profile Icon (Image Style) */}
            <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 bg-orange-50 hover:bg-orange-100 border border-orange-100 rounded-lg text-orange-600 transition-colors">
              <User className="h-5 w-5" />
            </Button>

            {/* Donate Button (Image Style - Green) */}
            <Button className="bg-[#008744] hover:bg-[#007038] text-white font-bold px-4 md:px-8 h-9 md:h-11 rounded-lg shadow-sm transition-all text-xs md:text-sm">
              Donate
            </Button>

            {/* Menu Toggle */}
            <button 
              className="text-gray-700 p-1 md:p-2 hover:bg-gray-100 rounded-lg transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-24 z-40 px-4 md:hidden">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col space-y-4">
              <Link href="/requests" className="text-lg font-bold text-gray-900 hover:text-primary transition-colors py-2 border-b border-gray-50">সাহায্য খুঁজুন</Link>
              <Link href="/volunteer" className="text-lg font-bold text-gray-900 hover:text-primary transition-colors py-2 border-b border-gray-50">স্বেচ্ছাসেবক</Link>
              <Link href="/about" className="text-lg font-bold text-gray-900 hover:text-primary transition-colors py-2 border-b border-gray-50">আমাদের লক্ষ্য</Link>
              
              <div className="flex items-center justify-between pt-4">
                <span className="text-sm font-medium text-gray-500">ভাষা পরিবর্তন</span>
                <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200">
                  <button onClick={() => setLang('bn')} className={cn("px-4 py-1 text-xs font-bold rounded-md", lang === 'bn' ? "bg-white shadow-sm" : "text-gray-500")}>বাং</button>
                  <button onClick={() => setLang('en')} className={cn("px-4 py-1 text-xs font-bold rounded-md", lang === 'en' ? "bg-white shadow-sm" : "text-gray-500")}>EN</button>
                </div>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full border-gray-200">লগ ইন</Button>
                <Button className="w-full bg-primary">সাইন আপ</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
