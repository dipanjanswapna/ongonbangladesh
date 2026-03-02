
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { HeartHandshake, Lock, Mail, Loader2, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function VolunteerLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock Volunteer Authentication
    setTimeout(() => {
      if (email === 'volunteer@ongon.org' && password === 'vol123') {
        localStorage.setItem('isVolunteer', 'true');
        toast({ title: "লগইন সফল!", description: "স্বেচ্ছাসেবক পোর্টালে স্বাগতম।" });
        router.push('/volunteer/dashboard');
      } else {
        toast({ 
          title: "লগইন ব্যর্থ", 
          description: "সঠিক ক্রেডেনশিয়াল ব্যবহার করুন (volunteer@ongon.org / vol123)।",
          variant: "destructive" 
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex p-4 rounded-3xl bg-green-500/10 text-green-500 mb-4 ring-2 ring-green-500/20">
              <HeartHandshake className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">স্বেচ্ছাসেবক লগইন</h1>
            <p className="text-white/40">মানবিকতায় আপনার অংশগ্রহণ আমাদের শক্তি</p>
          </div>

          <Card className="glass-card border-white/5 shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardHeader>
              <CardTitle className="text-white text-xl">লগইন করুন</CardTitle>
              <CardDescription className="text-white/40">ID: volunteer@ongon.org | Pass: vol123</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">ইমেইল</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <Input 
                      type="email" 
                      placeholder="volunteer@ongon.org" 
                      className="bg-white/5 border-white/10 text-white pl-12 h-14 rounded-2xl focus:ring-green-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">পাসওয়ার্ড</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="bg-white/5 border-white/10 text-white pl-12 h-14 rounded-2xl focus:ring-green-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 bg-green-600 text-white hover:bg-green-700 font-bold rounded-2xl shadow-xl mt-4 transition-all active:scale-95"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                    <>পোর্টালে প্রবেশ করুন <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
