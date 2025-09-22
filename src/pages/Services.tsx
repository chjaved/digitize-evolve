import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const additionalServices = [
  {
    category: "Web Development Packages",
    services: [
      { name: "Startup Website", price: "$150", features: ["5 pages", "Responsive design", "SEO optimization", "Contact forms"] },
      { name: "Business Website", price: "$250", features: ["10 pages", "CMS integration", "Analytics setup", "Performance optimization"] },
      { name: "E-commerce Platform", price: "$400", features: ["Product catalog", "Payment integration", "Inventory management", "Order tracking"] }
    ]
  },
  {
    category: "AI Solutions Packages", 
    services: [
      { name: "AI Chatbot", price: "$200", features: ["Custom training", "Multi-platform", "Analytics dashboard", "24/7 support"] },
      { name: "Process Automation", price: "$350", features: ["Workflow analysis", "Custom automation", "Integration setup", "Training included"] },
      { name: "Predictive Analytics", price: "$500", features: ["Data analysis", "ML model training", "Dashboard creation", "Ongoing optimization"] }
    ]
  }
];

const Services = () => {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions tailored to transform your business and accelerate growth through cutting-edge technology.
          </p>
          <Button variant="hero" size="lg" className="group">
            Get Custom Quote
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <ServicesSection />

      {/* Detailed Packages */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Service Packages</h2>
          <p className="text-lg text-muted-foreground">
            Choose from our pre-designed packages or let us create a custom solution for your needs.
          </p>
        </div>

        {additionalServices.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              {category.category}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Card 
                  key={serviceIndex} 
                  className="relative border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${(categoryIndex * 3 + serviceIndex) * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mb-4">
                      {service.price}
                      <span className="text-sm text-muted-foreground font-normal"> starting</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group">
                      Choose Package
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl font-medium mb-6 text-muted-foreground italic">
            "Bitwork transformed our business with their AI automation solutions. 
            We've seen a 300% increase in efficiency and our customers love the new chatbot!"
          </blockquote>
          <cite className="text-lg font-semibold">
            Sarah Johnson, CEO of TechCorp
          </cite>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;