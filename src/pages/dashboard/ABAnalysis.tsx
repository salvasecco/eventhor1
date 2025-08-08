import { useState } from 'react';
import { Upload, Play, BarChart3, ArrowRight, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { mockComparisonData } from '@/data/mockData';

export default function ABAnalysis() {
  const [uploadedVideos, setUploadedVideos] = useState<{videoA?: File, videoB?: File}>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleVideoUpload = (type: 'videoA' | 'videoB', file: File) => {
    setUploadedVideos(prev => ({ ...prev, [type]: file }));
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const comparisonData = [
    { metric: 'Engagement', videoA: mockComparisonData.videoA.scores.engagement, videoB: mockComparisonData.videoB.scores.engagement },
    { metric: 'Retention', videoA: mockComparisonData.videoA.scores.retention, videoB: mockComparisonData.videoB.scores.retention },
    { metric: 'Clarity', videoA: mockComparisonData.videoA.scores.clarity, videoB: mockComparisonData.videoB.scores.clarity },
    { metric: 'Emotional', videoA: mockComparisonData.videoA.scores.emotional, videoB: mockComparisonData.videoB.scores.emotional },
    { metric: 'Hook', videoA: mockComparisonData.videoA.scores.hook, videoB: mockComparisonData.videoB.scores.hook },
    { metric: 'CTA', videoA: mockComparisonData.videoA.scores.cta, videoB: mockComparisonData.videoB.scores.cta }
  ];

  const radarData = [
    { subject: 'Engagement', A: mockComparisonData.videoA.scores.engagement, B: mockComparisonData.videoB.scores.engagement, fullMark: 100 },
    { subject: 'Retention', A: mockComparisonData.videoA.scores.retention, B: mockComparisonData.videoB.scores.retention, fullMark: 100 },
    { subject: 'Clarity', A: mockComparisonData.videoA.scores.clarity, B: mockComparisonData.videoB.scores.clarity, fullMark: 100 },
    { subject: 'Emotional', A: mockComparisonData.videoA.scores.emotional, B: mockComparisonData.videoB.scores.emotional, fullMark: 100 },
    { subject: 'Hook', A: mockComparisonData.videoA.scores.hook, B: mockComparisonData.videoB.scores.hook, fullMark: 100 },
    { subject: 'CTA', A: mockComparisonData.videoA.scores.cta, B: mockComparisonData.videoB.scores.cta, fullMark: 100 }
  ];

  if (isAnalyzing) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold font-sora">Analyzing Your Videos</h1>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <div className="animate-pulse-glow w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI Analysis in Progress</h3>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex justify-between text-sm">
                <span>Processing Video A...</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>Processing Video B...</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <p className="text-muted-foreground mt-6">This may take a few moments while our AI analyzes your content.</p>
          </div>
        </div>
      </div>
    );
  }

  if (analysisComplete) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-sora">A/B Comparison Results</h1>
            <p className="text-muted-foreground">Detailed analysis of your video versions</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Video Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                Video A (Original)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={mockComparisonData.videoA.thumbnail}
                alt="Video A"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Overall Score</span>
                  <span className="font-bold text-yellow-600">72/100</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 border-primary/50 shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                Video B (Winner!)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={mockComparisonData.videoB.thumbnail}
                alt="Video B"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Overall Score</span>
                  <span className="font-bold text-green-600">87/100</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Radar Chart */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Performance Comparison</CardTitle>
            <CardDescription>Detailed breakdown across all metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
                <Radar name="Video A" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} />
                <Radar name="Video B" dataKey="B" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Metrics */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Metric Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="metric" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="videoA" fill="#3b82f6" name="Video A" radius={[4, 4, 0, 0]} />
                <Bar dataKey="videoB" fill="hsl(var(--primary))" name="Video B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI Recommendation */}
        <Card className="bg-gradient-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">AI Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              <strong>Video B is the clear winner!</strong> It outperforms Video A across most metrics, with particularly strong improvements in hook effectiveness (+28 points) and retention (+24 points). 
              The stronger opening and better pacing contribute to a 21% higher overall engagement score. We recommend using Video B for your campaign.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold font-sora">
          A/B Video <span className="bg-gradient-primary bg-clip-text text-transparent">Comparison</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Upload two versions of your video to discover which one will perform better
        </p>
      </div>

      {/* Upload Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Video A Upload */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              Video A
            </CardTitle>
            <CardDescription>Upload your first video version</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="upload-zone">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => e.target.files?.[0] && handleVideoUpload('videoA', e.target.files[0])}
                className="hidden"
                id="videoA"
              />
              <label htmlFor="videoA" className="cursor-pointer block">
                <Upload className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="font-medium mb-1">
                  {uploadedVideos.videoA ? uploadedVideos.videoA.name : 'Drop video here or click to upload'}
                </p>
                <p className="text-sm text-muted-foreground">
                  MP4, MOV, AVI up to 100MB
                </p>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Video B Upload */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              Video B
            </CardTitle>
            <CardDescription>Upload your second video version</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="upload-zone">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => e.target.files?.[0] && handleVideoUpload('videoB', e.target.files[0])}
                className="hidden"
                id="videoB"
              />
              <label htmlFor="videoB" className="cursor-pointer block">
                <Upload className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="font-medium mb-1">
                  {uploadedVideos.videoB ? uploadedVideos.videoB.name : 'Drop video here or click to upload'}
                </p>
                <p className="text-sm text-muted-foreground">
                  MP4, MOV, AVI up to 100MB
                </p>
              </label>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Button */}
      {uploadedVideos.videoA && uploadedVideos.videoB && (
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleAnalyze}
            className="gap-2"
          >
            <BarChart3 className="h-5 w-5" />
            Start AI Analysis
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Features Preview */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {[
          {
            title: 'Comprehensive Scoring',
            description: 'Get detailed scores for engagement, retention, clarity, and more',
            icon: BarChart3
          },
          {
            title: 'Visual Comparison',
            description: 'Side-by-side analysis with easy-to-understand charts and graphs',
            icon: Play
          },
          {
            title: 'AI Recommendations',
            description: 'Clear guidance on which version to use and why',
            icon: ArrowRight
          }
        ].map((feature) => (
          <Card key={feature.title} className="bg-card/30 backdrop-blur-sm border-border/30 text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}