import { Play, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-ai-brain.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 neural-bg" />
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Benefits Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Real AI', 'Results in Minutes', 'No Installation'].map((benefit) => (
              <div key={benefit} className="flex items-center space-x-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>



          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sora leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Discover which version
              </span>
              <br />
              <span className="text-foreground">
                of your video has more
              </span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse animate-text-glow">
                impact
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete AI analysis. Script, visuals, emotion, and retention.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/auth">
              <Button variant="hero" size="xl" className="group">
                Try Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="glass" size="xl" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            {[
              { value: '10,000+', label: 'Analyses Completed' },
              { value: '2,500+', label: 'Active Creators' },
              { value: '94%', label: 'AI Accuracy' },
              { value: '40%', label: 'Avg. Engagement ↑' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-sora bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pulse/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-wave/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}