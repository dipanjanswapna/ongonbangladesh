'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  HeartHandshake, 
  Plus, 
  Search, 
  MapPin, 
  Clock, 
  Users, 
  ArrowLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DisasterAidMatching() {
  const [searchTerm, setSearchTerm] = useState('');

  const requests = [
    { id: 1, title: '৫টি পরিবারের জন্য শুকনো খাবার', location: 'কুড়িগ্রাম চর এলাকা', category: 'খাদ্য', urgency: 'high', time: '৩০ মিনিট আগে' },
    { id: 2, title: 'জরুরি পানিশোধন বড়ি প্রয়োজন', location: 'সুনামগঞ্জ সদর', category: 'স্বাস্থ্য', urgency: 'medium', time: '১ ঘণ্টা আগে' },
    { id: 3, title: 'উদ্ধারকারী নৌকা দরকার', location: 'সিলেট গোয়াইনঘাট', category: 'উদ্ধার', urgency: 'high', time: '২ ঘণ্টা আগে' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-500/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32 flex-grow max-w-6xl">
        <Link href="/disaster" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">দুর্যোগ ড্যাশবোর্ড</span>
        </Link>

        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -mr-8 -mt-8" />
            <div className="space-y-4 text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                <HeartHandshake className="h-3 w-3" /> Community Connection
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">সাহায্য ও <span className="text-white/40">সমন্বয়</span></h1>
              <p className="text-white/60 max-w-xl leading-relaxed font-medium text-sm">আক্রান্ত মানুষ ও সাহায্যকারীদের মাঝে সরাসরি সংযোগ স্থাপন। আপনার একটি ছোট উদ্যোগ কারো জীবন বাঁচাতে পারে।</p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto relative z-10">
              <Button className="bg-white text-[#7a1013] hover:bg-white/90 font-black h-14 px-10 rounded-xl shadow-xl uppercase tracking-widest text-[10px]">
                <Plus className="h-4 w-4 mr-2" /> সাহায্যের আবেদন করুন
              </Button>
              <Button variant="outline" className="border-white/10 text-white font-bold h-12 rounded-xl">
                ভলান্টিয়ার হতে চাই
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
              <TabsList className="bg-white/5 p-1 rounded-xl h-auto border border-white/10">
                <TabsTrigger value="all" className="rounded-lg px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-[#7a1013] font-bold text-xs text-white uppercase tracking-widest">সব আবেদন</TabsTrigger>
                <TabsTrigger value="urgent" className="rounded-lg px-6 py-2 data-[state=active]:bg-red-600 data-[state=active]:text-white font-bold text-xs text-white uppercase tracking-widest">জরুরি (SOS)</TabsTrigger>
                <TabsTrigger value="verified" className="rounded-lg px-6 py-2 data-[state=active]:bg-green-600 data-[state=active]:text-white font-bold text-xs text-white uppercase tracking-widest">যাচাইকৃত</TabsTrigger>
              </TabsList>

              <div className="flex gap-2 w-full md:w-96">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <Input 
                    placeholder="এলাকা বা বিভাগ দিয়ে খুঁজুন" 
                    className="bg-white/5 border-white/10 text-white pl-10 rounded-xl h-12 focus:ring-green-500/30"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="h-12 w-12 border-white/10 rounded-xl p-0 text-white/40">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {requests.map((req) => (
                  <Card key={req.id} className="bg-white/5 border-white/5 rounded-xl p-6 hover:bg-white/10 transition-all group shadow-2xl relative overflow-hidden border-b-4 border-b-white/5 hover:border-b-green-500/50">
                    <div className="flex justify-between items-start mb-6">
                      <Badge className={`bg-white/5 text-white/60 border-white/10 font-black text-[8px] uppercase tracking-widest`}>{req.category}</Badge>
                      <Badge className={cn(
                        "text-[8px] font-black uppercase tracking-widest",
                        req.urgency === 'high' ? "bg-red-600 text-white" : "bg-orange-500 text-white"
                      )}>
                        {req.urgency === 'high' ? 'জরুরি' : 'মাঝারি'}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{req.title}</h3>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-white/40 text-xs font-medium">
                        <MapPin className="h-3.5 w-3.5 text-red-500" /> {req.location}
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-xs font-medium">
                        <Clock className="h-3.5 w-3.5" /> {req.time}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-white text-[#7a1013] font-black rounded-lg h-10 text-[10px] uppercase tracking-widest hover:scale-105 transition-all">সাহায্য করব</Button>
                      <Button variant="outline" className="h-10 w-10 border-white/10 text-white/20 hover:text-white rounded-lg p-0">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Stats / Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/5 border-white/10 rounded-xl text-center space-y-2">
              <Users className="h-8 w-8 text-blue-400 mx-auto" />
              <h4 className="text-2xl font-black text-white">১,৫০০+</h4>
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">নিবন্ধিত ভলান্টিয়ার</p>
            </Card>
            <Card className="p-6 bg-white/5 border-white/10 rounded-xl text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-green-400 mx-auto" />
              <h4 className="text-2xl font-black text-white">৪২০</h4>
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">সমাধানকৃত আবেদন</p>
            </Card>
            <Card className="p-6 bg-white/5 border-white/10 rounded-xl text-center space-y-2">
              <AlertCircle className="h-8 w-8 text-orange-400 mx-auto" />
              <h4 className="text-2xl font-black text-white">১২</h4>
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">সক্রিয় রিকোয়েস্ট</p>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON AID NETWORK • STRENGTH THROUGH UNITY
        </p>
      </footer>
    </div>
  );
}
