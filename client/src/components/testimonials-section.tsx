import { ArrowUpRight, Check, PanelsTopLeft, Route, Search } from "lucide-react";

const values = [
  { icon: PanelsTopLeft, title: "A fuller picture", copy: "A multi-page structure gives each part of your business its own space." },
  { icon: Route, title: "A clear customer journey", copy: "Make it easy to move from discovering your work to getting in touch." },
  { icon: Search, title: "Care beyond launch", copy: "Monthly SEO updates are included with Website + SEO and Complete Package." },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-amber-700">A considered online presence</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Good work deserves to be seen properly.</h2>
            <p className="mt-5 leading-relaxed text-slate-600">We build websites that put the craft, services and character of a trade business in focus. No performance promises. Just a website made to represent your business well.</p>
            <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-amber-800">Explore the Premium Landscapes example <ArrowUpRight size={16} /></a>
          </div>
          <div className="space-y-3">
            {values.map(({ icon: Icon, title, copy }) => <article key={title} className="flex gap-4 rounded-xl bg-slate-50 p-5 sm:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-900"><Icon size={19} /></div>
              <div><h3 className="font-semibold text-slate-950">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{copy}</p></div>
            </article>)}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-semibold text-slate-950">AI quoting and garden design are optional.</p>
            <p className="mt-1 text-sm text-slate-600">Both are included in Complete Package at £300/month total; garden design is for landscapers.</p>
          </div>
          <a href="/plans/complete-package" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"><Check size={16} />See Complete Package</a>
        </div>
      </div>
    </section>
  );
}
