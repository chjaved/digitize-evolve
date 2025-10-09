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
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-in">
              
              {/* Main Headline */}
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

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                From websites to intelligent automation — we deliver end-to-end digital solutions that{" "}
                <span className="text-blue-400 font-semibold">grow businesses</span> and{" "}
                <span className="text-cyan-400 font-semibold">scale operations</span>.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-white font-medium">Custom Development</span>
                </div>
                
                <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-white font-medium">AI Integration</span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm w-fit">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-white font-medium">Enterprise Security</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                  onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-600 hover:border-gray-500 text-white px-8 py-6 text-lg rounded-xl bg-transparent hover:bg-white/5 transition-all"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

            </div>

            {/* Right Column - Stats & Tech Card */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#1e2942] rounded-2xl p-6 border border-blue-500/10">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                    <div className="text-gray-400 text-sm">Projects Delivered</div>
                  </div>
                  
                  <div className="bg-[#1e2942] rounded-2xl p-6 border border-blue-500/10">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-gray-400 text-sm">Happy Clients</div>
                  </div>
                </div>

                {/* Technologies Section */}
                <div className="bg-[#1e2942] rounded-2xl p-6 border border-blue-500/10">
                  <h3 className="text-white font-bold text-lg mb-4">Technologies We Master</h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {["React", "Node.js", "Python", "AI/ML", "Cloud"].map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-white text-sm font-medium hover:bg-blue-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-white text-sm font-medium hover:bg-blue-500/20 transition-colors">
                      Blockchain
                    </span>
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
