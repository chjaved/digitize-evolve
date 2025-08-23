import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Bot, 
  Cog, 
  ArrowRight, 
  Code2, 
  ShoppingCart, 
  MessageSquare, 
  Workflow, 
  TrendingUp,
  Database,
  Zap,
  Settings
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Beautiful, responsive websites and web applications that convert visitors into customers.",
    icon: Globe,
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      { icon: Code2, text: "Custom Websites" },
      { icon: ShoppingCart, text: "E-commerce Platforms" },
      { icon: Database, text: "Web Applications" }
    ]
  },
  {
    title: "AI Services",
    description: "Intelligent automation solutions that streamline operations and enhance customer experience.",
    icon: Bot,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    features: [
      { icon: MessageSquare, text: "AI Chatbots" },
      { icon: Workflow, text: "Process Automation" },
      { icon: TrendingUp, text: "Predictive Analytics" }
    ]
  },
  {
    title: "Custom Solutions",
    description: "Tailored digital solutions designed specifically for your unique business requirements.",
    icon: Cog,
    color: "text-accent",
    bgColor: "bg-accent/10",
    features: [
      { icon: Zap, text: "SaaS Platforms" },
      { icon: Settings, text: "API Integration" },
      { icon: Database, text: "Custom Development" }
    ]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer comprehensive digital solutions that combine cutting-edge technology 
          with proven business strategies to accelerate your growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card 
            key={service.title} 
            className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105"
          >
            <CardHeader className="pb-4">
              <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-base leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <feature.icon className={`w-4 h-4 ${service.color}`} />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="ghost-glow" 
                className="w-full group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-smooth -z-10" />
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-muted/30 to-muted/50 rounded-2xl p-12 border border-border/50">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how our expertise can help you achieve your goals. 
          Book a free consultation to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            Book Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;