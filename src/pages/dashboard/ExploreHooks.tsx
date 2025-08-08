import { Search, Heart, Copy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockHooks } from '@/data/mockData';

export default function ExploreHooks() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-sora">
          Explore <span className="bg-gradient-primary bg-clip-text text-transparent">Hooks</span>
        </h1>
        <p className="text-muted-foreground">Discover high-performing hooks and video structures</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search hooks by category or keyword..." className="pl-10" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid gap-4">
        {mockHooks.map((hook) => (
          <Card key={hook.id} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-lg font-medium mb-2">"{hook.text}"</p>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline">{hook.category}</Badge>
                    <Badge variant="outline">{hook.platform}</Badge>
                    <Badge variant="default">{hook.performance}% effective</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Heart className="h-4 w-4" /></Button>
                  <Button variant="outline" size="sm"><Copy className="h-4 w-4" /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}