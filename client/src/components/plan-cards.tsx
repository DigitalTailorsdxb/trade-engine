import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { plans } from "@/lib/pricing-data";

export function PlanCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-5 ${compact ? "md:grid-cols-3" : "md:grid-cols-3"} max-w-6xl mx-auto`}>
      {plans.map((plan, index) => (
        <article
          key={plan.slug}
          className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
            index === 2
              ? "border-amber-500 bg-slate-950 text-white shadow-xl"
              : "border-slate-200 bg-white text-slate-900"
          }`}
          data-testid={`card-pricing-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {index === 2 && (
            <span className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-950">
              Complete package
            </span>
          )}
          <h3 className="font-semibold text-lg">{plan.name}</h3>
          <p className={`mt-3 min-h-14 text-sm leading-relaxed ${index === 2 ? "text-slate-300" : "text-slate-600"}`}>
            {plan.summary}
          </p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className={`text-4xl font-semibold tracking-tight ${index === 2 ? "text-amber-300" : "text-slate-950"}`}>
              {plan.price}
            </span>
            <span className={index === 2 ? "text-slate-400" : "text-slate-500"}>/ month</span>
          </div>
          <ul className="mt-7 flex-1 space-y-3">
            {plan.details.map((detail) => (
              <li key={detail} className={`flex gap-3 text-sm leading-relaxed ${index === 2 ? "text-slate-200" : "text-slate-700"}`}>
                <Check className={`mt-0.5 h-4 w-4 shrink-0 ${index === 2 ? "text-amber-300" : "text-amber-600"}`} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <p className={`mt-7 text-xs leading-relaxed ${index === 2 ? "text-slate-400" : "text-slate-500"}`}>{plan.bestFor}</p>
          <Link
            href={plan.slug}
            className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
              index === 2
                ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
                : "bg-slate-900 text-white hover:bg-slate-700"
            }`}
          >
            Explore this plan <ArrowRight size={16} />
          </Link>
        </article>
      ))}
    </div>
  );
}
