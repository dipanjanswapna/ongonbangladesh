
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, BookOpen, MessageSquare, PlusCircle, Share2, Heart } from 'lucide-react';
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

  const forumDiscussions = [
    { title: "একাকী ফেরার সময় নিরাপত্তার কিছু টিপস", replies: 24, likes: 156, user: "তানজিনা" },
    { title: "সাইবার বুলিংয়ের শিকার হলে আইনি পদক্ষেপ কী?", replies: 12, likes: 89, user: "রাকিব হাসান" },
    { title: "কমিউনিটি ভলান্টিয়ারিং শুরু করার উপায়", replies: 45, likes: 312, user: "ওঙ্গন ফ্যান" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 py-32 flex-grow">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 text-white mb-4 shadow-2xl">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">ওঙ্গন <span className="text-white/40">কমিউনিটি ব্লগ</span></h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">আমাদের সাম্প্রতিক কার্যক্রম, মানবিক অভিজ্ঞতা এবং প্রতিরোধের গল্পগুলো পড়ুন ও শেয়ার করুন।</p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10 p-8 rounded-[2.5rem] flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all shadow-2xl">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">অভিজ্ঞতা শেয়ার করুন</h3>
                <p className="text-white/40 text-sm font-medium">আপনার জীবনের কোনো শিক্ষা বা টিপস অন্যদের জানান।</p>
              </div>
              <div className="p-4 rounded-2xl bg-white text-[#7a1013] group-hover:scale-110 transition-transform">
                <PlusCircle className="h-8 w-8" />
              </div>
            </Card>
            <Card className="bg-white/5 border-white/10 p-8 rounded-[2.5rem] flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all shadow-2xl">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">আলোচনা ফোরাম</h3>
                <h2 className="text-white/40 text-sm font-medium">নিরাপত্তা ও সহায়তা নিয়ে সরাসরি কথা বলুন।</h2>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                <MessageSquare className="h-8 w-8" />
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-white pl-4">সাম্প্রতিক পোস্টসমূহ</h2>
              <Button variant="ghost" className="text-white/40 hover:text-white uppercase font-black text-[10px] tracking-widest">সব দেখুন</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <Card key={i} className="bg-white/5 border-white/5 overflow-hidden flex flex-col group hover:translate-y-[-8px] transition-all duration-500 shadow-2xl rounded-[2.5rem]">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      unoptimized 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-[#7a1013] font-black uppercase text-[8px] tracking-widest border-0 shadow-xl">{post.category}</Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 text-[9px] text-white/30 uppercase font-black tracking-widest mb-3">
                      <div className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</div>
                      <div className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</div>
                    </div>
                    <CardTitle className="text-white text-xl leading-tight line-clamp-2 group-hover:text-white/80 transition-colors font-bold">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0 flex-grow">
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-3 italic">
                      "{post.excerpt}"
                    </p>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 mt-auto border-t border-white/5 bg-white/5 flex justify-between items-center">
                    <Button variant="link" className="p-0 text-white font-black uppercase text-[10px] tracking-widest group-hover:gap-3 transition-all">
                      বিস্তারিত পড়ুন <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="flex gap-3">
                      <Share2 className="h-4 w-4 text-white/20 hover:text-white cursor-pointer transition-colors" />
                      <Heart className="h-4 w-4 text-white/20 hover:text-red-500 cursor-pointer transition-colors" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Forum Teaser */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-white pl-4">জনপ্রিয় আলোচনা</h2>
              <div className="space-y-4">
                {forumDiscussions.map((forum, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all flex items-center justify-between group shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-white/5 text-white">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold group-hover:text-primary transition-colors">{forum.title}</h4>
                        <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mt-1">শুরু করেছেন: {forum.user}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-white font-black text-lg leading-none">{forum.replies}</p>
                        <p className="text-[8px] text-white/30 uppercase font-bold">উত্তর</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-white/10 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-white pl-4">সাবস্ক্রাইব</h2>
              <Card className="bg-white text-[#7a1013] p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 rounded-full -mr-8 -mt-8" />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">নতুন পোস্টের <br />আপডেট পান</h3>
                  <p className="text-[#7a1013]/60 text-xs font-bold leading-relaxed">মানবিক কাজের সাথে যুক্ত থাকতে আমাদের নিউজলেটারে যোগ দিন।</p>
                  <div className="space-y-2">
                    <input 
                      type="email" 
                      placeholder="আপনার ইমেইল" 
                      className="w-full bg-[#7a1013]/5 border border-[#7a1013]/10 rounded-xl px-4 h-12 text-sm focus:ring-2 focus:ring-[#7a1013]/20 outline-none"
                    />
                    <Button className="w-full bg-[#7a1013] text-white font-black h-12 rounded-xl uppercase tracking-widest text-[10px] shadow-xl active:scale-95 transition-all">সাবস্ক্রাইব করুন</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • CONNECTING HEARTS THROUGH STORIES • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

function ChevronRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  )
}
