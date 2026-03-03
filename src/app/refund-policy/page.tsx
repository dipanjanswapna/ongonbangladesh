'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { RefreshCcw, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RefundPolicyPage() {
  const steps = [
    {
      title: "ডুপ্লিকেট ট্রানজ্যাকশন",
      desc: "যদি আপনার অ্যাকাউন্ট থেকে কারিগরি ত্রুটির কারণে একই অনুদান দুবার কেটে নেওয়া হয়।"
    },
    {
      title: "ভুল অংক প্রদান",
      desc: "অনবধানতাবশত যদি আপনি নির্ধারিত অংকের চেয়ে বেশি বা ভুল অংক ইনপুট দিয়ে থাকেন।"
    },
    {
      title: "অননুমোদিত চার্জ",
      desc: "যদি আপনার কার্ড বা মোবাইল ব্যাংকিং থেকে কোনো অননুমোদিত চার্জ ওঙ্গন-এ জমা হয়।"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 text-white mb-2">
            <RefreshCcw className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">রিফান্ড নীতি</h1>
          <p className="text-white/60">অনুদান এবং লেনদেন সংক্রান্ত টাকা ফেরতের নিয়মাবলী</p>
        </div>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Info className="h-6 w-6 text-blue-400" /> কখন আপনি রিফান্ড পাবেন?
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              সাধারণত মানবিক অনুদান অফেরতযোগ্য। তবে বিশেষ কিছু ক্ষেত্রে আমরা রিফান্ড প্রক্রিয়া সম্পন্ন করে থাকি:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                  <h4 className="text-white font-bold mb-2">{step.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6 p-10 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl font-bold text-white">রিফান্ড প্রক্রিয়া</h2>
              <ul className="space-y-4">
                {[
                  "লেনদেন হওয়ার ৭ কার্যদিবসের মধ্যে রিফান্ড আবেদন করতে হবে।",
                  "সঠিক ট্রানজ্যাকশন আইডি (TXNID) এবং পেমেন্ট স্ক্রিনশট প্রদান করতে হবে।",
                  "আবেদন যাচাইয়ের পর ৫-১০ কর্মদিবসের মধ্যে আপনার মূল পেমেন্ট মেথডে টাকা ফেরত দেওয়া হবে।"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/refund-request">
              <Button size="lg" className="bg-white text-[#7a1013] hover:bg-white/90 font-black h-16 px-10 rounded-2xl shadow-xl w-full sm:w-auto">
                রিফান্ড অনুরোধ করুন <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 h-16 px-10 rounded-2xl w-full sm:w-auto font-bold">
                সাপোর্ট টিমকে জানান
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
          ONGON BANGLADESH • TRANSPARENCY FIRST
        </p>
      </footer>
    </div>
  );
}
