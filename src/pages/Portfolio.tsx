import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock } from "lucide-react";

const portfolioItems = [
  {
    title: "TechCorp AI Chatbot",
    category: "AI Automation",
    description: "Custom AI chatbot that reduced customer service workload by 70% and improved response times by 90%.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    tags: ["AI", "Chatbot", "Customer Service"],
    results: {
      metric1: { label: "Response Time", value: "90% faster" },
      metric2: { label: "Workload Reduction", value: "70% less" },
      metric3: { label: "Customer Satisfaction", value: "95% rating" }
    },
    link: "#"
  },
  {
    title: "E-commerce Platform Redesign",
    category: "Web Development", 
    description: "Complete redesign and development of e-commerce platform resulting in 150% increase in conversions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["E-commerce", "React", "Performance"],
    results: {
      metric1: { label: "Conversion Rate", value: "+150%" },
      metric2: { label: "Page Speed", value: "3x faster" },
      metric3: { label: "Mobile Sales", value: "+200%" }
    },
    link: "#"
  },
  {
    title: "Healthcare Workflow Automation",
    category: "Process Automation",
    description: "Automated patient scheduling and record management system saving 25 hours per week.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    tags: ["Healthcare", "Automation", "Workflow"],
    results: {
      metric1: { label: "Time Saved", value: "25 hrs/week" },
      metric2: { label: "Error Reduction", value: "95% less" },
      metric3: { label: "Patient Satisfaction", value: "40% increase" }
    },
    link: "#"
  },
  {
    title: "SaaS Dashboard Platform",
    category: "Custom Solutions",
    description: "Built comprehensive analytics dashboard for SaaS company with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["SaaS", "Analytics", "Dashboard"],
    results: {
      metric1: { label: "User Engagement", value: "+85%" },
      metric2: { label: "Data Processing", value: "10x faster" },
      metric3: { label: "Client Retention", value: "+60%" }
    },
    link: "#"
  },
  {
    title: "Real Estate Lead Generator",
    category: "AI & Web Combo",
    description: "AI-powered lead generation system with dynamic website that increased qualified leads by 300%.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["Real Estate", "Lead Gen", "AI"],
    results: {
      metric1: { label: "Qualified Leads", value: "+300%" },
      metric2: { label: "Conversion Rate", value: "+120%" },
      metric3: { label: "ROI", value: "400% increase" }
    },
    link: "#"
  },
  {
    title: "Restaurant Chain Management",
    category: "Custom Solutions",
    description: "Integrated POS and inventory management system across 15 restaurant locations.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    tags: ["Restaurant", "POS", "Inventory"],
    results: {
      metric1: { label: "Inventory Accuracy", value: "99.5%" },
      metric2: { label: "Order Processing", value: "50% faster" },
      metric3: { label: "Cost Savings", value: "$50k/year" }
    },
    link: "#"
  }
];

const categories = ["All", "AI Automation", "Web Development", "Process Automation", "Custom Solutions", "AI & Web Combo"];

const Portfolio = () => {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Real results from real projects. See how we've helped businesses transform 
            their operations and achieve remarkable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <Button 
                key={category} 
                variant={index === 0 ? "hero" : "ghost-glow"} 
                size="sm"
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="icon" variant="ghost-glow" className="h-8 w-8">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg bg-muted/30">
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">{item.results.metric1.value}</div>
                    <div className="text-xs text-muted-foreground">{item.results.metric1.label}</div>
                  </div>
                  <div className="text-center border-l border-r border-border/50">
                    <div className="text-sm font-bold text-secondary">{item.results.metric2.value}</div>
                    <div className="text-xs text-muted-foreground">{item.results.metric2.label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-accent">{item.results.metric3.value}</div>
                    <div className="text-xs text-muted-foreground">{item.results.metric3.label}</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full group">
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portfolio Impact</h2>
            <p className="text-lg text-muted-foreground">
              The numbers speak for themselves - real results from real projects.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "300%", label: "Average ROI Increase" },
              { icon: Users, value: "100k+", label: "Users Impacted" },
              { icon: Clock, value: "1000+", label: "Hours Saved Weekly" },
              { icon: ArrowRight, value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create the next amazing case study together. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;