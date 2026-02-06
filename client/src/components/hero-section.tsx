import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const handleDemoClick = () => {
    window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtle badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase">For Trade Businesses</span>
          </div>

          {/* Main headline - clean and impactful */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">Quote-First</span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Website Engine for Trade Businesses
            </span>
          </h1>

          {/* Subheadline */}
          <div className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-2 text-center space-y-4">
            <p>Instant quotes and pricing-led designs generated directly from real costs — fully automated, 24/7.</p>
            <p className="text-slate-900 font-medium">Designs are created from the quote, so pricing, scope and customer expectations always align.</p>
          </div>

          {/* CTA Buttons - clean and prominent */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
            <Button 
              size="lg" 
              onClick={handleDemoClick}
              className="group text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25"
              data-testid="button-hero-demo"
            >
              <Play size={18} className="mr-2" />
              See It In Action
              <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base"
              data-testid="button-hero-contact"
            >
              <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>

          {/* Stats - minimal and elegant */}
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 border-t border-slate-200 pt-8 justify-center">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-amber-600">15s</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Quote generation</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-amber-600">90s</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">AI design delivery</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-amber-600">24/7</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
