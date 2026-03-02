
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
      {/* Mobile Toggle */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed bottom-6 right-6 z-50 md:hidden bg-primary text-white rounded-full shadow-2xl h-14 w-14"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={cn(
        "fixed md:static inset-y-0 left-0 z-40 w-72 bg-white/5 backdrop-blur-xl border-r border-white/5 transition-transform duration-300 transform md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full py-8">
          <div className="px-6 mb-8">
            <h2 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">অ্যাডমিন প্যানেল</h2>
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
                    "flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group",
                    isActive 
                      ? "bg-white text-primary font-bold shadow-lg" 
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-white/40 group-hover:text-white")} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="h-4 w-4" />}
                </Link>
              );
            })}
          </nav>

          <div className="px-4 mt-auto">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all font-bold text-sm"
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
