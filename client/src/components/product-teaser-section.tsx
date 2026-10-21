import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { PlanCards } from "@/components/plan-cards";

export function ProductTeaserSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-amber-700">Website plans</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">A complete website for your trade.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Choose a premium multi-page website, add monthly SEO updates, or choose Complete Package if you run a landscaping company.</p>
        </div>
        <PlanCards />
        <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-amber-50 p-5 text-center text-sm leading-relaxed text-slate-700">
          <Check size={16} className="mr-2 inline text-amber-800" />
          Complete Package is exclusively for landscaping companies at £300/month total. Instant quoting and AI garden design are only included in this plan.
        </div>
        <div className="mt-8 text-center"><Link href="/pricing" className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-amber-800">See all plan details <ArrowRight size={16} /></Link></div>
      </div>
    </section>
  );
}
