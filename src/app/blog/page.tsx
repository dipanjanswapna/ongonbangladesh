'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function BlogPage() {
  const posts = [
    { title: "বন্যা দুর্গতদের পাশে ওঙ্গন", date: "১০ মে ২০২৪", category: "ইভেন্ট", image: "https://picsum.photos/seed/blog1/600/400" },
    { title: "শীতবস্ত্র বিতরণ কর্মসূচি ২০২৪", date: "১৫ জানুয়ারি ২০২৪", category: "সাহায্য", image: "https://picsum.photos/seed/blog2/600/400" },
    { title: "এআই প্রযুক্তিতে মানবিক সেবা", date: "০৫ মার্চ ২০২৪", category: "প্রযুক্তি", image: "https://picsum.photos/seed/blog3/600/400" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold text-white text-center mb-12">আমাদের ব্লগ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="glass-card border-white/10 overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" unoptimized />
              </div>
              <CardHeader className="p-6">
                <Badge className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="text-white text-xl leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-white/60 text-sm">আমাদের সাম্প্রতিক কার্যক্রম এবং মানবিক অভিজ্ঞতার কথা পড়ুন এই নিবন্ধে।</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 border-t border-white/5 mt-auto">
                <p className="text-xs text-white/40">{post.date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
