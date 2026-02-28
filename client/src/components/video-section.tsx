import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import thumbnailImage from "@assets/ChatGPT_Image_Feb_28,_2026,_12_51_22_PM_1772283436093.png";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    setIsPlaying(true);
    await new Promise((r) => setTimeout(r, 100));
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = false;
      await video.play();
    } catch {
      try {
        video.muted = true;
        await video.play();
      } catch {
        // silently fail
      }
    }
  };

  const handleTogglePause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleDemoClick = () => {
    window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase">Live System Walkthrough</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Watch the System Build a Quote Live
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From garden size → budget → full price + design in 90 seconds
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={isPlaying ? handleTogglePause : handlePlay}
            data-testid="video-walkthrough"
          >
            {!isPlaying ? (
              <div className="relative">
                <img
                  src={thumbnailImage}
                  alt="Watch the system build a quote live"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              </div>
            ) : (
              <video
                ref={videoRef}
                src="/demo-walkthrough.mp4"
                className="w-full aspect-video object-cover"
                onEnded={handleVideoEnded}
                playsInline
                data-testid="video-player"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleDemoClick}
            className="group text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25"
            data-testid="button-video-demo"
          >
            <Play size={18} className="mr-2" />
            Try the Demo
            <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base border-slate-600 text-white hover:bg-slate-800"
            data-testid="button-video-book-call"
          >
            <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
