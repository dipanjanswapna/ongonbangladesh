'use client';

import { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Send, 
  MessageCircle, 
  ShieldAlert, 
  ArrowLeft, 
  Bot, 
  User, 
  Loader2, 
  PhoneCall, 
  HeartHandshake 
} from 'lucide-react';
import Link from 'next/link';
import { getSafetySupport } from '@/ai/flows/safety-chat';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function SafetyChatPage() {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'আসসালামু আলাইকুম। আমি ওঙ্গন এআই সাপোর্ট। আপনি কি কোনো সমস্যার মধ্য দিয়ে যাচ্ছেন? আমি আপনাকে তথ্য এবং মানসিক সহায়তা দিয়ে সাহায্য করতে পারি। মনে রাখবেন, সরাসরি বিপদে পড়লে ৯৯৯ নম্বরে কল করুন।' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getSafetySupport({
        message: userMessage,
        history: messages.slice(-5).map(m => ({ role: m.role, content: m.content }))
      });
      
      setMessages(prev => [...prev, { role: 'model', content: response.response }]);
    } catch (error) {
      toast({ title: "দুঃখিত", description: "সার্ভারে সমস্যা হচ্ছে। আবার চেষ্টা করুন।", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-6 flex-grow flex flex-col max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <Link href="/safety">
            <Button variant="ghost" className="text-white/60 hover:text-white rounded-xl">
              <ArrowLeft className="h-4 w-4 mr-2" /> ফিরে যান
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">AI Agent Online</span>
          </div>
        </div>

        <Card className="flex-grow bg-white/5 border-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative">
          {/* Header */}
          <div className="p-6 border-b border-white/10 bg-white/5 flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white/10 text-white">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-none">ওঙ্গন এআই সাপোর্ট</h2>
              <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">প্রাইভেট ও সুরক্ষিত চ্যাট</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex items-start gap-3 max-w-[85%]",
                  msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "p-2 rounded-xl shrink-0 mt-1",
                  msg.role === 'user' ? "bg-white/10 text-white" : "bg-white text-[#7a1013]"
                )}>
                  {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={cn(
                  "p-4 rounded-2xl text-sm leading-relaxed",
                  msg.role === 'user' 
                    ? "bg-white text-[#7a1013] font-bold rounded-tr-none" 
                    : "bg-white/10 text-white border border-white/5 rounded-tl-none"
                )}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 text-white">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce delay-75" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce delay-150" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Helplines */}
          <div className="px-6 py-3 bg-white/5 border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
            <Link href="tel:999">
              <Button size="sm" variant="outline" className="rounded-full border-red-500/30 text-red-400 bg-red-500/5 text-[10px] font-bold h-8 shrink-0">
                <ShieldAlert className="h-3 w-3 mr-1" /> ৯৯৯ এ কল দিন
              </Button>
            </Link>
            <Link href="tel:109">
              <Button size="sm" variant="outline" className="rounded-full border-pink-500/30 text-pink-400 bg-pink-500/5 text-[10px] font-bold h-8 shrink-0">
                <HeartHandshake className="h-3 w-3 mr-1" /> ১০৯ (নারী সহায়তা)
              </Button>
            </Link>
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSendMessage}
            className="p-6 bg-white/5 border-t border-white/10 flex gap-3"
          >
            <Input 
              placeholder="আপনার সমস্যার কথা লিখুন..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow bg-white/10 border-white/10 text-white rounded-2xl h-14 focus:ring-white/20 px-6"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="h-14 w-14 rounded-2xl bg-white text-[#7a1013] hover:bg-white/90 shadow-xl transition-all active:scale-90"
            >
              <Send className="h-6 w-6" />
            </Button>
          </form>
        </Card>

        <p className="mt-6 text-center text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
          Encrypted Conversation • ONGON BD AI ENGINE v1.2
        </p>
      </main>
    </div>
  );
}
