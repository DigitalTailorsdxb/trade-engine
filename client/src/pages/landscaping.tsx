import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PlanCards } from "@/components/plan-cards";
import { ArrowRight, ExternalLink, MapPin, PanelsTopLeft, Smartphone, Images } from "lucide-react";
import { Link } from "wouter";

export default function Landscaping() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Landscaping Websites | Trade Engine</title>
        <meta name="description" content="Landscaping websites from £129.99/month. Showcase garden projects and services with a premium multi-page website. Explore SEO and AI options for landscapers." />
        <link rel="canonical" href="https://trade-engine.co.uk/landscaping-websites" />
        <meta property="og:title" content="Landscaping Websites | Trade Engine" />
        <meta property="og:description" content="Premium multi-page websites for landscaping companies, with dedicated service, project and contact pages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/landscaping-websites" />
        <meta property="og:image" content="https://trade-engine.co.uk/images/trade-websites-social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Landscaping Websites | Trade Engine" />
        <meta name="twitter:description" content="Premium multi-page websites for landscaping companies, with dedicated service, project and contact pages." />
        <meta name="twitter:image" content="https://trade-engine.co.uk/images/trade-websites-social.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://trade-engine.co.uk/" },
            { "@type": "ListItem", position: 2, name: "Landscaping websites", item: "https://trade-engine.co.uk/landscaping-websites" },
          ],
        })}</script>
      </Helmet>
      <Navigation />
      <main>
        <section className="bg-slate-50 px-4 pb-20 pt-32">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-10 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb"><Link href="/" className="hover:text-amber-800">Home</Link><span aria-hidden="true">/</span><span className="text-slate-800">Landscaping websites</span></nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">A specialist destination for landscapers</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">Landscaping websites that give your work room to speak.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">A premium multi-page website for landscaping companies: explain your services, show completed gardens with context, and make it straightforward for the right customer to enquire. Trade Engine also builds websites for every trade.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800">Compare plans <ArrowRight size={16} /></Link>
              <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800">See Premium Landscapes live <ExternalLink size={15} /></a>
            </div>
          </div>
        </section>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">An online portfolio built around outdoor work</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Show the thinking, detail and finish behind every garden.</h2>
              <p className="mt-5 leading-relaxed text-slate-600">Landscaping projects are best understood when customers can explore the work at their own pace. A useful landscaping website gives each service space for clear detail, brings project photography together in a natural way, and keeps your contact route close at hand.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { Icon: PanelsTopLeft, title: "A page for each service", text: "Explain the projects you take on and what customers can expect." },
                { Icon: Images, title: "Project stories", text: "Present completed work with imagery and useful project context." },
                { Icon: Smartphone, title: "Made for mobile", text: "Keep the experience clear for customers browsing on a phone." },
                { Icon: MapPin, title: "Local relevance", text: "Make your service area and the places you work easy to understand." },
              ].map(({ Icon, title, text }) => <article key={title} className="rounded-xl border border-slate-200 bg-white p-6">
                <Icon className="text-amber-700" size={22} /><h3 className="mt-4 font-semibold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>)}
            </div>
          </div>
        </section>
        <section className="bg-slate-950 px-4 py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">A live example</p><h2 className="mt-3 text-3xl font-semibold">See the ideas working on a real landscaping website.</h2><p className="mt-4 max-w-2xl leading-relaxed text-slate-300">Explore Premium Landscapes to see how services, finished work and customer journeys can come together. Existing feature demos remain available from the live website.</p>
              <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-300 hover:text-amber-200">Visit Premium Landscapes <ExternalLink size={16} /></a>
            </div>
            <aside className="rounded-xl border border-amber-300/30 bg-white/5 p-6"><h3 className="text-xl font-semibold">A note on Complete Package</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">Complete Package is available exclusively to landscaping companies. It costs £300/month total and includes a premium website, monthly SEO updates, instant quoting and AI garden design. The £129.99 Premium Website and £149.99 Website + SEO plans are available to all trades.</p><Link href="/plans/complete-package" className="mt-5 inline-flex items-center gap-2 font-semibold text-amber-300">See plan details <ArrowRight size={16} /></Link></aside>
          </div>
        </section>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-semibold text-slate-950">Choose your website plan</h2>
            <PlanCards />
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600">Complete Package is exclusively for landscaping companies and costs £300/month total. Premium Website (£129.99/month) and Website + SEO (£149.99/month) are available to all trades.</p>
          </div>
        </section>
        <section className="bg-amber-50 px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-slate-950">Landscaping websites across the UK</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-700">Explore city pages for local context and website plan information. We build websites for landscapers throughout the country.</p>
            <div className="mt-6 flex flex-wrap gap-3">{[["London","london"],["Manchester","manchester"],["Birmingham","birmingham"],["Leeds","leeds"],["Glasgow","glasgow"],["Bristol","bristol"]].map(([city, slug]) => <Link key={slug} href={`/landscaping-websites/${slug}`} className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-amber-500">{city}</Link>)}</div>
            <Link href="/locations" className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-900">Browse all locations <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
