'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, ChevronRight, Home, ShieldAlert, Heart, Newspaper, Droplet, Users, Briefcase, Info, Bell, Gavel, Camera, Sparkles, Megaphone, FileText } from 'lucide-react';
import Link from 'next/link';

const mapCategories = [
  {
    title: "মূল সার্ভিস",
    links: [
      { label: "হোম পেজ", href: "/", icon: Home },
      { label: "আমাদের সম্পর্কে", href: "/about", icon: Info },
      { label: "সাহায্য অনুরোধ", href: "/requests", icon: Heart },
      { label: "নতুন আবেদন", href: "/requests/new", icon: Bell },
    ]
  },
  {
    title: "দুর্যোগ ও নিরাপত্তা",
    links: [
      { label: "দুর্যোগ ব্যবস্থাপনা", href: "/disaster", icon: Map },
      { label: "নিরাপত্তা সেন্টার (SOS)", href: "/safety", icon: ShieldAlert },
      { label: "আইনি সচেতনতা", href: "/safety/education", icon: Gavel },
      { label: "জরুরি হেল্পলাইন", href: "/safety/helplines", icon: Bell },
    ]
  },
  {
    title: "মিডিয়া ও রিসোর্স",
    links: [
      { label: "নিউজ ও প্রেস", href: "/news", icon: Newspaper },
      { label: "ইভেন্টসমূহ", href: "/events", icon: Megaphone },
      { label: "নোটিশ ও টেন্ডার", href: "/notices", icon: FileText },
      { label: "রিসোর্স ও রিপোর্ট", href: "/resources", icon: Briefcase },
      { label: "ফটো ও ভিডিও গ্যালারি", href: "/gallery", icon: Camera },
      { label: "মানবিক গল্পসমূহ", href: "/stories", icon: Sparkles },
    ]
  },
  {
    title: "কমিউনিটি",
    links: [
      { label: "রক্তদান হাব", href: "/blood", icon: Droplet },
      { label: "রক্তদাতা খুঁজুন", href: "/blood/donors", icon: Droplet },
      { label: "স্বেচ্ছাসেবক হন", href: "/volunteer", icon: Users },
      { label: "ক্যারিয়ার", href: "/careers", icon: Briefcase },
      { label: "সদস্যপদ আবেদন", href: "/membership", icon: Users },
    ]
  }
];

export default function VisualSitemap() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <Map className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">ভিজ্যুয়াল <span className="text-white/40">সাইটম্যাপ</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">ওঙ্গন বাংলাদেশের সকল পেজ এবং সার্ভিস এক নজরে এখানে খুঁজে পাবেন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mapCategories.map((cat, i) => (
            <Card key={i} className="bg-white/5 border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-xl">
              <CardHeader className="p-8 pb-4 border-b border-white/5">
                <CardTitle className="text-white font-black text-xl uppercase tracking-widest opacity-40">{cat.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 grid gap-2">
                {cat.links.map((link, idx) => (
                  <Link key={idx} href={link.href}>
                    <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 text-white/70 hover:text-white transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-xl bg-white/5 text-white group-hover:scale-110 transition-transform">
                          <link.icon className="h-4 w-4" />
                        </div>
                        <span className="font-bold text-sm tracking-tight">{link.label}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • SITE ARCHITECTURE v2.5
        </p>
      </footer>
    </div>
  );
}
