'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Quote, ArrowLeft, Heart, Sparkles, ShieldCheck, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const leadershipData: Record<string, any> = {
  "chairman": {
    name: "দীপাঞ্জন স্বপ্ন প্রাঙ্গণ",
    role: "চেয়ারম্যান",
    image: "https://picsum.photos/seed/chairman/600/600",
    fullMessage: `মানবিক সহায়তার এই মহতী যাত্রায় ওঙ্গন বাংলাদেশ একটি নতুন দিগন্তের সূচনা করেছে। আমরা যখন পথচলা শুরু করি, আমাদের লক্ষ্য ছিল অত্যন্ত স্পষ্ট—একটি স্মার্ট বাংলাদেশ বিনির্মাণে মানবিকতাকে প্রযুক্তির সাথে একীভূত করা।

আজকের এই আধুনিক যুগে মানুষের দুঃখ-দুর্দশা লাঘব করতে শুধুমাত্র আবেগ যথেষ্ট নয়, প্রয়োজন সঠিক পরিকল্পনা এবং দ্রুত কার্যকর পদক্ষেপ। ওঙ্গন বাংলাদেশে আমরা এআই (AI) এবং আধুনিক ডাটা ম্যানেজমেন্ট ব্যবহার করছি যাতে দাতা ও গ্রহীতার মাঝে কোনো বাধা না থাকে।

দীপাঞ্জন স্বপ্ন প্রাঙ্গণ হিসেবে আমি বিশ্বাস করি, প্রতিটি মানুষের মধ্যে একটি সুপ্ত মানবিক সত্তা আছে। আমাদের কাজ হলো সেই সত্তাকে জাগ্রত করা এবং সঠিক পথে পরিচালিত করা। আমরা শুধু খাবার বা অর্থ বিতরণ করি না, আমরা মানুষের আত্মসম্মান ফিরিয়ে দেওয়ার চেষ্টা করি।

আগামী দিনে আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি জেলায় ওঙ্গন-এর নেটওয়ার্ক ছড়িয়ে দেওয়া এবং একটি স্বয়ংসম্পূর্ণ মানবিক ইকোসিস্টেম তৈরি করা। যেখানে ক্ষুধার অবসান হবে এবং প্রতিটি হৃদয়ে সংযোগ স্থাপিত হবে। আমরা আপনাদের সাথে নিয়ে একটি সুন্দর আগামীর স্বপ্ন দেখি।`,
    bio: "দীপাঞ্জন স্বপ্ন প্রাঙ্গণ ওঙ্গন বাংলাদেশের প্রতিষ্ঠাতা এবং চেয়ারম্যান। তিনি দীর্ঘ বছর ধরে সামাজিক উন্নয়নে প্রযুক্তির সমন্বয় নিয়ে কাজ করছেন এবং তার দূরদর্শী নেতৃত্বে ওঙ্গন আজ একটি শক্তিশালী প্ল্যাটফর্ম হিসেবে দাঁড়িয়েছে।",
    values: ["প্রযুক্তি নির্ভর মানবিকতা", "স্বচ্ছতা ও জবাবদিহিতা", "সামাজিক সাম্য"]
  },
  "vice-chairman": {
    name: "মোঃ আরিফুর রহমান",
    role: "ভাইস চেয়ারম্যান",
    image: "https://picsum.photos/seed/vice/600/600",
    fullMessage: `স্বচ্ছতা এবং সততা হলো ওঙ্গন বাংলাদেশের মেরুদণ্ড। আমরা প্রতিটি পদক্ষেপ নেই অত্যন্ত সতর্কতা এবং দায়বদ্ধতার সাথে। মাঠ পর্যায়ে কাজ করার সময় আমরা দেখেছি মানুষের বিশ্বাসের গুরুত্ব কতখানি।

ভাইস চেয়ারম্যান হিসেবে আমার প্রধান অগ্রাধিকার হলো সংস্থার অপারেশনাল স্বচ্ছতা নিশ্চিত করা। আমাদের দাতা সদস্যরা যেন তাদের প্রতিটি পয়সার হিসাব দেখতে পান এবং জানতে পারেন তাদের সাহায্য সরাসরি কার কাছে পৌঁছাচ্ছে।

আমরা বিশ্বাস করি, ছোট ছোট বালুকণা যেমন মহাদেশ তৈরি করে, তেমনি আপনাদের ছোট ছোট অনুদান একেকটি বড় পরিবর্তনের সূচনা করে। আমাদের ভলান্টিয়ার টিম দিনরাত পরিশ্রম করছে যাতে সাহায্য পৌঁছাতে এক মুহূর্তও দেরি না হয়।

আমরা শুধু বর্তমান নিয়ে ভাবি না, আমরা ভাবি টেকসই উন্নয়নের কথা। শিক্ষা এবং চিকিৎসার মতো মৌলিক অধিকারগুলো যেন প্রতিটি দুস্থ মানুষের কাছে পৌঁছাতে পারে, সেটিই আমাদের অঙ্গীকার। আপনাদের ভালোবাসা ও সহযোগিতায় আমরা অনেক দূর এগিয়ে যাব ইনশাআল্লাহ।`,
    bio: "মোঃ আরিফুর রহমান একজন প্রফেশনাল ম্যানেজমেন্ট বিশেষজ্ঞ। ওঙ্গন বাংলাদেশের অপারেশনাল কাঠামোর উন্নয়নে তিনি গুরুত্বপূর্ণ ভূমিকা পালন করছেন।",
    values: ["অপারেশনাল স্বচ্ছতা", "মাঠ পর্যায়ের প্রভাব", "টেকসই উন্নয়ন"]
  },
  "secretary-general": {
    name: "সাদিয়া ইসলাম",
    role: "সেক্রেটারি জেনারেল",
    image: "https://picsum.photos/seed/secretary/600/600",
    fullMessage: `একটি স্বেচ্ছাসেবক বাহিনীই একটি মানবিক সংস্থার প্রাণশক্তি। ওঙ্গন বাংলাদেশে আমাদের হাজারো নিবেদিতপ্রাণ ভলান্টিয়ার রয়েছে যারা ঝড়-বৃষ্টি বা যেকোনো বিপদে মানুষের পাশে দাঁড়াতে দ্বিধা করে না।

সেক্রেটারি জেনারেল হিসেবে আমি আমাদের কমিউনিটি এবং স্বেচ্ছাসেবকদের মধ্যে সেতুবন্ধন হিসেবে কাজ করি। আমাদের মূল শক্তি হলো তারুণ্য এবং তাদের অদম্য স্পৃহা। আমরা চাই প্রতিটি তরুণ যেন মানবিক কাজে অংশগ্রহণের মাধ্যমে নিজেকে সমৃদ্ধ করতে পারে।

আমাদের ডাটাবেজে আমরা প্রতিটি রক্তদাতার তথ্য এবং সাহায্যের অনুরোধগুলোকে অত্যন্ত শৃঙ্খলার সাথে সংরক্ষণ করি। এতে আমাদের কার্যক্রম দ্রুততম সময়ে সম্পন্ন করা সম্ভব হয়।

ওঙ্গন বাংলাদেশ কোনো একক ব্যক্তি বা গোষ্ঠীর নয়, এটি আমাদের সবার। আমরা চাই এমন একটি সমাজ যেখানে কেউ নিজেকে একা মনে করবে না। আমাদের দরজা সবার জন্য খোলা, আপনি দাতা বা স্বেচ্ছাসেবক—যেকোনো ভাবেই আমাদের এই মহৎ কর্মযজ্ঞে শরিক হতে পারেন।`,
    bio: "সাদিয়া ইসলাম ওঙ্গন বাংলাদেশের সেক্রেটারি জেনারেল। তিনি মূলত স্বেচ্ছাসেবক ব্যবস্থাপনা এবং কমিউনিটি এনগেজমেন্ট নিয়ে কাজ করেন।",
    values: ["স্বেচ্ছাসেবার শক্তি", "কমিউনিটি সংযোগ", "নারীর ক্ষমতায়ন ও অংশীদারিত্ব"]
  }
};

export default function LeadershipDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const leader = leadershipData[slug];

  if (!leader) return notFound();

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-6xl">
        <Link href="/leadership/messages">
          <Button variant="ghost" className="text-white/60 hover:text-white mb-12 rounded-xl px-4 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            ফিরে যান
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side: Profile Image & Bio */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
              <Image 
                src={leader.image} 
                alt={leader.name} 
                fill 
                className="object-cover"
                unoptimized 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h1 className="text-3xl font-black text-white uppercase tracking-tight leading-none">{leader.name}</h1>
                <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mt-2">{leader.role}</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> সংক্ষিপ্ত পরিচিতি
              </h3>
              <p className="text-white/60 leading-relaxed text-sm italic">
                "{leader.bio}"
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black text-white/40 uppercase tracking-widest px-2">মূল লক্ষ্যসমূহ</h3>
              <div className="grid gap-3">
                {leader.values.map((val: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-white font-bold text-sm">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Message */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex p-4 bg-white/10 rounded-2xl text-white">
                <Quote className="h-10 w-10 fill-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase">
                নেতৃত্বের পূর্ণাঙ্গ <br /><span className="text-primary-foreground italic">অফিসিয়াল বাণী</span>
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              {leader.fullMessage.split('\n\n').map((para: string, idx: number) => (
                <p key={idx} className="text-lg md:text-xl text-white/80 leading-relaxed font-medium mb-6">
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-10 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-white font-black text-xs uppercase tracking-tighter">গ্লোবাল মিশন</p>
                    <p className="text-[10px] text-white/40 uppercase">২০৩০ লক্ষ্যমাত্রা</p>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <Heart className="h-6 w-6 text-primary fill-primary" />
                  <div>
                    <p className="text-white font-black text-xs uppercase tracking-tighter">সরাসরি ইমপ্যাক্ট</p>
                    <p className="text-[10px] text-white/40 uppercase">১০০% স্বচ্ছতা</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/donate">
                <Button size="lg" className="bg-white text-[#7a1013] hover:bg-white/90 font-black h-16 px-12 rounded-2xl shadow-2xl transition-all active:scale-95 text-lg uppercase tracking-widest w-full md:w-auto">
                  আমাদের মিশনে অংশ নিন
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          ONGON BANGLADESH • AUTHENTIC LEADERSHIP MESSAGE
        </p>
      </footer>
    </div>
  );
}
