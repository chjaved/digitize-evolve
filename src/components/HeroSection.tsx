import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Code2, 
  Zap,
  Shield
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f1729] via-[#1a2332] to-[#0f1729]">
      <div className="relative min-h-screen flex items-center justify-center w-full">
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">We Build </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Smart Websites
                </span>
                <span className="text-white"> & </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                From websites to intelligent automation — we deliver end-to-end digital solutions that{" "}
                <span className="text-blue-400 font-semibold">grow businesses</span> and{" "}
                <span className="text-cyan-400 font-semibold">scale operations</span>.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3">
                 {[
                  { icon: <Code2 className="w-4 h-4 text-blue-400" />, text: "Custom Development" },
                  { icon: <Zap className="w-4 h-4 text-blue-400" />, text: "AI Integration" },
                  { icon: <Shield className="w-4 h-4 text-blue-400" />, text: "Enterprise Security" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-white font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  className="relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-colors overflow-hidden group"
                  onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
                >
                  <span className="relative flex items-center">
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500/50 hover:border-blue-500 text-white px-8 py-6 text-lg rounded-xl bg-transparent hover:bg-blue-500/10 transition-colors group"
                >
                  <span className="flex items-center">
                    Get a Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Column - Updated Card */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur-xl p-10 min-h-[550px] flex flex-col justify-between">
                
                {/* Stats */}
                <div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="relative bg-[#1e2942] rounded-2xl p-6 border border-blue-500/20">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                      <div className="text-gray-400 text-sm">Projects Delivered</div>
                    </div>
                    <div className="relative bg-[#1e2942] rounded-2xl p-6 border border-blue-500/20">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                      <div className="text-gray-400 text-sm">Happy Clients</div>
                    </div>
                  </div>

                  {/* Tech */}
                  <div className="relative bg-[#1e2942] rounded-2xl p-6 border border-blue-500/20 mb-8">
                    <h3 className="text-white font-bold text-lg mb-4">Technologies We Master</h3>
                    <div className="flex flex-wrap gap-3">
                      {["React", "Node.js", "Python", "AI/ML", "Next.js", "Figma", "WordPress", "Shopify", "Wix", "Framer", "n8n"].map((tech) => (
                        <span 
                          key={tech}
                          className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-white text-sm font-medium hover:bg-blue-500/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trusted By */}
                  <div className="relative bg-[#1e2942] rounded-2xl p-6 border border-blue-500/20">
                    <h3 className="text-white font-bold text-lg mb-4">Trusted by 100+ companies worldwide</h3>
                    <div className="flex flex-wrap gap-3">
                      {["SaaS Platforms", "E-commerce", "Enterprise", "Startups"].map((item) => (
                        <span 
                          key={item}
                          className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-white text-sm font-medium hover:bg-blue-500/20 transition-all"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
