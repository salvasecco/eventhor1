import { Sparkles, Wand2, Copy, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockSuggestions } from '@/data/mockData';

export default function VariationGenerator() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-sora">
          Variation <span className="bg-gradient-primary bg-clip-text text-transparent">Generator</span>
        </h1>
        <p className="text-muted-foreground">AI-powered suggestions to optimize your video content</p>
      </div>

      {/* Generate New Variations */}
      <Card className="bg-gradient-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            Generate New Variations
          </CardTitle>
          <CardDescription>Upload a video to get instant optimization suggestions</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="hero" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Upload Video & Generate
          </Button>
        </CardContent>
      </Card>

      {/* Recent Suggestions */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Recent Suggestions</CardTitle>
          <CardDescription>AI-generated improvements for your latest videos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockSuggestions.map((suggestion) => (
            <div key={suggestion.id} className="p-4 border border-border/50 rounded-xl space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{suggestion.title}</h3>
                    <Badge variant={suggestion.impact === 'High' ? 'default' : 'secondary'}>
                      {suggestion.impact} Impact
                    </Badge>
                    <Badge variant="outline">{suggestion.category}</Badge>
                  </div>
                  <p className="text-muted-foreground">{suggestion.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Hook Variations', count: 12, icon: '🎣' },
          { title: 'Script Improvements', count: 8, icon: '📝' },
          { title: 'Visual Edits', count: 15, icon: '🎬' },
          { title: 'CTA Optimization', count: 6, icon: '📢' },
          { title: 'Pacing Adjustments', count: 9, icon: '⏱️' },
          { title: 'Emotional Triggers', count: 11, icon: '❤️' }
        ].map((category) => (
          <Card key={category.title} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glass transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-semibold mb-1">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.count} suggestions available</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}