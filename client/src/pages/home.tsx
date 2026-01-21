import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProductTeaserSection } from "@/components/product-teaser-section";
import { ProblemSection } from "@/components/problem-section";
import { FeaturesSection } from "@/components/features-section";
import { DemoSection } from "@/components/demo-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProductTeaserSection />
        <ProblemSection />
        <FeaturesSection />
        <DemoSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
