import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Calculator, 
  Palette, 
  MessageSquare,
  BarChart3,
  Zap,
  Clock,
  Users,
  Gift,
  Play,
  ExternalLink
} from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const features = [
  {
    icon: Calculator,
    title: "Instant AI Quotes",
    description: "Customers get accurate project estimates in seconds. No more waiting days for quotes or losing leads to faster competitors.",
  },
  {
    icon: Palette,
    title: "AI Garden Visualiser",
    description: "Let customers see their dream garden before any work begins. Upload a photo and our AI creates stunning design mockups.",
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-ups",
    description: "Never lose a lead again. Our system automatically follows up with prospects via email and SMS until they convert.",
  },
  {
    icon: BarChart3,
    title: "Smart Lead Scoring",
    description: "AI identifies your hottest prospects so you can focus on leads most likely to convert into paying customers.",
  },
  {
    icon: Users,
    title: "HubSpot CRM Integration",
    description: "Seamlessly connects with HubSpot CRM. All your leads in one place, automatically synced and ready for follow-up.",
  },
  {
    icon: Zap,
    title: "n8n Automation",
    description: "Powerful workflow automation handles repetitive tasks. From lead capture to invoice generation, it runs on autopilot.",
  },
];

const setupIncludes = [
  "Full website design & development",
  "AI-powered quote system",
  "AI garden design generator",
  "HubSpot CRM integration",
  "n8n automation workflows",
  "Complete white-labelling",
  "Your own domain setup",
  "Complete onboarding",
];

const monthlyIncludes = [
  "Premium hosting & SSL",
  "24/7 error monitoring & handling",
  "AI credits for design generation",
  "Continuous feature upgrades",
  "SEO optimisation & updates",
  "Priority support",
  "Performance optimisation",
  "Security updates & backups",
];

export default function Products() {
  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                <Sparkles size={16} className="fill-current" />
                <span className="text-sm font-medium">AI-Powered Solution</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Landscaping{" "}
                <span className="text-primary">AI Engine</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The complete white-labelled website solution that turns your landscaping business 
                into a lead-generating machine with AI-powered quotes, stunning visualisations, 
                and automated follow-ups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild data-testid="button-products-demo">
                  <a 
                    href="https://www.premium-landscapes.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Play size={18} className="mr-2" />
                    See Live Demo
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-products-contact">
                  <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                    Book a Call
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Everything You Need to{" "}
                <span className="text-primary">Dominate Your Market</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our AI Engine comes packed with features that give you an unfair advantage 
                over competitors still doing things the old way.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Preview */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  See It In Action
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We've built a complete demo site for Premium Landscapes to show you exactly 
                  what your customers will experience. From instant quotes to stunning AI 
                  garden visualisations, everything is live and ready to explore.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Get an instant quote in under 60 seconds",
                    "Upload a photo and see AI design magic",
                    "Experience the automated follow-up flow",
                    "See how leads are captured and scored",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" asChild data-testid="button-products-live-demo">
                  <a 
                    href="https://www.premium-landscapes.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Visit Live Demo Site
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-md border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Play size={40} className="text-primary ml-1" />
                      </div>
                      <p className="text-lg font-medium text-foreground">
                        Premium Landscapes Demo
                      </p>
                      <p className="text-muted-foreground">
                        www.premium-landscapes.co.uk
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Simple, Transparent{" "}
                <span className="text-primary">Pricing</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything included. No hidden fees.
              </p>
            </div>

            {/* Special Offer Banner */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-md border border-accent/30 p-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Gift size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground flex items-center justify-center sm:justify-start gap-2">
                      <Sparkles size={18} className="text-accent" />
                      Limited Time Offer
                    </h3>
                    <p className="text-muted-foreground">
                      First month AI included FREE + £250 in free ad spend via Meta & Google Ads
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Setup Fee */}
              <Card className="relative overflow-visible" data-testid="card-products-pricing-setup">
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Setup
                  </span>
                </div>
                <CardContent className="pt-10 pb-8 px-6">
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-foreground">£3,499</span>
                    </div>
                    <span className="text-muted-foreground">one-time setup</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Complete setup and configuration
                  </p>
                  <ul className="space-y-3">
                    {setupIncludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-accent/10 rounded-md border border-accent/20">
                    <p className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Gift size={16} className="text-accent" />
                      Bonus: £250 free ad spend
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Fee */}
              <Card className="relative overflow-visible border-primary" data-testid="card-products-pricing-monthly">
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Ongoing
                  </span>
                </div>
                <CardContent className="pt-10 pb-8 px-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold">£199</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Keep everything running smoothly
                  </p>
                  <ul className="space-y-3">
                    {monthlyIncludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-accent/10 rounded-md border border-accent/20">
                    <p className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Sparkles size={16} className="text-accent" />
                      First month AI credits FREE
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ROI Callout */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-md border p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={32} className="text-primary" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      ROI After Just 2-3 Extra Jobs
                    </h3>
                    <p className="text-muted-foreground">
                      Most landscaping jobs are £2,000+. With our 40% average increase in leads, 
                      you'll make back your investment in the first month.
                    </p>
                  </div>
                  <Button onClick={handleContactClick} data-testid="button-products-pricing-cta">
                    Get Started
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join landscaping businesses already using Trade Engine to win more jobs 
              and grow faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                asChild
                data-testid="button-products-final-cta"
              >
                <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                  Book Your Free Demo
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
