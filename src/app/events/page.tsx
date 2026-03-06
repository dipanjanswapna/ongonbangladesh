
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Star } from 'lucide-react';
import { eventItems } from '@/lib/media-data';

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <CalendarIcon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">আমাদের <span className="text-white/40">ইভেন্টসমূহ</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">মানবিক সেবায় আমাদের সাথে যুক্ত হতে ক্যালেন্ডারে নজর রাখুন।</p>
        </div>

        <div className="space-y-6">
          {eventItems.map((event) => (
            <Card key={event.id} className="bg-white/5 border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group shadow-2xl">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="flex flex-col items-center justify-center p-6 bg-white text-[#7a1013] rounded-2xl min-w-[120px] shadow-xl group-hover:scale-105 transition-transform">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">MAY</span>
                  <span className="text-4xl font-black">{event.date.split(' ')[0]}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">২০২৪</span>
                </div>
                
                <div className="flex-grow space-y-4 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <Badge variant={event.status === 'Upcoming' ? 'default' : 'secondary'} className={event.status === 'Upcoming' ? 'bg-green-500 text-white' : ''}>
                      {event.status === 'Upcoming' ? 'আসন্ন' : 'সম্পন্ন'}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      <MapPin className="h-3 w-3 text-red-500" /> {event.location}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-white/50 text-sm italic font-medium leading-relaxed">"{event.desc}"</p>
                </div>

                <div className="w-full md:w-auto">
                  <Button className="w-full md:w-auto bg-white text-[#7a1013] font-black h-12 px-8 rounded-xl shadow-xl uppercase tracking-widest text-[10px] active:scale-95 transition-all">
                    অংশ নিন <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
