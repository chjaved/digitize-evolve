import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Index = () => {
  return (
    <main className="relative">
      <HeroSection />
      
      {/* Services Preview */}
      <AnimatedSection animation="fade-up" delay={100}>
        <ServicesSection />
      </AnimatedSection>
      
      {/* About Preview */}
      <AnimatedSection animation="slide-left" delay={200}>
        <AboutSection />
      </AnimatedSection>
      
      {/* Pricing Section */}
      <AnimatedSection animation="scale-in" delay={100}>
        <PricingSection />
      </AnimatedSection>
      
      {/* Testimonials Section */}
      <AnimatedSection animation="slide-right" delay={200}>
        <TestimonialsSection />
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection animation="fade-up" delay={300}>
        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join 100+ companies that have already transformed their operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </section>
      </AnimatedSection>
      
      <WhatsAppChat />
    </main>
  );
};

export default Index;
