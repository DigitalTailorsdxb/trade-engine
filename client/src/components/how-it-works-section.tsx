import { Phone, Settings, GraduationCap, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description:
      "We start by understanding your business, services, and what makes you unique. This helps us tailor everything to your needs.",
    duration: "30 min call",
  },
  {
    icon: Settings,
    number: "02",
    title: "Setup & Configuration",
    description:
      "We configure everything with your branding — logo, colours, contact details, pricing, and automation workflows.",
    duration: "1 week",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Training",
    description:
      "Quick walkthrough of your new system. We show you how to manage leads, adjust pricing, and make the most of every feature.",
    duration: "1 hour session",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Go Live",
    description:
      "Your new website goes live and starts converting leads immediately. Watch the quotes roll in from day one.",
    duration: "Launch day",
  },
  {
    icon: HeadphonesIcon,
    number: "05",
    title: "Ongoing Support",
    description:
      "We handle all updates, optimizations, and technical issues. You focus on running your business — we've got your back.",
    duration: "Continuous",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Rocket size={16} />
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From Zero to Converting Leads{" "}
            <span className="text-primary">in Just One Week</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've streamlined the entire process so you can focus on what matters — running
            your business while we handle the tech.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative md:flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`card-step-${index}`}
                >
                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-card rounded-md border p-6 ${
                        isLeft ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                      } max-w-md`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Mobile number badge */}
                  <div className="md:hidden absolute -left-2 top-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-accent/10 rounded-md border border-accent/20">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <Rocket size={24} className="text-accent-foreground" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Ready to get started?</p>
              <p className="text-sm text-muted-foreground">
                Most clients see their first lead within 48 hours of launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
