import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { LaunchBanner } from "@/components/launch-banner";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

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

const comparison = [
  { item: "Custom website design", traditional: "£3,500", tradeEngine: "Included" },
  { item: "AI quote system development", traditional: "£5,500", tradeEngine: "Included" },
  { item: "AI visualisation system", traditional: "£6,000", tradeEngine: "Included" },
  { item: "CRM integration", traditional: "£1,500", tradeEngine: "Included" },
  { item: "Mobile optimisation", traditional: "£1,000", tradeEngine: "Included" },
  { item: "Content writing", traditional: "£500", tradeEngine: "Included" },
  { item: "Hosting (per year)", traditional: "£500", tradeEngine: "Included" },
  { item: "Ongoing support (per year)", traditional: "£1,500", tradeEngine: "Included" },
];

export default function Pricing() {
  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pricing | From £149/Month | Trade Engine</title>
        <meta name="description" content="Trade Engine pricing from £149/month. Three plans: Quoting System, Quoting + AI Design, and Full System. 50% off setup — limited time offer. No contracts, cancel anytime." />
        <link rel="canonical" href="https://trade-engine.co.uk/pricing" />
        <meta property="og:title" content="Pricing | From £149/Month | Trade Engine" />
        <meta property="og:description" content="Three plans from £149/month. 50% off setup — limited time offer. No contracts, cancel anytime." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/pricing" />
      </Helmet>
      <LaunchBanner />
      <Navigation />

      <section className="pt-40 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            No contracts. Cancel anytime with 30 days notice.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative ${tier.popular ? "md:-mt-4 md:mb-[-16px]" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 right-6 z-10">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
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
                  data-testid={`card-pricing-page-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
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
                      <span className="text-slate-500 text-xs">setup (limited time offer)</span>
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
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25"
                      data-testid={`button-pricing-page-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
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

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compare the Value
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building these features separately would cost £20,000+ with traditional agencies.
            </p>
          </div>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-slate-900">Traditional Agency</th>
                    <th className="text-center p-4 font-semibold text-amber-600 bg-amber-50">Trade Engine</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-t border-slate-200">
                      <td className="p-4 text-slate-700">{row.item}</td>
                      <td className="p-4 text-center text-slate-500">{row.traditional}</td>
                      <td className="p-4 text-center bg-amber-50">
                        <span className="inline-flex items-center gap-1 text-amber-600 font-semibold">
                          <Check className="h-4 w-4" />
                          {row.tradeEngine}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-slate-300 bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Total Investment</td>
                    <td className="p-4 text-center font-bold text-slate-700">£20,000+</td>
                    <td className="p-4 text-center bg-amber-100">
                      <span className="font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-lg">
                        From £249 + £149/mo
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <Rocket className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Real Question: What's Your ROI?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            If the average landscaping job is worth £5,000 - £15,000, you only need
            <span className="text-amber-400 font-bold"> one extra customer per month</span> to
            see a massive return on your investment.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-4xl font-bold text-amber-500 mb-2">40%+</p>
              <p className="text-slate-300">Higher conversion with AI visualisation</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-4xl font-bold text-amber-500 mb-2">24/7</p>
              <p className="text-slate-300">Lead capture while you sleep</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-4xl font-bold text-amber-500 mb-2">15 sec</p>
              <p className="text-slate-300">Instant quotes vs days of waiting</p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg"
            data-testid="button-pricing-cta-bottom"
            onClick={handleContactClick}
          >
            Start Winning More Customers
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Pricing Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                What happens if I want to cancel?
              </h3>
              <p className="text-slate-600">
                You can cancel your monthly subscription at any time with 30 days notice.
                No penalties, no questions asked. We earn your business every month.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Are there any hidden fees?
              </h3>
              <p className="text-slate-600">
                No. Your plan covers everything listed. The only additional cost would be if you
                exceed the included AI visualisation credits (most businesses never do).
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                How long does setup take?
              </h3>
              <p className="text-slate-600">
                Depends on your plan: 7 days for Quoting System, 10 days for Quoting + AI Design,
                and 14 days for Full System. We start with a kickoff call to gather your requirements.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Can I upgrade my plan later?
              </h3>
              <p className="text-slate-600">
                Absolutely. You can upgrade from any tier to a higher one at any time. We'll
                handle the migration and only charge the difference in setup fees.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-amber-100 mb-4 max-w-2xl mx-auto">
            Join landscaping businesses already using Trade Engine to win more customers.
          </p>
          <p className="text-amber-200 mb-8">
            No contracts - cancel anytime with 30 days notice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-amber-600 border-white hover:bg-amber-50 px-8 py-6 text-lg"
              data-testid="button-pricing-contact"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg"
              data-testid="button-pricing-demo"
              onClick={() => window.open("https://www.premium-landscapes.co.uk", "_blank")}
            >
              Try the Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
