
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Trophy, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { 
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'সোম', hours: 2 },
  { name: 'মঙ্গল', hours: 4 },
  { name: 'বুধ', hours: 3 },
  { name: 'বৃহ', hours: 6 },
  { name: 'শুক্র', hours: 8 },
  { name: 'শনি', hours: 5 },
  { name: 'রবি', hours: 2 },
];

export default function VolunteerDashboard() {
  const stats = [
    { title: "মোট কাজের সময়", value: "১৮৪ ঘণ্টা", icon: Clock, color: "text-blue-400" },
    { title: "সম্পন্ন টাস্ক", value: "২৪", icon: CheckCircle2, color: "text-green-400" },
    { title: "অর্জিত পয়েন্ট", value: "১২৫০", icon: Trophy, color: "text-yellow-400" },
    { title: "র‍্যাঙ্ক", value: "#১২", icon: TrendingUp, color: "text-primary" },
  ];

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">স্বাগতম, সাব্বির!</h1>
          <p className="text-white/40 mt-1">আপনার আজকের সেবামূলক কাজগুলো দেখে নিন।</p>
        </div>
        <div className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 text-xs font-bold">
          লেভেল ৫ ভলান্টিয়ার
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-white/5 bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1 text-white">{stat.value}</h3>
                </div>
                <div className={cn("p-3 rounded-xl bg-white/5", stat.color)}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-white/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-6 shadow-2xl">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-white text-lg">সাপ্তাহিক কর্মঘণ্টা</CardTitle>
          </CardHeader>
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="hours" stroke="#22c55e" fillOpacity={1} fill="url(#colorHours)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="border-white/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-6 shadow-2xl">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-white text-lg">জরুরি নোটিশ</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pt-6 space-y-4">
            {[
              { title: "খাদ্য বিতরণ", desc: "আগামীকাল সকাল ১০টায় ধানমণ্ডিতে।", color: "text-orange-400" },
              { title: "নতুন টাস্ক", desc: "বন্যা দুর্গতদের ডাটা এন্ট্রি করতে হবে।", color: "text-blue-400" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <AlertCircle className={cn("h-5 w-5 shrink-0", item.color)} />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="text-xs text-white/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
