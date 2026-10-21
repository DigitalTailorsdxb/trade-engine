import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Globe2, PanelsTopLeft, Search, Sparkles } from "lucide-react";
const gardenDesignImage = "/images/landscaping-garden-design.webp";

const websitePoints = [
  { icon: PanelsTopLeft, title: "More than a landing page", copy: "A complete multi-page site with room to explain your services, show your work and introduce your business." },
  { icon: Globe2, title: "Designed around your trade", copy: "Your brand, your domain and your business details, brought together in one coherent online presence." },
  { icon: Search, title: "Monthly SEO updates", copy: "Included in Website + SEO for businesses across the trades, and Complete Package for landscaping companies only." },
];

export function FeaturesSection() {
  const showExample = () => window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  return (
    <section id="features" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-amber-700">What we build</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">A complete website that feels like your business.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">Premium multi-page websites for tradespeople—planned around the work you do, not squeezed into a generic template.</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            {websitePoints.map(({ icon: Icon, title, copy }) => <article key={title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-800"><Icon size={19} /></div>
              <div><h3 className="font-semibold text-slate-950">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{copy}</p></div>
            </article>)}
            <article className="rounded-xl bg-slate-950 p-6 text-white">
              <div className="flex items-center gap-2 text-amber-300"><Sparkles size={17} /><span className="text-sm font-semibold">Complete Package · £300/month total</span></div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">Available exclusively to landscaping companies. Includes the premium website, monthly SEO updates, instant quoting and AI garden design at £300/month total.</p>
              <a href="/plans/complete-package" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200">See the Complete Package <ArrowRight size={15} /></a>
            </article>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-slate-900">
            <img src={gardenDesignImage} alt="AI garden design example from Complete Package" className="aspect-[4/3] w-full object-cover" loading="lazy" width={1000} height={667} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-6 pt-20 sm:p-8 sm:pt-24">
              <p className="text-sm text-white/70">A feature-specific example</p>
              <h3 className="mt-1 text-xl font-semibold text-white">AI garden design for landscapers</h3>
              <Button onClick={showExample} variant="secondary" className="mt-5">Explore the live example <ExternalLink size={15} className="ml-2" /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
