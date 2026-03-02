
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit2, Trash2, Megaphone, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { campaigns } from '@/lib/campaigns-data';
import Image from 'next/image';

export default function CampaignsManagement() {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">ক্যাম্পেইন ম্যানেজমেন্ট</h1>
          <p className="text-white/40 mt-1">নতুন ক্যাম্পেইন তৈরি করুন এবং চলমানগুলো আপডেট করুন।</p>
        </div>
        <Button className="bg-white text-primary hover:bg-white/90 font-bold rounded-2xl h-12 px-6 shadow-xl w-full md:w-auto">
          <Plus className="h-5 w-5 mr-2" /> নতুন ক্যাম্পেইন
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((camp) => {
          const progress = (camp.raised / camp.target) * 100;
          return (
            <Card key={camp.id} className="border-white/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
              <div className="relative h-40 w-full">
                <Image src={camp.image} alt={camp.title} fill className="object-cover opacity-60" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0203] to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" className="h-8 w-8 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20">
                    <Edit2 className="h-3.5 w-3.5" />
                  </Button>
                  <Button size="icon" className="h-8 w-8 bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-500 rounded-xl hover:bg-red-500/30">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white line-clamp-1">{camp.title}</h3>
                  <p className="text-xs text-white/40 mt-1 line-clamp-2">{camp.excerpt}</p>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-xs text-white/60 font-bold">
                    <span>সংগৃহীত: ৳{camp.raised.toLocaleString()}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-1.5 bg-white/5" />
                  <div className="flex items-center gap-1 text-[10px] text-white/30 uppercase font-bold tracking-widest pt-2 border-t border-white/5">
                    <Megaphone className="h-3 w-3" /> লক্ষ্য: ৳{camp.target.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
