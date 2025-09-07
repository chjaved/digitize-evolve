import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "200",
      description: "Perfect for small businesses looking to establish their digital presence",
      features: [
        "Professional Website Design",
        "Mobile-Responsive Layout",
        "SEO Optimization",
        "Contact Forms Integration",
        "1 Month Support",
        "Basic Analytics Setup"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      icon: Crown,
      price: "350",
      description: "Ideal for growing companies that need advanced functionality",
      features: [
        "Everything in Starter",
        "Custom Web Application",
        "Database Integration",
        "User Authentication System",
        "Payment Gateway Integration",
        "Advanced Analytics",
        "3 Months Support",
        "Performance Optimization"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "499",
      description: "Comprehensive solution for established businesses seeking cutting-edge technology",
      features: [
        "Everything in Professional",
        "AI-Powered Automation",
        "Custom API Development",
        "Third-party Integrations",
        "Advanced Security Features",
        "Cloud Infrastructure Setup",
        "6 Months Support",
        "Dedicated Project Manager",
        "Training & Documentation"
      ],
      popular: false,
      cta: "Scale Up"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include our commitment to excellence 
          and cutting-edge technology.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {plans.map((plan, index) => (
          <Card 
            key={plan.name}
            className={`relative group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 ${
              plan.popular 
                ? 'border-primary/50 bg-gradient-to-b from-primary/5 to-transparent scale-105' 
                : 'border-border/50 hover:border-primary/30'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <CardHeader className="text-center pb-8">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                plan.popular ? 'bg-gradient-primary' : 'bg-muted'
              }`}>
                <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">
                  ${plan.price}
                  <span className="text-lg font-normal text-muted-foreground">/project</span>
                </span>
              </div>
              <p className="text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg" 
                className="w-full group"
                onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <p className="text-muted-foreground mb-6">
          Not sure which plan is right for you? Let's discuss your project needs.
        </p>
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
        >
          Schedule Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default PricingSection;