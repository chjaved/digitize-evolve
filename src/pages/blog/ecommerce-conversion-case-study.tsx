import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, TrendingUp, CheckCircle, ShoppingCart, BarChart3 } from "lucide-react";

const EcommerceConversionCaseStudy = () => {
  return (
    <main className="relative">
      {/* Article Header */}
      <article className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Badge className="mb-4">Case Study</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How We Increased E-commerce Conversions by 250% in 90 Days
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A detailed case study showing how strategic UX improvements, AI-powered personalization, 
            and conversion optimization transformed an underperforming e-commerce store into a sales powerhouse.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/50">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Emily Davis, E-commerce Specialist</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>February 28, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>14 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop" 
            alt="E-commerce Analytics Dashboard"
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Client Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Client Overview</h2>
            <div className="p-6 rounded-lg bg-muted/30 border border-border/50 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Company Profile</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li><strong>Industry:</strong> Fashion & Lifestyle</li>
                    <li><strong>Business Model:</strong> B2C E-commerce</li>
                    <li><strong>Product Range:</strong> 500+ SKUs</li>
                    <li><strong>Target Market:</strong> 25-45 age group</li>
                    <li><strong>Geographic Reach:</strong> North America</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Initial Metrics</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li><strong>Monthly Traffic:</strong> 45,000 visitors</li>
                    <li><strong>Conversion Rate:</strong> 1.2%</li>
                    <li><strong>Average Order Value:</strong> $78</li>
                    <li><strong>Cart Abandonment:</strong> 78%</li>
                    <li><strong>Monthly Revenue:</strong> $42,000</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our client, a mid-sized fashion retailer, was struggling with low conversion rates despite 
              decent traffic numbers. They approached us after seeing competitors consistently outperform 
              them in sales despite similar marketing spend and product quality.
            </p>
          </section>

          {/* Challenge Analysis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">The Challenge</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Through comprehensive analysis, we identified several critical issues preventing conversions:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20">
                <h3 className="text-lg font-semibold mb-4 text-destructive">User Experience Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span>Slow page load times (4.2s average)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span>Complex 7-step checkout process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span>Poor mobile experience (68% of traffic)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span>Confusing navigation and search</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20">
                <h3 className="text-lg font-semibold mb-4 text-destructive">Conversion Barriers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span>Lack of product recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span>No urgency or scarcity indicators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span>Limited payment options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span>Weak trust signals and reviews</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
              <h3 className="text-lg font-semibold mb-4">Key Performance Issues</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-destructive mb-1">78%</div>
                  <div className="text-sm text-muted-foreground">Cart Abandonment Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive mb-1">4.2s</div>
                  <div className="text-sm text-muted-foreground">Average Page Load</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive mb-1">1.2%</div>
                  <div className="text-sm text-muted-foreground">Conversion Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive mb-1">65%</div>
                  <div className="text-sm text-muted-foreground">Mobile Bounce Rate</div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Strategy */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Our Strategic Solution</h2>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We developed a comprehensive 90-day transformation plan focusing on three key areas: 
              technical optimization, user experience enhancement, and AI-powered personalization.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="text-lg font-semibold mb-4">Phase 1: Technical Foundation (Days 1-30)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Performance Optimization</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Implemented CDN and image optimization</li>
                      <li>• Upgraded to modern hosting infrastructure</li>
                      <li>• Optimized database queries</li>
                      <li>• Added progressive web app features</li>
                      <li>• Compressed and minified all assets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Mobile-First Redesign</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Responsive design implementation</li>
                      <li>• Touch-optimized interface elements</li>
                      <li>• Simplified mobile navigation</li>
                      <li>• Improved mobile checkout flow</li>
                      <li>• Fast mobile search functionality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="text-lg font-semibold mb-4">Phase 2: UX Enhancement (Days 31-60)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Streamlined Checkout</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Reduced to 3-step checkout process</li>
                      <li>• Guest checkout option</li>
                      <li>• Multiple payment methods</li>
                      <li>• Real-time shipping calculator</li>
                      <li>• Progress indicators and save options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Trust & Social Proof</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Customer review system</li>
                      <li>• Security badges and certifications</li>
                      <li>• Real-time purchase notifications</li>
                      <li>• Customer testimonials showcase</li>
                      <li>• Return policy clarification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="text-lg font-semibold mb-4">Phase 3: AI Personalization (Days 61-90)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Smart Recommendations</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• AI-powered product suggestions</li>
                      <li>• Personalized homepage content</li>
                      <li>• Dynamic pricing strategies</li>
                      <li>• Abandoned cart recovery</li>
                      <li>• Behavioral targeting campaigns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Conversion Optimization</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• A/B testing framework</li>
                      <li>• Urgency and scarcity indicators</li>
                      <li>• Personalized offers and discounts</li>
                      <li>• Smart search with filters</li>
                      <li>• Exit-intent popup campaigns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Remarkable Results</h2>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The transformation exceeded all expectations. Within 90 days, we achieved dramatic improvements 
              across all key performance indicators:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 rounded-lg bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">250%</div>
                <div className="text-sm text-muted-foreground mb-3">Conversion Rate Increase</div>
                <div className="text-xs text-muted-foreground">From 1.2% to 4.2%</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">185%</div>
                <div className="text-sm text-muted-foreground mb-3">Revenue Growth</div>
                <div className="text-xs text-muted-foreground">From $42K to $120K/month</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">65%</div>
                <div className="text-sm text-muted-foreground mb-3">Cart Abandonment Reduction</div>
                <div className="text-xs text-muted-foreground">From 78% to 28%</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Detailed Performance Improvements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                  <h4 className="font-semibold mb-4">Technical Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Page Load Time</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-destructive line-through">4.2s</span>
                        <span className="text-sm font-semibold text-primary">1.3s</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Mobile Bounce Rate</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-destructive line-through">65%</span>
                        <span className="text-sm font-semibold text-primary">22%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Core Web Vitals Score</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-destructive line-through">45</span>
                        <span className="text-sm font-semibold text-primary">92</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                  <h4 className="font-semibold mb-4">Business Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Average Order Value</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">$78</span>
                        <span className="text-sm font-semibold text-primary">$96</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Customer Lifetime Value</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">$156</span>
                        <span className="text-sm font-semibold text-primary">$312</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Repeat Purchase Rate</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">18%</span>
                        <span className="text-sm font-semibold text-primary">34%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-primary/10 border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">Monthly Progress Tracking</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Month 1</div>
                  <div className="space-y-1">
                    <div className="text-lg font-bold">2.1%</div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Month 2</div>
                  <div className="space-y-1">
                    <div className="text-lg font-bold">3.4%</div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Month 3</div>
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-primary">4.2%</div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Success Factors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Key Success Factors</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Several critical factors contributed to the project's outstanding success:
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Data-Driven Decision Making</h4>
                    <p className="text-sm text-muted-foreground">
                      Every change was backed by comprehensive analytics and user behavior data. 
                      We tracked over 50 metrics throughout the optimization process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">User-Centric Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      We conducted user interviews, heat map analysis, and session recordings 
                      to understand exactly where customers were dropping off.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Continuous Testing & Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      We ran 23 A/B tests during the 90-day period, with each test informing 
                      the next round of improvements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">AI-Powered Personalization</h4>
                    <p className="text-sm text-muted-foreground">
                      Machine learning algorithms analyzed customer behavior to deliver 
                      personalized product recommendations and targeted offers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Client Testimonial */}
          <section className="mb-12">
            <div className="p-8 rounded-xl bg-muted/30 border border-border/50">
              <blockquote className="text-lg italic text-center mb-6">
                "The results speak for themselves. In just 90 days, our online revenue nearly tripled. 
                The team's expertise in e-commerce optimization and their data-driven approach made all the difference. 
                We're now the market leader in our niche."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">Jennifer Martinez</div>
                <div className="text-sm text-muted-foreground">CEO, Fashion Forward</div>
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Key Takeaways for E-commerce Success</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This case study demonstrates several universal principles for e-commerce optimization:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Technical Foundation is Critical</h4>
                  <p className="text-sm text-muted-foreground">
                    Site speed and mobile optimization are table stakes. Without them, 
                    no amount of marketing can overcome poor user experience.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Simplify the Checkout Process</h4>
                  <p className="text-sm text-muted-foreground">
                    Every additional step in checkout reduces conversions. Streamline 
                    the process and offer guest checkout options.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Personalization Drives Results</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-powered recommendations and personalized experiences significantly 
                    increase both conversion rates and average order values.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Trust Signals Matter</h4>
                  <p className="text-sm text-muted-foreground">
                    Customer reviews, security badges, and social proof are essential 
                    for converting hesitant visitors into buyers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-primary/10 border border-primary/20 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your E-commerce Store?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            See how our proven e-commerce optimization strategies can increase your conversions 
            and revenue. Get a free conversion audit of your current store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
            >
              Get Free Conversion Audit
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Full Case Study
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default EcommerceConversionCaseStudy;