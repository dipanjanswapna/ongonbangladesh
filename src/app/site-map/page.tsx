'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Map, 
  Home, 
  ShieldAlert, 
  CloudLightning, 
  Droplet, 
  Newspaper, 
  Heart, 
  Globe, 
  Users,
  ChevronRight,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function SitemapPage() {
  const sections = [
    {
      title: "মূল পেজসমূহ",
      icon: Home,
      links: [
        { label: "হোম পেজ", href: "/" },
        { label: "আমাদের সম্পর্কে", href: "/about" },
        { label: "যোগাযোগ", href: "/contact" },
        { label: "ব্লগ ও ফোরাম", href: "/blog" },
        { label: "এআই অ্যাসিস্ট্যান্ট", href: "/assistant" },
        { label: "অ্যাপ ইনস্টল", href: "/install" },
      ]
    },
    {
      title: "দুর্যোগ ব্যবস্থাপনা",
      icon: CloudLightning,
      links: [
        { label: "দুর্যোগ হাব", href: "/disaster" },
        { label: "লাইভ অ্যালার্ট", href: "/disaster/alerts" },
        { label: "রিসোর্স লোকেটর", href: "/disaster/resources" },
        { label: "সাহায্য সমন্বয়", href: "/disaster/requests" },
        { label: "সচেতনতা কেন্দ্র", href: "/disaster/education" },
        { label: "ক্ষয়ক্ষতি রিপোর্ট", href: "/disaster/report" },
      ]
    },
    {
      title: "নিরাপত্তা ও SOS",
      icon: ShieldAlert,
      links: [
        { label: "নিরাপত্তা সেন্টার", href: "/safety" },
        { label: "এআই সাপোর্ট চ্যাট", href: "/safety/chat" },
        { label: "আইনি শিক্ষা", href: "/safety/education" },
        { label: "জরুরি হেল্পলাইন", href: "/safety/helplines" },
        { label: "বেনামী রিপোর্ট", href: "/safety/report" },
      ]
    },
    {
      title: "রক্তদান ও চিকিৎসা",
      icon: Droplet,
      links: [
        { label: "ব্লাড ব্যাংক হাব", href: "/blood" },
        { label: "রক্তদাতা খুঁজুন", href: "/blood/donors" },
        { label: "দাতা হিসেবে নিবন্ধন", href: "/blood/register" },
      ]
    },
    {
      title: "মিডিয়া ও রিসোর্স",
      icon: Newspaper,
      links: [
        { label: "নিউজ ও প্রেস", href: "/news" },
        { label: "ইভেন্টসমূহ", href: "/events" },
        { label: "নোটিশ ও টেন্ডার", href: "/notices" },
        { label: "রিসোর্স সেন্টার", href: "/resources" },
        { label: "গ্যালারি", href: "/gallery" },
        { label: "সফলতার গল্প", href: "/stories" },
      ]
    },
    {
      title: "অনুষঙ্গ ও ক্যারিয়ার",
      icon: Users,
      links: [
        { label: "অনুদান কেন্দ্র", href: "/donate" },
        { label: "নিয়মিত অনুদান", href: "/donate/regular" },
        { label: "সদস্যপদ আবেদন", href: "/membership" },
        { label: "স্বেচ্ছাসেবক হন", href: "/volunteer" },
        { label: "ক্যারিয়ার", href: "/careers" },
      ]
    },
    {
      title: "নীতিমালা",
      icon: Info,
      links: [
        { label: "গোপনীয়তা নীতি", href: "/privacy" },
        { label: "ব্যবহারের শর্তাবলী", href: "/terms" },
        { label: "রিফান্ড নীতি", href: "/refund-policy" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <Map className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">সাইট <span className="text-white/40">ম্যাপ</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">ওঙ্গন বাংলাদেশ প্ল্যাটফর্মের সকল পেজ এবং সেবার তালিকা এক নজরে দেখে নিন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <Card key={i} className="bg-white/5 border-white/10 rounded-xl overflow-hidden shadow-2xl hover:bg-white/10 transition-all group">
              <CardHeader className="border-b border-white/5 flex flex-row items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-white shadow-xl group-hover:scale-110 transition-transform">
                  <section.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-white text-xl uppercase tracking-widest font-black">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link 
                        href={link.href} 
                        className="flex items-center justify-between text-white/60 hover:text-white transition-colors group/link py-1"
                      >
                        <span className="text-sm font-bold tracking-tight">{link.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-xl bg-white/5 border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-3">
            <Globe className="h-6 w-6 text-white/40" /> স্মার্ট নেভিগেশন সচল
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed italic text-lg">
            "আমাদের প্ল্যাটফর্মটি এআই প্রযুক্তির মাধ্যমে ইউজারদের সর্বোচ্চ নিরাপত্তা এবং দ্রুত তথ্য সরবরাহ নিশ্চিত করে।"
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/">
              <Button className="bg-white text-[#7a1013] font-black h-12 px-8 rounded-xl uppercase tracking-widest text-[10px] shadow-xl hover:scale-105 transition-all">হোমে ফিরে যান</Button>
            </Link>
            <Link href="/assistant">
              <Button variant="outline" className="border-white/20 text-white font-bold h-12 px-8 rounded-xl uppercase tracking-widest text-[10px] shadow-xl hover:bg-white/5">এআই সহায়তা</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • SITE INDEX • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
