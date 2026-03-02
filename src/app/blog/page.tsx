'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { 
      title: "বন্যা দুর্গতদের পাশে ওঙ্গন: একটি মানবিক অভিজ্ঞতার গল্প", 
      date: "১০ মে ২০২৪", 
      author: "ওঙ্গন টিম",
      category: "ইভেন্ট", 
      image: "https://picsum.photos/seed/blog1/800/500",
      excerpt: "সাম্প্রতিক বন্যায় ক্ষতিগ্রস্ত মানুষের মুখে হাসি ফোটাতে ওঙ্গন বাংলাদেশের স্বেচ্ছাসেবীরা কীভাবে কাজ করছে তা জানুন।" 
    },
    { 
      title: "শীতবস্ত্র বিতরণ কর্মসূচি ২০২৪: উত্তরাঞ্চলের চিত্র", 
      date: "১৫ জানুয়ারি ২০২৪", 
      author: "আরিফ আহমেদ",
      category: "সাহায্য", 
      image: "https://picsum.photos/seed/blog2/800/500",
      excerpt: "হাড়কাঁপানো শীতে কুড়িগ্রামের অসহায় মানুষের মাঝে কম্বল এবং গরম কাপড় বিতরণের মুহূর্তগুলো।" 
    },
    { 
      title: "এআই প্রযুক্তিতে মানবিক সেবা: আমাদের ভবিষ্যৎ পরিকল্পনা", 
      date: "০৫ মার্চ ২০২৪", 
      author: "টেক টিম",
      category: "প্রযুক্তি", 
      image: "https://picsum.photos/seed/blog3/800/500",
      excerpt: "কীভাবে আর্টিফিশিয়াল ইন্টেলিজেন্স ব্যবহার করে আমরা দ্রুত দাতা ও গ্রহীতার মাঝে সেতুবন্ধন তৈরি করছি।" 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-white/20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-32 flex-grow">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-white mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">আমাদের ব্লগ</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">আমাদের সাম্প্রতিক কার্যক্রম, মানবিক অভিজ্ঞতা এবং প্রযুক্তির মেলবন্ধনের গল্পগুলো পড়ুন এখানে।</p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Card key={i} className="glass-card border-white/10 overflow-hidden flex flex-col group hover:scale-[1.02] transition-all duration-300 shadow-2xl">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    unoptimized 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-primary font-bold shadow-xl">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase font-bold tracking-widest mb-3">
                    <div className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</div>
                    <div className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</div>
                  </div>
                  <CardTitle className="text-white text-xl leading-tight line-clamp-2 group-hover:text-primary-foreground transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 pt-0 flex-grow">
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button variant="link" className="p-0 text-white font-bold group-hover:gap-3 transition-all">
                    বিস্তারিত পড়ুন <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Newsletter / Call to Action */}
          <div className="rounded-[2.5rem] bg-white/5 border border-white/10 p-8 md:p-12 text-center space-y-6 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white">নতুন পোস্টের আপডেট পেতে চান?</h3>
            <p className="text-white/40 max-w-md mx-auto">আমাদের নিউজলেটারে সাবস্ক্রাইব করুন এবং মানবিক গল্পের সাথে যুক্ত থাকুন।</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল ঠিকানা" 
                className="flex-grow bg-white/10 border border-white/20 rounded-xl px-4 h-12 text-white outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="bg-white text-primary font-bold h-12 rounded-xl px-8 shadow-xl">সাবস্ক্রাইব</Button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
          ONGON BANGLADESH • CONNECTING HEARTS THROUGH STORIES
        </p>
      </footer>
    </div>
  );
}
