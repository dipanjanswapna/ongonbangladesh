'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Globe, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: "ফিল্ড কোঅর্ডিনেটর",
    department: "অপারেশনস",
    location: "সিলেট, বাংলাদেশ",
    type: "Full-time",
    salary: "৳২৫,০০০ - ৳৩৫,০০০",
    posted: "২ দিন আগে"
  },
  {
    id: 2,
    title: "সোশ্যাল মিডিয়া ম্যানেজার",
    department: "কমিউনিকেশন",
    location: "রিমোট",
    type: "Part-time",
    salary: "৳১৫,০০০ - ৳২০,০০০",
    posted: "৫ দিন আগে"
  },
  {
    id: 3,
    title: "সফটওয়্যার ইঞ্জিনিয়ার (React)",
    department: "টেক টিম",
    location: "ঢাকা, বাংলাদেশ",
    type: "Full-time",
    salary: "৳৫০,০০০ - ৳৮০,০০০",
    posted: "১ সপ্তাহ আগে"
  },
  {
    id: 4,
    title: "ডাটা এনালিস্ট (Volunteer)",
    department: "রিসার্চ",
    location: "রিমোট",
    type: "Volunteer",
    salary: "সম্মানী প্রদান করা হবে",
    posted: "৩ দিন আগে"
  }
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0203]">
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <div className="space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge className="bg-primary/20 text-primary border-primary/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Join our mission</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">আপনার পেশাকে <br />মানবিকতায় রূপান্তর করুন</h1>
            <p className="text-lg text-white/60">ওঙ্গন বাংলাদেশে ক্যারিয়ার গড়া মানে শুধু একটি চাকরি নয়, বরং সমাজের ইতিবাচক পরিবর্তনে সরাসরি ভূমিকা রাখা।</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-md">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
              <Input 
                placeholder="চাকরির পদ বা বিভাগ খুঁজুন" 
                className="bg-transparent border-none text-white pl-12 h-12 focus:ring-0 placeholder:text-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-xl px-8 h-12 w-full md:w-auto">
              <Filter className="h-4 w-4 mr-2" /> ফিল্টার
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="bg-white/5 border-white/5 rounded-[2rem] p-8 hover:bg-white/10 hover:border-white/10 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-white/10 text-white/60 font-bold border-0">{job.department}</Badge>
                      <Badge className="bg-green-500/10 text-green-400 font-bold border-0">{job.type}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-6 text-white/40 text-sm font-medium">
                      <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {job.location}</div>
                      <div className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-primary" /> {job.salary}</div>
                      <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {job.posted}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 h-14 px-8 rounded-2xl font-bold flex-1 md:flex-none">বিস্তারিত</Button>
                    <Button className="bg-white text-primary hover:bg-white/90 h-14 px-8 rounded-2xl font-black shadow-xl flex-1 md:flex-none">এখনি আবেদন করুন <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="rounded-[3rem] bg-gradient-to-br from-primary/20 to-transparent border border-white/10 p-12 text-center space-y-8 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl font-bold text-white">মনমতো পদ খুঁজে পাচ্ছেন না?</h2>
              <p className="text-white/60 max-w-xl mx-auto">আমরা সবসময় প্রতিভাবান এবং মানবিক ব্যক্তিদের খুঁজছি। আপনার সিভি পাঠিয়ে রাখতে পারেন আমাদের ডাটাবেজে।</p>
              <Button size="lg" className="bg-white text-primary font-black rounded-2xl h-16 px-12 text-lg shadow-2xl hover:scale-105 transition-all">ওপেন অ্যাপ্লিকেশন পাঠান</Button>
            </div>
            <Globe className="absolute -bottom-20 -right-20 h-64 w-64 text-white/5" />
          </div>
        </div>
      </main>
    </div>
  );
}
