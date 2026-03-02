
'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { autoCategorizeAidRequest } from '@/ai/flows/auto-categorize-aid-request';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

export default function NewRequestPage() {
  const { toast } = useToast();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [urgency, setUrgency] = useState('medium');
  const [isCategorizing, setIsCategorizing] = useState(false);
  const [suggestedCategories, setSuggestedCategories] = useState<string[]>([]);

  const handleAutoCategorize = async () => {
    if (!description.trim()) {
      toast({ title: "Please enter a description first.", variant: "destructive" });
      return;
    }

    setIsCategorizing(true);
    try {
      const result = await autoCategorizeAidRequest({ description });
      setSuggestedCategories(result.categories);
      if (result.categories.length > 0) {
        setCategory(result.categories[0]);
      }
      toast({ title: "AI suggestions ready!" });
    } catch (error) {
      toast({ title: "AI categorization failed. Please select manually.", variant: "destructive" });
    } finally {
      setIsCategorizing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request submitted successfully!", description: "It will appear on the platform after admin review." });
    // Reset or redirect
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-2xl border-white/5 bg-card/50 backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline font-bold">Post an Aid Request</CardTitle>
            <CardDescription className="text-muted-foreground">Describe your need clearly so the community can support you effectively.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Request Title</Label>
                <Input 
                  id="title" 
                  placeholder="e.g. Oxygen Cylinder for Elderly Patient" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-background/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    className="text-accent hover:text-accent hover:bg-accent/10 flex items-center gap-1"
                    onClick={handleAutoCategorize}
                    disabled={isCategorizing || !description}
                  >
                    {isCategorizing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                    Auto-categorize
                  </Button>
                </div>
                <Textarea 
                  id="description" 
                  placeholder="Describe what you need, why it's urgent, and how people can help..." 
                  className="min-h-[120px] bg-background/50"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical">Medical</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="housing">Housing/Shelter</SelectItem>
                      <SelectItem value="financial">Financial</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                  </Select>
                  {suggestedCategories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-[10px] uppercase text-muted-foreground w-full">AI Suggestions:</span>
                      {suggestedCategories.map((cat) => (
                        <Badge 
                          key={cat} 
                          variant="secondary" 
                          className="cursor-pointer hover:bg-primary/20"
                          onClick={() => setCategory(cat)}
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Not Immediate</SelectItem>
                      <SelectItem value="medium">Medium - Within a few days</SelectItem>
                      <SelectItem value="high">High - Immediate Attention</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  placeholder="e.g. Dhanmondi, Dhaka" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-background/50"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-bold flex items-center gap-2">
                <Send className="h-5 w-5" /> Submit Aid Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
