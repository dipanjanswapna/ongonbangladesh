'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  MapPin, 
  Clock, 
  ThumbsUp, 
  ThumbsDown, 
  Phone, 
  CreditCard, 
  Trash2, 
  Share2, 
  CheckCircle2,
  AlertTriangle,
  Building2,
  Smartphone
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data fetching function based on ID
const getRequestById = (id: string) => {
  return {
    id: id,
    title: 'শিশুর জন্য জরুরি চিকিৎসা সহায়তা',
    description: 'ঢাকার ৫ বছর বয়সী এক শিশুর হার্টের অপারেশনের জন্য জরুরি আর্থিক সহায়তা প্রয়োজন। পরিবার রক্তদাতাও খুঁজছে। আমরা অত্যন্ত অসহায় অবস্থায় আছি এবং আপনাদের সামান্য সাহায্য একটি শিশুর প্রাণ বাঁচাতে পারে।',
    location: 'ঢাকা মেডিকেল কলেজ হাসপাতাল, ঢাকা',
    category: 'চিকিৎসা',
    urgency: 'high' as const,
    createdAt: '২ ঘণ্টা আগে',
    targetAmount: 500000,
    collectedAmount: 125000,
    bkash: '01700-000000',
    nagad: '01800-000000',
    rocket: '01900-000000-1',
    bankAccount: 'Account Name: Rahim, Acc No: 123456789, Bank: DBBL',
    isOwner: true // Demo purpose
  };
};

export default function RequestDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [request, setRequest] = useState<any>(null);
  const [likes, setLikes] = useState(42);
  const [dislikes, setDislikes] = useState(2);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    if (params.id) {
      setRequest(getRequestById(params.id as string));
    }
  }, [params.id]);

  if (!request) return <div className="min-h-screen bg-background flex items-center justify-center text-white">লোড হচ্ছে...</div>;

  const progress = (request.collectedAmount / request.targetAmount) * 100;

  const handleVote = (type: 'like' | 'dislike') => {
    if (hasVoted) {
      toast({ title: "আপনি ইতিমধ্যে ভোট দিয়েছেন!", variant: "destructive" });
      return;
    }
    if (type === 'like') setLikes(l => l + 1);
    else setDislikes(d => d + 1);
    setHasVoted(true);
    toast({ title: "আপনার ভোট গ্রহণ করা হয়েছে।" });
  };

  const handleDelete = () => {
    if (confirm("আপনি কি নিশ্চিতভাবে এই অনুরোধটি মুছে ফেলতে চান?")) {
      toast({ title: "অনুরোধটি মুছে ফেলা হয়েছে।" });
      router.push('/requests');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 flex-grow max-w-4xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-white text-primary uppercase font-bold">{request.category}</Badge>
                <Badge variant={request.urgency === 'high' ? 'destructive' : 'secondary'} className="uppercase">
                  {request.urgency === 'high' ? 'জরুরি' : 'মাঝারি'}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{request.title}</h1>
              <div className="flex flex-wrap gap-4 text-white/60 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" /> {request.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {request.createdAt}
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none border-white/20 text-white hover:bg-white/10 rounded-xl">
                <Share2 className="h-4 w-4 mr-2" /> শেয়ার
              </Button>
              {request.isOwner && (
                <Button variant="destructive" className="flex-1 md:flex-none rounded-xl" onClick={handleDelete}>
                  <Trash2 className="h-4 w-4 mr-2" /> মুছুন
                </Button>
              )}
            </div>
          </div>

          {/* Progress Section */}
          <Card className="glass-card border-white/10 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg flex justify-between items-center">
                <span>আর্থিক লক্ষমাত্রা প্রগ্রেস</span>
                <span className="text-primary">{Math.round(progress)}%</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={progress} className="h-3 bg-white/10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs text-white/40 uppercase font-bold mb-1">সংগৃহীত</p>
                  <p className="text-xl font-bold text-white">৳ {request.collectedAmount.toLocaleString()}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs text-white/40 uppercase font-bold mb-1">লক্ষ্যমাত্রা</p>
                  <p className="text-xl font-bold text-white">৳ {request.targetAmount.toLocaleString()}</p>
                </div>
              </div>
              {progress >= 100 && (
                <div className="flex items-center gap-2 p-3 bg-green-500/20 text-green-400 rounded-xl border border-green-500/20">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-bold">লক্ষ্যমাত্রা পূর্ণ হয়েছে! এই অনুরোধটি শীঘ্রই বন্ধ করে দেওয়া হবে।</span>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-8">
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-3">বিস্তারিত তথ্য</h3>
                <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line">
                  {request.description}
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-3">সরাসরি সাহায্য (ঠিকানা)</h3>
                <Card className="bg-white/5 border-white/10 rounded-2xl">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold mb-1">আপনি সরাসরি গিয়ে সাহায্য করতে পারেন:</p>
                      <p className="text-white/70 text-sm mb-4">{request.location}</p>
                      <Button variant="link" className="p-0 h-auto text-primary font-bold">গুগল ম্যাপে দেখুন</Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Verification/Rating System */}
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-3">সত্যতা যাচাই ও রেটিং</h3>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className={cn(
                      "flex-1 h-16 rounded-2xl border-white/10 text-white gap-3 transition-all",
                      hasVoted ? "opacity-50" : "hover:bg-green-500/10 hover:border-green-500/50"
                    )}
                    onClick={() => handleVote('like')}
                  >
                    <ThumbsUp className="h-6 w-6 text-green-500" />
                    <div className="text-left">
                      <p className="text-lg font-bold">{likes}</p>
                      <p className="text-[10px] uppercase text-white/40 font-bold">সত্য তথ্য</p>
                    </div>
                  </Button>
                  <Button 
                    variant="outline" 
                    className={cn(
                      "flex-1 h-16 rounded-2xl border-white/10 text-white gap-3 transition-all",
                      hasVoted ? "opacity-50" : "hover:bg-red-500/10 hover:border-red-500/50"
                    )}
                    onClick={() => handleVote('dislike')}
                  >
                    <ThumbsDown className="h-6 w-6 text-red-500" />
                    <div className="text-left">
                      <p className="text-lg font-bold">{dislikes}</p>
                      <p className="text-[10px] uppercase text-white/40 font-bold">ভুল তথ্য</p>
                    </div>
                  </Button>
                </div>
                <p className="text-xs text-white/40 text-center flex items-center justify-center gap-1 italic">
                  <AlertTriangle className="h-3 w-3" /> আপনার একটি ভোট অন্যকে সাহায্য করতে উৎসাহিত করবে।
                </p>
              </section>
            </div>

            {/* Right Column: Payment Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-3">সাহায্য পাঠান</h3>
              
              <div className="space-y-3">
                {[
                  { name: 'bKash', type: 'smartphone', color: 'bg-[#d12053]', number: request.bkash },
                  { name: 'Nagad', type: 'smartphone', color: 'bg-[#f7941d]', number: request.nagad },
                  { name: 'Rocket', type: 'smartphone', color: 'bg-[#8c3494]', number: request.rocket },
                ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg text-white", item.color)}>
                          <Smartphone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white/50 uppercase tracking-wider">{item.name}</p>
                          <p className="text-lg font-bold text-white">{item.number}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 space-y-3">
                  <div className="flex items-center gap-3 text-primary">
                    <Building2 className="h-5 w-5" />
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">Bank Account</p>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-medium">
                    {request.bankAccount}
                  </p>
                </div>
              </div>

              <Button className="w-full h-14 bg-white text-primary hover:bg-white/90 font-bold rounded-2xl shadow-xl">
                <Heart className="h-5 w-5 mr-2 fill-primary" /> আমি সাহায্য পাঠিয়েছি
              </Button>
              
              <p className="text-[10px] text-white/30 text-center leading-relaxed">
                অনুগ্রহ করে সাহায্য পাঠানোর আগে ফোন করে যাচাই করে নিন। ONGON কোনো আর্থিক লেনদেনের দায়ভার গ্রহণ করে না।
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
