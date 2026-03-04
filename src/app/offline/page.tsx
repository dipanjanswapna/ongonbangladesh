
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { WifiOff, PhoneCall, ShieldAlert, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow flex items-center justify-center">
        <Card className="max-w-xl w-full bg-white/5 border-white/10 backdrop-blur-3xl rounded-xl p-12 text-center space-y-8 shadow-2xl">
          <div className="relative inline-block">
            <div className="p-8 rounded-full bg-white/10 text-white animate-pulse">
              <WifiOff className="h-16 w-16" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">আপনি অফলাইনে আছেন</h2>
            <p className="text-white/60 leading-relaxed text-lg font-medium">
              আপনার ইন্টারনেট সংযোগ বিচ্ছিন্ন হয়ে গেছে। তবে চিন্তার কিছু নেই, ওঙ্গন-এর জরুরি সেবাগুলো আপনি অফলাইনেও ব্যবহার করতে পারবেন।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="tel:999">
              <Button className="w-full bg-red-600 text-white font-black h-14 rounded-xl shadow-xl flex items-center justify-center gap-2">
                <ShieldAlert className="h-5 w-5" /> ৯৯৯ এ কল দিন
              </Button>
            </Link>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline" 
              className="w-full border-white/20 text-white font-bold h-14 rounded-xl hover:bg-white/5 flex items-center justify-center gap-2"
            >
              <RefreshCcw className="h-5 w-5" /> আবার চেষ্টা করুন
            </Button>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/5 text-left">
            <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-green-500" /> অফলাইন টিপস:
            </h4>
            <ul className="text-xs text-white/40 space-y-2 font-medium">
              <li>• SOS বাটন কাজ না করলে সরাসরি ৯৯৯ এ কল করুন।</li>
              <li>• আপনার এলাকা ও পরিস্থিতি এসএমএস এর মাধ্যমে জানান।</li>
              <li>• অফলাইন গাইডলাইনগুলো আগে থেকে ডাউনলোড করে রাখুন।</li>
            </ul>
          </div>
        </Card>
      </main>
      <footer className="py-8 text-center opacity-30">
        <p className="text-[10px] text-white uppercase tracking-widest font-black">ONGON BD • Offline Mode Active</p>
      </footer>
    </div>
  );
}
