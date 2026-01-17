import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, ArrowRight, Calculator } from "lucide-react";

const setupIncludes = [
  "Full website design & development",
  "AI-powered quote system",
  "AI garden design generator",
  "CRM integration (Airtable, Zoho, etc.)",
  "n8n automation workflows",
  "Complete white-labeling",
  "Your own domain setup",
  "Staff training session",
];

const monthlyIncludes = [
  "Premium hosting & SSL",
  "Ongoing maintenance",
  "AI credits for design generation",
  "Priority support",
  "Regular feature updates",
  "Performance optimization",
];

export function PricingSection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Zap size={16} className="fill-current" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Invest in Growth,{" "}
            <span className="text-primary">Not Guesswork</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with everything included. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Setup Fee */}
          <Card className="relative overflow-visible" data-testid="card-pricing-setup">
            <div className="absolute -top-3 left-6">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                One-Time
              </span>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">£4,995</span>
                <span className="text-muted-foreground">setup</span>
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Complete setup and configuration of your Trade Engine website
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {setupIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Monthly Fee */}
          <Card className="relative overflow-visible border-primary" data-testid="card-pricing-monthly">
            <div className="absolute -top-3 left-6">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                Ongoing
              </span>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">£199</span>
                <span className="text-muted-foreground">/month</span>
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Keep everything running smoothly with ongoing support
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {monthlyIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* ROI Callout */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-md border p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calculator size={32} className="text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  ROI After Just 2-3 Extra Jobs Per Month
                </h3>
                <p className="text-muted-foreground">
                  Most trade businesses charge £2,000+ per job. With our average 40%
                  increase in quote requests, the system pays for itself in the first
                  month — and keeps delivering returns every month after.
                </p>
              </div>
              <Button onClick={handleContactClick} data-testid="button-pricing-cta">
                Book Your Demo
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Questions about pricing?{" "}
            <button
              onClick={handleContactClick}
              className="text-primary hover:underline font-medium"
              data-testid="button-pricing-questions"
            >
              Get in touch
            </button>{" "}
            — we're happy to discuss your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
}
