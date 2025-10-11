import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import bitworkLogo from "@/assets/bitwork-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // ✅ Run immediately on mount so background shows correctly after refresh
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/bitworkpvtltd/", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/bitworkpvtltd/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/bitwork_pvt_ltd/", label: "Instagram" }
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-smooth ${
        isScrolled
          ? "bg-gray-50/98 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
          : "bg-gray-50/95 backdrop-blur-sm" // ✅ default visible background
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={bitworkLogo}
              alt="Bitwork Logo"
              className="h-16 w-auto max-w-48 object-contain filter drop-shadow-md"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-gray-800 hover:text-blue-700 transition-smooth relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Social */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/60 bg-gray-50/98 backdrop-blur-md">
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-gray-800 hover:text-blue-700 hover:bg-gray-100 rounded-lg transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-4 px-4 pt-4 border-t border-gray-200/50">
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-700 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
