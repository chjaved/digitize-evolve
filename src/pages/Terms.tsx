import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <main className="relative">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using SkyEx Technologies's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Services Description</h2>
            <p className="text-muted-foreground mb-4">
              SkyEx Technologies provides:
            </p>
            <ul className="text-muted-foreground space-y-2 ml-6">
              <li>• Web development and design services</li>
              <li>• AI automation solutions</li>
              <li>• Custom software development</li>
              <li>• Digital consultation services</li>
              <li>• Technical support and maintenance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Payment Terms</h2>
            <p className="text-muted-foreground">
              Payment terms will be specified in individual project agreements. Generally, we require a 50% deposit 
              before beginning work, with the remainder due upon project completion. Late payments may incur additional fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Intellectual Property</h2>
            <p className="text-muted-foreground">
              Upon full payment, clients will own the final deliverables. However, SkyEx Technologies retains the right 
              to use general methodologies, techniques, and know-how developed during the project for future work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              SkyEx Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate services with written notice. Upon termination, payment for work completed 
              up to the termination date will be due, and any materials developed will be provided to the client.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions regarding these terms, please contact us at:
              <br />
              Email: legal@digitalize-evolve.com
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

export default Terms;