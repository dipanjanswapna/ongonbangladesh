'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock Authentication Logic
    setTimeout(() => {
      if (email === 'demo@ongon.org' && password === '123456') {
        toast({ title: "লগইন সফল হয়েছে!", description: "স্বাগতম, ওঙ্গন বাংলাদেশে।" });
        router.push('/profile');
      } else {
        toast({ 
          title: "লগইন ব্যর্থ হয়েছে", 
          description: "সঠিক ইমেইল (demo@ongon.org) এবং পাসওয়ার্ড (123456) ব্যবহার করুন।",
          variant: "destructive" 
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex p-4 rounded-2xl bg-white/10 text-white mb-4">
              <Lock className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-white">স্বাগতম</h1>
            <p className="text-white/60">আপনার অ্যাকাউন্টে লগইন করুন</p>
          </div>

          <Card className="glass-card border-white/10 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-white text-xl">লগইন</CardTitle>
              <CardDescription className="text-white/40">ডেমো আইডি: demo@ongon.org | পাসওয়ার্ড: 123456</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white font-medium">ইমেইল ঠিকানা</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <Input 
                      type="email" 
                      placeholder="name@example.com" 
                      className="bg-white/10 border-white/20 text-white pl-10 h-12 rounded-xl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-white font-medium">পাসওয়ার্ড</Label>
                    <Link href="#" className="text-xs text-white/40 hover:text-white underline">পাসওয়ার্ড ভুলে গেছেন?</Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="bg-white/10 border-white/20 text-white pl-10 h-12 rounded-xl"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-white text-primary hover:bg-white/90 font-bold rounded-xl shadow-lg mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "লগইন করুন"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 border-t border-white/5 pt-6 bg-white/5">
              <div className="text-center w-full">
                <p className="text-sm text-white/60">অ্যাকাউন্ট নেই? <Link href="/register" className="text-white font-bold hover:underline">নতুন অ্যাকাউন্ট খুলুন</Link></p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
