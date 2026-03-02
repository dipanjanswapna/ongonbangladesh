
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';

const tasks = [
  { id: 1, title: "বন্যা দুর্গতদের খাদ্য প্যাকেট করা", status: "In Progress", location: "ঢাকা হেড অফিস", deadline: "আজ বিকেল ৪টা" },
  { id: 2, title: "মেডিক্যাল ক্যাম্প সহায়তা", status: "Upcoming", location: "কুড়িগ্রাম", deadline: "২৫ মে" },
  { id: 3, title: "শীতবস্ত্র কালেকশন ড্রাইভ", status: "Completed", location: "অনলাইন/অফিস", deadline: "১০ মে" },
  { id: 4, title: "ডোনার লিস্ট আপডেট", status: "In Progress", location: "রিমোট", deadline: "আগামীকাল" },
];

export default function VolunteerTasks() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">আমার টাস্কসমূহ</h1>
          <p className="text-white/40 mt-1">আপনার জন্য বরাদ্দকৃত কাজের তালিকা।</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl">
          নতুন কাজ খুঁজুন
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map((task) => (
          <Card key={task.id} className="border-white/5 bg-white/5 backdrop-blur-md rounded-[2rem] p-6 shadow-2xl hover:bg-white/10 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white">{task.title}</h3>
              <Badge className={cn(
                "text-[10px] font-bold",
                task.status === "Completed" ? "bg-green-500/10 text-green-400" : 
                task.status === "In Progress" ? "bg-blue-500/10 text-blue-400" : 
                "bg-orange-500/10 text-orange-400"
              )}>
                {task.status}
              </Badge>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <MapPin className="h-3.5 w-3.5" />
                <span>{task.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Clock className="h-3.5 w-3.5" />
                <span>ডেডলাইন: {task.deadline}</span>
              </div>
            </div>

            <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 rounded-xl text-xs h-10">
              বিস্তারিত ও রিপোর্ট জমা দিন <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
