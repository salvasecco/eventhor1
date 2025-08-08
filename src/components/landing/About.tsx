import { Target, Cpu, Shield, Zap } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Clear Mission',
      description: 'Democratizing video content analysis through accessible AI technology'
    },
    {
      icon: Cpu,
      title: 'Advanced Technology',
      description: 'Powered by GPT-4, AWS Rekognition, and Deepgram for accurate insights'
    },
    {
      icon: Shield,
      title: 'Data Integrity',
      description: 'Your content is secure with enterprise-grade encryption and privacy protection'
    },
    {
      icon: Zap,
      title: 'Real Results',
      description: 'Proven to increase video engagement by 40% on average across all platforms'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sora mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Eventhor</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We believe every creator deserves access to professional-grade video analysis. 
            Our mission is to democratize content optimization through cutting-edge AI technology, 
            making data-driven video creation accessible to everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Founded in 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>AI-First Approach</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Creator-Focused</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value) => (
            <div key={value.title} className="group text-center">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-glass hover:border-primary/30 transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold font-sora mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold font-sora mb-8">Powered by Leading AI Technology</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['GPT-4', 'AWS Rekognition', 'Deepgram', 'OpenAI', 'TensorFlow'].map((tech) => (
              <div key={tech} className="text-lg font-medium bg-card/30 px-4 py-2 rounded-lg border border-border/30">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}