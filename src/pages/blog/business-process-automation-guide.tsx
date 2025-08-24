import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, TrendingUp, CheckCircle, Cog, Target, Zap } from "lucide-react";

const BusinessProcessAutomationGuide = () => {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Article Header */}
      <article className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Badge className="mb-4">Automation Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Complete Guide to Business Process Automation in 2024
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your business operations with strategic automation. This comprehensive guide covers 
            everything from identifying automation opportunities to implementing solutions that drive growth.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/50">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Sarah Chen, Automation Specialist</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>February 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>15 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
            alt="Business Process Automation Workflow"
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Table of Contents */}
        <div className="mb-12 p-6 rounded-lg bg-muted/30 border border-border/50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#what-is-automation" className="text-primary hover:underline">1. What is Business Process Automation?</a>
            <a href="#benefits" className="text-primary hover:underline">2. Key Benefits & ROI</a>
            <a href="#identify-processes" className="text-primary hover:underline">3. Identifying Automation Opportunities</a>
            <a href="#types" className="text-primary hover:underline">4. Types of Business Automation</a>
            <a href="#implementation" className="text-primary hover:underline">5. Implementation Strategy</a>
            <a href="#tools" className="text-primary hover:underline">6. Popular Automation Tools</a>
            <a href="#measuring-success" className="text-primary hover:underline">7. Measuring Success</a>
            <a href="#future-trends" className="text-primary hover:underline">8. Future Trends</a>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {/* Section 1 */}
          <section id="what-is-automation" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Cog className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary">What is Business Process Automation?</h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Business Process Automation (BPA) involves using technology to execute recurring tasks or processes 
              in a business where manual effort can be replaced. It goes beyond simple task automation to optimize 
              entire workflows, reduce errors, and free up human resources for strategic activities.
            </p>

            <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
              <h3 className="text-lg font-semibold mb-4">BPA vs Traditional Automation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-destructive">Traditional Automation</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Single task focus</li>
                    <li>• Rigid rule-based</li>
                    <li>• Limited integration</li>
                    <li>• Requires constant maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Business Process Automation</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• End-to-end workflow optimization</li>
                    <li>• AI-powered decision making</li>
                    <li>• Seamless system integration</li>
                    <li>• Self-improving capabilities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/30">
                <div className="text-2xl font-bold text-primary mb-2">73%</div>
                <div className="text-sm text-muted-foreground">of companies plan to implement BPA</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/30">
                <div className="text-2xl font-bold text-primary mb-2">$3.7T</div>
                <div className="text-sm text-muted-foreground">global automation market by 2030</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/30">
                <div className="text-2xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">error reduction with proper BPA</div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="benefits" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Key Benefits & ROI</h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The impact of well-implemented business process automation extends far beyond simple cost savings. 
              Here are the key benefits organizations typically experience:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-lg font-semibold mb-4">Financial Benefits</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Cost Reduction:</strong> 25-50% decrease in operational costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>ROI:</strong> Average 200-400% return on investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Revenue Growth:</strong> 15-30% increase through efficiency</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-lg font-semibold mb-4">Operational Benefits</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Speed:</strong> 80-90% faster process completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Accuracy:</strong> Up to 99% error reduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Availability:</strong> 24/7 operation without breaks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-primary/10 border border-primary/20 mb-6">
              <h3 className="text-lg font-semibold mb-4">Real ROI Calculation Example</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-destructive mb-1">Before Automation</div>
                  <div className="text-sm text-muted-foreground">Manual processing: 40 hours/week</div>
                  <div className="text-sm text-muted-foreground">Annual cost: $124,800</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary mb-1">After Automation</div>
                  <div className="text-sm text-muted-foreground">Automated processing: 4 hours/week</div>
                  <div className="text-sm text-muted-foreground">Annual cost: $31,200</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-accent mb-1">Net Savings</div>
                  <div className="text-sm text-muted-foreground">Time saved: 36 hours/week</div>
                  <div className="text-sm text-muted-foreground">Annual savings: $93,600</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="identify-processes" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Identifying Automation Opportunities</h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Not every process is suitable for automation. The key is identifying tasks that are repetitive, 
              rule-based, and consume significant time or resources. Here's a systematic approach to evaluation:
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">The Automation Assessment Framework</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                  <h4 className="font-semibold mb-2">1. Process Characteristics Checklist</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium text-primary mb-2">High Automation Potential:</div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✓ Repetitive and predictable</li>
                        <li>✓ Rule-based decisions</li>
                        <li>✓ Digital data inputs</li>
                        <li>✓ High volume</li>
                        <li>✓ Time-sensitive</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-destructive mb-2">Low Automation Potential:</div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✗ Requires creative thinking</li>
                        <li>✗ Complex decision making</li>
                        <li>✗ Human interaction focused</li>
                        <li>✗ Highly variable inputs</li>
                        <li>✗ Regulatory restrictions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Common Automation Candidates by Department</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                    <h4 className="font-semibold mb-2">Finance & Accounting</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Invoice processing and approval</li>
                      <li>• Financial reporting generation</li>
                      <li>• Expense report validation</li>
                      <li>• Budget tracking and alerts</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                    <h4 className="font-semibold mb-2">Sales & Marketing</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Lead scoring and qualification</li>
                      <li>• Email marketing campaigns</li>
                      <li>• Social media posting</li>
                      <li>• CRM data entry and updates</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                    <h4 className="font-semibold mb-2">HR & Operations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Employee onboarding workflows</li>
                      <li>• Time and attendance tracking</li>
                      <li>• Performance review scheduling</li>
                      <li>• Compliance reporting</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                    <h4 className="font-semibold mb-2">Customer Service</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ticket routing and prioritization</li>
                      <li>• FAQ responses</li>
                      <li>• Customer data updates</li>
                      <li>• Follow-up communications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="types" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Types of Business Automation</h2>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Understanding different types of automation helps you choose the right approach for your specific needs. 
              Here are the main categories and when to use each:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-lg font-semibold mb-3">Robotic Process Automation (RPA)</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Software robots that mimic human actions to complete repetitive tasks across applications.
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div><strong>Best for:</strong> Data entry, report generation, system integration</div>
                  <div><strong>Tools:</strong> UiPath, Blue Prism, Automation Anywhere</div>
                  <div><strong>ROI Timeline:</strong> 3-6 months</div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-lg font-semibold mb-3">Workflow Automation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Streamlines business processes by automatically routing tasks and information.
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div><strong>Best for:</strong> Approval processes, task assignment, notifications</div>
                  <div><strong>Tools:</strong> Zapier, Microsoft Power Automate, Nintex</div>
                  <div><strong>ROI Timeline:</strong> 1-3 months</div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-lg font-semibold mb-3">AI-Powered Automation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Uses machine learning and AI to make decisions and handle complex scenarios.
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div><strong>Best for:</strong> Document processing, customer service, predictive analytics</div>
                  <div><strong>Tools:</strong> IBM Watson, Google AI, Custom solutions</div>
                  <div><strong>ROI Timeline:</strong> 6-12 months</div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="text-lg font-semibold mb-3">API Integration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connects different systems and applications to share data automatically.
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div><strong>Best for:</strong> System synchronization, data migration, real-time updates</div>
                  <div><strong>Tools:</strong> Custom APIs, MuleSoft, Dell Boomi</div>
                  <div><strong>ROI Timeline:</strong> 2-4 months</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="implementation" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Implementation Strategy</h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Successful automation implementation requires careful planning and phased execution. 
              Here's our proven methodology for ensuring project success:
            </p>

            <div className="space-y-6 mb-8">
              <div className="p-6 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                <h3 className="text-lg font-semibold mb-3">Phase 1: Discovery & Planning (Weeks 1-3)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Process Analysis</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Document current workflows</li>
                      <li>• Identify pain points and bottlenecks</li>
                      <li>• Calculate baseline metrics</li>
                      <li>• Map stakeholder requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technical Assessment</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Evaluate existing systems</li>
                      <li>• Assess integration capabilities</li>
                      <li>• Review security requirements</li>
                      <li>• Define success criteria</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                <h3 className="text-lg font-semibold mb-3">Phase 2: Pilot Implementation (Weeks 4-8)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Development</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Build automation solutions</li>
                      <li>• Create testing environments</li>
                      <li>• Develop monitoring dashboards</li>
                      <li>• Prepare training materials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Testing & Validation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Conduct user acceptance testing</li>
                      <li>• Validate business rules</li>
                      <li>• Test error handling</li>
                      <li>• Measure performance impact</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                <h3 className="text-lg font-semibold mb-3">Phase 3: Full Deployment (Weeks 9-12)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Rollout</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Deploy to production environment</li>
                      <li>• Train end users</li>
                      <li>• Migrate historical data</li>
                      <li>• Activate monitoring systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Optimization</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Monitor performance metrics</li>
                      <li>• Gather user feedback</li>
                      <li>• Fine-tune automation rules</li>
                      <li>• Plan next phase automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20">
              <h3 className="text-lg font-semibold mb-3 text-destructive">Common Implementation Pitfalls to Avoid</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• <strong>Automating broken processes:</strong> Fix inefficiencies before automating</li>
                <li>• <strong>Lack of stakeholder buy-in:</strong> Involve users in planning and testing</li>
                <li>• <strong>Insufficient change management:</strong> Prepare team for workflow changes</li>
                <li>• <strong>Over-automation:</strong> Start small and scale gradually</li>
                <li>• <strong>Ignoring maintenance:</strong> Plan for ongoing updates and support</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Start Your Automation Journey Today</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Business process automation is no longer a luxury—it's a necessity for staying competitive. 
              The organizations that embrace automation now will have significant advantages in efficiency, 
              cost reduction, and scalability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Remember, successful automation is not about replacing humans, but about empowering them to 
              focus on high-value, strategic work while technology handles the repetitive tasks. 
              Start with small wins, measure results, and scale your automation initiatives based on proven success.
            </p>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-primary/10 border border-primary/20 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Business Processes?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our automation experts can help you identify opportunities, develop custom solutions, 
            and implement automation that drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
            >
              Get Free Automation Assessment
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Automation Checklist
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BusinessProcessAutomationGuide;