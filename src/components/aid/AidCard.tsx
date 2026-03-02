import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, ArrowRight, HeartPulse, GraduationCap, Utensils, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AidCardProps {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  urgency: 'low' | 'medium' | 'high';
  createdAt: string;
  type: 'request' | 'offer';
}

const categoryIcons: Record<string, any> = {
  medical: HeartPulse,
  education: GraduationCap,
  food: Utensils,
  housing: Home,
  shelter: Home,
  চিকিৎসা: HeartPulse,
  শিক্ষা: GraduationCap,
  খাদ্য: Utensils,
};

export function AidCard({ id, title, description, location, category, urgency, createdAt, type }: AidCardProps) {
  const Icon = categoryIcons[category.toLowerCase()] || categoryIcons[category] || HeartPulse;

  const urgencyText = {
    high: 'জরুরি',
    medium: 'মাঝারি',
    low: 'স্বল্প'
  };

  return (
    <Card className="overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all border-white/5 bg-card">
      <CardHeader className="p-4 flex flex-row items-start justify-between space-y-0">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <Badge variant="outline" className="mb-1 uppercase tracking-wider text-[10px] text-accent border-accent/30">
              {category}
            </Badge>
            <h3 className="text-lg font-bold leading-tight group-hover:text-accent transition-colors text-white">
              {title}
            </h3>
          </div>
        </div>
        <Badge className={cn(
          "text-white border-0",
          urgency === 'high' ? "bg-red-600" : urgency === 'medium' ? "bg-orange-500" : "bg-green-600"
        )}>
          {urgencyText[urgency]}
        </Badge>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {description}
        </p>
        <div className="flex flex-col gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {createdAt}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t border-white/5 flex gap-2">
        <Button size="sm" className="w-full bg-primary hover:bg-primary/90 font-bold">
          {type === 'request' ? 'সাহায্য করতে চাই' : 'সাহায্য চাই'}
        </Button>
        <Button size="sm" variant="ghost" className="px-2 text-white">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
