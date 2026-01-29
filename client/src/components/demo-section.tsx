import { Button } from "@/components/ui/button";
import { ExternalLink, Play, CheckCircle2 } from "lucide-react";

const highlights = [
  "Interactive 6-step quote builder",
  "Real-time price calculations",
  "AI garden visualisation",
  "Automated PDF generation",
  "Mobile-responsive design",
];

export function DemoSection() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Play size={16} className="fill-current" />
            <span className="text-sm font-medium">Live Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Try the Exact System{" "}
            <span className="text-primary">Your Customers Will Use</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Premium Landscapes — a fully functional demo of what your white-labelled
            website will look and feel like.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Demo Preview */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-md border shadow-lg overflow-hidden">
              {/* Browser mockup header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-background rounded-md text-xs text-muted-foreground flex items-center gap-2">
                    <span>premiumlandscapes.co.uk</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>

              {/* Demo content placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Play size={40} className="text-primary fill-current ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Premium Landscapes Demo
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Click below to explore the live demo and see how your customers will
                    interact with your new website.
                  </p>
                  <Button asChild data-testid="button-demo-external">
                    <a
                      href="https://www.premium-landscapes.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Open Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-md border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                What You'll See in the Demo
              </h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                    data-testid={`text-demo-highlight-${index}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-primary/5 rounded-md border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Pro tip:</span> Try
                  going through the full quote process to see how smooth the experience
                  is for your customers.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Button
                className="w-full"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-demo-cta"
              >
                Want This for Your Business?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
