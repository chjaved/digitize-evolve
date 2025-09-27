import Navbar from "@/components/Navbar"; // adjust path if different
import Footer from "@/components/Footer"; // optional

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header (Navbar stays on top) */}
      <header className="header">
        <Navbar />
      </header>

      {/* Scrollable content starts after header */}
      <main className="scrollable">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
