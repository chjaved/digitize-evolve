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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ai-automation-case-study" element={<AIAutomationCaseStudy />} />
            <Route path="/blog/web-development-trends-2024" element={<WebDevelopmentTrends2024 />} />
            <Route path="/blog/business-process-automation-guide" element={<BusinessProcessAutomationGuide />} />
            <Route path="/blog/ecommerce-conversion-case-study" element={<EcommerceConversionCaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
