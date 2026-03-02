'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { AidCard } from '@/components/aid/AidCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, MapPin } from 'lucide-react';

export default function RequestsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const allRequests = [
    {
      id: '1',
      title: 'শিশুর জন্য জরুরি চিকিৎসা সহায়তা',
      description: 'ঢাকার ৫ বছর বয়সী এক শিশুর হার্টের অপারেশনের জন্য জরুরি আর্থিক সহায়তা প্রয়োজন। পরিবার রক্তদাতাও খুঁজছে।',
      location: 'ঢাকা, বাংলাদেশ',
      category: 'চিকিৎসা',
      urgency: 'high' as const,
      createdAt: '২ ঘণ্টা আগে',
      type: 'request' as const
    },
    {
      id: '2',
      title: 'পল্লী স্কুলের জন্য স্বেচ্ছাসেবক শিক্ষক',
      description: 'সিলেটের আমাদের কমিউনিটি স্কুলে প্রাথমিক স্তরের শিক্ষার্থীদের ইংরেজি ও গণিত শেখানোর জন্য স্বেচ্ছাসেবক প্রয়োজন।',
      location: 'সিলেট',
      category: 'শিক্ষা',
      urgency: 'medium' as const,
      createdAt: '৫ ঘণ্টা আগে',
      type: 'request' as const
    },
    {
      id: '3',
      title: 'জরুরি খাদ্য বিতরণ কর্মসূচি',
      description: 'সাম্প্রতিক বন্যায় ক্ষতিগ্রস্ত ৫০টি পরিবারকে শুকনো খাবার সরবরাহ করা হচ্ছে। প্যাকিং ও ডেলিভারির জন্য স্বেচ্ছাসেবক প্রয়োজন।',
      location: 'চট্টগ্রাম, বাংলাদেশ',
      category: 'খাদ্য',
      urgency: 'high' as const,
      createdAt: '১ দিন আগে',
      type: 'request' as const
    },
    {
      id: '4',
      title: 'শীতবস্ত্র বিতরণ সহায়তা',
      description: 'উত্তরাঞ্চলের শীতার্ত মানুষের জন্য কম্বল এবং গরম কাপড় সংগ্রহ ও বিতরণে সহায়তা প্রয়োজন।',
      location: 'রংপুর',
      category: 'পোশাক',
      urgency: 'medium' as const,
      createdAt: '৩ দিন আগে',
      type: 'request' as const
    },
    {
      id: '5',
      title: 'গৃহহীন পরিবারের জন্য আশ্রয়',
      description: 'আগুনে পুড়ে যাওয়া একটি পরিবারের জন্য সাময়িক আবাসন বা টিন দিয়ে ঘর তৈরির সহায়তা প্রয়োজন।',
      location: 'খুলনা',
      category: 'আবাসন',
      urgency: 'high' as const,
      createdAt: '৪ ঘণ্টা আগে',
      type: 'request' as const
    },
    {
      id: '6',
      title: 'টিউবারকুলোসিস রোগীর ঔষধ',
      description: 'একজন অসহায় যক্ষ্মা রোগীর নিয়মিত ঔষধ ক্রয়ের জন্য আর্থিক অনুদান প্রয়োজন।',
      location: 'বরিশাল',
      category: 'চিকিৎসা',
      urgency: 'high' as const,
      createdAt: '৬ ঘণ্টা আগে',
      type: 'request' as const
    }
  ];

  const filteredRequests = allRequests.filter(req => {
    const matchesSearch = req.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          req.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || req.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white">জরুরি সাহায্যের অনুরোধসমূহ</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              আমাদের কমিউনিটির সদস্যরাই একে অপরের শক্তি। নিচের অনুরোধগুলো দেখুন এবং আপনার সাধ্যমতো সাহায্যের হাত বাড়িয়ে দিন।
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="glass-card p-4 rounded-3xl border-white/10 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 h-5 w-5" />
              <Input 
                placeholder="শিরোনাম বা অবস্থান দিয়ে খুঁজুন..." 
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 w-full rounded-2xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-48">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <SelectValue placeholder="বিভাগ" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-[#781013] border-white/10 text-white">
                  <SelectItem value="all">সব বিভাগ</SelectItem>
                  <SelectItem value="চিকিৎসা">চিকিৎসা</SelectItem>
                  <SelectItem value="শিক্ষা">শিক্ষা</SelectItem>
                  <SelectItem value="খাদ্য">খাদ্য</SelectItem>
                  <SelectItem value="আবাসন">আবাসন</SelectItem>
                  <SelectItem value="পোশাক">পোশাক</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Requests Grid */}
          {filteredRequests.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRequests.map((req) => (
                <AidCard key={req.id} {...req} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
              <p className="text-white/40 font-medium">আপনার খোঁজা অনুযায়ী কোনো অনুরোধ পাওয়া যায়নি।</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
