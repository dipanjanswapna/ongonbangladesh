'use client';

import { Navbar } from '@/components/layout/Navbar';
import { ShieldCheck, FileText, Scale, AlertCircle } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: "১. শর্তাবলী গ্রহণ",
      content: "ওঙ্গন বাংলাদেশ (ONGON BANGLADESH) ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের নির্ধারিত সকল শর্তাবলী মেনে নিতে সম্মত হচ্ছেন। আপনি যদি এই শর্তাবলীর কোনো অংশের সাথে একমত না হন, তবে দয়া করে আমাদের সাইট ব্যবহার থেকে বিরত থাকুন।"
    },
    {
      icon: Scale,
      title: "২. তথ্যের সঠিকতা",
      content: "সাহায্যের জন্য আবেদন করার সময় অবশ্যই সঠিক এবং সত্য তথ্য প্রদান করতে হবে। কোনো প্রকার প্রতারণামূলক তথ্য বা জালিয়াতি ধরা পড়লে আপনার অ্যাকাউন্ট স্থায়ীভাবে স্থগিত করা হবে এবং আইনি ব্যবস্থা নেওয়া হতে পারে।"
    },
    {
      icon: ShieldCheck,
      title: "৩. অনুদান নীতি",
      content: "আপনার প্রদত্ত সকল অনুদান সরাসরি আর্তমানবতার সেবায় এবং সংস্থার প্রশাসনিক কার্যক্রম সচল রাখতে ব্যবহৃত হবে। ওঙ্গন বাংলাদেশ প্রতিটি লেনদেনের স্বচ্ছতা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।"
    },
    {
      icon: AlertCircle,
      title: "৪. মেধা স্বত্ব",
      content: "এই ওয়েবসাইটে ব্যবহৃত সকল লোগো, কন্টেন্ট, ডিজাইন এবং এআই টেকনোলজি ওঙ্গন বাংলাদেশের নিজস্ব সম্পদ। বিনা অনুমতিতে এগুলো বাণিজ্যিক উদ্দেশ্যে ব্যবহার করা আইনত দণ্ডনীয় অপরাধ।"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/20" style={{ backgroundColor: 'rgb(122, 16, 19)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-32 flex-grow max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">ব্যবহারের শর্তাবলী</h1>
          <p className="text-white/60">সর্বশেষ আপডেট: মার্চ ২০২৪</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-[#7a1013] transition-all shrink-0">
                  <section.icon className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  <p className="text-white/70 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-[2.5rem] border border-dashed border-white/20 text-center">
          <p className="text-white/40 text-sm">
            এই শর্তাবলী সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন: <br />
            <span className="text-white font-bold">legal@ongonbd.org</span>
          </p>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
          ONGON BANGLADESH • COMPLIANCE & LEGAL
        </p>
      </footer>
    </div>
  );
}
