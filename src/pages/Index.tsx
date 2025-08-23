import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      
      {/* Services Preview */}
      <div className="animate-slide-up">
        <ServicesSection />
      </div>
      
      {/* About Preview */}
      <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <AboutSection />
      </div>
      
      {/* CTA Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
      
      <Footer />
    </main>
  );
};

export default Index;
