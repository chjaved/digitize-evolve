import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Award, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
  Zap
} from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Trophy, value: "250+", label: "Projects Completed" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
  { icon: Zap, value: "5+", label: "Years Experience" }
];

const values = [
  {
    title: "Innovation First",
    description: "We stay ahead of the curve, implementing the latest technologies and best practices.",
    icon: Target
  },
  {
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering results that matter.",
    icon: Award
  },
  {
    title: "Quality Driven",
    description: "Every project receives our full attention to detail and commitment to excellence.",
    icon: CheckCircle
  }
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Our Agency</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              We're a team of passionate developers, designers, and AI specialists 
              dedicated to transforming businesses through innovative digital solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From startups to enterprises, we've helped companies across industries 
              leverage the power of modern web technologies and artificial intelligence 
              to achieve remarkable growth and efficiency.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-smooth">
                <div className="flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" className="group">
            Learn More About Us
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance efficiency, and create exceptional user experiences in an AI-first world.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  Google Certified
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                  AWS Partner
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                  OpenAI Partner
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;