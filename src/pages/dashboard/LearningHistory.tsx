import { Brain, TrendingUp, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function LearningHistory() {
  const learningInsights = [
    {
      insight: "Your educational videos of 35-45s retain +27% more viewers",
      confidence: 94,
      type: "Duration Optimization",
      impact: "High"
    },
    {
      insight: "Direct question hooks work +40% better for you than statement hooks",
      confidence: 89,
      type: "Hook Strategy",
      impact: "High"
    },
    {
      insight: "Tuesday 6pm posts get +15% more reach in your audience",
      confidence: 76,
      type: "Timing",
      impact: "Medium"
    },
    {
      insight: "Videos with 3-4 cuts perform +22% better than single-take content",
      confidence: 92,
      type: "Editing Style",
      impact: "High"
    }
  ];

  const progressData = [
    { month: 'Jan', score: 65, improvement: 0 },
    { month: 'Feb', score: 72, improvement: 7 },
    { month: 'Mar', score: 78, improvement: 6 },
    { month: 'Apr', score: 85, improvement: 7 },
    { month: 'May', score: 89, improvement: 4 },
    { month: 'Jun', score: 92, improvement: 3 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-sora">
          Learning <span className="bg-gradient-primary bg-clip-text text-transparent">History</span>
        </h1>
        <p className="text-muted-foreground">Personalized insights from your video performance data</p>
      </div>

      {/* Learning Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-primary text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Brain className="h-8 w-8" />
              <Badge className="bg-white/20 text-white">Updated</Badge>
            </div>
            <div className="text-2xl font-bold">47</div>
            <div className="text-white/90">Insights Learned</div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <Badge variant="outline">+18%</Badge>
            </div>
            <div className="text-2xl font-bold">92%</div>
            <div className="text-muted-foreground">Current Performance</div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="h-8 w-8 text-primary" />
              <Badge variant="outline">Achieved</Badge>
            </div>
            <div className="text-2xl font-bold">Elite</div>
            <div className="text-muted-foreground">Creator Level</div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Evolution */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Performance Evolution</CardTitle>
          <CardDescription>Your improvement journey over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Personalized Insights */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Personalized Insights</CardTitle>
          <CardDescription>AI-discovered patterns unique to your content style</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {learningInsights.map((insight, index) => (
            <div key={index} className="p-4 border border-border/50 rounded-xl space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={insight.impact === 'High' ? 'default' : 'secondary'}>
                      {insight.impact} Impact
                    </Badge>
                    <Badge variant="outline">{insight.type}</Badge>
                    <Badge variant="outline">{insight.confidence}% confidence</Badge>
                  </div>
                  <p className="font-medium">{insight.insight}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recommendations Based on Learning */}
      <Card className="bg-gradient-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Next Recommended Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Try creating more 35-45 second educational content</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Experiment with question-based hooks in your next 3 videos</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Schedule your next high-priority video for Tuesday at 6pm</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Use 3-4 strategic cuts in your editing style</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}