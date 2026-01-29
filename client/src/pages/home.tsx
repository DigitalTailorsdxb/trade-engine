import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProblemsSection } from "@/components/problems-section";
import { ProductTeaserSection } from "@/components/product-teaser-section";
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
        <title>Trade Engine | AI-Powered Websites for Landscaping Businesses</title>
        <meta name="description" content="Get an AI-powered website that qualifies leads, generates instant quotes in 15 seconds, and shows customers their finished garden in 90 seconds. White-labelled to your brand. £3,499 setup + £199/month." />
        <link rel="canonical" href="https://trade-engine.co.uk/" />
      </Helmet>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ProductTeaserSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
