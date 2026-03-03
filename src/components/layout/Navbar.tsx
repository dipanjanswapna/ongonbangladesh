'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Menu, User, LogIn, UserPlus, Globe, Droplet, Home, Megaphone, HeartHandshake, Users, Briefcase, Info, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
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
      isScrolled ? "bg-black/40 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
    )}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary/30 transition-all duration-300 ring-1 ring-white/10">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-black text-white leading-none tracking-tighter uppercase">ONGON <span className="text-white/40">BD</span></span>
              <span className="hidden lg:block text-[8px] text-white/30 font-bold uppercase tracking-[0.2em] mt-1">Sister concern of PRANGON'S ECOSYSTEM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.slice(1, 5).map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 flex items-center gap-2",
                  link.color || "text-white/60 hover:text-white"
                )}
              >
                {link.icon && <link.icon className="h-3.5 w-3.5" />}
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
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

            {/* Profile/Login Icon */}
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="icon" className="h-10 w-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Donate Button */}
            <Link href="/donate">
              <Button className="bg-white text-[#781013] hover:bg-white/90 font-black px-4 md:px-6 h-10 md:h-11 rounded-xl shadow-2xl transition-all active:scale-95 text-[10px] md:text-xs uppercase tracking-widest">
                Donate Now
              </Button>
            </Link>

            {/* Hamburger Menu (Mobile & Tablet) */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="flex items-center justify-center h-10 w-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all focus:outline-none">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[350px] bg-[#1a0405] border-l border-white/10 p-0 overflow-hidden shadow-2xl">
                <div className="h-full flex flex-col relative">
                  
                  {/* Background Decoration */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                  <SheetHeader className="p-8 border-b border-white/5 relative z-10">
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
                  
                  <div className="flex-grow p-6 space-y-2 overflow-y-auto custom-scrollbar relative z-10">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 ml-2">Quick Navigation</p>
                    {navLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href} 
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 text-white/70 font-bold transition-all group border border-transparent hover:border-white/5",
                          link.color && "text-red-500 hover:text-red-400"
                        )}
                      >
                        <div className={cn(
                          "p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all",
                          link.color && "bg-red-500/10"
                        )}>
                          <link.icon className="h-5 w-5" />
                        </div>
                        <span className="text-base tracking-tight">{link.label}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="p-8 bg-white/5 border-t border-white/5 space-y-6 relative z-10">
                    <div className="grid grid-cols-2 gap-3">
                      <Link href="/login" className="w-full">
                        <Button variant="outline" className="w-full border-white/10 text-white font-bold h-14 rounded-2xl hover:bg-white/5">লগইন</Button>
                      </Link>
                      <Link href="/register" className="w-full">
                        <Button className="w-full bg-white text-[#781013] font-bold h-14 rounded-2xl shadow-xl">রেজিস্ট্রেশন</Button>
                      </Link>
                    </div>
                    
                    <div className="flex items-center justify-between bg-black/40 p-1.5 rounded-2xl border border-white/5">
                      <button 
                        onClick={() => setLang('bn')} 
                        className={cn(
                          "flex-1 py-3 text-xs font-black rounded-xl transition-all uppercase tracking-widest", 
                          lang === 'bn' ? "bg-white text-[#781013] shadow-xl" : "text-white/40"
                        )}
                      >
                        বাংলা
                      </button>
                      <button 
                        onClick={() => setLang('en')} 
                        className={cn(
                          "flex-1 py-3 text-xs font-black rounded-xl transition-all uppercase tracking-widest", 
                          lang === 'en' ? "bg-white text-[#781013] shadow-xl" : "text-white/40"
                        )}
                      >
                        English
                      </button>
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
    </nav>
  );
}
