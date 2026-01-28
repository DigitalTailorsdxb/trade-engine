import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Clock, TrendingUp } from "lucide-react";

export function HeroSection() {
  const handleDemoClick = () => {
    window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Zap size={16} className="fill-current" />
            <span className="text-sm font-medium">For Trade Businesses</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            AI-Powered Website Engine
          </h1>
          <p className="text-2xl sm:text-3xl text-muted-foreground mb-8">
            Powering your business using AI
          </p>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Give your trade business an unfair advantage with instant quotes, AI design
            visualisation, and automated follow-ups — all white-labelled to your brand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={handleDemoClick} data-testid="button-hero-demo">
              <Play size={18} className="mr-2" />
              See It In Action
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              data-testid="button-hero-contact"
            >
              Book a Call
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock size={20} className="text-accent" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">15 sec</p>
                <p className="text-sm text-muted-foreground">Quote time</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp size={20} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">90 sec</p>
                <p className="text-sm text-muted-foreground">AI design</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Zap size={20} className="text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">AI runs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
