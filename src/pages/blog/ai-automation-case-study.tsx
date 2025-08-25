import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, TrendingUp, CheckCircle } from "lucide-react";

const AIAutomationCaseStudy = () => {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Article Header */}
      <article className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Badge className="mb-4">Case Study</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How AI Automation Saved TechStartup Inc. 40+ Hours Per Week
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A comprehensive case study showing how our AI-powered automation solutions transformed 
            a growing startup's operations, reduced manual work by 85%, and increased productivity dramatically.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/50">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Sarah Chen, AI Solutions Lead</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop" 
            alt="AI Automation Dashboard"
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Challenge Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">The Challenge</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              TechStartup Inc., a fast-growing SaaS company with 50+ employees, was drowning in repetitive manual tasks. 
              Their team spent over 40 hours per week on:
            </p>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>Manual lead qualification and routing (15 hours/week)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>Customer support ticket categorization (12 hours/week)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>Invoice processing and follow-ups (8 hours/week)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>Social media content scheduling (5 hours/week)</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This was costing them approximately <strong>$3,200 per week in productivity losses</strong> and preventing 
              their team from focusing on strategic growth initiatives.
            </p>
          </section>

          {/* Solution Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Our AI Automation Solution</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We implemented a comprehensive AI automation suite that addressed each pain point with smart, 
              scalable solutions:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-xl font-semibold mb-3">Intelligent Lead Qualification</h3>
                <p className="text-muted-foreground text-sm">
                  AI-powered chatbot that qualifies leads in real-time, scores them based on fit, 
                  and automatically routes high-value prospects to sales team.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-xl font-semibold mb-3">Smart Support Automation</h3>
                <p className="text-muted-foreground text-sm">
                  AI system that categorizes support tickets, provides instant responses for common issues, 
                  and escalates complex cases to appropriate team members.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-xl font-semibold mb-3">Automated Invoice Management</h3>
                <p className="text-muted-foreground text-sm">
                  Smart workflow that processes invoices, sends automated follow-ups, 
                  and integrates with accounting systems for seamless operations.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-xl font-semibold mb-3">Content Automation Engine</h3>
                <p className="text-muted-foreground text-sm">
                  AI-driven system that creates, schedules, and optimizes social media content 
                  based on engagement data and industry trends.
                </p>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Impressive Results</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Within 60 days of implementation, TechStartup Inc. achieved remarkable improvements across all metrics:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 rounded-lg bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">42 Hours</div>
                <div className="text-sm text-muted-foreground">Saved Per Week</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Reduction in Manual Tasks</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <div className="text-sm text-muted-foreground">Increase in Lead Quality</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Detailed Impact Analysis:</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Lead Qualification:</strong> 95% accuracy rate, 24/7 availability, 300% more qualified leads</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Customer Support:</strong> 60% faster response times, 80% issue resolution automation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Invoice Processing:</strong> 90% faster processing, 45% improvement in collection times</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Content Marketing:</strong> 400% increase in posting consistency, 150% engagement growth</span>
              </li>
            </ul>
          </section>

          {/* ROI Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Return on Investment</h2>
            <div className="p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Investment Breakdown</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Initial Development: $15,000</li>
                    <li>• Integration & Setup: $3,000</li>
                    <li>• Training & Support: $2,000</li>
                    <li>• <strong>Total Investment: $20,000</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Annual Savings</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Time Savings: $166,400/year</li>
                    <li>• Productivity Gains: $50,000/year</li>
                    <li>• Error Reduction: $15,000/year</li>
                    <li>• <strong>Total Savings: $231,400/year</strong></li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8 pt-6 border-t border-border/50">
                <div className="text-2xl font-bold text-primary">1,157% ROI in Year 1</div>
                <p className="text-muted-foreground mt-2">Investment paid back in just 5.2 weeks</p>
              </div>
            </div>
          </section>

          {/* Client Testimonial */}
          <section className="mb-12">
            <div className="p-8 rounded-xl bg-muted/30 border border-border/50">
              <blockquote className="text-lg italic text-center mb-6">
                "The AI automation solutions from SkyEx Technologies completely transformed our operations. 
                We're now able to focus on strategic growth instead of drowning in repetitive tasks. 
                The ROI exceeded our wildest expectations."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">CEO, TechStartup Inc.</div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Key Takeaways</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This case study demonstrates the transformative power of well-implemented AI automation solutions. 
              Key success factors included:
            </p>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Comprehensive analysis of existing workflows and pain points</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Custom AI solutions tailored to specific business needs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Seamless integration with existing tools and systems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Comprehensive training and ongoing support</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              If your business is struggling with similar challenges, AI automation could be the solution 
              you need to unlock unprecedented growth and efficiency.
            </p>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-primary/10 border border-primary/20 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            See how AI automation can revolutionize your operations just like it did for TechStartup Inc. 
            Book a free consultation to explore your automation opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
            >
              Book Free AI Assessment
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Case Study PDF
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default AIAutomationCaseStudy;