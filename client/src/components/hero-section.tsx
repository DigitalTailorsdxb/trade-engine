import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logoImage from "@assets/ChatGPT_Image_Jan_28,_2026,_11_37_25_PM_1769643450348.png";

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
            backgroundColor: 0xf8fafc,
            color1: 0xf59e0b,
            color2: 0xf97316,
            colorMode: "lerp",
            birdSize: 1.5,
            wingSpan: 20.0,
            speedLimit: 3.0,
            separation: 50.0,
            alignment: 40.0,
            cohesion: 40.0,
            quantity: 3.0,
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
    <section ref={vantaRef} className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
      {!vantaEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100" />
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Subtle badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase">For Trade Businesses</span>
          </div>

          {/* Main headline - clean and impactful */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">AI-Powered</span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Website Engine
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            Instant quotes. AI design visualisation. Automated follow-ups.
            <span className="text-slate-900 font-medium"> All white-labelled to your brand.</span>
          </p>

          {/* CTA Buttons - clean and prominent */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
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
              onClick={handleContactClick}
              className="text-base"
              data-testid="button-hero-contact"
            >
              Book a Call
            </Button>
          </div>

          {/* Stats - minimal and elegant */}
          <div className="flex gap-12 border-t border-slate-200 pt-8">
            <div>
              <p className="text-3xl font-bold text-amber-600">15s</p>
              <p className="text-sm text-slate-500 mt-1">Quote generation</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-600">90s</p>
              <p className="text-sm text-slate-500 mt-1">AI design delivery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-600">24/7</p>
              <p className="text-sm text-slate-500 mt-1">Automated follow-up</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
