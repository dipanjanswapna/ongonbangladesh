
'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { VolunteerSidebar } from '@/components/volunteer/VolunteerSidebar';
import { Loader2 } from 'lucide-react';

export default function VolunteerLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (pathname === '/volunteer/login' || pathname === '/volunteer') {
      setIsAuthorized(true);
      return;
    }

    const isVol = localStorage.getItem('isVolunteer');
    if (isVol !== 'true') {
      router.push('/volunteer/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router, pathname]);

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-white animate-spin" />
      </div>
    );
  }

  // If it's the login page or public signup page, don't show the sidebar
  if (pathname === '/volunteer/login' || pathname === '/volunteer') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <div className="flex flex-1 pt-16 md:pt-20">
        <VolunteerSidebar />
        <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-x-hidden w-full">
          <div className="container mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
