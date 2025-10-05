import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header (Navigation stays on top) */}
      <header className="header">
        <Navigation />
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
