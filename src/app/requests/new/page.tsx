'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { autoCategorizeAidRequest } from '@/ai/flows/auto-categorize-aid-request';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

export default function NewRequestPage() {
  const { toast } = useToast();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [urgency, setUrgency] = useState('medium');
  const [isCategorizing, setIsCategorizing] = useState(false);
  const [suggestedCategories, setSuggestedCategories] = useState<string[]>([]);

  const handleAutoCategorize = async () => {
    if (!description.trim()) {
      toast({ title: "প্রথমে একটি বর্ণনা লিখুন।", variant: "destructive" });
      return;
    }

    setIsCategorizing(true);
    try {
      const result = await autoCategorizeAidRequest({ description });
      setSuggestedCategories(result.categories);
      if (result.categories.length > 0) {
        setCategory(result.categories[0]);
      }
      toast({ title: "এআই পরামর্শ প্রস্তুত!" });
    } catch (error) {
      toast({ title: "এআই বিভাগ নির্ধারণ ব্যর্থ হয়েছে। অনুগ্রহ করে ম্যানুয়ালি নির্বাচন করুন।", variant: "destructive" });
    } finally {
      setIsCategorizing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: "আবেদন সফলভাবে জমা দেওয়া হয়েছে!", 
      description: "অ্যাডমিন রিভিউয়ের পর এটি প্ল্যাটফর্মে প্রদর্শিত হবে।" 
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow flex items-start justify-center">
        <Card className="w-full max-w-2xl border-white/10 bg-white/5 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden mt-8">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold text-white">সাহায্যের জন্য আবেদন করুন</CardTitle>
            <CardDescription className="text-white/60">আপনার প্রয়োজনীয়তা স্পষ্টভাবে বর্ণনা করুন যাতে আমাদের কমিউনিটি আপনাকে কার্যকরভাবে সাহায্য করতে পারে।</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white font-bold">আবেদনের শিরোনাম</Label>
                <Input 
                  id="title" 
                  placeholder="যেমন: বয়স্ক রোগীর জন্য অক্সিজেন সিলিন্ডার" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:ring-white/30"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="description" className="text-white font-bold">বিস্তারিত বর্ণনা</Label>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    className="text-white bg-white/10 hover:bg-white/20 flex items-center gap-1 rounded-lg px-3"
                    onClick={handleAutoCategorize}
                    disabled={isCategorizing || !description}
                  >
                    {isCategorizing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 text-yellow-400" />}
                    অটো-ক্যাটাগরি
                  </Button>
                </div>
                <Textarea 
                  id="description" 
                  placeholder="আপনার কী প্রয়োজন, কেন এটি জরুরি এবং মানুষ কীভাবে আপনাকে সাহায্য করতে পারে তা বর্ণনা করুন..." 
                  className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl focus:ring-white/30"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white font-bold">বিভাগ</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 rounded-xl">
                      <SelectValue placeholder="বিভাগ নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#781013] border-white/10 text-white">
                      <SelectItem value="medical">চিকিৎসা</SelectItem>
                      <SelectItem value="food">খাদ্য</SelectItem>
                      <SelectItem value="education">শিক্ষা</SelectItem>
                      <SelectItem value="housing">আবাসন/আশ্রয়</SelectItem>
                      <SelectItem value="financial">আর্থিক</SelectItem>
                      <SelectItem value="clothing">পোশাক</SelectItem>
                      <SelectItem value="general">সাধারণ</SelectItem>
                    </SelectContent>
                  </Select>
                  {suggestedCategories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-[10px] uppercase text-white/40 font-bold w-full">এআই পরামর্শ:</span>
                      {suggestedCategories.map((cat) => (
                        <Badge 
                          key={cat} 
                          variant="secondary" 
                          className="cursor-pointer bg-white/10 hover:bg-white/20 text-white border-0"
                          onClick={() => setCategory(cat)}
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency" className="text-white font-bold">জরুরিতার মাত্রা</Label>
                  <Select value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 rounded-xl">
                      <SelectValue placeholder="মাত্রা নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#781013] border-white/10 text-white">
                      <SelectItem value="low">স্বল্প - তাৎক্ষণিক নয়</SelectItem>
                      <SelectItem value="medium">মাঝারি - কয়েক দিনের মধ্যে</SelectItem>
                      <SelectItem value="high">উচ্চ - জরুরি মনোযোগ প্রয়োজন</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-white font-bold">অবস্থান</Label>
                <Input 
                  id="location" 
                  placeholder="যেমন: ধানমন্ডি, ঢাকা" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:ring-white/30"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-white text-[#781013] hover:bg-white/90 h-14 text-lg font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-[1.02] active:scale-95">
                <Send className="h-5 w-5" /> সাহায্য আবেদন জমা দিন
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
