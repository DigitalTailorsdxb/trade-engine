import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Quoting System",
    price: "£149",
    originalSetup: "£499",
    discountedSetup: "£249",
    bestFor: "Best for: Landscapers with existing websites",
    popular: false,
    features: [
      "Automated quote generation",
      "Embed into existing website",
      "Email delivery to customers",
      "Basic CRM capture (HubSpot)",
      "7-day deployment",
    ],
  },
  {
    name: "Quoting + AI Design",
    price: "£199",
    originalSetup: "£499",
    discountedSetup: "£249",
    bestFor: "Best for: Maximum conversion from enquiries",
    popular: true,
    features: [
      "Everything in Quoting tier",
      "AI photorealistic garden designs",
      "Premium email templates",
      "Full HubSpot CRM integration",
      "10-day deployment",
    ],
  },
  {
    name: "Full System",
    price: "£249",
    originalSetup: "£999",
    discountedSetup: "£499",
    bestFor: "Best for: Complete digital presence",
    popular: false,
    features: [
      "Everything in Quoting + Design tier",
      "Custom white-label website built for you",
      "Your branding throughout",
      "Premium positioning",
      "Priority support",
      "14-day deployment",
    ],
  },
];

export function PricingSection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No contracts. Cancel anytime with 30 days notice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {tiers.map((tier, index) => (
            <div key={index} className={`relative ${tier.popular ? "md:-mt-4 md:mb-[-16px]" : ""}`}>
              {tier.popular && (
                <div className="absolute -top-4 right-6 z-10">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg" data-testid="badge-most-popular">
                    Most Popular
                  </span>
                </div>
              )}
              <Card
                className={`h-full border-2 transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular
                    ? "border-amber-400 shadow-xl shadow-amber-500/10"
                    : "border-slate-200 hover:border-amber-200 hover:shadow-lg"
                }`}
                data-testid={`card-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{tier.name}</h3>

                  <div className="mb-2">
                    <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    <span className="text-slate-500">/month</span>
                  </div>

                  <div className="mb-6">
                    <span className="text-slate-400 line-through text-sm">{tier.originalSetup}</span>{" "}
                    <span className="text-amber-600 font-bold">{tier.discountedSetup}</span>{" "}
                    <span className="text-slate-500 text-xs">setup (first 10 customers)</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={handleContactClick}
                    className={`w-full ${
                      tier.popular
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25"
                        : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0"
                    }`}
                    data-testid={`button-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </Button>

                  <p className="text-xs text-slate-500 italic text-center mt-4">{tier.bestFor}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto">
          All plans include unlimited quotes, unlimited AI designs, and free updates. No hidden fees.
        </p>
      </div>
    </section>
  );
}
