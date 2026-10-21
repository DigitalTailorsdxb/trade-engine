import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PlanCards } from "@/components/plan-cards";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Landscaping() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Premium Landscaping Websites | Trade Engine</title>
        <meta name="description" content="Complete, premium multi-page websites for landscaping businesses. Plans from £129.99/month, with monthly SEO updates or Complete Package." />
        <link rel="canonical" href="https://trade-engine.co.uk/features" />
      </Helmet>
      <Navigation />
      <main>
        <section className="bg-slate-50 px-4 pb-20 pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">For landscapers</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">A complete website for landscaping businesses.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">Give your services, completed projects and business a premium multi-page home online. Trade Engine also builds websites for trades beyond landscaping.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800">Compare plans <ArrowRight size={16} /></Link>
              <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800">See Premium Landscapes live <ExternalLink size={15} /></a>
            </div>
          </div>
        </section>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-semibold text-slate-950">Choose your website plan</h2>
            <PlanCards />
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600">Instant quoting and AI garden design are only included in Complete Package at £300/month total. AI garden design is for landscapers.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
