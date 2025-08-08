import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Features } from '@/components/landing/Features';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { About } from '@/components/landing/About';
import { Footer } from '@/components/landing/Footer';
import { DynamicBackground } from '@/components/shared/DynamicBackground';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background relative">
      <DynamicBackground />
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}