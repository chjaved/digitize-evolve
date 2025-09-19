import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Calendar } from "lucide-react";

const Privacy = () => {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Privacy & Security
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy{" "}
            <span className="text-gradient">Policy</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: January 2025</span>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Contact information (name, email, phone number)</li>
                <li>Company information and project details</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Technical information about your project requirements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We use the collected information for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Providing and improving our services</li>
                <li>Communicating with you about projects</li>
                <li>Processing payments and managing accounts</li>
                <li>Sending service updates and important notices</li>
                <li>Analyzing usage to improve our offerings</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information. We may share information only in these circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>With your explicit consent</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure servers and regular security updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Regular security audits and monitoring</li>
                <li>Secure payment processing through certified providers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>5. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Enhance website functionality and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Remember your preferences and settings</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can control cookie preferences through your browser settings.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>6. Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information for as long as necessary to provide services and fulfill legal obligations. Project-related data is typically retained for 7 years for business and legal purposes. You may request deletion of your personal data, subject to legal and contractual obligations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>7. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your information</li>
                <li>Data portability where technically feasible</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>8. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your privacy rights in accordance with applicable data protection laws.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>9. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware that a child has provided personal information, we will take steps to delete such information.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>10. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy periodically. We will notify you of significant changes by email or through our website. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>11. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
If you have questions about this privacy policy or how we handle your information, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Email: contact@bitworkpvtltd.com</p>
                <p>Phone: +92-325-5339295</p>
                <p>Address: Islamabad, Pakistan</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;