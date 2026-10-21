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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Trade Engine | Premium Websites for Tradespeople</title>
        <meta name="description" content="Complete, premium multi-page websites for tradespeople. Website plans from £129.99/month, with monthly SEO updates or a complete package for £300/month." />
        <link rel="canonical" href="https://trade-engine.co.uk/" />
        <meta property="og:title" content="Trade Engine | Premium Websites for Tradespeople" />
        <meta property="og:description" content="Complete, premium multi-page websites for tradespeople. Plans from £129.99/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/" />
        <meta property="og:image" content="https://trade-engine.co.uk/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://trade-engine.co.uk/favicon.png" />
        <meta name="twitter:title" content="Trade Engine | Premium Websites for Tradespeople" />
        <meta name="twitter:description" content="Complete, premium multi-page websites for tradespeople. Plans from £129.99/month." />
      </Helmet>
      <LaunchBanner />
      <Navigation />
      <main>
        <HeroSection />
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
