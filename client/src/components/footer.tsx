import { Link } from "wouter";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import logoImageDark from "@assets/ChatGPT_Image_Jan_29,_2026,_12_14_24_AM_1769645677011.png";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: SiFacebook, href: "https://www.facebook.com/profile.php?id=61587082542110", label: "Facebook" },
  { icon: SiInstagram, href: "https://www.instagram.com/trade_engine_uk", label: "Instagram" },
  { icon: SiYoutube, href: "https://www.youtube.com/@Trade_Engine_UK", label: "YouTube" },
];

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={logoImageDark} 
                alt="Trade Engine" 
                className="h-24 sm:h-32 md:h-40 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              AI-powered websites that convert leads into customers. Built specifically
              for trade businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon size={18} className="text-slate-400" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-slate-400 hover:text-white transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Trade Engine AI Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
