
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { AidCard } from '@/components/aid/AidCard';
import { Input } from '@/components/ui/input';
import { Heart, ShieldCheck, Users, Zap, Search, ArrowRight, Facebook, Youtube, Instagram, HandCoins, UserCheck, HeartHandshake, Briefcase, Newspaper, Tv, BookOpen, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  // Find the specific hero image from the placeholder data
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

  const joinOptions = [
    {
      icon: HandCoins,
      title: "নিয়মিত দাতা",
      description: "প্রতি মাসে একটি নির্দিষ্ট অংক দান করে আমাদের কার্যক্রম সচল রাখুন।",
      link: "/donate/regular"
    },
    {
      icon: UserCheck,
      title: "আজীবন ও দাতা সদস্য",
      description: "সংস্থার স্থায়ী সদস্য হয়ে দীর্ঘমেয়াদী মানবিক লক্ষ্য অর্জনে পাশে থাকুন।",
      link: "/membership"
    },
    {
      icon: HeartHandshake,
      title: "স্বেচ্ছাসেবক",
      description: "আপনার দক্ষতা ও সময় দিয়ে সরাসরি মাঠ পর্যায়ে সাহায্য পৌঁছে দিন।",
      link: "/volunteer"
    },
    {
      icon: Briefcase,
      title: "ক্যারিয়ার",
      description: "মানবিক কাজের মাধ্যমে আপনার পেশাদার জীবন গড়ে তুলুন।",
      link: "/careers"
    }
  ];

  const mediaCoverage = [
    { id: '1', title: 'Daily Ittefaq', date: '10 Aug', imageId: 'news-ittefaq', type: 'newspaper' },
    { id: '2', title: 'Prothom Alo', date: '17 Aug', imageId: 'news-prothom-alo', type: 'newspaper' },
    { id: '3', title: 'Kaler Kontho', date: '16 Aug', imageId: 'news-kaler-kontho', type: 'newspaper' },
    { id: '4', title: 'Kal Bela', date: '10 Aug', imageId: 'news-kalbela', type: 'newspaper' },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section - Full Screen with Background Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {heroImage ? (
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                unoptimized
                data-ai-hint={heroImage.imageHint}
              />
            ) : (
              // Fallback background color if image fails
              <div className="w-full h-full bg-[#781013]" />
            )}
            {/* Overlay to ensure text visibility and allow image to be seen */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-4xl mx-auto animate-in fade-in zoom-in duration-1000">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/90 text-[10px] md:text-xs font-bold mb-6 border border-white/10 uppercase tracking-widest mx-auto">
                <Zap className="h-3 w-3 text-yellow-400 fill-yellow-400" /> Sister concern of PRANGON&apos;S ECOSYSTEM
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                হৃদয় সংযোগ, <br /> 
                <span className="text-white">ক্ষুধার অবসান।</span>
              </h1>
              
              <p className="text-xs md:text-sm lg:text-base text-white/95 mb-10 leading-relaxed max-w-xl mx-auto font-medium px-4 drop-shadow-lg">
                ONGON BANGLADESH একটি ডেডিকেটেড কমিউনিটি প্ল্যাটফর্ম যেখানে মানবিকতা প্রয়োজনে সাড়া দেয়। আপনি সাহায্য খুঁজছেন বা দিতে চান, আমরা আপনার সংযোগ তৈরি করি।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
                <Link href="/requests/new" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-[#781013] hover:bg-white/90 h-10 md:h-11 px-6 text-xs md:text-sm font-bold w-full shadow-2xl rounded-xl transition-all hover:scale-105 active:scale-95">
                    আমার সাহায্য চাই
                  </Button>
                </Link>
                <Link href="/volunteer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-10 md:h-11 px-6 text-xs md:text-sm font-bold border-white/30 text-white hover:bg-white/10 w-full sm:w-auto backdrop-blur-md rounded-xl transition-all hover:scale-105 active:scale-95">
                    স্বেচ্ছাসেবক হতে চাই
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="container mx-auto px-4 -mt-10 md:-mt-12 relative z-20">
          <div className="glass-card p-3 md:p-5 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-3 items-center max-w-3xl mx-auto border-white/10">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 h-4 w-4" />
              <Input 
                placeholder="সাহায্যের জন্য খুঁজুন (যেমন: 'অক্সিজেন', 'খাবার')" 
                className="pl-11 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 w-full rounded-xl text-sm"
              />
            </div>
            <Button size="lg" className="bg-white text-[#781013] hover:bg-white/90 w-full md:w-auto h-12 px-8 font-bold rounded-xl text-sm shadow-xl">
              সব দেখুন
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white"> কেন আমাদের প্ল্যাটফর্ম ব্যবহার করবেন?</h2>
              <p className="text-white/70 text-sm md:text-base">আমরা আধুনিক প্রযুক্তির মাধ্যমে সাহায্য সরাসরি প্রাপকের কাছে পৌঁছানো নিশ্চিত করি।</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: ShieldCheck, title: "যাচাইকৃত অনুরোধ", desc: "প্রতিটি পোস্ট আমাদের স্বেচ্ছাসেবক টিম দ্বারা যাচাই করা হয়।" },
                { icon: Zap, title: "এআই ক্যাটাগরি", desc: "স্মার্ট এআই দ্রুত আবিষ্কারের জন্য সঠিক বিভাগ সাজেস্ট করে।" },
                { icon: Users, title: "কমিউনিটি ভিত্তিক", desc: "আস্থা ও দীর্ঘমেয়াদী সমর্থনের একটি নেটওয়ার্ক তৈরি করুন।" },
                { icon: Heart, title: "সরাসরি প্রভাব", desc: "দাতা বা স্বেচ্ছাসেবকদের সাথে সরাসরি রিয়েল-টাইমে যোগাযোগ করুন।" }
              ].map((feature, i) => (
                <div key={i} className="p-6 glass-card rounded-2xl hover:bg-white/15 transition-all text-center group border-white/5">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Requests Section */}
        <section className="py-20 md:py-28" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 text-center md:text-left">
              <div className="w-full md:w-auto">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">জরুরি সাহায্যের অনুরোধসমূহ</h2>
                <p className="text-white/60 text-sm">এই অনুরোধগুলোতে আপনার দ্রুত মনোযোগ প্রয়োজন।</p>
              </div>
              <Button variant="link" className="text-white hover:text-white/80 font-bold text-sm md:text-lg p-0 flex items-center gap-2">
                সব অনুরোধ দেখুন <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredRequests.map((req) => (
                <AidCard key={req.id} {...req} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">আমাদের সাথে যুক্ত হোন</h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                নিচের যে কোনো পদ্ধতিতে আমাদের সঙ্গে যুক্ত হয়ে আর্তমানবতার সেবায় ভূমিকা রাখতে পারেন। আমরা আপনার জন্য অপশনগুলো সহজ করেছি।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {joinOptions.map((option, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-2xl bg-white/10 text-white group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xl">
                    <option.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{option.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{option.description}</p>
                  <Link href={option.link} className="mt-auto w-full">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-[#781013] font-bold rounded-xl transition-all">
                      বিস্তারিত দেখুন
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage Section - New */}
        <section className="py-20 md:py-28 bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tighter">যেখানে আমাদের গল্প প্রকাশিত হয়েছে</h2>
              <p className="text-gray-500 text-sm md:text-lg">
                আমাদের কাজ প্রকাশিত হয়েছে দেশের শীর্ষস্থানীয় সংবাদপত্র, টিভি চ্যানেল, ম্যাগাজিন এবং অনলাইন প্ল্যাটফর্মে।
              </p>
            </div>

            <Tabs defaultValue="newspaper" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-gray-100 p-1 rounded-full h-auto">
                  <TabsTrigger value="newspaper" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-xs md:text-sm">সংবাদপত্র</TabsTrigger>
                  <TabsTrigger value="tv" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-xs md:text-sm">টিভি</TabsTrigger>
                  <TabsTrigger value="magazine" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-xs md:text-sm">ম্যাগাজিন</TabsTrigger>
                  <TabsTrigger value="online" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-xs md:text-sm">অনলাইন</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="newspaper">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mediaCoverage.map((item) => {
                    const img = PlaceHolderImages.find(p => p.id === item.imageId);
                    return (
                      <Card key={item.id} className="border-0 shadow-xl rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300">
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/5] w-full">
                            <Image 
                              src={img?.imageUrl || ''} 
                              alt={item.title} 
                              fill 
                              className="object-cover"
                              unoptimized
                              data-ai-hint={img?.imageHint}
                            />
                          </div>
                          <div className="p-5 text-center bg-white">
                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-400 font-medium">{item.date}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="tv">
                <div className="text-center py-20 text-gray-400 font-medium">টিভি নিউজ কাভারেজ লোড হচ্ছে...</div>
              </TabsContent>
              <TabsContent value="magazine">
                <div className="text-center py-20 text-gray-400 font-medium">ম্যাগাজিন ফিচার লোড হচ্ছে...</div>
              </TabsContent>
              <TabsContent value="online">
                <div className="text-center py-20 text-gray-400 font-medium">অনলাইন আর্টিকেল লোড হচ্ছে...</div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      {/* Improved Footer with Rounded Design and Red Theme */}
      <footer className="px-4 pb-8 md:pb-12 bg-transparent">
        <div className="container mx-auto max-w-7xl">
          <div 
            className="rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-white/10"
            style={{ backgroundColor: 'rgb(110, 14, 17)' }}
          >
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
              {/* Brand & Description */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-xl">
                    <Heart className="h-6 w-6 text-white fill-white" />
                  </div>
                  <span className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">ONGON BANGLADESH</span>
                </div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-md">
                  বাংলাদেশের জন্য একটি AI-চালিত কমিউনিটি প্ল্যাটফর্ম, যা মানবিক সহায়তার প্রয়োজনে দ্রুত সংযোগ তৈরি করে এবং স্বচ্ছতা নিশ্চিত করে। আমরা সরাসরি সাহায্য পৌঁছানো নিশ্চিত করি।
                </p>
                <div className="pt-2">
                  <p className="text-[10px] md:text-xs text-white/40 font-bold italic uppercase tracking-[0.2em]">
                    Sister concern of PRANGON&apos;S ECOSYSTEM
                  </p>
                </div>
                
                {/* Newsletter Section Integrated Like Image */}
                <div className="pt-8 space-y-4">
                  <h4 className="font-bold text-white text-base md:text-lg">নিউজলেটারে যোগ দিন</h4>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <Input 
                      placeholder="আপনার ইমেইল ঠিকানা" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:ring-white/30" 
                    />
                    <Button className="bg-[#a3e635] hover:bg-[#bef264] text-[#1a1a1a] font-black h-12 px-8 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 whitespace-nowrap">
                      সাবস্ক্রাইব করুন
                    </Button>
                  </div>
                </div>
              </div>

              {/* Link Columns */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div className="space-y-5">
                  <h4 className="font-black text-white text-xs uppercase tracking-widest opacity-50">বৈশিষ্ট্যসমূহ</h4>
                  <ul className="space-y-3 text-sm font-bold">
                    <li><Link href="/ai-help" className="text-white/70 hover:text-white transition-colors">AI চ্যাট সহায়তা</Link></li>
                    <li><Link href="/tracking" className="text-white/70 hover:text-white transition-colors">অনুরোধ ট্র্যাকিং</Link></li>
                    <li><Link href="/verification" className="text-white/70 hover:text-white transition-colors">ভেরিফিকেশন</Link></li>
                  </ul>
                </div>
                <div className="space-y-5">
                  <h4 className="font-black text-white text-xs uppercase tracking-widest opacity-50">সেবাসমূহ</h4>
                  <ul className="space-y-3 text-sm font-bold">
                    <li><Link href="/requests" className="text-white/70 hover:text-white transition-colors">সাহায্য খুঁজুন</Link></li>
                    <li><Link href="/volunteer" className="text-white/70 hover:text-white transition-colors">স্বেচ্ছাসেবক হন</Link></li>
                    <li><Link href="/community" className="text-white/70 hover:text-white transition-colors">কমিউনিটি</Link></li>
                  </ul>
                </div>
                <div className="space-y-5">
                  <h4 className="font-black text-white text-xs uppercase tracking-widest opacity-50">অন্যান্য</h4>
                  <ul className="space-y-3 text-sm font-bold">
                    <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">আমাদের সম্পর্কে</Link></li>
                    <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">যোগাযোগ</Link></li>
                    <li><Link href="/faq" className="text-white/70 hover:text-white transition-colors">সাধারণ জিজ্ঞাসা</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-5">
                <Link href="#" className="text-white/50 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" className="text-white/50 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></Link>
                <Link href="#" className="text-white/50 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <Link href="/terms" className="text-[10px] md:text-xs font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">ব্যবহারের শর্তাবলী</Link>
                <p className="text-[10px] md:text-xs font-medium text-white/30">
                  © {new Date().getFullYear()} ONGON BANGLADESH. সর্বস্বত্ব সংরক্ষিত।
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
