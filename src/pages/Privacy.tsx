import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="relative">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="text-muted-foreground space-y-2 ml-6">
              <li>• Request a consultation or quote</li>
              <li>• Subscribe to our newsletter</li>
              <li>• Contact us through our website</li>
              <li>• Participate in surveys or feedback forms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-muted-foreground space-y-2 ml-6">
              <li>• Provide and improve our services</li>
              <li>• Respond to your inquiries and requests</li>
              <li>• Send you marketing communications (with your consent)</li>
              <li>• Analyze usage patterns and optimize our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy. We may share your information with trusted service providers who assist 
              us in operating our website and conducting our business.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="text-muted-foreground space-y-2 ml-6">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate information</li>
              <li>• Request deletion of your information</li>
              <li>• Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@digitalize-evolve.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Privacy;