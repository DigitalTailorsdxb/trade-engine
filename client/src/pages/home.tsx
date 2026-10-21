import { Helmet } from "react-helmet-async";
import { LaunchBanner } from "@/components/launch-banner";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { VideoSection } from "@/components/video-section";
import { ProblemsSection } from "@/components/problems-section";
import { ExamplesSection } from "@/components/examples-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { pricingFaqs } from "@/lib/pricing-data";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Trade Websites for Tradespeople | Trade Engine</title>
        <meta name="description" content="Premium trade websites from £129.99/month. Showcase your services and projects with a complete multi-page website, mobile-ready design and monthly SEO options." />
        <link rel="canonical" href="https://trade-engine.co.uk/" />
        <meta property="og:title" content="Trade Websites for Tradespeople | Trade Engine" />
        <meta property="og:description" content="Complete, premium multi-page trade websites with service and project pages, mobile-ready design and clear enquiry journeys." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/" />
        <meta property="og:image" content="https://trade-engine.co.uk/images/trade-websites-social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://trade-engine.co.uk/images/trade-websites-social.jpg" />
        <meta name="twitter:title" content="Trade Websites for Tradespeople | Trade Engine" />
        <meta name="twitter:description" content="Complete, premium multi-page trade websites with service and project pages, mobile-ready design and clear enquiry journeys." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pricingFaqs.map((faq) => ({
            "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        })}</script>
      </Helmet>
      <LaunchBanner />
      <Navigation />
      <main>
        <HeroSection />
        <section className="border-y border-amber-100 bg-[#fffaf1] px-4 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Trade websites, made properly</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">More than a homepage. A useful online home for your trade.</h2>
              <Link href="/features" className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-900 hover:text-slate-950">Explore what’s included <ArrowRight size={16} /></Link>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-slate-700">
              <p>A good trade website helps a prospective customer understand your work before they pick up the phone. Trade Engine creates complete, premium multi-page websites that put your business, services and finished projects in a clear, considered structure.</p>
              <p>Service pages give each part of your work room to be explained. Project pages help visitors see the standard and character of your work. Mobile-ready layouts keep the experience clear on a phone, while direct enquiry routes make the next step easy to find.</p>
              <p>Choose a website plan from £129.99/month, or add monthly SEO updates with Website + SEO at £149.99/month. Complete Package is £300/month total and is available exclusively to landscaping companies.</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-amber-200 pt-5 text-sm font-semibold">
                <Link href="/pricing" className="text-slate-900 hover:text-amber-800">Compare monthly plans</Link>
                <Link href="/landscaping-websites" className="text-slate-900 hover:text-amber-800">Landscaping websites</Link>
                <Link href="/contact" className="text-slate-900 hover:text-amber-800">Talk to Trade Engine</Link>
              </div>
            </div>
          </div>
        </section>
        <VideoSection />
        <ProblemsSection />
        <PricingSection />
        <ExamplesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
