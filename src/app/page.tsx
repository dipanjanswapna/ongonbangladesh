import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { AidCard } from '@/components/aid/AidCard';
import { Input } from '@/components/ui/input';
import { Heart, ShieldCheck, Users, Zap, Search } from 'lucide-react';
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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:h-[80vh] flex items-center overflow-hidden py-16 md:py-0">
          <div className="absolute inset-0 z-0">
            {heroImage && (
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description}
                fill
                className="object-cover opacity-40"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 hero-gradient" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-in fade-in slide-in-from-left-4 duration-700">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                হৃদয় সংযোগ, <span className="text-accent">ক্ষুধার অবসান।</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                সেবা সেতু একটি ডেডিকেটেড কমিউনিটি প্ল্যাটফর্ম যেখানে মানবিকতা প্রয়োজনে সাড়া দেয়। আপনি সাহায্য খুঁজছেন বা দিতে চান, আমরা আপনার সংযোগ তৈরি করি।
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/requests/new" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-lg font-bold w-full">
                    আমার সাহায্য চাই
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-accent text-accent hover:bg-accent/10 w-full sm:w-auto">
                  আমি স্বেচ্ছাসেবক হতে চাই
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="container mx-auto px-4 -mt-8 md:-mt-12 relative z-20">
          <div className="glass-card p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="সাহায্যের জন্য খুঁজুন (যেমন: 'অক্সিজেন', 'খাবার', 'ঢাকা')" 
                className="pl-10 h-12 bg-background/50 border-white/10 w-full"
              />
            </div>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto h-12 px-8 font-bold">
              সব দেখুন
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">কেন সেবা সেতু ব্যবহার করবেন?</h2>
              <p className="text-muted-foreground text-base md:text-lg">আমরা আধুনিক প্রযুক্তি এবং স্থানীয় কমিউনিটির মাধ্যমে সাহায্য সরাসরি প্রাপকের কাছে পৌঁছানো নিশ্চিত করি।</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: ShieldCheck, title: "যাচাইকৃত অনুরোধ", desc: "প্রতিটি পোস্ট আমাদের স্বেচ্ছাসেবক টিম দ্বারা যাচাই করা হয়।" },
                { icon: Zap, title: "এআই ক্যাটাগরি", desc: "স্মার্ট এআই দ্রুত আবিষ্কারের জন্য সঠিক বিভাগ সাজেস্ট করে।" },
                { icon: Users, title: "কমিউনিটি ভিত্তিক", desc: "আস্থা ও দীর্ঘমেয়াদী সমর্থনের একটি নেটওয়ার্ক তৈরি করুন।" },
                { icon: Heart, title: "সরাসরি প্রভাব", desc: "দাতা বা স্বেচ্ছাসেবকদের সাথে সরাসরি রিয়েল-টাইমে যোগাযোগ করুন।" }
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-card rounded-xl border border-white/5 hover:border-primary/30 transition-colors text-center">
                  <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Requests Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div className="text-left w-full md:w-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">জরুরি সাহায্যের অনুরোধসমূহ</h2>
                <p className="text-muted-foreground">এই অনুরোধগুলোতে আপনার দ্রুত মনোযোগ প্রয়োজন।</p>
              </div>
              <Button variant="link" className="text-accent hover:text-accent/80 font-bold text-lg p-0">সব অনুরোধ দেখুন →</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredRequests.map((req) => (
                <AidCard key={req.id} {...req} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-white/5 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary fill-primary" />
                <span className="text-xl font-bold text-white">সেবা সেতু</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                যাদের প্রয়োজন তাদের সাথে যারা দিতে পারেন তাদের সংযোগ করা। বাংলাদেশের জন্য একটি কমিউনিটি-চালিত প্ল্যাটফর্ম।
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">লিঙ্ক</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/requests" className="hover:text-primary transition-colors">অনুরোধ খুঁজুন</Link></li>
                <li><Link href="/volunteer" className="hover:text-primary transition-colors">স্বেচ্ছাসেবক</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">আমাদের সম্পর্কে</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">সাপোর্ট</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">আইনগত</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/terms" className="hover:text-primary transition-colors">ব্যবহারের শর্তাবলী</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">প্রাইভেসি পলিসি</Link></li>
                <li><Link href="/guidelines" className="hover:text-primary transition-colors">কমিউনিটি নির্দেশিকা</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">নিউজলেটার</h4>
              <p className="text-sm text-muted-foreground mb-4">কমিউনিটির সর্বশেষ খবরাখবর পেতে যুক্ত হন।</p>
              <div className="flex flex-col gap-2">
                <Input placeholder="ইমেইল অ্যাড্রেস" className="bg-background/50 border-white/10 w-full" />
                <Button className="bg-primary hover:bg-primary/90 w-full">যুক্ত হন</Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} সেবা সেতু এনজিও। সর্বস্বত্ব সংরক্ষিত।
          </div>
        </div>
      </footer>
    </div>
  );
}
