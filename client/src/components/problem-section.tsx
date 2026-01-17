import { AlertCircle, Clock, UserX, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Slow Quote Turnaround",
    description: "Customers wait days for quotes while competitors swoop in",
  },
  {
    icon: UserX,
    title: "Lost Leads",
    description: "Website visitors leave without converting — no capture, no follow-up",
  },
  {
    icon: AlertCircle,
    title: "No Follow-Up System",
    description: "Leads go cold because you're too busy working to chase them",
  },
  {
    icon: Globe,
    title: "Outdated Website",
    description: "Your online presence doesn't reflect the quality of your work",
  },
];

const solutions = [
  "Instant quotes in under 2 minutes",
  "24/7 automated lead capture",
  "AI-powered follow-up sequences",
  "Professional, modern design",
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your competitors are still using contact forms.
            <br />
            <span className="text-primary">You'll be closing deals.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Pain Points */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertCircle size={18} className="text-destructive" />
              </div>
              The Old Way
            </h3>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-md border"
                  data-testid={`card-pain-point-${index}`}
                >
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <point.icon size={20} className="text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 size={18} className="text-accent" />
              </div>
              The Trade Engine Way
            </h3>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-md border p-6">
              <div className="space-y-4 mb-6">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    data-testid={`text-solution-${index}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-accent-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{solution}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <ArrowRight size={18} />
                <span>More leads, less manual work</span>
              </div>
            </div>

            {/* Result stat */}
            <div className="mt-6 p-4 bg-accent/10 rounded-md border border-accent/20">
              <p className="text-lg font-semibold text-foreground">
                Average <span className="text-accent">40% increase</span> in quote requests
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Trade businesses see results within the first month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
