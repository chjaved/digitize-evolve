import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <main className="scrollable">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
