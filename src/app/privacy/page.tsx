'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Lock, Eye, Database, Share2 } from 'lucide-react';

export default function PrivacyPage() {
  const policies = [
    {
      icon: Database,
      title: "তথ্য সংগ্রহ",
      desc: "আমরা আপনার নাম, ইমেইল, মোবাইল নম্বর এবং অনুদানের ইতিহাস সংগ্রহ করি। এছাড়া সাইটের অভিজ্ঞতা উন্নত করতে কুকিজ এবং এআই এনালিটিক্স ব্যবহার করা হয়।"
    },
    {
      icon: Eye,
      title: "তথ্যের ব্যবহার",
      desc: "আপনার ব্যক্তিগত তথ্য শুধুমাত্র সেবামূলক যোগাযোগ এবং অনুদান নিশ্চিতকরণের জন্য ব্যবহৃত হয়। আমরা আপনার তথ্য দিয়ে কোনো প্রোফাইলিং করি না।"
    },
    {
      icon: Lock,
      title: "নিরাপত্তা ব্যবস্থা",
      desc: "আপনার ডাটা আমাদের হাই-সিকিউরড ডাটাবেজে সংরক্ষিত থাকে। সকল আর্থিক লেনদেন SSL এনক্রিপশনের মাধ্যমে পরিচালিত হয়।"
    },
    {
      icon: Share2,
      title: "তৃতীয় পক্ষ",
      desc: "আইনি বাধ্যবাধকতা ছাড়া আমরা কখনোই আপনার তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করি না।"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">গোপনীয়তা নীতি</h1>
          <p className="text-white/60">আপনার তথ্যের সুরক্ষা আমাদের সর্বোচ্চ অগ্রাধিকার।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((policy, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="p-4 rounded-2xl bg-white/5 text-white w-fit mb-6">
                <policy.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{policy.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{policy.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 p-10 rounded-[3rem] border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">আমাদের প্রতিশ্রুতি</h2>
          <p className="text-white/70 leading-relaxed">
            ওঙ্গন বাংলাদেশ আপনার গোপনীয়তাকে সম্মান করে। আমরা বিশ্বাস করি মানবিক কাজে প্রযুক্তির ব্যবহারের সময় ব্যবহারকারীর ব্যক্তিগত নিরাপত্তা বজায় রাখা অত্যন্ত গুরুত্বপূর্ণ। আপনি যেকোনো সময় আপনার তথ্য মুছে ফেলার বা সংশোধনের অনুরোধ করতে পারেন।
          </p>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
          ONGON BANGLADESH • SECURED BY PRANGON'S ECOSYSTEM
        </p>
      </footer>
    </div>
  );
}
