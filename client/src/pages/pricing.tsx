import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { LaunchBanner } from "@/components/launch-banner";
import { Footer } from "@/components/footer";
import { PlanCards } from "@/components/plan-cards";
import { pricingFaqs } from "@/lib/pricing-data";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Website Pricing | Plans from £129.99/month | Trade Engine</title>
        <meta name="description" content="Premium, multi-page websites for tradespeople. Premium Website £129.99/month, Website + SEO £149.99/month, or Complete Package £300/month total." />
        <link rel="canonical" href="https://trade-engine.co.uk/pricing" />
        <meta property="og:title" content="Website Pricing | Trade Engine" />
        <meta property="og:description" content="Three clear monthly plans for complete, premium websites for tradespeople." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/pricing" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pricingFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        })}</script>
      </Helmet>
      <LaunchBanner />
      <Navigation />
      <main>
        <section className="bg-slate-50 px-4 pb-14 pt-40">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Straightforward monthly pricing</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">The right website for your business.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Trade Engine builds complete, premium multi-page websites for tradespeople—not just landing pages. Pick the level of ongoing support that suits you.
            </p>
          </div>
        </section>
        <section id="pricing-cards" className="px-4 py-14 sm:py-20">
          <PlanCards />
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
            Website + SEO includes monthly SEO updates. Instant quoting and AI garden design are only included in Complete Package; AI garden design is for landscapers. Complete Package is £300/month total.
          </p>
        </section>
        <section className="bg-amber-50 px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 md:grid-cols-[0.75fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">The approach</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">A proper website, with room to grow.</h2>
                <p className="mt-4 leading-relaxed text-slate-700">Show customers your services, your work, and what makes your business different. Every plan starts with a multi-page website built around the way you work.</p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-amber-800">Talk through your project <ArrowRight size={16} /></Link>
              </div>
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">See a live example</h3>
                <p className="mt-3 leading-relaxed text-slate-600">Premium Landscapes is a live Trade Engine website. Explore the full site and its feature-specific examples.</p>
                <a className="mt-5 inline-flex items-center gap-2 font-semibold text-amber-800 hover:text-amber-950" href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer">Visit Premium Landscapes <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Good to know</p>
            <h2 className="mb-10 mt-3 text-center text-3xl font-semibold text-slate-950">Pricing questions</h2>
            <div className="space-y-4">
              {pricingFaqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-950">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
