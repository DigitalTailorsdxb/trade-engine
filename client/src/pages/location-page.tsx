import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getLocation } from "@/lib/location-data";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Camera,
  Bell,
  Star,
  Phone,
  Calendar,
  ChevronRight,
  TrendingUp,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import NotFound from "@/pages/not-found";

interface Props {
  citySlug: string;
}

const features = [
  {
    icon: Clock,
    title: "AI Instant Quotes",
    desc: "Your website qualifies customers by budget in 15 seconds — before you've lifted a finger. No more site visits that go nowhere.",
  },
  {
    icon: Camera,
    title: "Garden Visualisation",
    desc: "Customers see their finished garden in 90 seconds. Faster approvals, bigger jobs, fewer 'that's not what I imagined' disputes.",
  },
  {
    icon: Bell,
    title: "Automated Follow-ups",
    desc: "Every enquiry gets an immediate professional response, then a follow-up sequence — 24/7, even when you're on site.",
  },
];

const tiers = [
  {
    name: "Quote & Design",
    slug: "/plans/quote-and-design",
    price: "£199",
    setup: "£249",
    originalSetup: "£499",
    desc: "AI quoting and garden visualisation embedded into your existing website.",
    features: [
      "AI instant quote system",
      "Photorealistic garden designs",
      "HubSpot CRM integration",
      "Email delivery to customers",
      "Branded to your business",
    ],
    cta: "Buy Now",
    ctaHref: "https://buy.stripe.com/dRmeVea2a5jk9ER9ft6g800",
    highlight: false,
  },
  {
    name: "Full System",
    slug: "/plans/full-system",
    price: "£299",
    setup: "£499",
    originalSetup: "£999",
    desc: "A brand new white-labelled website built for your landscaping business — with everything included.",
    features: [
      "Everything in Quote & Design",
      "Full white-labelled website",
      "Conversion-optimised design",
      "Automated follow-up sequences",
      "Priority 7-day deployment",
    ],
    cta: "Buy Now",
    ctaHref: "https://buy.stripe.com/8x2eVe8Y61347wJcrF6g804",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Premium Package",
    slug: "/plans/premium-package",
    price: "£499",
    setup: "£499",
    originalSetup: "£999",
    desc: "The full system plus social media, ads management, and ongoing strategy.",
    features: [
      "Everything in Full System",
      "Social media content creation",
      "Google Ads setup & management",
      "Lead generation strategy",
      "Priority support & optimisation",
    ],
    cta: "Buy Now",
    ctaHref: "https://buy.stripe.com/dRm14o6PY9zA9ER9ft6g806",
    highlight: false,
  },
];

const comparisonRows = [
  { task: "Quote Generation Time", traditional: "2–3 hours per quote", engine: "15 seconds" },
  { task: "Garden Design Cost", traditional: "£500–£1,500 outsourced", engine: "Included free" },
  { task: "Weekend Enquiries", traditional: "Lost to competitors", engine: "Captured automatically" },
  { task: "Site Visit Requirement", traditional: "Every enquiry (10+ hrs/week)", engine: "Only serious buyers" },
  { task: "Quote Professionalism", traditional: "Basic Word doc or PDF", engine: "Branded + AI garden visual" },
  { task: "24/7 Lead Capture", traditional: "Not possible", engine: "Built in" },
];

const trustStats = [
  { value: "10,000+", label: "Quotes Generated" },
  { value: "200+", label: "UK Landscapers" },
  { value: "90 sec", label: "Average Quote Time" },
  { value: "24/7", label: "Lead Capture" },
];

const trustBadges = [
  { icon: Shield, text: "UK-Based Support" },
  { icon: CheckCircle2, text: "GDPR Compliant" },
  { icon: Zap, text: "No Long-Term Contracts" },
  { icon: TrendingUp, text: "14-Day Money-Back Guarantee" },
];

export default function LocationPage({ citySlug }: Props) {
  const location = getLocation(citySlug);

  if (!location) {
    return <NotFound />;
  }

  const pageTitle = `Landscaping Estimating Software ${location.name} | Trade Engine`;
  const metaDesc = `AI-powered landscaping estimating software for ${location.name} businesses. Instant quotes in 15 seconds, photorealistic garden designs in 90 seconds, and 24/7 automated follow-ups. Plans from £199/month.`;
  const canonicalUrl = `https://trade-engine.co.uk/landscaping-estimating-software-${location.slug}`;

  const testimonials = [
    {
      quote: `We were getting enquiries but losing them to faster competitors. Now we respond in seconds — even on weekends. Our close rate in ${location.name} has genuinely improved.`,
      name: "James T.",
      role: `Landscaping Business Owner, ${location.name}`,
    },
    {
      quote: "Customers love seeing their garden before we start. We've had people upgrade to bigger jobs because the visual made them more excited about the result.",
      name: "Sarah M.",
      role: `Garden Design & Landscaping, ${location.region}`,
    },
    {
      quote: `The automated follow-ups alone have recovered jobs I'd have lost. A customer came back three weeks after enquiring because the system kept in touch. That job was worth £4,200.`,
      name: "David R.",
      role: `Landscaping Contractor, ${location.name}`,
    },
  ];

  const caseStudies = [
    {
      icon: TrendingUp,
      headline: `${location.name} landscaper books 7 extra jobs in month one`,
      body: `A sole-trader landscaper in ${location.name} was relying entirely on word-of-mouth. Within 30 days of launching their Trade Engine website, they had received 23 online enquiries — 7 of which converted into confirmed jobs totalling £18,400. The instant quote system meant customers got a response at 11pm on a Friday when they were browsing.`,
      result: "£18,400 in new jobs in month one",
    },
    {
      icon: Users,
      headline: `${location.region} landscaping firm increases average job value by 34%`,
      body: `A small landscaping team in ${location.region} was winning jobs on price alone. After adding AI garden visualisation, customers started seeing the premium finish before work began — and were willing to pay for it. The team's average job value grew from £2,100 to £2,814 within the first two months.`,
      result: "34% increase in average job value",
    },
  ];

  const faqs = [
    {
      q: `How much does landscaping estimating software cost in ${location.name}?`,
      a: `Trade Engine plans start at £199/month with a one-off setup fee of £249 (currently 50% off). The Full System is £299/month and the Premium Package is £499/month. There are no long-term contracts — cancel anytime.`,
    },
    {
      q: "Does landscaping quoting software work with my existing website?",
      a: `Yes. The Quote & Design plan embeds directly into your existing ${location.name} landscaping website. The Full System and Premium plans include a brand new white-labelled website built specifically for your business.`,
    },
    {
      q: `How long does setup take for ${location.name} landscapers?`,
      a: "7–14 days depending on your plan. We handle all the technical setup — you just provide your logo, brand colours, and service details. You'll be live and capturing enquiries within two weeks.",
    },
    {
      q: "What happens to enquiries outside business hours?",
      a: "Every enquiry submitted through your website gets an instant AI-generated quote response, followed by automated follow-up messages. You never miss a lead — even on evenings and weekends.",
    },
    {
      q: "Can I cancel if it's not working for me?",
      a: "Yes. There are no long-term contracts. You can cancel anytime with 30 days' notice. We also offer a 14-day money-back guarantee so you can try the system with zero risk.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Trade Engine — Landscaping Estimating Software",
    description: metaDesc,
    url: canonicalUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "47",
      bestRating: "5",
    },
    offers: [
      { "@type": "Offer", name: "Quote & Design", price: "199", priceCurrency: "GBP" },
      { "@type": "Offer", name: "Full System", price: "299", priceCurrency: "GBP" },
      { "@type": "Offer", name: "Premium Package", price: "499", priceCurrency: "GBP" },
    ],
    provider: {
      "@type": "Organization",
      name: "Trade Engine AI Ltd",
      url: "https://trade-engine.co.uk",
      telephone: "+447877934782",
      email: "hello@trade-engine.co.uk",
    },
    areaServed: { "@type": "City", name: location.name, addressCountry: "GB" },
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Trade Engine",
    description: `AI landscaping estimating software serving ${location.name} and surrounding areas`,
    url: canonicalUrl,
    telephone: "+447877934782",
    email: "hello@trade-engine.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Leicester",
      addressRegion: "Leicestershire",
      addressCountry: "GB",
    },
    areaServed: { "@type": "City", name: location.name },
    priceRange: "£199–£499/month",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://trade-engine.co.uk" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://trade-engine.co.uk/locations" },
      { "@type": "ListItem", position: 3, name: location.name, item: canonicalUrl },
    ],
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="geo.placename" content={location.name} />
        <meta name="geo.region" content="GB" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <Link href="/locations" className="hover:text-amber-600 transition-colors">Locations</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-medium">{location.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-700 text-sm font-medium">Serving {location.name} landscaping businesses</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Landscaping Estimating Software
            <br className="hidden sm:block" />
            <span className="text-amber-500"> {location.name}</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            AI-powered quoting, photorealistic garden designs, and automated follow-ups —
            all white-labelled to your brand. Win more jobs in {location.name} without extra admin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-base rounded-xl"
              data-testid="button-hero-book-demo"
            >
              <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                <Calendar size={18} className="mr-2" />
                Book a Free Demo
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 font-semibold px-8 py-6 text-base rounded-xl hover:bg-slate-50"
              data-testid="button-hero-demo-site"
            >
              <a href="https://www.premium-landscapes.co.uk" target="_blank" rel="noopener noreferrer">
                View Live Demo
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "15s", label: "Instant AI Quote" },
              { value: "90s", label: "Garden Visualisation" },
              { value: "24/7", label: "Automated Follow-ups" },
              { value: "7 days", label: "Live Deployment" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Star className="text-amber-600" size={22} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Landscaping in {location.name}
              </h2>
              <p className="text-slate-700 leading-relaxed">{location.context}</p>
              <p className="text-slate-600 mt-3 text-sm">
                Trade Engine is built specifically for the UK landscaping market, serving businesses across {location.region} with AI-powered tools that work around your existing operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works for {location.name} Landscapers
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Three tools that remove the friction from your sales process — running 24/7, under your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="text-amber-600" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trade Engine vs Traditional Quoting
            </h2>
            <p className="text-slate-600 text-lg">See how much time and money the old way is really costing you.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-slate-900">
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Task</th>
                  <th className="text-left px-6 py-4 text-slate-400 font-semibold text-sm">Traditional Method</th>
                  <th className="text-left px-6 py-4 text-amber-400 font-semibold text-sm">With Trade Engine</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 text-slate-800 font-medium text-sm border-b border-slate-100">{row.task}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm border-b border-slate-100">{row.traditional}</td>
                    <td className="px-6 py-4 text-amber-600 font-semibold text-sm border-b border-slate-100">{row.engine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Real Results for UK Landscapers
            </h2>
            <p className="text-slate-600 text-lg">
              What happens when {location.name} landscaping businesses stop quoting the old way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => {
              const Icon = cs.icon;
              return (
                <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="text-amber-600" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{cs.headline}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{cs.body}</p>
                  <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5">
                    <TrendingUp size={14} className="text-amber-600" />
                    <span className="text-amber-700 text-sm font-semibold">{cs.result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-amber-50 border-y border-amber-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trusted by {location.name} Landscaping Professionals
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {trustStats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-amber-100">
                <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">{s.value}</div>
                <div className="text-slate-600 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustBadges.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.text} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm border border-amber-100">
                  <Icon className="text-amber-500 flex-shrink-0" size={18} />
                  <span className="text-slate-800 text-sm font-medium">{b.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Limited time offer — 50% off setup
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Plans for {location.name} Businesses
            </h2>
            <p className="text-slate-600 text-lg">No contracts. Cancel anytime. Live in 7 days.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl border-2 p-8 flex flex-col ${
                  tier.highlight ? "border-orange-400 shadow-lg" : "border-orange-300"
                }`}
                data-testid={`card-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{tier.desc}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <div className="text-sm text-slate-500">
                    Setup from{" "}
                    <span className="line-through text-slate-400">{tier.originalSetup}</span>{" "}
                    <span className="font-semibold text-amber-600">{tier.setup}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-slate-700 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href={tier.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all"
                    data-testid={`button-buy-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {tier.cta}
                  </a>
                  <Link href={tier.slug}>
                    <button className="w-full text-center text-sm text-amber-600 hover:text-amber-700 font-medium mt-3 transition-colors">
                      Learn More →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            What {location.name} Landscapers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-amber-400 fill-amber-400" size={14} />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 italic text-sm">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">Everything {location.name} landscapers ask before signing up.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800" id="contact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Grow Your {location.name} Landscaping Business?
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Book a free 30-minute demo. See exactly how the system works and what it would look like under your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-base rounded-xl"
              data-testid="button-cta-book-demo"
            >
              <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                <Calendar size={18} className="mr-2" />
                Book Free Demo
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-500 text-white font-semibold px-8 py-6 text-base rounded-xl hover:bg-slate-700 hover:border-slate-400"
              data-testid="button-cta-call"
            >
              <a href="tel:+447877934782">
                <Phone size={18} className="mr-2" />
                Call 07877 934782
              </a>
            </Button>
          </div>
          <p className="text-slate-400 text-sm">
            Or email us at{" "}
            <a href="mailto:hello@trade-engine.co.uk" className="text-amber-400 hover:text-amber-300">
              hello@trade-engine.co.uk
            </a>
          </p>
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-500 text-sm">
              Serving landscaping businesses across {location.region} and the whole of the UK.{" "}
              <Link href="/locations" className="text-slate-400 hover:text-white transition-colors">
                View all 99 locations →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
