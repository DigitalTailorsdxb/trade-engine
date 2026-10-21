import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PlanCards } from "@/components/plan-cards";
import { getLocation } from "@/lib/location-data";
import NotFound from "@/pages/not-found";

interface Props { citySlug: string; }

export default function LocationPage({ citySlug }: Props) {
  const location = getLocation(citySlug);
  if (!location) return <NotFound />;
  const title = `Premium Landscaping Websites in ${location.name} | Trade Engine`;
  const description = `Trade Engine builds complete, premium multi-page websites for landscaping businesses in ${location.name} and across ${location.region}. Plans from £129.99/month.`;
  const canonical = `https://trade-engine.co.uk/landscaping-estimating-software-${location.slug}`;
  const faqs = [
    {
      q: `How much does a landscaping website cost in ${location.name}?`,
      a: "Our Premium Website plan is £129.99/month. Website + SEO is £149.99/month and includes monthly SEO updates. Complete Package is £300/month total and adds instant quoting and AI garden design.",
    },
    {
      q: "Do you build a complete website or just a landing page?",
      a: "We build complete, premium multi-page websites shaped around your landscaping services, work and business.",
    },
    {
      q: "Is AI garden design included in every plan?",
      a: "No. AI garden design and instant quoting are included only in Complete Package at £300/month total. AI garden design is specifically for landscaping businesses.",
    },
    {
      q: "Can I see a live website example?",
      a: "Yes. Premium Landscapes is available as a live example at premium-landscapes.co.uk.",
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navigation />
      <main>
        <section className="bg-slate-50 px-4 pb-20 pt-32">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-12 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-700">Home</Link><ChevronRight size={14} />
              <Link href="/locations" className="hover:text-amber-700">Locations</Link><ChevronRight size={14} />
              <span className="text-slate-800">{location.name}</span>
            </nav>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
              <MapPin size={15} /> Landscaping businesses in {location.name}
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">A website that does your landscaping business justice.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              We build complete, premium multi-page websites for landscapers in {location.name} and across {location.region}. Put your services, projects and business in the best light online.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800">Compare website plans <ArrowRight size={16} /></Link>
              <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 hover:border-amber-400">View live example</a>
            </div>
          </div>
        </section>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Made for the way you work</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-slate-950">A complete online home for your services and your work.</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">Create a clear online home for the outdoor projects you take on, from {location.gardenType} to the services your customers in {location.name} are looking for. A carefully structured website helps people understand what you offer and how to get in touch.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Your services", "Clear pages that explain the landscaping work you take on."],
                ["Your finished work", "A considered way to show projects and the details behind them."],
                ["Your business", "A consistent, professional presence on your own domain."],
              ].map(([heading, copy]) => <article key={heading} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-950">{heading}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
              </article>)}
            </div>
          </div>
        </section>
        <section className="bg-slate-50 px-4 py-20" id="pricing">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Plans for {location.name}</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Choose the right level of support.</h2>
              <p className="mt-3 text-slate-600">All plans are for complete multi-page websites.</p>
            </div>
            <PlanCards />
          </div>
        </section>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-semibold text-slate-950">Questions from {location.name} businesses</h2>
            <div className="space-y-4">{faqs.map((faq) => <article key={faq.q} className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-950">{faq.q}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
            </article>)}</div>
            <div className="mt-8 text-center"><Link href="/contact" className="font-semibold text-amber-800 hover:text-amber-950">Tell us about your website</Link></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
