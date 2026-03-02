'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  HeartHandshake, 
  Megaphone, 
  Users, 
  Settings, 
  LogOut,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const navItems = [
  { label: 'ওভারভিউ', href: '/admin', icon: LayoutDashboard },
  { label: 'সাহায্য আবেদন', href: '/admin/requests', icon: HeartHandshake },
  { label: 'ক্যাম্পেইন', href: '/admin/campaigns', icon: Megaphone },
  { label: 'স্বেচ্ছাসেবক', href: '/admin/volunteers', icon: Users },
  { label: 'সেটিংস', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    toast({ title: "লগআউট সফল", description: "অ্যাডমিন সেশন শেষ করা হয়েছে।" });
    router.push('/admin/login');
  };

  return (
    <>
      {/* Mobile Toggle Button - Floating for easy access */}
      <Button 
        variant="default" 
        size="icon" 
        className="fixed bottom-6 right-6 z-[60] md:hidden bg-white text-[#781013] hover:bg-white/90 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.5)] h-14 w-14 border-2 border-[#781013]/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[50] md:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={cn(
        "fixed md:sticky top-0 left-0 z-[55] w-72 h-screen bg-[#1a0405] border-r border-white/5 transition-transform duration-300 transform md:translate-x-0 overflow-y-auto shadow-2xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full py-8">
          <div className="px-8 mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Command Center</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tighter uppercase">ONGON <span className="text-white/40">Admin</span></h2>
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
                      ? "bg-white text-[#781013] font-bold shadow-xl translate-x-1" 
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className={cn("h-5 w-5 transition-transform duration-300 group-hover:scale-110", isActive ? "text-[#781013]" : "text-white/30 group-hover:text-white")} />
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
              className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all font-bold text-sm group"
            >
              <LogOut className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span>সিস্টেম লগআউট</span>
            </button>
            <p className="text-[10px] text-white/20 text-center mt-6 uppercase tracking-widest font-bold">
              v2.4.0 Stable Build
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
