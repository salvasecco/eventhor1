import { useState } from 'react';
import { Upload, Play, Target, Download, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function IndividualAnalysis() {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleVideoUpload = (file: File) => {
    setUploadedVideo(file);
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const analysisResults = {
    overallScore: 84,
    narrativePace: 'Medium',
    messageClarity: 89,
    emotionalStrength: 'High',
    visualElements: 92,
    ctaPresence: 'Strong',
    hookStrength: 'Medium',
    recommendations: [
      { type: 'warning', text: 'Consider a stronger opening hook to capture attention in the first 3 seconds' },
      { type: 'success', text: 'Excellent visual transitions and pacing throughout the video' },
      { type: 'info', text: 'Message clarity is very strong - viewers will understand your point' },
      { type: 'warning', text: 'Add more emotional triggers to increase viewer engagement' }
    ]
  };

  if (isAnalyzing) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold font-sora">Analyzing Your Video</h1>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <div className="animate-pulse-glow w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Deep AI Analysis in Progress</h3>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex justify-between text-sm">
                <span>Visual Analysis...</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>Audio Processing...</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>Narrative Analysis...</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (analysisComplete) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-sora">Analysis Results</h1>
            <p className="text-muted-foreground">Complete AI analysis of your video</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Overall Score */}
        <Card className="bg-gradient-primary/10 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-primary">Overall Score: {analysisResults.overallScore}/100</h3>
                <p className="text-muted-foreground">Your video shows strong potential with room for optimization</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-primary">{analysisResults.overallScore}</div>
                <div className="text-sm text-muted-foreground">Great Score!</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'Message Clarity', value: analysisResults.messageClarity, unit: '/100' },
            { label: 'Visual Elements', value: analysisResults.visualElements, unit: '/100' },
            { label: 'Narrative Pace', value: analysisResults.narrativePace, unit: '' },
            { label: 'Emotional Strength', value: analysisResults.emotionalStrength, unit: '' },
            { label: 'Hook Strength', value: analysisResults.hookStrength, unit: '' },
            { label: 'CTA Presence', value: analysisResults.ctaPresence, unit: '' }
          ].map((metric) => (
            <Card key={metric.label} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                <div className="text-2xl font-bold">{metric.value}{metric.unit}</div>
                {typeof metric.value === 'number' && (
                  <Progress value={metric.value} className="h-2 mt-2" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendations */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
            <CardDescription>Actionable insights to improve your video performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {analysisResults.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                {rec.type === 'success' && <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />}
                {rec.type === 'warning' && <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />}
                {rec.type === 'info' && <Target className="h-5 w-5 text-blue-600 mt-0.5" />}
                <p className="text-sm flex-1">{rec.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold font-sora">
          Individual Video <span className="bg-gradient-primary bg-clip-text text-transparent">Analysis</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get comprehensive AI insights for your video before publishing
        </p>
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Upload Your Video</CardTitle>
          <CardDescription>Get detailed analysis including narrative, visuals, and engagement potential</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="upload-zone">
            <input
              type="file"
              accept="video/*"
              onChange={(e) => e.target.files?.[0] && handleVideoUpload(e.target.files[0])}
              className="hidden"
              id="video"
            />
            <label htmlFor="video" className="cursor-pointer block">
              <Upload className="h-12 w-12 mx-auto mb-4 text-primary" />
              <p className="text-lg font-medium mb-2">
                {uploadedVideo ? uploadedVideo.name : 'Drop your video here or click to upload'}
              </p>
              <p className="text-muted-foreground">
                MP4, MOV, AVI up to 100MB • Perfect for TikToks, Reels, and Shorts
              </p>
            </label>
          </div>
        </CardContent>
      </Card>

      {uploadedVideo && (
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={handleAnalyze} className="gap-2">
            <Target className="h-5 w-5" />
            Analyze Video
          </Button>
        </div>
      )}
    </div>
  );
}