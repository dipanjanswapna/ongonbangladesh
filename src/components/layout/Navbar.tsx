
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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-primary fill-primary" />
          <span className="text-2xl font-headline font-bold text-white tracking-tight">SevaSetu</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/requests" className="text-sm font-medium hover:text-accent transition-colors">Find Aid</Link>
          <Link href="/volunteer" className="text-sm font-medium hover:text-accent transition-colors">Volunteer</Link>
          <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">Our Mission</Link>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
              <Link href="/profile">
                <Button variant="outline" className="flex items-center gap-2">
                  <User className="h-4 w-4" /> Dashboard
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(false)}><LogOut className="h-4 w-4" /></Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>Log in</Button>
              <Button className="bg-primary hover:bg-primary/90">Sign up</Button>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-card p-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <Link href="/requests" className="block text-lg font-headline">Find Aid</Link>
          <Link href="/volunteer" className="block text-lg font-headline">Volunteer</Link>
          <Link href="/about" className="block text-lg font-headline">Our Mission</Link>
          <div className="pt-4 border-t space-y-3">
            <Button className="w-full bg-primary">Get Started</Button>
            <Button variant="outline" className="w-full">Sign in</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
