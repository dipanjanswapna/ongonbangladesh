'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "বার্তা পাঠানো হয়েছে!", description: "আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব।" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">যোগাযোগ করুন</h1>
              <p className="text-lg text-white/70">আপনার যেকোনো জিজ্ঞাসা বা পরামর্শ আমাদের জানান। আমরা আপনার অপেক্ষায় আছি।</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 rounded-xl bg-white/10"><Mail className="h-6 w-6" /></div>
                <div>
                  <p className="text-sm text-white/50">ইমেইল করুন</p>
                  <p className="font-bold">support@ongonbd.org</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 rounded-xl bg-white/10"><Phone className="h-6 w-6" /></div>
                <div>
                  <p className="text-sm text-white/50">ফোন করুন</p>
                  <p className="font-bold">+৮৮০ ১৭০০-০০০০০০</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 rounded-xl bg-white/10"><MapPin className="h-6 w-6" /></div>
                <div>
                  <p className="text-sm text-white/50">ঠিকানা</p>
                  <p className="font-bold">ধানমণ্ডি, ঢাকা, বাংলাদেশ</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">আমাদের বার্তা লিখুন</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input placeholder="আপনার নাম" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" required />
                  </div>
                  <div className="space-y-2">
                    <Input type="email" placeholder="আপনার ইমেইল" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input placeholder="বিষয়" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" required />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="আপনার বার্তা" className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-white/40" required />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12">
                  <Send className="h-4 w-4 mr-2" /> বার্তা পাঠান
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
