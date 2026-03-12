import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Quote & Design",
    price: "£199",
    setup: "£249",
    bestFor: "Best for landscapers who want to qualify enquiries faster.",
    popular: false,
    paymentLink: "https://buy.stripe.com/5kQ8wQgqy4fg6sF3V96g801",
    features: [
      "AI instant quote generation",
      "AI photorealistic garden design images",
      "Email delivery to customers",
      "Lead capture via CRM (HubSpot integration)",
      "Embed system into existing website",
      "7-day deployment",
    ],
  },
  {
    name: "Full System",
    price: "£299",
    setup: "£499",
    bestFor: "Best for landscapers who want the system running their entire enquiry process.",
    popular: true,
    paymentLink: "",
    features: [
      "Everything in Quote & Design plan",
      "Brand new fully white-labelled website",
      "AI quoting and design system integrated",
      "Conversion-optimised enquiry flow",
      "Your branding throughout",
      "CRM integration",
      "Priority deployment",
      "Unlimited quotes and AI designs",
    ],
  },
  {
    name: "Premium Package",
    price: "£499",
    setup: "£499",
    bestFor: "The full system plus ongoing marketing, content creation, and business development.",
    popular: false,
    paymentLink: "",
    features: [
      "Everything in Full System",
      "Social media content creation",
      "Ads manager setup",
      "Lead generation strategy support",
      "Priority support",
      "Early access to new features",
      "Ongoing optimisation and updates",
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
            <div key={index} className="relative h-full">
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <Card
                className={`h-full border-2 transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular
                    ? "border-amber-400 shadow-xl shadow-amber-500/20"
                    : "border-amber-400 shadow-lg hover:shadow-xl"
                }`}
                data-testid={`card-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{tier.name}</h3>

                  <div className="mb-1">
                    <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    <span className="text-slate-500"> / month</span>
                  </div>

                  <div className="mb-6">
                    <span className="text-slate-500 text-sm">{tier.setup} setup</span>{" "}
                    <span className="text-amber-600 text-xs">(limited time offer)</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    {tier.paymentLink ? (
                      <a href={tier.paymentLink} target="_blank" rel="noopener noreferrer">
                        <Button
                          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0"
                          data-testid={`button-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          Buy Now
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </a>
                    ) : (
                      <Button
                        onClick={handleContactClick}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0"
                        data-testid={`button-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        Get Started
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    )}
                    <p className="text-xs text-slate-500 italic text-center mt-4">{tier.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto">
          All plans include unlimited quotes, unlimited AI designs, and free system updates. No hidden fees.
        </p>
      </div>
    </section>
  );
}
