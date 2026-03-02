
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Shield, Bell, Globe, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminSettings() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({ title: "সেটিংস সংরক্ষিত!", description: "আপনার করা পরিবর্তনগুলো সিস্টেম আপডেট করেছে।" });
  };

  return (
    <div className="space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">সিস্টেম সেটিংস</h1>
        <p className="text-white/40 mt-1">প্ল্যাটফর্মের মূল কনফিগারেশন পরিবর্তন করুন।</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="border-white/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" /> জেনারেল সেটিংস
              </CardTitle>
            </CardHeader>
            <div className="space-y-5 pt-4">
              <div className="space-y-2">
                <Label className="text-white/60 text-xs font-bold uppercase tracking-widest">সাইট টাইটেল</Label>
                <Input placeholder="ONGON BANGLADESH" className="bg-white/5 border-white/10 text-white rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/60 text-xs font-bold uppercase tracking-widest">সাপোর্ট ইমেইল</Label>
                <Input placeholder="support@ongonbd.org" className="bg-white/5 border-white/10 text-white rounded-xl h-12" />
              </div>
            </div>
          </Card>

          <Card className="border-white/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" /> সিকিউরিটি
              </CardTitle>
            </CardHeader>
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">টু-ফ্যাক্টর অথেনটিকেশন</p>
                  <p className="text-xs text-white/40">অতিরিক্ত নিরাপত্তার জন্য এটি অন করুন।</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">অটো-লগআউট</p>
                  <p className="text-xs text-white/40">৩০ মিনিট ইনঅ্যাক্টিভ থাকলে লগআউট।</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-white/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="h-5 w-5 text-orange-400" /> নোটিফিকেশন কন্ট্রোল
              </CardTitle>
            </CardHeader>
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">ইমেইল নোটিফিকেশন</p>
                  <p className="text-xs text-white/40">নতুন আবেদনের জন্য ইমেইল পান।</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">সিস্টেম অ্যালার্ট</p>
                  <p className="text-xs text-white/40">সিকিউরিটি রিস্কের জন্য অ্যালার্ট।</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          <Button 
            onClick={handleSave}
            className="w-full h-14 bg-white text-primary hover:bg-white/90 font-bold rounded-2xl shadow-xl flex items-center justify-center gap-2 text-lg"
          >
            <Save className="h-5 w-5" /> পরিবর্তনগুলো সেভ করুন
          </Button>
        </div>
      </div>
    </div>
  );
}
