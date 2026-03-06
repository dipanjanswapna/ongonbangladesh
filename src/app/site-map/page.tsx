'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  Info, 
  Newspaper, 
  Phone, 
  Heart, 
  ShieldAlert, 
  Droplet, 
  Users, 
  Map as MapIcon,
  CloudLightning,
  LayoutGrid,
  FileText,
  ShieldCheck,
  Smartphone,
  BookOpen,
  Camera,
  Sparkles,
  Gavel
} from 'lucide-react';
import Link from 'next/link';

export default function SiteMapPage() {
  const sections = [
    {
      title: "প্রধান পেজসমূহ",
      icon: Home,
      links: [
        { label: "হোম পেজ", href: "/", icon: Home },
        { label: "আমাদের সম্পর্কে", href: "/about", icon: Info },
        { label: "যোগাযোগ", href: "/contact", icon: Phone },
        { label: "ব্লগ", href: "/blog", icon: Newspaper },
        { label: "সাইট ম্যাপ", href: "/site-map", icon: LayoutGrid },
      ]
    },
    {
      title: "মানবিক সেবা",
      icon: Heart,
      links: [
        { label: "অনুদান কেন্দ্র", href: "/donate", icon: Heart },
        { label: "নিয়মিত অনুদান", href: "/donate/regular", icon: Smartphone },
        { label: "মেম্বারশিপ", href: "/membership", icon: ShieldCheck },
        { label: "স্বেচ্ছাসেবক হন", href: "/volunteer", icon: Users },
        { label: "সাহায্য আবেদনসমূহ", href: "/requests", icon: FileText },
      ]
    },
    {
      title: "রক্তদান হাব",
      icon: Droplet,
      links: [
        { label: "ব্লাড ব্যাংক হোম", href: "/blood", icon: Droplet },
        { label: "রক্তদাতা খুঁজুন", href: "/blood/donors", icon: MapIcon },
        { label: "দাতা হিসেবে যোগ দিন", href: "/blood/register", icon: Users },
      ]
    },
    {
      title: "নিরাপত্তা ও দুর্যোগ",
      icon: ShieldAlert,
      links: [
        { label: "নিরাপত্তা হাব", href: "/safety", icon: ShieldAlert },
        { label: "এআই সাপোর্ট চ্যাট", href: "/safety/chat", icon: Bot },
        { label: "জরুরি হেল্পলাইন", href: "/safety/helplines", icon: Phone },
        { label: "দুর্যোগ ব্যবস্থাপনা", href: "/disaster", icon: CloudLightning },
        { label: "লাইভ অ্যালার্ট", href: "/disaster/alerts", icon: ShieldAlert },
      ]
    },
    {
      title: "মিডিয়া ও আর্কাইভ",
      icon: LayoutGrid,
      links: [
        { label: "নিউজ ও প্রেস", href: "/news", icon: Newspaper },
        { label: "ইভেন্টসমূহ", href: "/events", icon: Megaphone },
        { label: "নোটিশ ও টেন্ডার", href: "/notices", icon: Gavel },
        { label: "রিসোর্স সেন্টার", href: "/resources", icon: BookOpen },
        { label: "ফটো ও ভিডিও গ্যালারি", href: "/gallery", icon: Camera },
        { label: "সাফল্যের গল্প", href: "/stories", icon: Sparkles },
      ]
    },
    {
      title: "আইনি তথ্য",
      icon: ShieldCheck,
      links: [
        { label: "গোপনীয়তা নীতি", href: "/privacy", icon: ShieldCheck },
        { label: "শর্তাবলী", href: "/terms", icon: FileText },
        { label: "রিফান্ড নীতি", href: "/refund-policy", icon: Smartphone },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">সাইট <span className="text-white/40">ম্যাপ</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">ওঙ্গন বাংলাদেশ প্ল্যাটফর্মের সকল পেজ এবং সার্ভিস এক নজরে দেখে নিন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <Card key={i} className="bg-white/5 border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all shadow-xl">
              <CardHeader className="border-b border-white/5 bg-white/5">
                <CardTitle className="text-white text-lg flex items-center gap-3">
                  <section.icon className="h-5 w-5 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                        <link.icon className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm font-medium">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
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
