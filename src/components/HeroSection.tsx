import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Bot } from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40 will-change-transform"
          style={{ 
            backgroundImage: `url(${heroImage})`
          }}
        />
        {/* Simplified overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-background/85" />
      </div>

      {/* Reduced Floating Elements */}
      <div className="absolute top-20 left-20 animate-float will-change-transform">
        <Code2 className="w-8 h-8 text-primary opacity-40" />
      </div>
      <div className="absolute bottom-40 left-32 animate-float will-change-transform" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-6 h-6 text-accent opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 backdrop-blur-sm animate-scale-in will-change-transform" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Digital Solutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in will-change-transform" style={{ animationDelay: '0.3s' }}>
            We Build{" "}
            <span className="text-gradient">
              Smart Websites
            </span>{" "}
            & AI-Powered Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            From websites to intelligent automation — we deliver end-to-end digital solutions 
            that{" "}
            <span className="text-primary font-semibold">grow businesses</span> and{" "}
            <span className="text-secondary font-semibold">scale operations</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              className="group hover:scale-105 transition-smooth"
              onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="ghost-glow" 
              size="xl"
              className="group hover:scale-105 transition-smooth"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by 100+ companies worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="px-6 py-3 rounded-lg bg-muted/30 border border-border/50 text-sm font-medium hover:opacity-100 hover:scale-105 transition-smooth">
                SaaS Platforms
              </div>
              <div className="px-6 py-3 rounded-lg bg-muted/30 border border-border/50 text-sm font-medium hover:opacity-100 hover:scale-105 transition-smooth" style={{ animationDelay: '0.1s' }}>
                E-commerce
              </div>
              <div className="px-6 py-3 rounded-lg bg-muted/30 border border-border/50 text-sm font-medium hover:opacity-100 hover:scale-105 transition-smooth" style={{ animationDelay: '0.2s' }}>
                Enterprise
              </div>
              <div className="px-6 py-3 rounded-lg bg-muted/30 border border-border/50 text-sm font-medium hover:opacity-100 hover:scale-105 transition-smooth" style={{ animationDelay: '0.3s' }}>
                Startups
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;