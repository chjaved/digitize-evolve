import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Lazy load below-the-fold components
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));

const Index = () => {
  return (
    <main className="relative">
      <HeroSection />
      
      {/* Lazy load below-the-fold content */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <ServicesSection />
        <AboutSection />
        <PricingSection />
        <TestimonialsSection />
        
        {/* CTA Section */}
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
      </Suspense>
      
      <WhatsAppChat />
    </main>
  );
};

export default Index;
