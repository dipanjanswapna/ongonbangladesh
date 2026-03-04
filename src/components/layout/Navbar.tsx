'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Menu, User, Droplet, Home, Megaphone, HeartHandshake, Users, Briefcase, Info, Phone, X, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'হোম', href: '/', icon: Home },
    { label: 'আমাদের সম্পর্কে', href: '/about', icon: Info },
    { label: 'নেতৃত্ব', href: '/leadership/messages', icon: ShieldCheck },
    { label: 'ক্যাম্পেইনসমূহ', href: '/campaigns', icon: Megaphone },
    { label: 'রক্তদান', href: '/blood', icon: Droplet, color: 'text-red-500' },
    { label: 'সাহায্য অনুরোধ', href: '/requests', icon: HeartHandshake },
    { label: 'স্বেচ্ছাসেবক', href: '/volunteer', icon: Users },
    { label: 'ক্যারিয়ার', href: '/careers', icon: Briefcase },
    { label: 'যোগাযোগ', href: '/contact', icon: Phone },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 md:py-4",
      isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent"
    )}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary/30 transition-all duration-300 ring-1 ring-white/10">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-black text-white leading-none tracking-tighter uppercase">ONGON <span className="text-white/40">BD</span></span>
              <span className="hidden lg:block text-[8px] text-white/30 font-bold uppercase tracking-[0.2em] mt-1">Sister concern of PRANGON'S ECOSYSTEM</span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on Mobile/Tablet */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={cn(
                  "text-[11px] font-bold uppercase tracking-widest transition-all hover:scale-105 flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/5",
                  link.color || "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Switcher */}
            <div className="hidden sm:flex bg-white/5 backdrop-blur-md rounded-xl p-1 border border-white/10">
              <button 
                onClick={() => setLang('bn')}
                className={cn(
                  "px-3 py-1 text-[10px] font-bold rounded-lg transition-all",
                  lang === 'bn' ? "bg-white text-[#781013] shadow-lg" : "text-white/40 hover:text-white"
                )}
              >
                বাং
              </button>
              <button 
                onClick={() => setLang('en')}
                className={cn(
                  "px-3 py-1 text-[10px] font-bold rounded-lg transition-all",
                  lang === 'en' ? "bg-white text-[#781013] shadow-lg" : "text-white/40 hover:text-white"
                )}
              >
                EN
              </button>
            </div>

            {/* Profile Icon */}
            <Link href="/login" className="hidden md:block">
              <Button variant="ghost" size="icon" className="h-10 w-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Donate Button */}
            <Link href="/donate">
              <Button className="bg-white text-[#781013] hover:bg-white/90 font-black px-4 md:px-6 h-10 md:h-11 rounded-xl shadow-2xl transition-all active:scale-95 text-[10px] md:text-xs uppercase tracking-widest">
                Donate
              </Button>
            </Link>

            {/* Hamburger Menu (Mobile/Tablet Only) */}
            <div className="xl:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-[#1a0405] border-l border-white/10 p-0 overflow-hidden shadow-2xl">
                  <div className="h-full flex flex-col relative">
                    {/* Active Close Button */}
                    <SheetClose className="absolute right-4 top-4 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10">
                      <X className="h-5 w-5" />
                    </SheetClose>

                    {/* Background Decoration */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                    
                    <SheetHeader className="p-8 pb-4 border-b border-white/5 relative z-10">
                      <SheetTitle className="flex items-center gap-3">
                        <div className="bg-primary/20 p-2 rounded-xl">
                          <Heart className="h-6 w-6 text-primary fill-primary" />
                        </div>
                        <div className="text-left">
                          <span className="text-xl font-black text-white tracking-tighter uppercase block">ONGON BD</span>
                          <span className="text-[8px] text-white/30 font-bold uppercase tracking-widest leading-none">CONNECTING HEARTS</span>
                        </div>
                      </SheetTitle>
                    </SheetHeader>
                    
                    <div className="flex-grow p-6 space-y-1 overflow-y-auto custom-scrollbar relative z-10">
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 ml-2">Main Menu</p>
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link 
                            href={link.href} 
                            className={cn(
                              "flex items-center gap-4 p-3.5 rounded-2xl hover:bg-white/5 text-white/70 font-bold transition-all group border border-transparent",
                              link.color && "text-red-500 hover:text-red-400"
                            )}
                          >
                            <div className={cn(
                              "p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all",
                              link.color && "bg-red-500/10"
                            )}>
                              <link.icon className="h-4 w-4" />
                            </div>
                            <span className="text-sm tracking-tight">{link.label}</span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>

                    <div className="p-8 bg-white/5 border-t border-white/5 space-y-6 relative z-10">
                      <div className="grid grid-cols-2 gap-3">
                        <SheetClose asChild>
                          <Link href="/login" className="w-full">
                            <Button variant="outline" className="w-full border-white/10 text-white font-bold h-12 rounded-2xl hover:bg-white/5">লগইন</Button>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/register" className="w-full">
                            <Button className="w-full bg-white text-[#781013] font-bold h-12 rounded-2xl shadow-xl">রেজিস্ট্রেশন</Button>
                          </Link>
                        </SheetClose>
                      </div>
                      
                      <p className="text-[9px] text-white/20 text-center font-bold uppercase tracking-[0.4em]">
                        v3.5.0 Secure Environment
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
