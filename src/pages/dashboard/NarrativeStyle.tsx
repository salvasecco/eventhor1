import { BookOpen, BarChart3, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function NarrativeStyle() {
  const detectedStyles = [
    { name: 'Educational', percentage: 45, description: 'Tutorial and how-to content', effectiveness: 92 },
    { name: 'Storytelling', percentage: 30, description: 'Narrative-driven content', effectiveness: 88 },
    { name: 'Problem-Solution', percentage: 15, description: 'Issue identification and resolution', effectiveness: 90 },
    { name: 'Listicle', percentage: 10, description: 'List-based content', effectiveness: 76 }
  ];

  const optimizationTips = [
    {
      style: 'Educational',
      tips: [
        'Start with a clear learning objective',
        'Use visual demonstrations',
        'End with a quick recap',
        'Include progress indicators'
      ]
    },
    {
      style: 'Storytelling',
      tips: [
        'Begin with a compelling hook',
        'Build tension throughout',
        'Include emotional moments',
        'Provide satisfying resolution'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-sora">
          Narrative <span className="bg-gradient-primary bg-clip-text text-transparent">Style Analysis</span>
        </h1>
        <p className="text-muted-foreground">Understand and optimize your content patterns</p>
      </div>

      {/* Style Distribution */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Your Content Style Distribution
          </CardTitle>
          <CardDescription>Analysis of your video narrative patterns over the last 30 days</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {detectedStyles.map((style) => (
            <div key={style.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{style.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {style.effectiveness}% effective
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">{style.percentage}%</span>
              </div>
              <Progress value={style.percentage} className="h-2" />
              <p className="text-sm text-muted-foreground">{style.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Performance by Style */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Best Performing Style</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Educational</h3>
                <p className="text-muted-foreground">92% effectiveness rate</p>
              </div>
              <p className="text-sm">
                Your educational content consistently performs 27% better than your average content.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Improvement Opportunity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-600">Listicle</h3>
                <p className="text-muted-foreground">76% effectiveness rate</p>
              </div>
              <p className="text-sm">
                Consider improving your list-based content with better visual elements and clearer structure.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Optimization Tips */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Style-Specific Optimization Tips</CardTitle>
          <CardDescription>Tailored advice for your most-used narrative styles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {optimizationTips.map((tip) => (
            <div key={tip.style} className="space-y-3">
              <h3 className="font-semibold text-lg">{tip.style} Content</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {tip.tips.map((t, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Industry Benchmarks */}
      <Card className="bg-gradient-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Industry Benchmarks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">Educational</div>
              <div className="text-sm text-muted-foreground">Average: 78%</div>
              <div className="text-xs text-green-600">You: +14% above average</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Storytelling</div>
              <div className="text-sm text-muted-foreground">Average: 85%</div>
              <div className="text-xs text-green-600">You: +3% above average</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Problem-Solution</div>
              <div className="text-sm text-muted-foreground">Average: 82%</div>
              <div className="text-xs text-green-600">You: +8% above average</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}