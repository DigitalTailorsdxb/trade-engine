import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Gift, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export function ProductTeaserSection() {
  const [, setLocation] = useLocation();
  
  const handleLearnMore = () => {
    setLocation("/features");
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Our Flagship Product</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Landscaping AI Engine
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The complete AI-powered website solution built specifically for landscaping businesses.
          </p>
        </div>

        {/* Main card */}
        <div 
          className="max-w-4xl mx-auto cursor-pointer group" 
          onClick={handleLearnMore} 
          data-testid="link-product-teaser"
        >
          <Card className="overflow-hidden border-0 glow-ring transition-all duration-500" data-testid="card-product-teaser">
            <CardContent className="p-0">
              {/* Offer banner - elegant accent strip */}
              <div className="bg-gradient-to-r from-accent via-accent to-amber-400 p-4">
                <div className="flex items-center justify-center gap-3">
                  <Gift size={18} className="text-white" />
                  <p className="text-sm font-medium text-white">
                    Limited Time: First month AI FREE + £250 in free ad spend
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-12">
                {/* Pricing - clean two-column layout */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
                  <div className="text-center sm:text-left p-4 sm:p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 glow-ring-subtle">
                    <p className="text-sm font-medium text-slate-500 mb-2">Setup Fee</p>
                    <div className="flex items-baseline gap-1 justify-center sm:justify-start">
                      <p className="text-4xl sm:text-5xl font-bold text-primary">£3,499</p>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">One-time payment</p>
                  </div>
                  <div className="text-center sm:text-left p-4 sm:p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 glow-ring-subtle">
                    <p className="text-sm font-medium text-slate-500 mb-2">Monthly</p>
                    <div className="flex items-baseline gap-1 justify-center sm:justify-start">
                      <p className="text-4xl sm:text-5xl font-bold text-primary">£199</p>
                      <span className="text-slate-500">/mo</span>
                    </div>
                    <p className="text-sm text-accent font-medium mt-2">First month FREE</p>
                    <p className="text-xs text-slate-500 mt-1">Cancel anytime - no tie-in</p>
                  </div>
                </div>

                {/* Features grid - clean checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
                  {[
                    "New Website",
                    "AI Quote System",
                    "AI Visualisation",
                    "HubSpot CRM",
                    "Automation",
                    "White-labelled",
                    "SEO Included",
                    "24/7 Support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button size="lg" className="group/btn bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25" onClick={handleLearnMore}>
                    <Sparkles size={16} className="mr-2" />
                    Explore Features
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
