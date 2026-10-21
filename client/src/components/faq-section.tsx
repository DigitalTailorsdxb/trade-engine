import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { pricingFaqs } from "@/lib/pricing-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">FAQs</p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">The essentials, clearly answered.</h2>
          <p className="text-lg text-slate-600">Our websites are for tradespeople across the UK, with specialist garden-design tools available for landscapers.</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {pricingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className={`border-b border-slate-100 last:border-0 ${isOpen ? "bg-slate-50" : ""}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-8 font-medium text-slate-900">{faq.question}</span>
                  <ChevronDown size={20} className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="px-5 pb-5 leading-relaxed text-slate-600">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center text-slate-500">
          Have another question? <a href="/contact" className="font-medium text-primary hover:underline">Talk to us</a>.
        </div>
      </div>
    </section>
  );
}
