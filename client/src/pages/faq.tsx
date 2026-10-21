import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { pricingFaqs } from "@/lib/pricing-data";
import { Link } from "wouter";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Trade Website FAQs | Trade Engine</title>
        <meta name="description" content="Answers about trade websites, monthly plans and SEO updates. Complete Package at £300/month total is exclusively for landscaping companies." />
        <link rel="canonical" href="https://trade-engine.co.uk/faq" />
        <meta property="og:title" content="Trade Website FAQs | Trade Engine" />
        <meta property="og:description" content="Clear answers about trade websites, monthly SEO updates and plans for tradespeople." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/faq" />
        <meta property="og:image" content="https://trade-engine.co.uk/images/trade-websites-social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trade Website FAQs | Trade Engine" />
        <meta name="twitter:description" content="Clear answers about trade websites, monthly SEO updates and plans for tradespeople." />
        <meta name="twitter:image" content="https://trade-engine.co.uk/images/trade-websites-social.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pricingFaqs.map(({ question, answer }) => ({
            "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        })}</script>
      </Helmet>
      <Navigation />
      <main className="px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Trade Engine</p>
          <h1 className="mt-4 text-center text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Frequently asked questions</h1>
          <p className="mx-auto mb-12 mt-5 max-w-2xl text-center leading-relaxed text-slate-600">Clear answers about our website plans and what’s included.</p>
          <div className="space-y-4">
            {pricingFaqs.map((faq) => <article key={faq.question} className="rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-950">{faq.question}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{faq.answer}</p>
            </article>)}
          </div>
          <div className="mt-10 text-center">
            <Link href="/pricing" className="font-semibold text-amber-800 hover:text-amber-950">Compare website plans</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
