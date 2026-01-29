import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/ChatGPT_Image_Jan_28,_2026,_11_37_25_PM_1769643450348.png";


const navLinks = [
  { href: "/", label: "Home", isPage: true },
  { href: "/features", label: "Features", isPage: true },
  { href: "/pricing", label: "Pricing", isPage: true },
  { href: "/faq", label: "FAQ", isPage: true },
  { href: "#contact", label: "Contact", isPage: false },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    if (location !== "/") {
      window.location.href = "/#contact";
      return;
    }
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="link-logo">
            <img 
              src={logoImage} 
              alt="Trade Engine" 
              className="h-32 sm:h-40 md:h-48 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0"
              data-testid="button-test-demo"
            >
              <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer">
                Test the Demo
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                    data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                    data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0"
                  data-testid="button-mobile-test-demo"
                >
                  <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                    Test the Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
