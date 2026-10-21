import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness, Camera, Compass, PanelsTopLeft, Search, Wrench } from "lucide-react";

const priorities = [
  { icon: PanelsTopLeft, title: "Show the whole business", copy: "Bring your services, team, approach and contact details together across a considered multi-page site." },
  { icon: Camera, title: "Put the work up front", copy: "Give finished projects the space they need, so visitors can see the standard of your work." },
  { icon: Compass, title: "Make the next step obvious", copy: "Help potential customers understand what you do and how to ask you about a job." },
  { icon: Search, title: "Keep the site moving forward", copy: "Choose monthly SEO updates with Website + SEO, or with Complete Package for landscaping companies only." },
  { icon: Wrench, title: "Built for trades", copy: "Your site is shaped around your real services rather than a generic small-business template." },
  { icon: BriefcaseBusiness, title: "Additional tools for landscaping companies", copy: "Instant quoting and AI garden design are included only in Complete Package, exclusively for landscaping companies at £300/month total." },
];

export function ProblemsSection() {
  return (
    <section className="bg-slate-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-amber-400">Your online presence</p>
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-5xl">A great job deserves a great website.</h2>
          <p className="text-lg leading-relaxed text-slate-300">A single page rarely tells the full story. Give customers a proper view of your business and the work you’re proud to put your name to.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map(({ icon: Icon, title, copy }) => <Card key={title} className="border-slate-700 bg-slate-800/70 text-white">
            <CardContent className="p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300"><Icon size={20} /></div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{copy}</p>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>
  );
}
