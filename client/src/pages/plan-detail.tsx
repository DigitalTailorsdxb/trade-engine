import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/pricing-data";

export default function PlanDetail({ planIndex }: { planIndex: number }) {
  const plan = plans[planIndex];
  const canonical = `https://trade-engine.co.uk${plan.slug}`;
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{plan.name} — {plan.price}/month | Trade Engine</title>
        <meta name="description" content={`${plan.summary} ${plan.price}/month. Complete multi-page websites for tradespeople.`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${plan.name} | Trade Engine`} />
        <meta property="og:description" content={`${plan.summary} ${plan.price}/month.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: `Trade Engine ${plan.name}`,
          description: plan.summary,
          offers: { "@type": "Offer", price: plan.price.replace("£", ""), priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: plan.price.replace("£", ""), priceCurrency: "GBP", unitText: "MONTH" } },
        })}</script>
      </Helmet>
      <Navigation />
      <main>
        <section className="bg-slate-50 px-4 pb-20 pt-32">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-12 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-700">Home</Link><ChevronRight size={14} />
              <Link href="/pricing" className="hover:text-amber-700">Pricing</Link><ChevronRight size={14} />
              <span className="text-slate-800">{plan.name}</span>
            </nav>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Built around your business</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">{plan.name}</h1>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-slate-950 sm:text-5xl">{plan.price}</span>
              <span className="text-slate-500">/ month</span>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">{plan.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-slate-950 px-6 text-white hover:bg-slate-800">
                <Link href="/contact">Talk about your website <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-300 bg-white px-6">
                <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer">View live website example</a>
              </Button>
            </div>
          </div>
        </section>
        <section className="px-4 py-20">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">What’s included</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">A complete website, not just a landing page.</h2>
              <ul className="mt-8 space-y-4">
                {plan.details.map((detail) => <li key={detail} className="flex gap-3 text-slate-700"><Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />{detail}</li>)}
              </ul>
            </div>
            <aside className="rounded-2xl bg-amber-50 p-7">
              <p className="text-sm font-semibold text-amber-900">A real website in the wild</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">Premium Landscapes</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">Explore the live example and its existing feature demos to see how a Trade Engine website can present a trades business online.</p>
              <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-amber-800">Visit live example <ArrowRight size={16} /></a>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
