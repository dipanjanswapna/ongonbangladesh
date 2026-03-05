'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, PlayCircle, Maximize2 } from 'lucide-react';
import Image from 'next/image';

export default function GalleryPage() {
  const photos = [
    { id: 1, url: "https://picsum.photos/seed/gall1/800/600", title: "বন্যা পুনর্বাসন কার্যক্রম" },
    { id: 2, url: "https://picsum.photos/seed/gall2/800/600", title: "মেডিক্যাল ক্যাম্প - ঢাকা" },
    { id: 3, url: "https://picsum.photos/seed/gall3/800/600", title: "শীতবস্ত্র বিতরণ ২০২৪" },
    { id: 4, url: "https://picsum.photos/seed/gall4/800/600", title: "শিশুদের শিক্ষা প্রকল্প" },
    { id: 5, url: "https://picsum.photos/seed/gall5/800/600", title: "স্বেচ্ছাসেবক সম্মেলন" },
    { id: 6, url: "https://picsum.photos/seed/gall6/800/600", title: "জরুরি রক্তদান ইভেন্ট" },
  ];

  const videos = [
    { id: 1, thumbnail: "https://picsum.photos/seed/vid1/800/450", title: "ওঙ্গন বাংলাদেশ - আমাদের যাত্রা", duration: "০৩:৪৫" },
    { id: 2, thumbnail: "https://picsum.photos/seed/vid2/800/450", title: "স্বেচ্ছাসেবকদের গল্প", duration: "০৫:১২" },
    { id: 3, thumbnail: "https://picsum.photos/seed/vid3/800/450", title: "দুর্যোগ ব্যবস্থাপনা টিউটোরিয়াল", duration: "১০:২০" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-2 shadow-2xl">
            <Camera className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">ফটো ও <span className="text-white/40">ভিডিও গ্যালারি</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">আমাদের কার্যক্রমের বাস্তব চিত্রগুলো এখানে ফ্রেমবন্দি করা হয়েছে।</p>
        </div>

        <Tabs defaultValue="photos" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/5 p-1 rounded-xl h-auto border border-white/10 backdrop-blur-md">
              <TabsTrigger value="photos" className="rounded-lg px-10 py-3 data-[state=active]:bg-white data-[state=active]:text-[#7a1013] font-black text-[10px] text-white uppercase tracking-widest flex items-center gap-2">
                <Camera className="h-4 w-4" /> ফটো গ্যালারি
              </TabsTrigger>
              <TabsTrigger value="videos" className="rounded-lg px-10 py-3 data-[state=active]:bg-white data-[state=active]:text-[#7a1013] font-black text-[10px] text-white uppercase tracking-widest flex items-center gap-2">
                <Video className="h-4 w-4" /> ভিডিও গ্যালারি
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="photos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div key={photo.id} className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-2xl border border-white/5 bg-white/5">
                  <Image src={photo.url} alt={photo.title} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-sm tracking-tight mb-2">{photo.title}</h4>
                    <Button size="icon" variant="ghost" className="h-10 w-10 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full self-end hover:bg-white hover:text-black">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((vid) => (
                <Card key={vid.id} className="bg-white/5 border-white/5 rounded-xl overflow-hidden group shadow-2xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={vid.thumbnail} alt={vid.title} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" unoptimized />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-5 rounded-full bg-white text-[#7a1013] shadow-2xl group-hover:scale-110 transition-transform">
                        <PlayCircle className="h-10 w-10 fill-[#7a1013]" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/80 text-white text-[10px] font-black rounded-md border border-white/10">{vid.duration}</div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{vid.title}</h4>
                    <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mt-2">ওঙ্গন স্টুডিও প্রোডাকশন</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
