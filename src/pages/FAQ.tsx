import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Bitwork offer?",
      answer: "We provide comprehensive web development services including responsive websites, e-commerce platforms, web applications, AI automation solutions, and digital marketing services. Our expertise spans from simple landing pages to complex enterprise solutions."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity. Starter projects typically take 1-2 weeks, Professional projects 2-4 weeks, and Enterprise solutions 4-8 weeks. We provide detailed timelines during the consultation phase and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! All our packages include post-launch support. Starter packages include 1 month of support, Professional packages include 3 months, and Enterprise packages include 6 months. We also offer extended maintenance plans for ongoing updates and improvements."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer three main packages: Starter ($200), Professional ($350), and Enterprise ($499). All packages are designed to provide maximum value within budget constraints. We also offer custom quotes for unique requirements."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We work with clients globally. Our team is available 24/7 to accommodate different time zones, and we use modern communication tools to ensure seamless collaboration regardless of location."
    },
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React, Next.js, Node.js, TypeScript, Python, WordPress, Shopify, and various AI/ML frameworks. We select the best technology stack based on your specific project requirements and goals."
    },
    {
      question: "Can you help with existing website improvements?",
      answer: "Yes! We offer website optimization, performance improvements, security updates, feature additions, and complete redesigns. We can work with your existing codebase or recommend a fresh approach based on your needs."
    },
    {
      question: "Do you provide SEO services?",
      answer: "SEO optimization is included in all our packages. We implement technical SEO, on-page optimization, performance improvements, and provide guidance on content strategy to help improve your search engine rankings."
    },
    {
      question: "What is your payment process?",
      answer: "We typically work with a 50% upfront payment to begin the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept various payment methods including bank transfers and online payments."
    },
    {
      question: "How do you ensure project communication?",
      answer: "We maintain regular communication through WhatsApp, email, and video calls. You'll receive regular progress updates, and our team is available 24/7 for any questions or concerns throughout the development process."
    }
  ];

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Frequently Asked Questions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Got Questions?{" "}
            <span className="text-gradient">We Have Answers</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Find answers to the most common questions about our services, process, and pricing.
            Can't find what you're looking for? We're here to help!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Everything You Need to Know
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/30 rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is available 24/7 to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.link/b6qqva', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;