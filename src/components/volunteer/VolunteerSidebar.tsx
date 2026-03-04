'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Calendar, 
  User, 
  LogOut,
  ChevronRight,
  Menu,
  X,
  MessageSquare,
  Download
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const navItems = [
  { label: 'ড্যাশবোর্ড', href: '/volunteer/dashboard', icon: LayoutDashboard },
  { label: 'আমার কাজ', href: '/volunteer/tasks', icon: ClipboardList },
  { label: 'ইভেন্ট ক্যালেন্ডার', href: '/volunteer/events', icon: Calendar },
  { label: 'মেসেজ', href: '/volunteer/messages', icon: MessageSquare },
  { label: 'ইনস্টল অ্যাপ', href: '/install', icon: Download },
  { label: 'প্রোফাইল', href: '/volunteer/profile', icon: User },
];

export function VolunteerSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isVolunteer');
    toast({ title: "লগআউট সফল", description: "স্বেচ্ছাসেবক সেশন শেষ করা হয়েছে।" });
    router.push('/volunteer/login');
  };

  return (
    <>
      <Button 
        variant="default" 
        size="icon" 
        className="fixed bottom-6 right-6 z-[60] md:hidden bg-green-600 text-white hover:bg-green-700 rounded-full shadow-2xl h-14 w-14 border-2 border-white/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[50] md:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed md:sticky top-0 left-0 z-[55] w-72 h-screen bg-[#111] border-r border-white/5 transition-transform duration-300 transform md:translate-x-0 overflow-y-auto shadow-2xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full py-8">
          <div className="px-8 mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Volunteer Portal</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tighter uppercase">ONGON <span className="text-green-500/40">Hero</span></h2>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-4 rounded-2xl transition-all group relative overflow-hidden",
                    isActive 
                      ? "bg-green-600 text-white font-bold shadow-xl translate-x-1" 
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-white/30 group-hover:text-white")} />
                    <span className="text-sm tracking-tight">{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="h-4 w-4" />}
                </Link>
              );
            })}
          </nav>

          <div className="px-4 mt-8 pt-8 border-t border-white/5">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all font-bold text-sm"
            >
              <LogOut className="h-5 w-5" />
              <span>লগআউট</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
