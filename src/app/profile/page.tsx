'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  HandCoins, 
  History, 
  Settings, 
  LogOut, 
  User, 
  Bell, 
  ShieldCheck, 
  PlusCircle,
  FileText
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function UserPortal() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ title: "লগআউট করা হয়েছে", description: "আবার দেখা হবে!" });
    router.push('/');
  };

  const stats = [
    { title: "মোট অনুদান", value: "৳১২,৫০০", icon: HandCoins, color: "text-green-400" },
    { title: "সাহায্য আবেদন", value: "০২", icon: FileText, color: "text-blue-400" },
    { title: "ভলান্টিয়ার সময়", value: "১৮ ঘণ্টা", icon: Heart, color: "text-primary" },
  ];

  const recentActivity = [
    { id: 1, title: "বন্যা দুর্গতদের জন্য অনুদান", date: "২ দিন আগে", amount: "৳৫০০", status: "সফল" },
    { id: 2, title: "শীতবস্ত্র বিতরণ (স্বেচ্ছাসেবক)", date: "১ সপ্তাহ আগে", amount: "-", status: "সম্পন্ন" },
    { id: 3, title: "যাকাত তহবিল প্রদান", date: "৩ সপ্তাহ আগে", amount: "৳২,০০০", status: "সফল" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 glass-card p-6 md:p-8 rounded-[2.5rem] border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-white/10">
                  <AvatarImage src="https://picsum.photos/seed/user1/200" />
                  <AvatarFallback className="bg-white/10 text-white text-2xl font-bold">RA</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 p-1 bg-green-500 rounded-full border-2 border-[#781013]">
                  <ShieldCheck className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">রহিম আহমেদ</h1>
                <p className="text-white/60">সদস্য আইডি: #ONGON-4521</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                  <Badge className="bg-white/10 text-white border-0">সক্রিয় দাতা</Badge>
                  <Badge className="bg-primary text-white border-0">ভলান্টিয়ার</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-xl">
                <Settings className="h-4 w-4 mr-2" /> প্রোফাইল সেটিংস
              </Button>
              <Button variant="destructive" className="rounded-xl" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" /> লগআউট
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <Card key={i} className="glass-card border-white/5 bg-white/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm text-white/40 font-medium uppercase tracking-wider">{stat.title}</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.value}</h3>
                    </div>
                    <div className={`p-4 rounded-2xl bg-white/5 ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="activity" className="w-full">
                <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl mb-6 w-full sm:w-auto h-auto">
                  <TabsTrigger value="activity" className="rounded-xl px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-primary font-bold text-xs text-white">সাম্প্রতিক কার্যক্রম</TabsTrigger>
                  <TabsTrigger value="requests" className="rounded-xl px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-primary font-bold text-xs text-white">আমার আবেদন</TabsTrigger>
                </TabsList>
                
                <TabsContent value="activity">
                  <Card className="glass-card border-white/10 overflow-hidden">
                    <CardHeader className="border-b border-white/5 pb-4">
                      <CardTitle className="text-white text-lg">লেনদেন এবং সেবার ইতিহাস</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-white/5">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="p-3 rounded-xl bg-white/5 text-white/60">
                                <History className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-white font-bold text-sm md:text-base">{activity.title}</p>
                                <p className="text-xs text-white/40">{activity.date}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-bold">{activity.amount}</p>
                              <Badge variant="outline" className="text-[10px] border-green-500/20 text-green-400 bg-green-500/5">
                                {activity.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="requests">
                  <div className="text-center py-20 glass-card rounded-[2rem] border-dashed border-white/10 space-y-4">
                    <div className="p-4 rounded-full bg-white/5 text-white/20 inline-flex mx-auto">
                      <FileText className="h-10 w-10" />
                    </div>
                    <p className="text-white/40 font-medium">আপনার কোনো সক্রিয় সাহায্য আবেদন নেই।</p>
                    <Button className="bg-white text-primary hover:bg-white/90 font-bold rounded-xl">
                      <PlusCircle className="h-4 w-4 mr-2" /> নতুন আবেদন করুন
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              <Card className="glass-card border-white/10 bg-white/5">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <Bell className="h-5 w-5 text-yellow-400" /> বিজ্ঞপ্তি
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">নতুন</p>
                    <p className="text-sm text-white/80">আগামী শুক্রবার ধানমণ্ডিতে শীতবস্ত্র বিতরণ ইভেন্ট আছে। আপনি কি যোগ দেবেন?</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 opacity-60">
                    <p className="text-xs font-bold text-white/40 mb-1 uppercase tracking-widest">৩ দিন আগে</p>
                    <p className="text-sm text-white/80">আপনার করা অনুদান (৳৫০০) সফলভাবে গ্রহণ করা হয়েছে। ধন্যবাদ!</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#008744]/10 border border-[#008744]/20 p-6 rounded-[2rem] text-center space-y-4">
                <div className="p-3 bg-[#008744] rounded-full text-white inline-flex">
                  <PlusCircle className="h-6 w-6" />
                </div>
                <h4 className="text-white font-bold">অন্যকে সাহায্য করুন</h4>
                <p className="text-white/60 text-xs">আপনার একটি ছোট পদক্ষেপ কারো জীবন বদলে দিতে পারে।</p>
                <Button className="w-full bg-[#008744] hover:bg-[#007038] text-white font-bold rounded-xl">
                  অনুদান দিন
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
