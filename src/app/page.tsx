
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { AidCard } from '@/components/aid/AidCard';
import { Input } from '@/components/ui/input';
import { 
  Heart, 
  Zap, 
  Search, 
  ArrowRight, 
  Calendar, 
  HandCoins, 
  UserCheck, 
  HeartHandshake, 
  Briefcase, 
  Tv, 
  BookOpen, 
  Globe, 
  Lock, 
  Quote, 
  Droplet, 
  Megaphone, 
  ShieldCheck, 
  Download, 
  ShieldAlert
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { campaigns } from '@/lib/campaigns-data';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const featuredRequests = [
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
      location: 'শিক্ষা',
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
    }
  ];

  const partners = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {heroImage?.imageUrl ? (
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            ) : (
              <div className="w-full h-full bg-[#781013]" />
            )}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center pt-20">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/90 text-[10px] md:text-xs font-bold mb-4 border border-white/10 uppercase tracking-widest mx-auto">
                < Zap className="h-3 w-3 text-yellow-400 fill-yellow-400" /> Sister concern of PRANGON&apos;S ECOSYSTEM
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-2xl font-headline">
                হৃদয় সংযোগ, <br /> 
                <span className="text-white">ক্ষুধার অবসান।</span>
              </h1>
              
              <p className="text-sm md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto font-medium px-4 drop-shadow-lg font-body">
                ONGON BANGLADESH একটি ডেডিকেটেড কমিউনিটি প্ল্যাটফর্ম যেখানে মানবিকতা প্রয়োজনে সাড়া দেয়। আপনি সাহায্য খুঁজছেন বা দিতে চান, আমরা আপনার সংযোগ তৈরি করি।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <Link href="/requests/new" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-[#781013] hover:bg-white/90 h-14 px-10 text-base font-bold w-full shadow-2xl rounded-xl transition-all active:scale-95">
                    আমার সাহায্য চাই
                  </Button>
                </Link>
                <Link href="/volunteer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-base font-bold border-white/40 text-white hover:bg-white/10 w-full backdrop-blur-md rounded-xl transition-all active:scale-95">
                    স্বেচ্ছাসেবক হতে চাই
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SOS Integrated Section System */}
        <section className="py-24 border-y border-white/5 bg-[#0f0203] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
              <div className="space-y-6 text-center lg:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-red-600/30">
                  <ShieldAlert className="h-3 w-3 animate-pulse" /> Emergency Assistance
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] uppercase tracking-tighter font-headline">
                  তাৎক্ষণিক <br /><span className="text-red-600 italic">নিরাপত্তা ও SOS</span>
                </h2>
                <p className="text-white/60 text-base md:text-xl max-w-xl font-medium leading-relaxed font-body">
                  হয়রানি বা যেকোনো বিপদে ভয় পাবেন না। ওঙ্গন নিরাপত্তা কমান্ড সেন্টার আপনার সুরক্ষায় সর্বদা সজাগ।
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/safety">
                  <Button className="bg-red-600 text-white hover:bg-red-700 h-14 px-8 rounded-xl font-bold text-xs shadow-[0_10px_30px_rgba(220,38,38,0.2)] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 group">
                    SOS সেন্টার <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/safety/helplines">
                  <Button variant="outline" className="h-14 px-8 border-white/10 text-white hover:bg-white/5 rounded-xl font-bold uppercase tracking-widest text-[10px] backdrop-blur-md transition-all active:scale-95">
                    হেল্পলাইনসমূহ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="container mx-auto px-4 -mt-10 relative z-20">
          <div className="glass-card p-2 md:p-3 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 items-center max-w-3xl mx-auto border-white/10 backdrop-blur-2xl">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 h-5 w-5" />
              <Input 
                placeholder="সাহায্যের জন্য খুঁজুন" 
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 w-full rounded-xl text-sm focus:ring-primary/30"
              />
            </div>
            <Link href="/requests" className="w-full md:w-auto">
              <Button size="lg" className="bg-white text-[#781013] hover:bg-white/90 w-full h-12 px-8 font-bold rounded-xl text-sm transition-all active:scale-95">
                সব দেখুন
              </Button>
            </Link>
          </div>
        </section>

        {/* Campaigns Section */}
        <section className="py-20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white font-headline">আমাদের ক্যাম্পেইনসমূহ</h2>
                <p className="text-white/70 font-body">আমাদের চলমান মানবিক কার্যক্রমগুলোতে অংশ নিয়ে আপনিও হতে পারেন একজন অনুপ্রেরণা।</p>
              </div>
              <Link href="/campaigns">
                <Button variant="link" className="text-white font-bold p-0 flex items-center gap-2 hover:no-underline">
                  সব ক্যাম্পেইন দেখুন <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {campaigns.map((camp) => (
                <Card key={camp.id} className="glass-card border-white/10 overflow-hidden flex flex-col group rounded-xl transition-transform hover:scale-[1.02] duration-300">
                  <div className="relative h-48 w-full">
                    <Image src={camp.image} alt={camp.title} fill className="object-cover transition-transform group-hover:scale-110 duration-500" unoptimized />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-white/50 text-[10px] mb-2 font-bold uppercase tracking-wider">
                      <Calendar className="h-3 w-3" /> {camp.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2 leading-tight group-hover:text-white/80 transition-colors font-headline">{camp.title}</h3>
                    <p className="text-xs text-white/60 line-clamp-2 mb-6 font-body">{camp.excerpt}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] text-white/80 font-bold">
                        <span>সংগৃহীত: ৳{camp.raised.toLocaleString()}</span>
                        <span>{Math.round((camp.raised / camp.target) * 100)}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white transition-all duration-1000" style={{ width: `${(camp.raised / camp.target) * 100}%` }} />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link href={`/campaigns/${camp.id}`} className="w-full">
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-[#781013] font-bold rounded-xl h-10 text-xs transition-all">
                        বিস্তারিত পড়ুন
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Requests Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 text-center md:text-left">
              <div className="w-full md:w-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-1 text-white font-headline">জরুরি সাহায্যের অনুরোধসমূহ</h2>
                <p className="text-white/60 text-sm font-body">এই অনুরোধগুলোতে আপনার দ্রুত মনোযোগ প্রয়োজন।</p>
              </div>
              <Link href="/requests">
                <Button variant="link" className="text-white hover:text-white/80 font-bold text-sm p-0 flex items-center gap-2 hover:no-underline">
                  সব অনুরোধ দেখুন <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRequests.map((req) => (
                <AidCard key={req.id} {...req} />
              ))}
            </div>
          </div>
        </section>

        {/* Blood Donation Section */}
        <section className="py-12 border-y border-white/5" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-2">
                  <Droplet className="h-3 w-3 fill-red-500" /> Blood Donation
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter font-headline">রক্তদান করুন, <span className="text-red-500">জীবন বাঁচান</span></h2>
                <p className="text-white/70 max-w-xl mx-auto lg:mx-0 font-body">আপনার এক ব্যাগ রক্ত বাঁচাতে পারে একটি প্রাণ। ওঙ্গন ব্লাড ব্যাংকের মাধ্যমে দ্রুত দাতা খুঁজুন অথবা দাতা হিসেবে রেজিস্ট্রেশন করুন।</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/blood/donors">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 h-14 px-8 rounded-xl font-black uppercase tracking-widest text-xs transition-all active:scale-95">
                    রক্তদাতা খুঁজুন
                  </Button>
                </Link>
                <Link href="/blood/register">
                  <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white/5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all active:scale-95">
                    রেজিস্ট্রেশন করুন
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white uppercase tracking-tight font-headline">আমাদের সাথে যুক্ত হোন</h2>
              <p className="text-white/70 font-body">
                নিচের যে কোনো পদ্ধতিতে আমাদের সঙ্গে যুক্ত হয়ে আর্তমানবতার সেবায় ভূমিকা রাখতে পারেন।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: HandCoins, title: "নিয়মিত দাতা", description: "প্রতি মাসে একটি নির্দিষ্ট অংক দান করে আমাদের কার্যক্রম সচল রাখুন।", link: "/donate/regular" },
                { icon: UserCheck, title: "আজীবন সদস্য", description: "সংস্থার স্থায়ী সদস্য হয়ে দীর্ঘমেয়াদী মানবিক লক্ষ্য অর্জনে পাশে থাকুন।", link: "/membership" },
                { icon: HeartHandshake, title: "স্বেচ্ছাসেবক", description: "আপনার দক্ষতা ও সময় দিয়ে সরাসরি মাঠ পর্যায়ে সাহায্য পৌঁছে দিন।", link: "/volunteer" },
                { icon: Briefcase, title: "ক্যারিয়ার", description: "মানবিক কাজের মাধ্যমে আপনার পেশাদার জীবন গড়ে তুলুন।", link: "/careers" }
              ].map((option, i) => (
                <div key={i} className="group p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 flex flex-col items-center text-center shadow-2xl backdrop-blur-sm rounded-xl border-b-4 border-b-primary/20 hover:border-b-primary">
                  <div className="mb-6 p-4 bg-white/10 text-white group-hover:bg-white group-hover:text-[#7a1013] transition-all shadow-xl rounded-xl">
                    <option.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-tight font-headline">{option.title}</h3>
                  <p className="text-sm text-white/50 mb-8 leading-relaxed font-body">{option.description}</p>
                  <Link href={option.link} className="mt-auto w-full">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-[#7a1013] font-bold rounded-xl transition-all h-12 shadow-lg">
                      বিস্তারিত দেখুন
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advertisement / Partners Section - Infinite Scroll */}
        <section className="py-16 border-t border-white/5 overflow-hidden" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
          <div className="container mx-auto px-4 mb-10">
            <div className="text-center md:text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                <Megaphone className="h-3 w-3" /> Collaboration
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter font-headline">আমাদের সহযোগী ব্র্যান্ড ও স্পন্সর</h2>
            </div>
          </div>
          
          <div className="relative flex overflow-hidden">
            <div className="flex animate-infinite-scroll py-4 gap-8">
              {[...partners, ...partners, ...partners].map((i, idx) => (
                <div key={idx} className="flex-shrink-0 w-40 md:w-56 h-20 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer p-6">
                  <div className="relative w-full h-full">
                    <Image 
                      src={`https://placehold.co/200x100/1a0405/ffffff?text=PARTNER+${i}`} 
                      alt="Partner" 
                      fill 
                      className="object-contain filter invert opacity-50"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage Section */}
        <section className="py-20 bg-background border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white font-headline">যেখানে আমাদের গল্প প্রকাশিত হয়েছে</h2>
              <p className="text-white/60 font-body">
                আমাদের কাজ প্রকাশিত হয়েছে দেশের শীর্ষস্থানীয় সংবাদপত্র, টিভি চ্যানেল, ম্যাগাজিন এবং অনলাইন প্ল্যাটফর্মে।
              </p>
            </div>

            <Tabs defaultValue="newspaper" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white/10 p-1 rounded-full h-auto border border-white/10 backdrop-blur-md">
                  <TabsTrigger value="newspaper" className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-[#781013] font-bold text-[10px] md:text-xs text-white">সংবাদপত্র</TabsTrigger>
                  <TabsTrigger value="tv" className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-[#781013] font-bold text-[10px] md:text-xs text-white">টিভি</TabsTrigger>
                  <TabsTrigger value="magazine" className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-[#781013] font-bold text-[10px] md:text-xs text-white">ম্যাগাজিন</TabsTrigger>
                  <TabsTrigger value="online" className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-[#781013] font-bold text-[10px] md:text-xs text-white">অনলাইন</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="newspaper">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { id: '1', title: 'Daily Ittefaq', date: '10 Aug', imageId: 'news-ittefaq' },
                    { id: '2', title: 'Prothom Alo', date: '17 Aug', imageId: 'news-prothom-alo' },
                    { id: '3', title: 'Kaler Kontho', date: '16 Aug', imageId: 'news-kalbela' },
                    { id: '4', title: 'Kal Bela', date: '10 Aug', imageId: 'news-kalbela' },
                  ].map((item) => {
                    const img = PlaceHolderImages.find(p => p.id === item.imageId);
                    return (
                      <Card key={item.id} className="glass-card border-white/10 overflow-hidden hover:scale-[1.05] transition-transform duration-300 rounded-xl">
                        <CardContent className="p-0">
                          <div className="relative aspect-[3/4] w-full bg-white/5">
                            {img?.imageUrl ? (
                              <Image 
                                src={img.imageUrl} 
                                alt={item.title} 
                                fill 
                                className="object-cover"
                                unoptimized
                              />
                            ) : null}
                          </div>
                          <div className="p-3 text-center bg-white/5">
                            <h4 className="font-bold text-xs text-white truncate font-headline">{item.title}</h4>
                            <p className="text-[10px] text-white/40 font-body">{item.date}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="tv">
                <div className="text-center py-10 text-white/40 font-medium flex flex-col items-center gap-3">
                  <Tv className="h-10 w-10 opacity-20" />
                  টিভি নিউজ কাভারেজ লোড হচ্ছে...
                </div>
              </TabsContent>
              <TabsContent value="magazine">
                <div className="text-center py-10 text-white/40 font-medium flex flex-col items-center gap-3">
                  <BookOpen className="h-10 w-10 opacity-20" />
                  ম্যাগাজিন ফিচার লোড হচ্ছে...
                </div>
              </TabsContent>
              <TabsContent value="online">
                <div className="text-center py-10 text-white/40 font-medium flex flex-col items-center gap-3">
                  <Globe className="h-10 w-10 opacity-20" />
                  অনলাইন আর্টিকেল লোড হচ্ছে...
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white font-headline">আমাদের নেতৃত্ব</h2>
              <p className="text-white/70 font-body">
                ওঙ্গন বাংলাদেশের নীতি-নির্ধারক ও পরিচালনা পর্ষদের একঝলক।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "দীপাঞ্জন স্বপ্ন প্রাঙ্গণ", role: "চেয়ারম্যান", image: "https://picsum.photos/seed/leader1/400/400", slug: "chairman" },
                { name: "মোঃ আরিফুর রহমান", role: "ভাইস চেয়ারম্যান", image: "https://picsum.photos/seed/leader2/400/400", slug: "vice-chairman" },
                { name: "সাদিয়া ইসলাম", role: "সেক্রেটারি জেনারেল", image: "https://picsum.photos/seed/leader3/400/400", slug: "secretary-general" }
              ].map((leader, i) => (
                <Link key={i} href={`/leadership/messages/${leader.slug}`} className="group relative text-center">
                  <div className="relative h-64 w-64 mx-auto rounded-xl overflow-hidden border-4 border-white/5 shadow-2xl mb-6 transition-all group-hover:border-primary/20">
                    <Image src={leader.image} alt={leader.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Quote className="text-white h-10 w-10 opacity-50" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors font-headline">{leader.name}</h3>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-black mt-1 font-body">{leader.role}</p>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/leadership/messages">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full h-12 px-8 font-bold transition-all active:scale-95">
                  সকল বাণী পড়ুন <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-8 bg-transparent">
        <div className="container mx-auto max-w-7xl">
          <div 
            className="rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10"
            style={{ backgroundColor: 'rgb(122, 16, 19)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-white fill-white" />
                  <span className="text-lg font-bold text-white uppercase tracking-tighter font-headline">ONGON BANGLADESH</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed max-sm:max-w-xs font-body">
                  বাংলাদেশের একটি AI-চালিত কমিউনিটি প্ল্যাটফর্ম, যা মানবিক সহায়তার প্রয়োজনে দ্রুত সংযোগ তৈরি করে।
                </p>
                <div className="pt-4 flex flex-col gap-4">
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Founder & Leadership</p>
                    <p className="text-xs font-bold text-white mt-1 uppercase">DIPANJAN SWAPNA PRANGON</p>
                  </div>
                  <Link href="/install">
                    <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-[#7a1013] font-bold rounded-xl flex items-center gap-2 transition-all active:scale-95">
                      <Download className="h-4 w-4" /> অ্যাপ ডাউনলোড করুন
                    </Button>
                  </Link>
                </div>
                <div className="pt-6 space-y-3">
                  <h4 className="font-bold text-white text-sm font-headline">নিউজলেটারে যোগ দিন</h4>
                  <div className="flex flex-col sm:flex-row gap-2 max-w-sm">
                    <Input 
                      placeholder="আপনার ইমেইল" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-10 rounded-xl focus:ring-white/20" 
                    />
                    <Button className="bg-white text-[#7a1013] hover:bg-white/90 font-bold h-10 px-6 rounded-xl transition-all active:scale-95">
                      সাবস্ক্রাইব
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 font-body">
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xs uppercase opacity-50 tracking-widest">লিঙ্কসমূহ</h4>
                  <ul className="space-y-2 text-xs font-bold">
                    <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">আমাদের সম্পর্কে</Link></li>
                    <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors">ব্লগ</Link></li>
                    <li><Link href="/volunteer" className="text-white/70 hover:text-white transition-colors">স্বেচ্ছাসেবক হন</Link></li>
                    <li><Link href="/safety" className="text-red-500 hover:text-red-400 flex items-center gap-1 font-black transition-colors"><ShieldAlert className="h-3 w-3" /> নিরাপত্তা সেন্টার</Link></li>
                    <li><Link href="/admin/login" className="text-white/70 hover:text-white flex items-center gap-1 transition-colors"><Lock className="h-3 w-3" /> অ্যাডমিন পোর্টাল</Link></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xs uppercase opacity-50 tracking-widest">সাপোর্ট</h4>
                  <ul className="space-y-2 text-xs font-bold">
                    <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">যোগাযোগ</Link></li>
                    <li><Link href="/refund-policy" className="text-white/70 hover:text-white transition-colors">রিফান্ড নীতি</Link></li>
                    <li><Link href="/safety/helplines" className="text-white/70 hover:text-white transition-colors">জরুরি নম্বর</Link></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-xs uppercase opacity-50 tracking-widest">সামাজিক</h4>
                  <div className="flex items-center gap-4">
                    <Link href="#" className="text-white/50 hover:text-white transition-colors"><Facebook className="h-4 w-4" /></Link>
                    <Link href="#" className="text-white/50 hover:text-white transition-colors"><Youtube className="h-4 w-4" /></Link>
                    <Link href="#" className="text-white/50 hover:text-white transition-colors"><Instagram className="h-4 w-4" /></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase font-bold tracking-widest">
              <p>© {new Date().getFullYear()} ONGON BANGLADESH. LEAD BY DIPANJAN SWAPNA PRANGON.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors">গোপনীয়তা নীতি</Link>
                <Link href="/terms" className="hover:text-white transition-colors">ব্যবহারের শর্তাবলী</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
