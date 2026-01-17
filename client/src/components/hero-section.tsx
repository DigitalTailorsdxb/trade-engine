import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Clock, TrendingUp } from "lucide-react";

export function HeroSection() {
  const handleDemoClick = () => {
    const element = document.querySelector("#demo");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Zap size={16} className="fill-current" />
              <span className="text-sm font-medium">For Trade Businesses</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              AI-Powered Websites That{" "}
              <span className="text-primary">Convert Leads</span> Into Customers
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Give your trade business an unfair advantage with instant quotes, AI design
              visualization, and automated follow-ups — all white-labeled to your brand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
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
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2 min</p>
                  <p className="text-sm text-muted-foreground">Quote time</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">40%</p>
                  <p className="text-sm text-muted-foreground">More leads</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Zap size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24/7</p>
                  <p className="text-sm text-muted-foreground">Lead capture</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Hero visual */}
          <div className="relative">
            <div className="relative bg-card rounded-md border shadow-xl overflow-hidden">
              {/* Browser mockup header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-background rounded-md text-xs text-muted-foreground">
                    premiumlandscapes.co.uk
                  </div>
                </div>
              </div>
              
              {/* Content preview */}
              <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="space-y-4">
                  {/* Quote form mockup */}
                  <div className="bg-card rounded-md border p-4">
                    <p className="font-semibold text-foreground mb-3">Get Your Instant Quote</p>
                    <div className="space-y-3">
                      <div className="h-10 bg-muted rounded-md flex items-center px-3">
                        <span className="text-sm text-muted-foreground">What type of project?</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-10 bg-primary/10 border border-primary/30 rounded-md flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">Garden Design</span>
                        </div>
                        <div className="h-10 bg-muted rounded-md flex items-center justify-center">
                          <span className="text-sm text-muted-foreground">Patio & Decking</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-primary rounded-full" />
                        </div>
                        <span className="text-xs text-muted-foreground">Step 1 of 6</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI visualization preview */}
                  <div className="flex gap-3">
                    <div className="flex-1 bg-card rounded-md border p-3">
                      <p className="text-xs text-muted-foreground mb-2">Before</p>
                      <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-md flex items-center justify-center">
                        <span className="text-2xl">🏡</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-card rounded-md border p-3">
                      <p className="text-xs text-muted-foreground mb-2">AI Generated</p>
                      <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-md flex items-center justify-center">
                        <span className="text-2xl">🌳</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-md shadow-lg">
              <p className="text-sm font-bold">90 sec AI Designs</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg">
              <p className="text-sm font-bold">Auto PDF Quotes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
