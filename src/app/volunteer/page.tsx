'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HeartHandshake, Sparkles, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function VolunteerPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "আবেদন জমা হয়েছে!", description: "আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।" });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(110, 14, 17)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-2xl glass-card border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <CardHeader className="text-center pb-8 border-b border-white/5">
            <div className="inline-flex p-5 rounded-3xl bg-white/5 text-white mx-auto mb-4 shadow-xl">
              <HeartHandshake className="h-10 w-10" />
            </div>
            <CardTitle className="text-3xl font-bold text-white">স্বেচ্ছাসেবক হিসেবে যোগ দিন</CardTitle>
            <CardDescription className="text-white/60">মানবতার সেবায় আপনার সময় এবং দক্ষতা কাজে লাগান।</CardDescription>
          </CardHeader>
          <CardContent className="pt-8 px-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">আপনার নাম</Label>
                  <Input placeholder="পুরো নাম" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-white/20" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">মোবাইল নম্বর</Label>
                  <Input placeholder="01XXX-XXXXXX" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-white/20" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">দক্ষতা (Skills)</Label>
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl">
                    <SelectValue placeholder="আপনার দক্ষতা নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#6e0e11] border-white/10 text-white">
                    <SelectItem value="teaching">শিক্ষা প্রদান</SelectItem>
                    <SelectItem value="medical">চিকিৎসা সহায়তা</SelectItem>
                    <SelectItem value="it">আইটি ও প্রযুক্তি</SelectItem>
                    <SelectItem value="coordination">ইভেন্ট কোঅর্ডিনেশন</SelectItem>
                    <SelectItem value="other">অন্যান্য</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-white/60" />
                  <Label className="text-white/70 text-xs font-bold uppercase tracking-widest">কেন আপনি যোগ দিতে চান?</Label>
                </div>
                <Textarea placeholder="আপনার আগ্রহ এবং অভিজ্ঞতা সংক্ষেপে লিখুন..." className="min-h-[120px] bg-white/5 border-white/10 text-white rounded-xl focus:ring-white/20" required />
              </div>

              <Button type="submit" className="w-full bg-white text-[#6e0e11] hover:bg-white/90 font-bold h-14 rounded-2xl shadow-xl flex items-center justify-center gap-2 text-lg transition-all active:scale-95">
                <Send className="h-5 w-5" /> আবেদন জমা দিন
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
