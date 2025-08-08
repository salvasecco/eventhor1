import { TrendingUp, Video, Clock, Eye, ArrowUpRight, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { mockAnalytics, mockVideos, mockChartData } from '@/data/mockData';
import { Link } from 'react-router-dom';

export function DashboardOverview() {
  const stats = [
    {
      title: 'Videos Analyzed',
      value: mockAnalytics.totalAnalyses,
      change: '+12%',
      changeType: 'positive' as const,
      icon: Video,
    },
    {
      title: 'Avg. Improvement',
      value: `${mockAnalytics.averageImprovement}%`,
      change: '+8%',
      changeType: 'positive' as const,
      icon: TrendingUp,
    },
    {
      title: 'Time Saved',
      value: `${mockAnalytics.timeSaved}h`,
      change: '+23%',
      changeType: 'positive' as const,
      icon: Clock,
    },
    {
      title: 'Total Views',
      value: mockAnalytics.totalViews,
      change: '+15%',
      changeType: 'positive' as const,
      icon: Eye,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold font-sora mb-2">Ready to optimize your next video?</h2>
          <p className="text-white/90 mb-4">Upload a new video or compare two versions to get AI-powered insights.</p>
          <div className="flex gap-3">
            <Link to="/dashboard/analysis">
              <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-white/30">
                <Play className="mr-2 h-4 w-4" />
                Analyze Video
              </Button>
            </Link>
            <Link to="/dashboard/ab-analysis">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                A/B Compare
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glass transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold font-sora">{stat.value}</p>
                  <p className={`text-xs flex items-center mt-1 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    {stat.change} from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
            <CardDescription>Your video analysis activity over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="analyses" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Improvement Chart */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Improvement Scores</CardTitle>
            <CardDescription>Average engagement improvement by day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="improvement" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Videos */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Analyses</CardTitle>
            <CardDescription>Your latest video analysis results</CardDescription>
          </div>
          <Link to="/dashboard/videos">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockVideos.slice(0, 3).map((video) => (
              <div key={video.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-16 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {video.platform} • {video.duration}s • {video.narrativeStyle}
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-semibold ${
                    video.analysisScore >= 90 ? 'text-green-600' : 
                    video.analysisScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {video.analysisScore}/100
                  </div>
                  <div className="text-xs text-muted-foreground">{video.engagementPrediction}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}