import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  ImageIcon,
  FileText,
  Smartphone,
  Search,
  Share2,
  Globe,
  Clock,
  CheckCircle2,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Home,
  Mail,
  Camera,
  Sparkles,
  ArrowRight,
  Play,
  ExternalLink,
  ChevronRight,
  MapPin,
  Building2,
  LayoutGrid,
  Workflow,
  MessageSquare,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import gardenDesignImage from "@assets/design_(3)_1769644086766.png";
import logoImage from "@assets/ChatGPT_Image_Jan_28,_2026,_11_37_25_PM_1769643450348.png";

const coreFeatures = [
  {
    icon: Calculator,
    title: "AI Instant Quotes",
    tagline: "Eliminates tyre-kickers and price haggling",
    description: "Stop wasting time on enquiries that go nowhere. The quote system qualifies buyers by budget reality before you lift a finger. Sets price expectations upfront, anchors customers to real market costs, and filters out prospects who can't afford your services. Your website works as a 24/7 sales filter.",
    highlights: [
      "Qualifies buyers before first contact - stops time-wasters",
      "Sets price expectations upfront - no more awkward conversations",
      "Prevents 'can you just quote it?' enquiries eating your time",
      "Reduces unpaid site visits to unrealistic budgets",
      "Shortens sales cycle and improves close rate per enquiry",
      "Standardises pricing logic - prevents underpricing due to guesswork",
    ],
  },
  {
    icon: ImageIcon,
    title: "AI Garden Visualisation",
    tagline: 'Removes "I can\'t picture it" blockers',
    description: "Stop losing jobs because customers can't visualise the end result. This system turns ideas into something tangible in 90 seconds - showing customers exactly what their garden could look like. Get faster approvals, align expectations before work starts, and avoid 'that's not what I imagined' disputes after the job.",
    highlights: [
      "Prevents redesign loops after quoting - saves hours",
      "Reduces scope creep post-agreement",
      "Avoids 'that's not what I imagined' disputes",
      "Gets faster customer approvals",
      "Cuts revisions and re-quotes dramatically",
      "Increases conversion rates by 40%+ on average",
    ],
  },
  {
    icon: Users,
    title: "HubSpot CRM Integration",
    tagline: "Centralises data, enables intelligent follow-ups",
    description: "Stop losing leads because information is scattered. Every customer detail - designs, quotes, requirements - stored in one place. Prevents lost information across staff, enables easy handover to installers, and creates repeatable job records. Makes follow-ups intelligent, not guesswork.",
    highlights: [
      "Centralises all customer data in one place",
      "Prevents lost information when staff changes",
      "Enables easy handover from sales to installation team",
      "Creates repeatable job records for future reference",
      "Intelligent lead scoring prioritises hot prospects",
      "Improves aftercare and upsell opportunities",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    tagline: "Captures leads competitors lose",
    description: "Over 70% of visitors browse on mobile. Your website works flawlessly everywhere - turning traffic into qualified leads without phone calls. Works 24/7, capturing enquiries at 10pm on Sunday when competitors make customers wait until Monday.",
    highlights: [
      "Turns website into sales asset, not just a brochure",
      "Converts traffic without requiring phone calls",
      "Works 24/7 - captures leads at any hour",
      "Lightning-fast loading under 3 seconds",
      "Improves ROI on every ad you run",
      "Captures leads competitors lose to slow response",
    ],
  },
];

const pagesIncluded = [
  { icon: Home, title: "Homepage", description: "Hero section and services overview" },
  { icon: Building2, title: "About Us", description: "Company story and team introduction" },
  { icon: LayoutGrid, title: "Services Page", description: "Detailed service descriptions" },
  { icon: Camera, title: "Project Gallery", description: "Filterable portfolio showcase" },
  { icon: Mail, title: "Contact Page", description: "Form and business details" },
  { icon: Calculator, title: "AI Quote & Design", description: "Interactive quote and visualisation system" },
  { icon: FileText, title: "Blog", description: "10 professionally written articles" },
];

const seoFeatures = [
  {
    icon: Search,
    title: "On-Page SEO",
    items: [
      "Optimised title tags for each page",
      "Unique meta descriptions with keywords",
      "Canonical URLs preventing duplicate content",
      "Robots meta tags allowing indexing",
    ],
  },
  {
    icon: Share2,
    title: "Social Sharing",
    items: [
      "Complete Open Graph tags",
      "Twitter Card integration",
      "Rich previews on Facebook, LinkedIn",
      "Professional sharing appearance",
    ],
  },
  {
    icon: Globe,
    title: "Technical SEO",
    items: [
      "sitemap.xml for search crawling",
      "robots.txt with sitemap reference",
      "JSON-LD LocalBusiness schema",
      "Service catalog structured data",
    ],
  },
];

const whyCustomersChoose = [
  { icon: Zap, title: "Speed", description: "Know costs instantly - no waiting days for callbacks" },
  { icon: ImageIcon, title: "Clarity", description: "See the finished result before committing" },
  { icon: Shield, title: "Trust", description: "Professional system signals a professional business" },
  { icon: Smartphone, title: "Convenience", description: "Get quotes from the sofa at 10pm" },
  { icon: CheckCircle2, title: "Confidence", description: "Visual proof removes uncertainty and risk" },
];

const workflowCapabilities = [
  {
    icon: Workflow,
    title: "n8n Automation",
    description: "Frees owner/operator time - automates first interaction entirely",
    features: [
      "Replaces manual quoting entirely",
      "Cuts email back-and-forth dramatically",
      "Reduces follow-up chasing workload",
      "Allows staff to focus on delivery, not admin",
      "Works 24/7 without you lifting a finger",
      "Integration with 400+ apps and services",
    ],
  },
  {
    icon: Users,
    title: "HubSpot CRM Integration",
    description: "Centralises all customer data - prevents lost information across staff",
    features: [
      "Stores design, quote, requirements in one place",
      "Keeps historical quote logic for reference",
      "Enables easy handover to installers",
      "Creates repeatable job records",
      "Makes customer follow-ups intelligent",
      "Improves aftercare and upsell opportunities",
    ],
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-ups",
    description: "Makes quoting consistent regardless of who answers",
    features: [
      "Removes reliance on founder knowledge",
      "Enables hiring without quality loss",
      "Supports higher enquiry volume",
      "Standardises sales experience",
      "Complete audit trail of all actions",
      "Enables structured lead scoring",
    ],
  },
];

const comparisonTable = [
  { feature: "AI Instant Quotes", benefit: "Qualifies buyers and eliminates tyre-kickers automatically" },
  { feature: "AI Design Previews", benefit: "Removes 'I can't picture it' blockers - faster approvals" },
  { feature: "CRM Integration", benefit: "Centralises data, prevents lost leads, enables handovers" },
  { feature: "24/7 Lead Capture", benefit: "Converts traffic without phone calls, even at weekends" },
  { feature: "Automated Follow-ups", benefit: "Reduces admin workload and eliminates follow-up chasing" },
  { feature: "White-Labelled", benefit: "Looks like £20k development - differentiates from cowboys" },
];

function FeatureAccordion({
  feature,
  isActive,
  onClick,
}: {
  feature: (typeof coreFeatures)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = feature.icon;

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
      <button
        onClick={onClick}
        className={`w-full text-left p-5 transition-all duration-300 ${
          isActive 
            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white" 
            : "hover:bg-slate-50 text-slate-900"
        }`}
        data-testid={`button-feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isActive ? "bg-white/20" : "bg-amber-50"
          }`}>
            <Icon size={20} className={isActive ? "text-white" : "text-amber-600"} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold mb-1">{feature.title}</h3>
            <p className={`text-sm ${isActive ? "text-white/80" : "text-slate-500"}`}>
              {feature.tagline}
            </p>
          </div>
          <ChevronRight size={20} className={`flex-shrink-0 transition-transform duration-300 ${
            isActive ? "text-white rotate-90" : "text-slate-400"
          }`} />
        </div>
      </button>
      
      {/* Expandable content directly below the button */}
      <div className={`overflow-hidden transition-all duration-300 ${
        isActive ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <p className="text-slate-600 mb-5">{feature.description}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {feature.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(0);

  const handleDemoClick = () => {
    window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  };

  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Features | AI Quotes, Garden Visualisation & CRM | Trade Engine</title>
        <meta name="description" content="Explore Trade Engine's powerful features: AI instant quotes in 15 seconds, AI garden visualisation in 90 seconds, HubSpot CRM integration, white-labelled branding, and 24/7 automated follow-ups." />
        <link rel="canonical" href="https://trade-engine.co.uk/features" />
      </Helmet>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <img 
              src={logoImage} 
              alt="Trade Engine" 
              className="h-40 md:h-48 w-auto mx-auto mb-6"
            />
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">Complete Feature Set</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Everything Your Landscaping Business Needs
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Turn website visitors into qualified leads by removing friction, offering instant value, 
              and making it effortless for customers to take the next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleDemoClick}
                className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25"
                data-testid="button-features-demo"
              >
                <Play size={18} className="mr-2" />
                See Live Demo
                <ExternalLink size={14} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                data-testid="button-features-contact"
              >
                <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Visualisation Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="relative sm:max-w-4xl sm:mx-auto sm:rounded-2xl overflow-hidden glow-ring-intense">
            <img 
              src={gardenDesignImage} 
              alt="AI-generated garden design visualisation" 
              className="w-full h-auto min-h-[500px] sm:min-h-0 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">AI Garden Design Visualisation</p>
                  <p className="text-white text-xl font-semibold">Photorealistic preview in 90 seconds</p>
                </div>
                <Button variant="secondary" onClick={handleDemoClick} data-testid="button-visualisation-demo">
                  <Play size={16} className="mr-2" />
                  Try It Now
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features with Tabs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">Core Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              AI-Powered Lead Generation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four powerful features that work together to capture and convert more leads than traditional websites.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Feature accordions - content expands directly under each item */}
            <div className="space-y-3">
              {coreFeatures.map((feature, index) => (
                <FeatureAccordion
                  key={index}
                  feature={feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">The Difference</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Makes This Different
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every feature is designed to remove friction and convert more visitors into customers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900">
                      <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                      <th className="text-left py-4 px-6 text-white font-semibold">Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="py-4 px-6">
                          <span className="font-medium text-slate-900">{row.feature}</span>
                        </td>
                        <td className="py-4 px-6 text-slate-600">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow & Automation */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">Automation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Workflow & CRM Integration
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Powerful automation that works 24/7 to capture leads, send follow-ups, and keep your pipeline full.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-0 shadow-lg shadow-slate-200/50 h-full" data-testid={`card-workflow-${index}`}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                      <Icon size={28} className="text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{capability.title}</h3>
                    <p className="text-slate-600 mb-6 min-h-[48px]">{capability.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {capability.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pages Included */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">What You Get</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pages Included
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A complete, professional website with everything you need to convert visitors into customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pagesIncluded.map((page, index) => {
              const Icon = page.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-5 border border-slate-200" data-testid={`card-page-${index}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-slate-900">{page.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{page.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO & Marketing */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">Built-In SEO</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              SEO & Marketing Built-In
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Optimised for Google so customers can find you when they search for landscapers in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seoFeatures.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-slate-200" data-testid={`card-seo-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <Icon size={20} className="text-amber-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-500 flex-shrink-0 mt-1" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Customers Choose You */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">Customer Psychology</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Customers Choose You
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every element is designed to build trust and make it easy for customers to say yes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyCustomersChoose.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center border border-slate-200 hover:shadow-lg transition-shadow" data-testid={`card-reason-${index}`}>
                  <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-slate-600">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Line CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles size={48} className="text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Landscaping Business?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            This website turns visitors into qualified leads by removing friction, offering instant value, 
            and making it effortless for customers to take the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25"
              data-testid="button-features-cta"
            >
              <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                Get Started Today
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800" data-testid="button-features-pricing">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
