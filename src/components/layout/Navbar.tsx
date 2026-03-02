'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, User, LogOut, Bell } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated auth state

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 md:h-8 md:w-8 text-white fill-white" />
          <span className="text-lg md:text-2xl font-bold text-white tracking-tight">সেবা সেতু</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/requests" className="text-sm font-medium text-white/80 hover:text-white transition-colors">সাহায্য খুঁজুন</Link>
          <Link href="/volunteer" className="text-sm font-medium text-white/80 hover:text-white transition-colors">স্বেচ্ছাসেবক</Link>
          <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">আমাদের লক্ষ্য</Link>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10"><Bell className="h-5 w-5" /></Button>
              <Link href="/admin">
                <Button variant="outline" className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10">
                  <User className="h-4 w-4" /> ড্যাশবোর্ড
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(false)} className="text-white hover:text-primary"><LogOut className="h-4 w-4" /></Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => setIsLoggedIn(true)} className="text-white hover:bg-white/10">লগ ইন</Button>
              <Button className="bg-white text-primary-foreground hover:bg-white/90 font-bold">সাইন আপ</Button>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-card border-b border-white/10 p-6 space-y-6 animate-in slide-in-from-top-4 duration-300 shadow-2xl z-40">
          <nav className="flex flex-col space-y-4">
            <Link href="/requests" className="text-lg font-bold text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>সাহায্য খুঁজুন</Link>
            <Link href="/volunteer" className="text-lg font-bold text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>স্বেচ্ছাসেবক</Link>
            <Link href="/about" className="text-lg font-bold text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>আমাদের লক্ষ্য</Link>
          </nav>
          <div className="pt-6 border-t border-white/5 space-y-3">
            {isLoggedIn ? (
              <>
                <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary mb-2">ড্যাশবোর্ড</Button>
                </Link>
                <Button variant="outline" className="w-full text-white border-white/10" onClick={() => setIsLoggedIn(false)}>লগ আউট</Button>
              </>
            ) : (
              <>
                <Button className="w-full bg-primary" onClick={() => setIsLoggedIn(true)}>লগ ইন</Button>
                <Button variant="outline" className="w-full text-white border-white/10">সাইন আপ</Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
