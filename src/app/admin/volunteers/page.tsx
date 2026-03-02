
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, Phone, Calendar, UserCheck, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const volunteers = [
  { name: "Sabbir Hasan", skill: "IT & Tech", email: "sabbir@demo.com", phone: "+8801700-000000", status: "Active" },
  { name: "Tania Akter", skill: "Medical Support", email: "tania@demo.com", phone: "+8801800-000000", status: "Pending" },
  { name: "Rifat Ahmed", skill: "Teaching", email: "rifat@demo.com", phone: "+8801900-000000", status: "Active" },
  { name: "Mim Islam", skill: "Coordination", email: "mim@demo.com", phone: "+8801600-000000", status: "Interview" },
];

export default function VolunteersManagement() {
  return (
    <div className="space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">স্বেচ্ছাসেবক ম্যানেজমেন্ট</h1>
        <p className="text-white/40 mt-1">স্বেচ্ছাসেবক নেটওয়ার্ক পরিচালনা করুন।</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {volunteers.map((vol, i) => (
          <Card key={i} className="border-white/5 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-6 shadow-2xl transition-all hover:bg-white/10">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-white/10">
                  <AvatarImage src={`https://picsum.photos/seed/${vol.name}/200`} />
                  <AvatarFallback className="bg-white/10 text-white font-bold">{vol.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold text-white">{vol.name}</h3>
                  <Badge variant="outline" className="text-[10px] border-primary/30 text-primary bg-primary/5">{vol.skill}</Badge>
                </div>
              </div>
              <Badge className={cn(
                "text-[10px] font-bold",
                vol.status === "Active" ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"
              )}>
                {vol.status}
              </Badge>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-white/50">
                <Mail className="h-4 w-4" />
                <span className="text-xs">{vol.email}</span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <Phone className="h-4 w-4" />
                <span className="text-xs">{vol.phone}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex gap-2">
              <Button size="sm" variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/5 rounded-xl text-xs h-10">
                <MessageSquare className="h-3.5 w-3.5 mr-2" /> মেসেজ
              </Button>
              <Button size="sm" className="flex-1 bg-white text-primary hover:bg-white/90 font-bold rounded-xl text-xs h-10">
                <UserCheck className="h-3.5 w-3.5 mr-2" /> প্রোফাইল দেখুন
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
