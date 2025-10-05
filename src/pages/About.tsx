import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Code, Brain, Award } from "lucide-react";
import sardarsImage from "@/assets/sardar-arslan-ali.jpg";
import javedImage from "@/assets/javed-jabbar.jpg";

const teamMembers = [
  {
    name: "Sardar Arslan Ali",
    role: "CEO and Founder",
    bio: "Visionary leader with extensive experience in technology and business development. Leading the company towards innovative digital solutions.",
    image: sardarsImage
  },
  {
    name: "Javed Jabbar", 
    role: "Director and Co-Founder",
    bio: "Strategic business leader with deep expertise in operations and client relations. Driving growth and excellence in service delivery.",
    image: javedImage
  }
];

const milestones = [
  { year: "2019", event: "Company Founded", description: "Started with a vision to bridge the gap between traditional businesses and modern technology." },
  { year: "2020", event: "First AI Project", description: "Delivered our first AI automation solution, saving client 40 hours/week." },
  { year: "2021", event: "50+ Projects", description: "Reached milestone of 50 successful projects across various industries." },
  { year: "2022", event: "Team Expansion", description: "Grew to 15+ specialists including AI experts, developers, and designers." },
  { year: "2023", event: "100+ Clients", description: "Proud to serve over 100 happy clients with cutting-edge solutions." },
  { year: "2024", event: "AI Excellence", description: "Recognized as leading AI automation agency with 98% client satisfaction." }
];

const About = () => {
  return (
    <main className="relative">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Our Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're a passionate team of developers, designers, and AI specialists on a mission to transform businesses through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            The brilliant minds behind your digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.name === 'Sardar Arslan Ali' ? 'object-top' : ''}`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our mission to revolutionize digital business solutions.
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-8 animate-slide-up ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold">{milestone.event}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Code, title: "Technical Excellence", description: "We use cutting-edge technologies and best practices in every project." },
            { icon: Users, title: "Client Success", description: "Your success is our success. We're committed to delivering results that matter." },
            { icon: Brain, title: "Innovation", description: "We stay ahead of the curve, implementing the latest AI and web technologies." },
            { icon: Award, title: "Quality Driven", description: "Every project receives our full attention to detail and commitment to excellence." }
          ].map((value, index) => (
            <Card 
              key={index} 
              className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how our expertise can help transform your business.
          </p>
          <Button variant="hero" size="lg" className="group">
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;