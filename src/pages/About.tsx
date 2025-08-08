import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DynamicBackground } from '@/components/shared/DynamicBackground';

export default function About() {
  return (
    <div className="min-h-screen bg-background relative">
      <DynamicBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20" />
        <div className="relative z-10 container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sora leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse animate-text-glow">
                About
              </span>
              <br />
              <span className="text-foreground animate-pulse animate-text-glow">
                Eventhor
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering creators with AI-driven video analysis to maximize engagement and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-sora">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Eventhor, we believe that every creator deserves the tools to understand what makes their content truly engaging. 
                  Our mission is to democratize advanced video analytics, making AI-powered insights accessible to creators of all sizes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not just analyzing videos – we're helping creators tell better stories, connect with their audiences, 
                  and build sustainable content strategies that drive real results.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Target className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-sora">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A passionate team of AI researchers, content creators, and technology enthusiasts 
                dedicated to revolutionizing video analytics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "CEO & Founder",
                  description: "Former Google AI researcher with 10+ years in machine learning and content strategy.",
                  icon: Users
                },
                {
                  name: "Marcus Rodriguez",
                  role: "CTO",
                  description: "Expert in computer vision and real-time analytics with experience at Netflix and YouTube.",
                  icon: Zap
                },
                {
                  name: "Dr. Emily Watson",
                  role: "Head of AI Research",
                  description: "PhD in Computational Linguistics, specializing in audience engagement prediction.",
                  icon: Award
                }
                             ].map((member) => (
                 <div key={member.name} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:border-primary/20 transition-all hover:shadow-glow group">
                                     <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-pulse">
                     <member.icon className="h-8 w-8 text-white group-hover:animate-text-glow" />
                   </div>
                  <h3 className="text-xl font-bold font-sora mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Eventhor.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "We constantly push the boundaries of what's possible with AI and video analytics, always staying ahead of the curve.",
                  icon: Zap
                },
                {
                  title: "Creator Empowerment",
                  description: "Every feature we build is designed to give creators more control and insight into their content performance.",
                  icon: Target
                },
                {
                  title: "Data-Driven Decisions",
                  description: "We believe in the power of data to transform creative decisions and drive better outcomes.",
                  icon: Award
                },
                {
                  title: "Community Focus",
                  description: "Building tools that serve the creator community and help them grow together.",
                  icon: Users
                }
                             ].map((value) => (
                 <div key={value.title} className="flex items-start space-x-4 hover:scale-105 transition-transform">
                   <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 hover:animate-pulse">
                     <value.icon className="h-6 w-6 text-white hover:animate-text-glow" />
                   </div>
                  <div>
                    <h3 className="text-xl font-bold font-sora mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-sora">
              Ready to Transform Your Content?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators who are already using Eventhor to optimize their videos and grow their audiences.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Link to="/auth">
                 <Button variant="hero" size="xl" className="group hover:shadow-glow animate-pulse">
                   Start Free Trial
                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform group-hover:animate-text-glow" />
                 </Button>
               </Link>
               <Link to="/">
                 <Button variant="glass" size="xl" className="hover:shadow-glow">
                   Back to Home
                 </Button>
               </Link>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
