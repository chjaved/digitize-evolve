import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Zap,
  Users,
  Award
} from "lucide-react";

const contactMethods = [
  {
    icon: Calendar,
    title: "Book a Call",
    description: "Schedule a free 30-minute consultation to discuss your project.",
    action: "Book Now",
    link: "https://calendly.com/your-calendly-link",
    color: "text-primary"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant answers to your questions from our team.",
    action: "Start Chat",
    link: "#",
    color: "text-secondary"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message about your project requirements.",
    action: "Send Email", 
    link: "mailto:contact@bitworkpvtltd.com",
    color: "text-accent"
  }
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. Simple websites take 2-4 weeks, while complex AI solutions can take 8-12 weeks. We'll provide a detailed timeline during our consultation."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! We work with businesses of all sizes, from startups to enterprises. We have packages specifically designed for small businesses and growing companies."
  },
  {
    question: "What's included in your maintenance services?",
    answer: "Our maintenance includes security updates, performance optimization, bug fixes, content updates, and 24/7 monitoring. We offer different tiers based on your needs."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Yes, we specialize in integrations. We can connect your new solution with existing CRMs, databases, payment systems, and other business tools you're already using."
  },
  {
    question: "What AI services do you offer?",
    answer: "We offer chatbots, process automation, predictive analytics, content generation, and custom AI solutions tailored to your industry and specific business needs."
  },
  {
    question: "Do you provide training for our team?",
    answer: "Yes, we include comprehensive training with all our projects. We ensure your team is comfortable using and managing your new systems."
  }
];

const Contact = () => {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your business? Let's discuss your project and explore 
            how our expertise can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="group text-center p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-muted/30 flex items-center justify-center group-hover:bg-primary/10 transition-smooth`}>
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {method.description}
                </p>
                <Button 
                  variant="hero" 
                  className="group"
                  onClick={() => window.open(method.link, '_blank')}
                >
                  {method.action}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Info */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Office Hours */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Office Hours & Availability</h2>
            <div className="space-y-6">
              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <Zap className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl font-semibold">Emergency Support</h3>
                  </div>
                  <p className="text-muted-foreground">
                    For existing clients with critical issues, we offer 24/7 emergency support. 
                    Contact us at contact@bitworkpvtltd.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Our team combines years of experience with cutting-edge knowledge in AI and web technologies."
                },
                {
                  icon: Award,
                  title: "Proven Results",
                  description: "98% client satisfaction rate with measurable ROI improvements across all projects."
                },
                {
                  icon: Zap,
                  title: "Fast Delivery",
                  description: "Agile development process ensures quick turnaround without compromising quality."
                }
              ].map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't wait – your digital transformation starts with a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
            >
              Book Free Consultation
              <Calendar className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;