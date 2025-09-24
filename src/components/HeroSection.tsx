import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Bot, 
  Zap 
} from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        {/* Dynamic Background with Gradient */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30 will-change-transform transition-transform duration-1000"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 animate-float opacity-40" style={{ animationDelay: '0s' }}>
            <Code2 className="w-8 h-8 text-primary" />
          </div>
          <div className="absolute bottom-40 left-32 animate-float opacity-40" style={{ animationDelay: '1.5s' }}>
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <div className="absolute top-32 right-24 animate-float opacity-40" style={{ animationDelay: '0.8s' }}>
            <Zap className="w-7 h-7 text-primary" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-20 w-full">
          <div className="space-y-8 max-w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 backdrop-blur-sm animate-scale-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                AI-Powered Digital Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in max-w-full break-words">
              We Build{" "}
              <span className="text-gradient animate-pulse">
                Smart Websites
              </span>{" "}
              & AI-Powered Solutions
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in px-4">
              From websites to intelligent automation — we deliver end-to-end digital solutions that{" "}
              <span className="text-primary font-semibold">grow businesses</span> and{" "}
              <span className="text-primary font-semibold">scale operations</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-6 md:pt-8 animate-fade-in">
              <Button 
                variant="hero" 
                size="xl" 
                className="group hover:scale-105 transition-smooth w-full sm:w-auto"
                onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="ghost-glow" 
                size="xl"
                className="group hover:scale-105 transition-smooth w-full sm:w-auto"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 md:pt-12 animate-fade-in">
              <p className="text-sm text-muted-foreground mb-6">
                Trusted by 100+ companies worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 opacity-60 px-4">
                {["SaaS Platforms", "E-commerce", "Enterprise", "Startups"].map((badge, badgeIdx) => (
                  <div 
                    key={badgeIdx}
                    className="px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg bg-muted/30 border border-border/50 text-xs md:text-sm font-medium hover:opacity-100 hover:scale-105 transition-smooth whitespace-nowrap"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;