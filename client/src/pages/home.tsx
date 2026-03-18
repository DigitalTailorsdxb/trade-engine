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
        <title>Trade Engine | AI Websites for Landscaping Businesses</title>
        <meta name="description" content="White-label AI websites for landscaping businesses. Instant quotes in 15 seconds, photorealistic garden designs, and 24/7 automated follow-ups. From £199/month." />
        <link rel="canonical" href="https://trade-engine.co.uk/" />
        <meta property="og:title" content="Trade Engine | AI Websites for Landscaping Businesses" />
        <meta property="og:description" content="White-label AI websites for landscaping businesses. Instant quotes in 15 seconds, photorealistic garden designs, and 24/7 automated follow-ups. From £199/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trade Engine | AI Websites for Landscaping Businesses" />
        <meta name="twitter:description" content="AI-powered white-label websites for landscaping businesses. Instant quotes, garden designs, and 24/7 automated follow-ups. Plans from £199/month." />
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
