import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AIAutomationCaseStudy from "./pages/blog/ai-automation-case-study";
import WebDevelopmentTrends2024 from "./pages/blog/web-development-trends-2024";
import BusinessProcessAutomationGuide from "./pages/blog/business-process-automation-guide";
import EcommerceConversionCaseStudy from "./pages/blog/ecommerce-conversion-case-study";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

import ScrollManager from "./components/ScrollManager";
import Layout from "./components/Layout"; // 👈 new layout wrapper
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollManager />
          <Navigation />
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/services" element={<Layout><Services /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/ai-automation-case-study" element={<Layout><AIAutomationCaseStudy /></Layout>} />
            <Route path="/blog/web-development-trends-2024" element={<Layout><WebDevelopmentTrends2024 /></Layout>} />
            <Route path="/blog/business-process-automation-guide" element={<Layout><BusinessProcessAutomationGuide /></Layout>} />
            <Route path="/blog/ecommerce-conversion-case-study" element={<Layout><EcommerceConversionCaseStudy /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/faq" element={<Layout><FAQ /></Layout>} />
            <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
            <Route path="/terms" element={<Layout><Terms /></Layout>} />
            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
