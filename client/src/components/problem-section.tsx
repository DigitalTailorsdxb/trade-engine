import { AlertCircle, ArrowRight, CheckCircle2, Globe, Image, PanelsTopLeft } from "lucide-react";

const essentials = [
  { icon: PanelsTopLeft, title: "A complete multi-page site", description: "Room for the services, projects and details that make your trade business distinct." },
  { icon: Image, title: "A place for your work", description: "Present completed jobs with the care and context that helps customers understand your craft." },
  { icon: Globe, title: "A professional presence", description: "A considered website on your domain, designed for the devices your customers use." },
];

export function ProblemSection() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Your website should show the standard of your work.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Trade Engine builds complete websites for tradespeople, not a generic landing page.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {essentials.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-xl border bg-card p-6">
            <Icon size={22} className="text-primary" />
            <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </article>)}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-primary"><CheckCircle2 size={17} />Optional SEO and landscaper-specific Complete Package tools <ArrowRight size={16} /></div>
      </div>
    </section>
  );
}
