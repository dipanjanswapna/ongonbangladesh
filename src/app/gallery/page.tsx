'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Image as ImageIcon, Camera, Video } from 'lucide-react';
import Image from 'next/image';
import { galleryItems } from '@/lib/media-data';

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <ImageIcon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">ফটো ও <span className="text-white/40">ভিডিও গ্যালারি</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">আমাদের মাঠ পর্যায়ের কার্যক্রমের একঝলক।</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-8 py-3 bg-white text-[#7a1013] rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">সবগুলো</button>
          <button className="px-8 py-3 bg-white/5 border border-white/10 text-white/60 hover:text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all"><Camera className="h-3 w-3 mr-2 inline" /> ফটো</button>
          <button className="px-8 py-3 bg-white/5 border border-white/10 text-white/60 hover:text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all"><Video className="h-3 w-3 mr-2 inline" /> ভিডিও</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="bg-white/5 border-white/5 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl relative">
              <div className="relative aspect-video w-full">
                <Image src={item.url} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <Badge variant="outline" className="border-white/20 text-white/60 text-[8px] font-black uppercase mb-2 w-fit">{item.type}</Badge>
                  <h4 className="text-white font-bold text-lg uppercase tracking-tight leading-none">{item.title}</h4>
                </div>
                {item.type === 'Video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-white/20 backdrop-blur-md text-white shadow-2xl group-hover:scale-125 transition-transform">
                      <PlayCircle className="h-10 w-10 fill-white/20" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
