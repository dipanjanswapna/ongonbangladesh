
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplet, MapPin, Search, UserPlus, Heart, Phone, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BloodDonationHub() {
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">রক্তদানই জীবন দান</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              আপনার এক ব্যাগ রক্ত বাঁচাতে পারে একটি প্রাণ। ওঙ্গন ব্লাড ব্যাংকের মাধ্যমে দ্রুত দাতা খুঁজুন অথবা দাতা হিসেবে রেজিস্ট্রেশন করুন।
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card border-white/10 p-6 flex flex-col items-center text-center space-y-4 group hover:bg-white/10 transition-all">
              <div className="p-4 rounded-3xl bg-red-500/20 text-red-500 group-hover:scale-110 transition-transform">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">রক্তদাতা খুঁজুন</h3>
              <p className="text-sm text-white/50">আপনার এলাকায় নির্দিষ্ট গ্রুপের রক্তদাতা খুঁজে বের করুন।</p>
              <Link href="/blood/donors" className="w-full">
                <Button className="w-full bg-white text-red-600 font-bold rounded-xl h-12 hover:bg-white/90">খুঁজুন</Button>
              </Link>
            </Card>

            <Card className="glass-card border-white/10 p-6 flex flex-col items-center text-center space-y-4 group hover:bg-white/10 transition-all">
              <div className="p-4 rounded-3xl bg-green-500/20 text-green-500 group-hover:scale-110 transition-transform">
                <UserPlus className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">দাতা হিসেবে নাম লিখুন</h3>
              <p className="text-sm text-white/50">স্বেচ্ছায় রক্তদান করতে আমাদের ডাটাবেজে নাম যুক্ত করুন।</p>
              <Link href="/blood/register" className="w-full">
                <Button className="w-full bg-green-600 text-white font-bold rounded-xl h-12 hover:bg-green-700">রেজিস্ট্রেশন</Button>
              </Link>
            </Card>

            <Card className="glass-card border-white/10 p-6 flex flex-col items-center text-center space-y-4 group hover:bg-white/10 transition-all">
              <div className="p-4 rounded-3xl bg-orange-500/20 text-orange-500 group-hover:scale-110 transition-transform">
                <AlertCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">জরুরি অনুরোধ</h3>
              <span>বর্তমানে ২ টি জরুরি রক্তের প্রয়োজন</span>
              <Link href="/blood/requests" className="w-full">
                <Button className="w-full bg-orange-600 text-white font-bold rounded-xl h-12 hover:bg-orange-700">সব অনুরোধ</Button>
              </Link>
            </Card>
          </div>

          {/* Blood Groups Selector */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">গ্রুপ অনুযায়ী দাতা খুঁজুন</h2>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {bloodGroups.map((group) => (
                <Link key={group} href={`/blood/donors?group=${encodeURIComponent(group)}`}>
                  <Button variant="outline" className="w-full h-16 rounded-2xl border-white/10 text-white hover:bg-white hover:text-red-600 font-bold text-lg">
                    {group}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats & Trust */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              { icon: Droplet, label: "মোট দাতা", value: "১,২০০+" },
              { icon: MapPin, label: "শহর কাভারেজ", value: "২৪+" },
              { icon: Heart, label: "প্রাণ বেঁচেছে", value: "৫০০+" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <stat.icon className="h-8 w-8 text-white/40 mx-auto" />
                <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
