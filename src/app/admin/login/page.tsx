
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldAlert, Lock, Mail, Loader2, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock Admin Authentication
    setTimeout(() => {
      if (email === 'admin@ongon.org' && password === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        toast({ title: "অ্যাডমিন লগইন সফল!", description: "কমান্ড সেন্টারে স্বাগতম।" });
        router.push('/admin');
      } else {
        toast({ 
          title: "লগইন ব্যর্থ", 
          description: "সঠিক অ্যাডমিন ক্রেডেনশিয়াল ব্যবহার করুন।",
          variant: "destructive" 
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a0405]">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex p-4 rounded-3xl bg-primary/20 text-white mb-4 ring-2 ring-primary/40">
              <ShieldAlert className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">অ্যাডমিন কমান্ড সেন্টার</h1>
            <p className="text-white/40">শুধুমাত্র অনুমোদিত ব্যক্তিদের জন্য</p>
          </div>

          <Card className="glass-card border-white/5 shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardHeader>
              <CardTitle className="text-white text-xl">অ্যাডমিন লগইন</CardTitle>
              <CardDescription className="text-white/40">ID: admin@ongon.org | Pass: admin123</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAdminLogin} className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">অ্যাডমিন ইমেইল</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <Input 
                      type="email" 
                      placeholder="admin@ongon.org" 
                      className="bg-white/5 border-white/10 text-white pl-12 h-14 rounded-2xl focus:ring-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">সিকিউরিটি পাসওয়ার্ড</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="bg-white/5 border-white/10 text-white pl-12 h-14 rounded-2xl focus:ring-primary"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 bg-primary text-white hover:bg-primary/90 font-bold rounded-2xl shadow-xl mt-4 transition-all active:scale-95"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                    <>এক্সেস নিশ্চিত করুন <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
            SECURED BY ONGON SECURITY PROTOCOL v2.0
          </p>
        </div>
      </main>
    </div>
  );
}
