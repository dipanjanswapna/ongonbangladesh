import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { AidCard } from '@/components/aid/AidCard';
import { Input } from '@/components/ui/input';
import { Heart, ShieldCheck, Users, Zap, Search, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
      location: 'সিলেট, বাংলাদেশ',
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

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section - Full Screen with Centered Content */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
          <div className="absolute inset-0 z-0">
            {heroImage && (
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description}
                fill
                className="object-cover opacity-20"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 hero-gradient" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-4xl mx-auto animate-in fade-in zoom-in duration-1000">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/90 text-[9px] md:text-xs font-bold mb-6 border border-white/10 uppercase tracking-widest mx-auto">
                <Zap className="h-3 w-3 text-yellow-400 fill-yellow-400" /> Sister concern of PRANGON&apos;S ECOSYSTEM
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                হৃদয় সংযোগ, <br /> 
                <span className="text-white underline decoration-white/30">ক্ষুধার অবসান।</span>
              </h1>
              
              <p className="text-sm md:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto font-medium px-4">
                ONGON BANGLADESH একটি ডেডিকেটেড কমিউনিটি প্ল্যাটফর্ম যেখানে মানবিকতা প্রয়োজনে সাড়া দেয়। আপনি সাহায্য খুঁজছেন বা দিতে চান, আমরা আপনার সংযোগ তৈরি করি।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <Link href="/requests/new" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-primary-foreground hover:bg-white/90 h-12 md:h-14 px-8 text-base md:text-lg font-bold w-full shadow-2xl rounded-xl transition-all hover:scale-105 active:scale-95">
                    আমার সাহায্য চাই
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 md:h-14 px-8 text-base md:text-lg font-bold border-white/30 text-white hover:bg-white/10 w-full sm:w-auto backdrop-blur-md rounded-xl transition-all hover:scale-105 active:scale-95">
                  স্বেচ্ছাসেবক হতে চাই
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar Section - Overlaying the transition */}
        <section className="container mx-auto px-4 -mt-10 md:-mt-12 relative z-20">
          <div className="glass-card p-3 md:p-5 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-3 items-center max-w-3xl mx-auto border-white/10">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 h-4 w-4" />
              <Input 
                placeholder="সাহায্যের জন্য খুঁজুন (যেমন: 'অক্সিজেন', 'খাবার')" 
                className="pl-11 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 w-full rounded-xl text-sm"
              />
            </div>
            <Button size="lg" className="bg-white text-primary-foreground hover:bg-white/90 w-full md:w-auto h-12 px-8 font-bold rounded-xl text-sm shadow-xl">
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
        <section className="py-20 md:py-28 bg-black/10">
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
      </main>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-white fill-white" />
                <span className="text-lg font-bold text-white uppercase tracking-tighter">ONGON BANGLADESH</span>
              </Link>
              <p className="text-xs text-white/60 leading-relaxed">
                বাংলাদেশের জন্য একটি কমিউনিটি-চালিত প্ল্যাটফর্ম। যাদের প্রয়োজন তাদের সাথে যারা দিতে পারেন তাদের সংযোগ করা।
              </p>
              <div className="pt-2">
                <p className="text-[10px] text-white/40 font-bold italic uppercase tracking-widest">
                  Sister concern of PRANGON&apos;S ECOSYSTEM
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white text-sm">প্রয়োজনীয় লিঙ্ক</h4>
              <ul className="space-y-2 text-xs text-white/50">
                <li><Link href="/requests" className="hover:text-white transition-colors">অনুরোধ খুঁজুন</Link></li>
                <li><Link href="/volunteer" className="hover:text-white transition-colors">স্বেচ্ছাসেবক</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">আমাদের লক্ষ্য</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">সাপোর্ট</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white text-sm">আইনগত</h4>
              <ul className="space-y-2 text-xs text-white/50">
                <li><Link href="/terms" className="hover:text-white transition-colors">ব্যবহারের শর্তাবলী</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">প্রাইভেসি পলিসি</Link></li>
                <li><Link href="/guidelines" className="hover:text-white transition-colors">নির্দেশিকা</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white text-sm">নিউজলেটার</h4>
              <p className="text-xs text-white/50 mb-4 leading-relaxed">সর্বশেষ খবর পেতে যুক্ত হন।</p>
              <div className="flex flex-col gap-2">
                <Input placeholder="ইমেইল অ্যাড্রেস" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 w-full h-10 text-xs rounded-lg" />
                <Button className="bg-white text-primary-foreground hover:bg-white/90 w-full font-bold h-10 text-xs rounded-lg shadow-lg">যুক্ত হন</Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-[10px] text-white/30 font-medium">
            © {new Date().getFullYear()} ONGON BANGLADESH (PRANGON&apos;S ECOSYSTEM). সর্বস্বত্ব সংরক্ষিত।
          </div>
        </div>
      </footer>
    </div>
  );
}
