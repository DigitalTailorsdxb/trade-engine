import { PlanCards } from "@/components/plan-cards";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Website plans</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            A better website, built for your trade
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Three clear monthly plans. Choose the website and support that fit your business.
          </p>
        </div>

        <PlanCards />

        <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto">
          Complete Package is exclusively for landscaping companies: £300/month total, including instant quoting and AI garden design. The other two plans serve businesses across the trades.
        </p>
      </div>
    </section>
  );
}
