import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Clock, TrendingUp } from "lucide-react";

declare global {
  interface Window {
    VANTA: {
      BIRDS: (options: Record<string, unknown>) => { destroy: () => void };
    };
  }
}

export function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (vantaEffect) return;

      const canvas = document.createElement("canvas");
      const webglSupported = !!(
        canvas.getContext("webgl") || canvas.getContext("webgl2")
      );

      if (!webglSupported) {
        return;
      }

      const loadScript = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => resolve();
          script.onerror = reject;
          document.head.appendChild(script);
        });
      };

      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js");

        if (vantaRef.current && window.VANTA) {
          const effect = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0xfafafa,
            color1: 0xe1ff,
            color2: 0x3b3b72,
            colorMode: "variance",
            birdSize: 2.0,
            wingSpan: 23.0,
            speedLimit: 4.0,
            separation: 41.0,
            alignment: 32.0,
            cohesion: 42.0,
            quantity: 4.0,
          });
          setVantaEffect(effect);
        }
      } catch {
        // Silently fail - fallback background will show
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleDemoClick = () => {
    window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={vantaRef} className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-[#fafafa]">
      {!vantaEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      )}

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
