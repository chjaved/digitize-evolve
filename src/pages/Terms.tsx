import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Calendar } from "lucide-react";

const Terms = () => {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Legal Information
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of{" "}
            <span className="text-gradient">Service</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Please read these terms carefully before using our services.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: January 2025</span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Bitwork Pvt Ltd services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>2. Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Bitwork Pvt Ltd provides web development, AI automation, and digital solutions. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Custom website development and design</li>
                <li>Web application development</li>
                <li>E-commerce solutions</li>
                <li>AI automation implementation</li>
                <li>Digital marketing services</li>
                <li>Maintenance and support services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>3. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>50% payment required upfront to commence work</li>
                <li>Remaining 50% due upon project completion</li>
                <li>For larger projects, milestone-based payments may be arranged</li>
                <li>All payments are non-refundable once work has commenced</li>
                <li>Late payments may incur additional charges</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>4. Project Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Project timelines are estimates and may vary based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Project complexity and scope changes</li>
                <li>Client feedback and approval times</li>
                <li>Third-party service dependencies</li>
                <li>Unforeseen technical challenges</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>5. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, the client will own the custom code and designs created specifically for their project. However:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Bitwork Pvt Ltd retains rights to reusable components and methodologies</li>
                <li>Third-party licenses remain with their respective owners</li>
                <li>The client is responsible for renewing any third-party licenses</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>6. Support and Maintenance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Support periods are included with each package:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Starter: 1 month of support</li>
                <li>Professional: 3 months of support</li>
                <li>Enterprise: 6 months of support</li>
                <li>Support includes bug fixes and minor updates</li>
                <li>Extended maintenance plans available separately</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Bitwork Pvt Ltd's liability is limited to the amount paid for services. We are not liable for any indirect, incidental, or consequential damages. The client is responsible for maintaining backups of their data and content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>8. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate the agreement with written notice. Upon termination, the client will receive all completed work to date, and payment for completed work will be due immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>9. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Bitwork Pvt Ltd reserves the right to modify these terms at any time. Clients will be notified of any changes, and continued use of services constitutes acceptance of modified terms.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>10. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these terms, please contact us at:
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
    </main>
  );
};

export default Terms;