import { Scale, Sparkles, Shuffle, BookOpen, Brain, TrendingUp } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Scale,
      title: 'A/B Comparison',
      description: 'Compare two video versions side-by-side with detailed AI analysis to determine which performs better.',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: Sparkles,
      title: 'Predictive Analysis',
      description: 'Get insights before publishing. Our AI predicts engagement potential and identifies optimization opportunities.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shuffle,
      title: 'Variation Generator',
      description: 'Automatically generate video improvements and alternative approaches based on successful patterns.',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: BookOpen,
      title: 'Narrative Style',
      description: 'Detect and optimize narrative patterns. Understand what storytelling approach works best for your content.',
      gradient: 'from-blue-500 to-violet-600'
    },
    {
      icon: Brain,
      title: 'Smart History',
      description: 'Personalized learning from your video performance. AI adapts recommendations based on your unique style.',
      gradient: 'from-violet-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive performance metrics with industry benchmarks and optimization suggestions.',
      gradient: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-presto mb-4 text-foreground drop-shadow-lg">
            Powerful <span className="bg-gradient-primary bg-clip-text text-transparent filter brightness-125">Features</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto drop-shadow-md">
            Everything you need to create videos that captivate and convert
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="group relative">
              <div className="h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-glass hover:border-primary/30 transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold font-sora mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}