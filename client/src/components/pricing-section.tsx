import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Gift, Sparkles } from "lucide-react";

const setupIncludes = [
  "Full website design & development",
  "AI-powered quote system",
  "AI garden design generator",
  "HubSpot CRM integration",
  "n8n automation workflows",
  "Complete white-labelling",
  "Your own domain setup",
  "Complete onboarding",
];

const monthlyIncludes = [
  "Premium hosting & SSL",
  "24/7 error monitoring & handling",
  "AI credits for design generation",
  "Continuous feature upgrades",
  "SEO optimisation & updates",
  "Priority support",
  "Performance optimisation",
  "Security updates & backups",
];

export function PricingSection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything included. No hidden fees.
          </p>
        </div>

        {/* Offer banner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-accent/10 via-amber-50 to-accent/10 rounded-xl border border-accent/20 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Gift size={24} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                  <Sparkles size={16} className="text-accent" />
                  Limited Time Offer
                </p>
                <p className="text-slate-600">
                  First month AI FREE + £250 in free ad spend via Meta & Google Ads
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Setup */}
          <Card className="border-2 border-amber-400/50 glow-ring" data-testid="card-pricing-setup">
            <CardContent className="p-8">
              <div className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-medium mb-6">
                Setup
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">£3,499</span>
                <p className="text-slate-500 mt-1">One-time setup fee</p>
              </div>
              <p className="text-slate-600 mb-6">
                Everything to get you up and running
              </p>
              <ul className="space-y-3 mb-8">
                {setupIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="text-sm font-medium text-slate-900 flex items-center gap-2">
                  <Gift size={16} className="text-accent" />
                  Bonus: £250 free ad spend
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Monthly */}
          <Card className="border-2 border-amber-400/50 glow-ring" data-testid="card-pricing-monthly">
            <CardContent className="p-8">
              <div className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-medium mb-6">
                Monthly
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">£199</span>
                <span className="text-slate-500">/month</span>
                <p className="text-accent font-medium mt-1">First month FREE</p>
                <p className="text-slate-500 text-sm mt-1">Cancel anytime - no tie-in</p>
              </div>
              <p className="text-slate-600 mb-6">
                Rolling monthly - no long-term contract
              </p>
              <ul className="space-y-3 mb-8">
                {monthlyIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-slate-900 flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" />
                  First month AI credits FREE
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ROI callout */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Pays for Itself in 2-3 Extra Jobs
            </h3>
            <p className="text-slate-600 mb-6">
              Stop losing jobs to tyre-kickers and slow follow-ups. The system filters unqualified leads, 
              sets price expectations, and works 24/7 - so you close more jobs without working more hours.
            </p>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25" onClick={handleContactClick} data-testid="button-pricing-cta">
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
