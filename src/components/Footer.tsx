import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram,
  MessageCircle,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        "Web Development",
        "AI Automation",
        "Custom Solutions",
        "E-commerce",
        "Consulting"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Blog",
        "Case Studies"
      ]
    },
    {
      title: "Resources",
      links: [
        "Support",
        "FAQ",
        "Help Center",
        "Tutorials",
        "Community"
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "FAQ", href: "/faq" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/javed-jabbar/", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.link/b6qqva", label: "WhatsApp" },
    { icon: Instagram, href: "https://www.instagram.com/code._.architects?igsh=OHY4NG5xd2JpdTEy", label: "Instagram" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">Bitwork</span>
            </a>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses with cutting-edge web development and AI automation solutions. 
              Your success is our mission.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">contact@bitworkpvtltd.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+92-325-5339295</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Islamabad, Pakistan</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Available 24/7 for your business needs
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-smooth"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={typeof link === 'object' ? link.href : "#"}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {typeof link === 'object' ? link.name : link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest insights on AI, web development, and digital transformation.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none transition-smooth"
                />
              </div>
              <Button variant="hero" size="lg" className="group">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bitwork Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground">
                Built with ❤️ and cutting-edge tech
              </span>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <a href="/privacy" className="hover:text-primary transition-smooth">Privacy</a>
                <a href="/terms" className="hover:text-primary transition-smooth">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;