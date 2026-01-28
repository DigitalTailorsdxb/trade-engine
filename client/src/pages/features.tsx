import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  ImageIcon,
  FileText,
  Palette,
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
  Lightbulb,
  Fence,
  TreeDeciduous,
  LayoutGrid,
  Workflow,
  MessageSquare,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import gardenDesignImage from "@assets/design_(2)_1769642158706.png";

const coreFeatures = [
  {
    icon: Calculator,
    title: "AI-Powered Instant Quote System",
    tagline: "Quotes in minutes, not days",
    description: "Customers get accurate quotes instantly through an intelligent 6-step guided process. Two quote paths available: Full Garden Makeover or Individual Products. No waiting around - instant engagement that captures leads 24/7.",
    highlights: [
      "6-step guided process that's easy to follow",
      "Two paths: Full Garden Makeover OR Individual Products",
      "Real-time price calculations",
      "Professional branded PDF quotes",
      "Customisable pricing logic for your business",
      "Captures leads even when you're asleep",
    ],
  },
  {
    icon: ImageIcon,
    title: "AI Garden Design Visualisation",
    tagline: "See the dream garden before committing",
    description: "Customers upload a photo of their garden and receive an AI-generated photorealistic preview of their new design in just 90 seconds. Completely FREE for customers - removes all barriers to engagement and dramatically increases conversions.",
    highlights: [
      "Photo-to-design transformation using latest AI",
      "Delivered in 90 seconds via email",
      "Photorealistic previews of the finished result",
      "100% FREE for customers - no barriers",
      "Increases conversion by 40%+ on average",
      "Multiple design variations available",
    ],
  },
  {
    icon: FileText,
    title: "Professional 10-Article Blog",
    tagline: "Establish yourself as the local expert",
    description: "SEO-optimised content covering garden costs, materials, and design ideas. Professionally written articles that drive organic search traffic to your site and position you as the authority in your area.",
    highlights: [
      "10 professionally written articles included",
      "Covers garden costs, materials, design ideas",
      "SEO-optimised for search rankings",
      "Drives organic traffic to your site",
      "Establishes you as the local expert",
      "Fresh content ready from day one",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    tagline: "Perfect on every device",
    description: "Works flawlessly on phones, tablets, and desktops. Easy hamburger menu navigation and lightning-fast loading times ensure customers can get quotes from anywhere.",
    highlights: [
      "Responsive on all devices",
      "Easy hamburger menu navigation",
      "Fast loading times",
      "Touch-optimised for mobile users",
      "Get quotes from the sofa at any time",
      "No app download required",
    ],
  },
];

const serviceCategories = [
  { icon: LayoutGrid, title: "Patios & Paving", description: "Natural stone, porcelain, and block paving options" },
  { icon: TreeDeciduous, title: "Decking", description: "Composite and timber decking solutions" },
  { icon: TreeDeciduous, title: "Lawns", description: "Natural turf and artificial grass installation" },
  { icon: Fence, title: "Fencing", description: "All styles of garden fencing and gates" },
  { icon: Lightbulb, title: "Garden Lighting", description: "Ambient and feature lighting design" },
  { icon: Palette, title: "Full Garden Redesigns", description: "Complete garden transformations" },
];

const pagesIncluded = [
  { icon: Home, title: "Homepage", description: "Hero section and services overview" },
  { icon: Building2, title: "About Us", description: "Company story and team introduction" },
  { icon: LayoutGrid, title: "Services Page", description: "Detailed service descriptions" },
  { icon: Camera, title: "Project Gallery", description: "Filterable portfolio showcase" },
  { icon: Mail, title: "Contact Page", description: "Form and business details" },
  { icon: Calculator, title: "AI Quote & Design", description: "Interactive quote and visualisation tool" },
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
  { icon: Zap, title: "Speed", description: "Instant quotes beat competitors who take days to respond" },
  { icon: ImageIcon, title: "Visualisation", description: "See the result before spending a penny" },
  { icon: Shield, title: "Trust", description: "Professional website builds confidence in your business" },
  { icon: Smartphone, title: "Convenience", description: "Get quotes from the sofa at any time" },
  { icon: CheckCircle2, title: "No Pressure", description: "Free quotes with no obligation" },
];

const workflowCapabilities = [
  {
    icon: Workflow,
    title: "n8n Automation",
    description: "Powerful workflow automation handles repetitive tasks automatically",
    features: [
      "Automatic lead capture to HubSpot CRM",
      "Instant email notifications for new quotes",
      "WhatsApp integration for follow-ups",
      "Automated team alerts via SMS/email",
      "Custom workflow triggers for any event",
      "Integration with 400+ apps and services",
    ],
  },
  {
    icon: Users,
    title: "HubSpot CRM Integration",
    description: "Every lead captured and nurtured with intelligent follow-up sequences",
    features: [
      "Automatic lead capture from all forms",
      "Full HubSpot CRM synchronisation",
      "Lead scoring and qualification",
      "Automated appointment booking",
      "Detailed analytics and reporting",
      "Pipeline management",
    ],
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-ups",
    description: "Never lose a lead with 24/7 automated communication",
    features: [
      "Email sequences for nurturing leads",
      "WhatsApp message automation",
      "Scheduled follow-up reminders",
      "Quote expiry notifications",
      "Review request automation",
      "Complete audit trail of all actions",
    ],
  },
];

const comparisonTable = [
  { feature: "AI Instant Quotes", benefit: "Captures leads 24/7 - even when you're asleep" },
  { feature: "AI Design Previews", benefit: "Customers see their dream garden before committing" },
  { feature: "\"100% FREE\" Messaging", benefit: "Removes hesitation - nothing to lose for the customer" },
  { feature: "Full SEO Package", benefit: "Found on Google when people search for landscapers" },
  { feature: "Social Sharing Ready", benefit: "Looks professional when shared on social media" },
  { feature: "White-Label Ready", benefit: "Your branding, your business - ready in days not weeks" },
];

function FeatureTab({
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
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
        isActive 
          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20" 
          : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200"
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
        <ChevronRight size={20} className={`flex-shrink-0 transition-transform ${
          isActive ? "text-white rotate-90" : "text-slate-400"
        }`} />
      </div>
    </button>
  );
}

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const currentFeature = coreFeatures[activeFeature];

  const handleDemoClick = () => {
    window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  };

  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">Complete Feature Set</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
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
                onClick={handleContactClick}
                data-testid="button-features-contact"
              >
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Visualisation Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden glow-ring-intense">
            <img 
              src={gardenDesignImage} 
              alt="AI-generated garden design visualisation" 
              className="w-full h-auto"
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
            {/* Feature tabs */}
            <div className="space-y-3 mb-8">
              {coreFeatures.map((feature, index) => (
                <FeatureTab
                  key={index}
                  feature={feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>

            {/* Feature detail - appears below the selected tab */}
            <Card className="border-0 shadow-xl shadow-slate-200/50">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 glow-ring-subtle flex items-center justify-center flex-shrink-0">
                    <currentFeature.icon size={28} className="text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {currentFeature.title}
                    </h3>
                    <p className="text-amber-600 font-medium mb-4">{currentFeature.tagline}</p>
                    <p className="text-slate-600 mb-6">{currentFeature.description}</p>
                    
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {currentFeature.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <Card key={index} className="border-0 shadow-lg shadow-slate-200/50" data-testid={`card-workflow-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                      <Icon size={28} className="text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{capability.title}</h3>
                    <p className="text-slate-600 mb-6">{capability.description}</p>
                    <ul className="space-y-2">
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

      {/* Complete Service Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">Services Covered</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Complete Service Showcase
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional presentation of all your landscaping services with dedicated sections and quote paths.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow" data-testid={`card-service-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
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

          <div className="mt-12 bg-slate-900 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={24} className="text-amber-500" />
              <h3 className="text-xl font-bold text-white">Local Business Schema</h3>
            </div>
            <p className="text-slate-400 mb-4">
              Structured data that shows your business info directly in Google search results.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Business name & description", "Contact details", "Opening hours", "Service catalog"].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-500" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>
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
              onClick={handleContactClick}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25"
              data-testid="button-features-cta"
            >
              Get Started Today
              <ArrowRight size={18} className="ml-2" />
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
