'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, HeartHandshake, CheckCircle, AlertTriangle, Activity, TrendingUp, CloudLightning } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area 
} from 'recharts';

const data = [
  { name: 'জানু', donations: 4000, requests: 2400 },
  { name: 'ফেব্রু', donations: 3000, requests: 1398 },
  { name: 'মার্চ', donations: 2000, requests: 9800 },
  { name: 'এপ্রিল', donations: 2780, requests: 3908 },
  { name: 'মে', donations: 1890, requests: 4800 },
];

export default function AdminDashboard() {
  const stats = [
    { title: "মোট ইউজার", value: "1,248", icon: Users, color: "text-blue-500", trend: "+12%" },
    { title: "সক্রিয় আবেদন", value: "86", icon: HeartHandshake, color: "text-primary", trend: "+5%" },
    { title: "সমাধানকৃত", value: "432", icon: CheckCircle, color: "text-green-500", trend: "+18%" },
    { title: "রিভিউ পেন্ডিং", value: "12", icon: AlertTriangle, color: "text-orange-500", trend: "-2%" },
  ];

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">ওভারভিউ</h1>
          <p className="text-white/40 mt-1">সিস্টেম স্ট্যাটাস চেক করুন এবং কার্যক্রম ট্র্যাক করুন।</p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-green-500/10 text-green-400 rounded-xl border border-green-500/20 text-xs font-bold flex items-center gap-2">
            <Activity className="h-3 w-3 animate-pulse" /> সিস্টেম অনলাইন
          </div>
          <div className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-xl border border-orange-500/20 text-xs font-bold flex items-center gap-2">
            <CloudLightning className="h-3 w-3" /> দুর্যোগ মোড সচল
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-white/5 bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{stat.title}</p>
                  <h3 className="text-3xl font-bold mt-1 text-white">{stat.value}</h3>
                  <p className={cn("text-[10px] font-bold mt-1", stat.trend.startsWith('+') ? "text-green-400" : "text-red-400")}>
                    {stat.trend} এই সপ্তাহে
                  </p>
                </div>
                <div className={cn("p-4 rounded-xl bg-white/5", stat.color)}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-white/5 bg-white/5 backdrop-blur-md rounded-xl shadow-2xl p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> কার্যক্রম এনালাইসিস
            </CardTitle>
          </CardHeader>
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#fff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a0405', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="donations" stroke="#fff" fillOpacity={1} fill="url(#colorDonations)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="border-white/5 bg-white/5 backdrop-blur-md rounded-xl shadow-2xl p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-white">সাম্প্রতিক ইভেন্ট</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pt-6 space-y-6">
            {[
              { title: "নতুন সাহায্য আবেদন", desc: "বন্যা দুর্গতদের জন্য", time: "৫ মিনিট আগে", color: "bg-blue-500" },
              { title: "দুর্যোগ রিপোর্ট", desc: "সুনামগঞ্জে আকস্মিক বন্যা", time: "১০ মিনিট আগে", color: "bg-red-500" },
              { title: "পেমেন্ট প্রাপ্তি", desc: "যাকাত তহবিল: ৳৫০০০", time: "১২ মিনিট আগে", color: "bg-green-500" },
              { title: "সিস্টেম অ্যালার্ট", desc: "অ্যাডমিন লগইন সফল", time: "৩০ মিনিট আগে", color: "bg-primary" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={cn("w-2 h-2 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]", item.color)} />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white leading-none">{item.title}</p>
                  <p className="text-xs text-white/40">{item.desc}</p>
                  <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest">{item.time}</p>
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
