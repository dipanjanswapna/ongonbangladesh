'use client';

import { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Send, 
  Bot, 
  User, 
  Loader2, 
  ArrowLeft,
  Sparkles,
  MessageSquare,
  Heart,
  Droplet,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { getAssistantResponse } from '@/ai/flows/ongon-assistant';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function AssistantPage() {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'আসসালামু আলাইকুম! আমি ওঙ্গন এআই অ্যাসিস্ট্যান্ট। আমি আপনাকে সাহায্য আবেদন, রক্তদান, বা আমাদের কার্যক্রম সম্পর্কে তথ্য দিয়ে সাহায্য করতে পারি। আজ আপনাকে কীভাবে সাহায্য করতে পারি?' }
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
      const response = await getAssistantResponse({
        message: userMessage,
        history: messages.slice(-10).map(m => ({ role: m.role, content: m.content }))
      });
      
      setMessages(prev => [...prev, { role: 'model', content: response.response }]);
    } catch (error) {
      toast({ title: "দুঃখিত", description: "সার্ভারে সমস্যা হচ্ছে। আবার চেষ্টা করুন।", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    { text: "সাহায্য চাইব কীভাবে?", icon: Heart },
    { text: "রক্তদাতা হতে চাই", icon: Droplet },
    { text: "ওঙ্গন-এর লক্ষ্য কী?", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-6 flex-grow flex flex-col max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-white/60 hover:text-white rounded-xl">
              <ArrowLeft className="h-4 w-4 mr-2" /> হোম পেজ
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">ONGON Assistant Online</span>
          </div>
        </div>

        <Card className="flex-grow bg-white/5 border-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative">
          {/* Header */}
          <div className="p-6 border-b border-white/10 bg-white/5 flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white/10 text-white border border-white/10 shadow-xl">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-none">ওঙ্গন এআই অ্যাসিস্ট্যান্ট</h2>
              <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">Smart Support Engine</p>
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

          {/* Quick Prompts */}
          <div className="px-6 py-3 bg-white/5 border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, i) => (
              <Button 
                key={i}
                size="sm" 
                variant="outline" 
                onClick={() => setInput(p.text)}
                className="rounded-full border-white/10 text-white/60 hover:bg-white/10 hover:text-white text-[10px] font-bold h-8 shrink-0"
              >
                <p.icon className="h-3 w-3 mr-1" /> {p.text}
              </Button>
            ))}
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSendMessage}
            className="p-6 bg-white/5 border-t border-white/10 flex gap-3"
          >
            <Input 
              placeholder="আপনার প্রশ্নটি এখানে লিখুন..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow bg-white/10 border-white/10 text-white rounded-2xl h-14 focus:ring-white/20 px-6"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="h-14 w-14 rounded-2xl bg-white text-[#7a1013] hover:bg-white/90 shadow-xl transition-all active:scale-90 flex items-center justify-center shrink-0"
            >
              <Send className="h-6 w-6" />
            </Button>
          </form>
        </Card>

        <p className="mt-6 text-center text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
          Powered by ONGON AI ENGINE • Version 2.0
        </p>
      </main>
    </div>
  );
}
