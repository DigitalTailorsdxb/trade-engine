import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react";

export function CTASection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-md p-8 md:p-12 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 mb-6">
              <Zap size={16} className="fill-current" />
              <span className="text-sm font-medium">Transform Your Business</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Trade Business?
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join the growing number of trade businesses using AI-powered websites to
              convert more leads and close more deals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={handleContactClick}
                data-testid="button-final-cta-demo"
              >
                Book Your Demo
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-white/5"
                asChild
                data-testid="button-final-cta-call"
              >
                <a href="tel:+447877934782">
                  <Phone size={18} className="mr-2" />
                  Or Call Us
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <p className="text-sm text-white/60">
              No obligation. Free consultation. See results in your first month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
