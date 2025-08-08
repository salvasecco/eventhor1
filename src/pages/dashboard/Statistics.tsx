import { BarChart3, TrendingUp, Users, Eye, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export default function Statistics() {
  const monthlyData = [
    { month: 'Jan', analyses: 23, avgScore: 78, totalViews: 145000 },
    { month: 'Feb', analyses: 31, avgScore: 82, totalViews: 189000 },
    { month: 'Mar', analyses: 28, avgScore: 85, totalViews: 234000 },
    { month: 'Apr', analyses: 35, avgScore: 88, totalViews: 278000 },
    { month: 'May', analyses: 42, avgScore: 91, totalViews: 312000 },
    { month: 'Jun', analyses: 38, avgScore: 93, totalViews: 356000 }
  ];

  const platformData = [
    { name: 'TikTok', value: 45, color: '#ff0050' },
    { name: 'Instagram', value: 30, color: '#e1306c' },
    { name: 'YouTube', value: 20, color: '#ff0000' },
    { name: 'Other', value: 5, color: '#8884d8' }
  ];

  const contentTypeData = [
    { type: 'Educational', count: 58, avgScore: 92 },
    { type: 'Entertainment', count: 34, avgScore: 86 },
    { type: 'Product Demo', count: 28, avgScore: 89 },
    { type: 'Behind Scenes', count: 22, avgScore: 84 },
    { type: 'Testimonial', count: 15, avgScore: 91 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-sora">
            Advanced <span className="bg-gradient-primary bg-clip-text text-transparent">Statistics</span>
          </h1>
          <p className="text-muted-foreground">Comprehensive analytics and performance insights</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="6months">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Analyses', value: '247', change: '+23%', icon: BarChart3, color: 'text-blue-600' },
          { title: 'Avg. Score', value: '89.2', change: '+12%', icon: TrendingUp, color: 'text-green-600' },
          { title: 'Total Views', value: '2.1M', change: '+34%', icon: Eye, color: 'text-purple-600' },
          { title: 'Active Days', value: '156', change: '+8%', icon: Calendar, color: 'text-orange-600' }
        ].map((metric) => (
          <Card key={metric.title} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
                <span className="text-sm text-green-600 font-medium">{metric.change}</span>
              </div>
              <div className="text-2xl font-bold font-sora">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.title}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly Performance */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
            <CardDescription>Analysis count and average scores over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="analyses" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Platform Distribution */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Platform Distribution</CardTitle>
            <CardDescription>Content analysis by platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Score Evolution */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Score Evolution</CardTitle>
            <CardDescription>Your improvement over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis domain={[70, 100]} tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="avgScore" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Content Type Performance */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Content Type Performance</CardTitle>
            <CardDescription>Analysis by content category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentTypeData.map((type) => (
                <div key={type.type} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div>
                    <div className="font-medium">{type.type}</div>
                    <div className="text-sm text-muted-foreground">{type.count} videos</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{type.avgScore}</div>
                    <div className="text-xs text-muted-foreground">avg score</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Industry Benchmarks */}
      <Card className="bg-gradient-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Industry Comparison</CardTitle>
          <CardDescription>How you compare to other creators in your niche</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Top 15%</div>
              <div className="text-sm text-muted-foreground">Overall Performance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">+47%</div>
              <div className="text-sm text-muted-foreground">Above Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Elite</div>
              <div className="text-sm text-muted-foreground">Creator Tier</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}