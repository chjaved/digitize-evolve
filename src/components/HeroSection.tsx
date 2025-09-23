import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Bot, 
  Zap, 
  Globe, 
  Shield,
  Rocket,
  Palette,
  Database,
  Brain,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    badge: { icon: Sparkles, text: "AI-Powered Digital Solutions" },
    title: {
      start: "We Build",
      highlight: "Smart Websites",
      end: "& AI-Powered Solutions"
    },
    subtitle: "From websites to intelligent automation — we deliver end-to-end digital solutions that grow businesses and scale operations.",
    highlights: ["grow businesses", "scale operations"],
    floatingElements: [
      { icon: Code2, position: "top-20 left-20", size: "w-8 h-8", delay: "0s" },
      { icon: Bot, position: "bottom-40 left-32", size: "w-6 h-6", delay: "1.5s" },
      { icon: Zap, position: "top-32 right-24", size: "w-7 h-7", delay: "0.8s" }
    ],
    trustBadges: ["SaaS Platforms", "E-commerce", "Enterprise", "Startups"],
    gradient: "from-primary/20 via-primary/10 to-secondary/20"
  },
  {
    id: 2,
    badge: { icon: Globe, text: "Modern Web Development" },
    title: {
      start: "Craft",
      highlight: "Beautiful Experiences",
      end: "That Convert & Engage"
    },
    subtitle: "We design and develop stunning, high-performance websites that captivate users and drive meaningful business results.",
    highlights: ["captivate users", "drive results"],
    floatingElements: [
      { icon: Palette, position: "top-24 left-16", size: "w-8 h-8", delay: "0s" },
      { icon: TrendingUp, position: "bottom-32 right-20", size: "w-6 h-6", delay: "1.2s" },
      { icon: Shield, position: "top-40 right-32", size: "w-7 h-7", delay: "0.6s" }
    ],
    trustBadges: ["Mobile-First", "Lightning Fast", "SEO Optimized", "Secure"],
    gradient: "from-secondary/20 via-accent/10 to-primary/20"
  },
  {
    id: 3,
    badge: { icon: Brain, text: "AI & Automation Solutions" },
    title: {
      start: "Automate",
      highlight: "Your Success",
      end: "With Intelligent Systems"
    },
    subtitle: "Transform your business operations with custom AI solutions, chatbots, and automated workflows that work 24/7.",
    highlights: ["Transform operations", "work 24/7"],
    floatingElements: [
      { icon: Database, position: "top-16 left-24", size: "w-8 h-8", delay: "0s" },
      { icon: Rocket, position: "bottom-36 left-16", size: "w-6 h-6", delay: "1.8s" },
      { icon: Brain, position: "top-28 right-16", size: "w-7 h-7", delay: "1s" }
    ],
    trustBadges: ["Custom AI", "Smart Bots", "Workflow Automation", "24/7 Support"],
    gradient: "from-accent/20 via-secondary/10 to-primary/20"
  }
];

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Dynamic Background with Gradient */}
                <div className="absolute inset-0 z-0">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30 will-change-transform scale-105 transition-transform duration-1000"
                    style={{ 
                      backgroundImage: `url(${heroImage})`,
                      transform: current === index ? 'scale(1)' : 'scale(1.1)'
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} backdrop-blur-[1px]`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
                </div>

                {/* Animated Floating Elements */}
                {slide.floatingElements.map((element, idx) => (
                  <div 
                    key={idx} 
                    className={`absolute ${element.position} animate-float will-change-transform transition-opacity duration-1000 ${
                      current === index ? 'opacity-40' : 'opacity-0'
                    }`}
                    style={{ animationDelay: element.delay }}
                  >
                    <element.icon className={`${element.size} text-primary`} />
                  </div>
                ))}

                {/* Main Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
                  <div className={`space-y-8 transition-all duration-1000 ${
                    current === index 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}>
                    {/* Badge */}
                    <div 
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 backdrop-blur-sm transition-all duration-700 ${
                        current === index ? 'animate-scale-in' : ''
                      }`}
                      style={{ 
                        animationDelay: current === index ? '0.2s' : '0s',
                        transitionDelay: current === index ? '0.2s' : '0s'
                      }}
                    >
                      <slide.badge.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {slide.badge.text}
                      </span>
                    </div>

                    {/* Main Headline with Staggered Animation */}
                    <h1 
                      className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight transition-all duration-700 ${
                        current === index ? 'animate-fade-in' : ''
                      }`}
                      style={{ 
                        animationDelay: current === index ? '0.4s' : '0s',
                        transitionDelay: current === index ? '0.4s' : '0s'
                      }}
                    >
                      {slide.title.start}{" "}
                      <span className="text-gradient animate-pulse">
                        {slide.title.highlight}
                      </span>{" "}
                      {slide.title.end}
                    </h1>

                    {/* Subheadline */}
                    <p 
                      className={`text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${
                        current === index ? 'animate-fade-in' : ''
                      }`}
                      style={{ 
                        animationDelay: current === index ? '0.6s' : '0s',
                        transitionDelay: current === index ? '0.6s' : '0s'
                      }}
                    >
                      {slide.subtitle.split(new RegExp(`(${slide.highlights.join('|')})`)).map((part, idx) => (
                        slide.highlights.includes(part) ? (
                          <span key={idx} className="text-primary font-semibold">{part}</span>
                        ) : (
                          <span key={idx}>{part}</span>
                        )
                      ))}
                    </p>

                    {/* CTA Buttons */}
                    <div 
                      className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-6 md:pt-8 transition-all duration-700 ${
                        current === index ? 'animate-fade-in' : ''
                      }`}
                      style={{ 
                        animationDelay: current === index ? '0.8s' : '0s',
                        transitionDelay: current === index ? '0.8s' : '0s'
                      }}
                    >
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
                    <div 
                      className={`pt-8 md:pt-12 transition-all duration-700 ${
                        current === index ? 'animate-fade-in' : ''
                      }`}
                      style={{ 
                        animationDelay: current === index ? '1s' : '0s',
                        transitionDelay: current === index ? '1s' : '0s'
                      }}
                    >
                      <p className="text-sm text-muted-foreground mb-6">
                        Trusted by 100+ companies worldwide
                      </p>
                      <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-60">
                        {slide.trustBadges.map((badge, badgeIdx) => (
                          <div 
                            key={badgeIdx}
                            className="px-4 md:px-6 py-2 md:py-3 rounded-lg bg-muted/30 border border-border/50 text-xs md:text-sm font-medium hover:opacity-100 hover:scale-105 transition-smooth"
                            style={{ animationDelay: `${badgeIdx * 0.1}s` }}
                          >
                            {badge}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation */}
        <CarouselPrevious className="left-4 md:left-6 bg-background/80 border-border/50 backdrop-blur-sm hover:bg-background/90 transition-all duration-300" />
        <CarouselNext className="right-4 md:right-6 bg-background/80 border-border/50 backdrop-blur-sm hover:bg-background/90 transition-all duration-300" />
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index 
                  ? 'bg-primary scale-125 shadow-glow' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;