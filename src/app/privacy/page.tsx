'use client';

import { Navbar } from '@/components/layout/Navbar';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl border-white/10 text-white space-y-8">
          <h1 className="text-4xl font-bold">গোপনীয়তা নীতি</h1>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">১. তথ্য সংগ্রহ</h2>
              <p>আমরা আমাদের সেবার মান উন্নয়নের জন্য ব্যবহারকারীর নাম, ইমেইল এবং মোবাইল নম্বর সংগ্রহ করে থাকি।</p>
            </section>
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">২. তথ্যের ব্যবহার</h2>
              <p>আপনার ব্যক্তিগত তথ্য তৃতীয় কোনো পক্ষের কাছে বিক্রি বা বিনিময় করা হয় না। এটি শুধুমাত্র সেবামূলক কাজে ব্যবহৃত হয়।</p>
            </section>
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">৩. নিরাপত্তা</h2>
              <p>আমরা আপনার তথ্যের সর্বোচ্চ নিরাপত্তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
