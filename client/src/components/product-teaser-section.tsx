import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Gift, CheckCircle2 } from "lucide-react";

export function ProductTeaserSection() {
  const handlePricingClick = () => {
    const element = document.querySelector("#pricing");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Our Flagship Product</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Landscaping AI Engine
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The complete AI-powered website solution built specifically for landscaping businesses.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto cursor-pointer group"
          onClick={handlePricingClick}
          data-testid="link-product-teaser"
        >
          <Card className="overflow-hidden border-0 glow-ring transition-all duration-500" data-testid="card-product-teaser">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-accent via-accent to-amber-400 p-4">
                <div className="flex items-center justify-center gap-3">
                  <Gift size={18} className="text-white" />
                  <p className="text-sm font-medium text-white">
                    Limited time offer: 50% off setup fee
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-12">
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                  <div className="text-center p-4 sm:p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                    <p className="text-sm font-medium text-slate-500 mb-2">From</p>
                    <p className="text-3xl sm:text-4xl font-bold text-primary">£149</p>
                    <p className="text-slate-500 text-sm mt-1">/month</p>
                  </div>
                  <div className="text-center p-4 sm:p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                    <p className="text-sm font-medium text-slate-500 mb-2">Most Popular</p>
                    <p className="text-3xl sm:text-4xl font-bold text-primary">£199</p>
                    <p className="text-slate-500 text-sm mt-1">/month</p>
                  </div>
                  <div className="text-center p-4 sm:p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                    <p className="text-sm font-medium text-slate-500 mb-2">Full System</p>
                    <p className="text-3xl sm:text-4xl font-bold text-primary">£249</p>
                    <p className="text-slate-500 text-sm mt-1">/month</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
                  {[
                    "AI Quote System",
                    "AI Visualisation",
                    "HubSpot CRM",
                    "White-labelled",
                    "Automated Emails",
                    "SEO Included",
                    "No Contracts",
                    "Cancel Anytime"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button size="lg" className="group/btn bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25" onClick={handlePricingClick}>
                    <Sparkles size={16} className="mr-2" />
                    View Plans
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
