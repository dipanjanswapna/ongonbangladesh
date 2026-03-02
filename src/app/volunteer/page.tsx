'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HeartHandshake } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function VolunteerPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "আবেদন জমা হয়েছে!", description: "আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-2xl glass-card border-white/10">
          <CardHeader className="text-center">
            <div className="inline-flex p-4 rounded-full bg-primary/20 text-primary mx-auto mb-4">
              <HeartHandshake className="h-10 w-10" />
            </div>
            <CardTitle className="text-3xl font-bold text-white">স্বেচ্ছাসেবক হিসেবে যোগ দিন</CardTitle>
            <CardDescription className="text-white/60">মানবতার সেবায় আপনার সময় এবং দক্ষতা কাজে লাগান।</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">আপনার নাম</Label>
                  <Input className="bg-white/10 border-white/20 text-white" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">মোবাইল নম্বর</Label>
                  <Input className="bg-white/10 border-white/20 text-white" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">দক্ষতা (Skills)</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="আপনার দক্ষতা নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teaching">শিক্ষা প্রদান</SelectItem>
                    <SelectItem value="medical">চিকিৎসা সহায়তা</SelectItem>
                    <SelectItem value="it">আইটি ও প্রযুক্তি</SelectItem>
                    <SelectItem value="coordination">ইভেন্ট কোঅর্ডিনেশন</SelectItem>
                    <SelectItem value="other">অন্যান্য</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-white">কেন আপনি যোগ দিতে চান?</Label>
                <Textarea className="min-h-[100px] bg-white/10 border-white/20 text-white" required />
              </div>

              <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12">
                আবেদন জমা দিন
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
