import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Content Creator',
      company: '@sarahcreates',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
              content: 'Eventhor completely transformed my content strategy. The A/B analysis helped me increase engagement by 65% in just two months.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Digital Marketing Manager',
      company: 'BrandFlow Agency',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      content: 'The predictive analysis is incredible. We now know which videos will perform well before we even publish them. Game-changing for our clients.',
      rating: 5
    },
    {
      name: 'Jessica Kim',
      role: 'Social Media Strategist',
      company: 'TrendForward',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      content: 'The narrative style detection opened my eyes to patterns I never noticed. My storytelling has become so much more intentional and effective.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'YouTube Creator',
      company: '@techwithdavid',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      content: 'The variation generator saves me hours of brainstorming. The AI suggestions are spot-on and have helped me create my most viral content.',
      rating: 5
    }
  ];

  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-presto mb-4 text-foreground drop-shadow-lg">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent filter brightness-125">Creators</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto drop-shadow-md">
            See how content creators and marketers are transforming their video performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="group">
              <div className="h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-glass hover:border-primary/30 transition-all duration-300 group-hover:scale-105">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground/90 mb-6 leading-relaxed drop-shadow-sm">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-foreground/70">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}