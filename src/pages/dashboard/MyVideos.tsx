import { Play, Filter, Search, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockVideos } from '@/data/mockData';

export default function MyVideos() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-sora">
          My <span className="bg-gradient-primary bg-clip-text text-transparent">Videos</span>
        </h1>
        <p className="text-muted-foreground">Manage and review your analyzed videos</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search videos..." className="pl-10" />
        </div>
        <Button variant="outline"><Filter className="h-4 w-4 mr-2" />Filter</Button>
      </div>

      <div className="grid gap-4">
        {mockVideos.map((video) => (
          <Card key={video.id} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <img src={video.thumbnail} alt={video.title} className="w-24 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{video.title}</h3>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline">{video.platform}</Badge>
                    <Badge variant="outline">{video.narrativeStyle}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{video.duration}s • Analyzed {video.createdAt}</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">{video.analysisScore}/100</div>
                  <div className="text-sm text-muted-foreground">{video.engagementPrediction}</div>
                </div>
                <Button variant="outline" size="sm"><MoreHorizontal className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}