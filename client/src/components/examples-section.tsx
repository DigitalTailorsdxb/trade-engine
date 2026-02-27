import { FileText, Image, ExternalLink } from "lucide-react";

const PDF_URL = "https://sswkpcnbyrbmnltczphx.supabase.co/storage/v1/object/public/garden-designs/thedigitaltailorsdxb@gmail.com/Lewis-Reid-PL-260226-133457.pdf";
const DESIGN_URL = "https://sswkpcnbyrbmnltczphx.supabase.co/storage/v1/object/public/garden-designs/thedigitaltailorsdxb@gmail.com/Lewis-Reid-PL-260226-133457-design.png";

export function ExamplesSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Test the Demo</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Real Examples, Real Results
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See exactly what your customers receive — a professional PDF quote and an AI-generated garden design, delivered automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            data-testid="link-example-pdf"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform duration-300">
                    <FileText size={36} className="text-white" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900 mb-2">PDF Quote Example</p>
                  <p className="text-slate-600 max-w-xs mx-auto">
                    A fully itemised quote with pricing, product selections, and project details — generated in 15 seconds.
                  </p>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <FileText size={16} />
                  <span>View PDF Quote</span>
                </div>
                <ExternalLink size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </a>

          <a
            href={DESIGN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            data-testid="link-example-design"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={DESIGN_URL}
                  alt="AI-generated garden design visualisation example"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex items-center justify-between border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Image size={16} />
                  <span>View AI Design</span>
                </div>
                <ExternalLink size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
