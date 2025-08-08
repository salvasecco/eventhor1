import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started',
      icon: Zap,
      features: [
        '5 analyses per month',
        'Basic AI insights',
        'Standard video comparison',
        'Email support',
        'Basic analytics dashboard'
      ],
      cta: 'Start Free',
      variant: 'outline' as const,
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'For serious content creators',
      icon: Star,
      features: [
        'Unlimited analyses',
        'Advanced AI recommendations',
        'A/B testing & comparison',
        'PDF report exports',
        'Priority email support',
        'Advanced analytics',
        'Narrative style detection'
      ],
      cta: 'Start Pro Trial',
      variant: 'hero' as const,
      popular: true
    },
    {
      name: 'Full',
      price: '$79',
      period: 'per month',
      description: 'For agencies and teams',
      icon: Crown,
      features: [
        'Everything in Pro',
        'API access',
        'Team collaboration',
        'Custom integrations',
        'Priority phone support',
        'Dedicated account manager',
        'Custom AI training',
        'White-label options'
      ],
      cta: 'Contact Sales',
      variant: 'premium' as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-presto mb-4 text-foreground drop-shadow-lg">
            Simple <span className="bg-gradient-primary bg-clip-text text-transparent filter brightness-125">Pricing</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto drop-shadow-md">
            Choose the perfect plan for your video analysis needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Card */}
              <div className={`relative h-full bg-card backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105' 
                  : 'border-border/50 hover:border-primary/30 hover:shadow-glass group-hover:scale-105'
              }`}>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  plan.popular 
                    ? 'bg-gradient-primary shadow-glow' 
                    : 'bg-gradient-to-br from-violet-500 to-purple-600'
                }`}>
                  <plan.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-presto mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold font-presto">{plan.price}</span>
                    {plan.price !== 'Free' && (
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Link to="/auth" className="block w-full">
                  <Button variant={plan.variant} className="w-full">
                    {plan.cta}
                  </Button>
                </Link>
                
                {/* Background Glow */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-5" />
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial • Cancel anytime • No setup fees
          </p>
        </div>
      </div>
    </section>
  );
}