'use client';

import { Navbar } from '@/components/layout/Navbar';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl border-white/10 text-white space-y-8">
          <h1 className="text-4xl font-bold">ব্যবহারের শর্তাবলী</h1>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">১. শর্তাবলী গ্রহণ</h2>
              <p>ONGON BANGLADESH ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের শর্তাবলীর সাথে একমত প্রকাশ করছেন।</p>
            </section>
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">২. তথ্যের সঠিকতা</h2>
              <p>সাহায্যের অনুরোধ করার সময় অবশ্যই সঠিক এবং সত্য তথ্য প্রদান করতে হবে। ভুল বা মিথ্যা তথ্য প্রদানের ফলে আপনার অ্যাকাউন্ট স্থগিত হতে পারে।</p>
            </section>
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">৩. অনুদান নীতি</h2>
              <p>প্রদত্ত সকল অনুদান সরাসরি আর্তমানবতার সেবায় ব্যবহৃত হবে। অনুদানের কোনো অর্থ ফেরতযোগ্য নয়।</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
