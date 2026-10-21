import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import { ArrowRight, Check, ExternalLink, Globe2, Search, Sparkles } from "lucide-react";

const benefits = [
  { icon: Globe2, title: "A complete website", body: "Multi-page websites built around your services, your work and the customers you want to reach—not a one-page placeholder." },
  { icon: Search, title: "Monthly SEO updates", body: "Included with Website + SEO for every trade, and Complete Package for landscaping companies only." },
  { icon: Sparkles, title: "Quoting and garden design", body: "Instant quoting and AI garden design are included only in Complete Package at £300/month total, available exclusively to landscaping companies." },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Trade Website Features | Trade Engine</title>
        <meta name="description" content="Explore complete trade websites, monthly SEO updates and landscaping-only Complete Package features, with instant quoting and AI garden design." />
        <link rel="canonical" href="https://trade-engine.co.uk/features" />
        <meta property="og:title" content="Trade Website Features | Trade Engine" />
        <meta property="og:description" content="Complete trade websites and monthly SEO updates. Complete Package with quoting and AI garden design is exclusively for landscaping companies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/features" />
        <meta property="og:image" content="https://trade-engine.co.uk/images/trade-websites-social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trade Website Features | Trade Engine" />
        <meta name="twitter:description" content="Explore complete trade websites, SEO options and Complete Package, exclusively for landscaping companies." />
        <meta name="twitter:image" content="https://trade-engine.co.uk/images/trade-websites-social.jpg" />
      </Helmet>
      <Navigation />
      <main>
        <section className="bg-slate-50 px-4 pb-20 pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Websites built around your trade</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">A complete website. A proper reflection of your work.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">Trade Engine builds premium, multi-page websites for businesses across the trades. Give your services, projects and business the online presence they deserve.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800">Explore plans <ArrowRight size={16} /></Link>
              <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 hover:border-amber-400">See Premium Landscapes live <ExternalLink size={15} /></a>
            </div>
          </div>
        </section>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Built to show your business well</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">The essentials, in one considered place.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800"><Icon size={21} /></div>
                <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
              </article>)}
            </div>
            <div className="mt-10 rounded-2xl bg-slate-950 p-8 text-white sm:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Optional, not assumed</p>
                  <h3 className="mt-3 text-2xl font-semibold">AI features live in Complete Package.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">Complete Package is available exclusively to landscaping companies at £300/month total. It includes the premium multi-page website, monthly SEO updates, instant quoting and AI garden design. Premium Website and Website + SEO are available across the trades.</p>
                </div>
                <Link href="/plans/complete-package" className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-300">View Complete Package <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-amber-50 px-4 py-16">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">Live example</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">See a real Trade Engine website.</h2>
              <p className="mt-4 leading-relaxed text-slate-700">Premium Landscapes is our live example. Explore the site and try the existing quote and garden design demos to see those specific features in context.</p>
              <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-amber-800">Visit Premium Landscapes <ExternalLink size={15} /></a>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white p-7">
              <h3 className="font-semibold text-slate-950">Every plan starts with a real website.</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {["A premium, multi-page site", "Your business and visual identity", "A responsive experience across devices", "A clear way for customers to enquire"].map((item) => <li key={item} className="flex gap-2"><Check size={17} className="shrink-0 text-amber-700" />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
