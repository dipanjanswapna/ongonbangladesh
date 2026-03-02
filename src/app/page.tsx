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
      title: 'Urgent Medical Assistance for Child',
      description: 'A 5-year-old in Dhaka requires urgent surgery for a cardiac condition. The family is seeking financial support and blood donors.',
      location: 'Dhaka, Bangladesh',
      category: 'Medical',
      urgency: 'high' as const,
      createdAt: '2 hours ago',
      type: 'request' as const
    },
    {
      id: '2',
      title: 'Volunteer Teachers for Rural School',
      description: 'Our community school in Sylhet needs volunteers to teach basic English and Mathematics to primary grade students.',
      location: 'Sylhet, Bangladesh',
      category: 'Education',
      urgency: 'medium' as const,
      createdAt: '5 hours ago',
      type: 'request' as const
    },
    {
      id: '3',
      title: 'Emergency Food Distribution',
      description: 'Providing dry food packages to 50 families affected by recent flash floods. Volunteers needed for packaging and delivery.',
      location: 'Chittagong, Bangladesh',
      category: 'Food',
      urgency: 'high' as const,
      createdAt: '1 day ago',
      type: 'request' as const
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
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
            <div className="max-w-2xl animate-in fade-in slide-in-from-left-4 duration-700">
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6 leading-tight">
                Bridging Hearts, <span className="text-primary">Ending Hunger.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-body">
                SevaSetu is a dedicated community platform where kindness meets necessity. Whether you are seeking aid or have something to offer, we bridge the gap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-lg font-bold">
                  I Need Help
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-accent text-accent hover:bg-accent/10">
                  I Want to Volunteer
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="container mx-auto px-4 -mt-12 relative z-20">
          <div className="glass-card p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search for aid requests (e.g. 'oxygen', 'food', 'Dhaka')" 
                className="pl-10 h-12 bg-background/50 border-white/10"
              />
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 w-full md:w-auto h-12 px-8">
              Explore All
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-headline font-bold mb-4">Why Trust SevaSetu?</h2>
              <p className="text-muted-foreground text-lg">We use modern technology and local community roots to ensure aid reaches those who need it most.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: "Verified Requests", desc: "Every post is reviewed by our volunteer admin team." },
                { icon: Zap, title: "AI Categorization", desc: "Smart AI suggests the right categories for faster discovery." },
                { icon: Users, title: "Community Focused", desc: "Build local networks of trust and long-term support." },
                { icon: Heart, title: "Direct Impact", desc: "Connect directly with donors or volunteers in real-time." }
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-card rounded-xl border border-white/5 hover:border-primary/30 transition-colors text-center">
                  <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Requests Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-headline font-bold mb-2">Urgent Aid Requests</h2>
                <p className="text-muted-foreground">These individuals or families need your immediate attention.</p>
              </div>
              <Button variant="link" className="text-accent hover:text-accent/80 font-bold">View all requests →</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredRequests.map((req) => (
                <AidCard key={req.id} {...req} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-white/5 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary fill-primary" />
                <span className="text-xl font-headline font-bold text-white">SevaSetu</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Connecting those in need with those who can give. A community-driven platform for social impact in Bangladesh.
              </p>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/requests" className="hover:text-primary">Browse Requests</Link></li>
                <li><Link href="/offers" className="hover:text-primary">Browse Offers</Link></li>
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/guidelines" className="hover:text-primary">Community Guidelines</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-4">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">Stay updated with the latest community needs.</p>
              <div className="flex gap-2">
                <Input placeholder="Email address" className="bg-background/50 border-white/10" />
                <Button className="bg-primary hover:bg-primary/90">Join</Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} SevaSetu NGO. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
