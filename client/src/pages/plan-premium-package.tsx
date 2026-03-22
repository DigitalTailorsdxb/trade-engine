import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
  Phone,
  ChevronRight,
  Camera,
  Bell,
  Globe,
  Mail,
  BarChart2,
  Zap,
  Star,
  Layout,
  TrendingUp,
  Megaphone,
  Target,
  Users,
  Shield,
} from "lucide-react";

const included = [
  {
    icon: Layout,
    title: "Everything in the Full System",
    desc: "Your complete white-labelled website with AI instant quoting, photorealistic garden design, automated follow-ups, HubSpot CRM integration, and branded email delivery — all included as the foundation.",
  },
  {
    icon: Megaphone,
    title: "Social Media Content Creation",
    desc: "Monthly social media content — posts, captions, and creative assets — produced for your brand and ready to publish. Consistent, professional content across Instagram, Facebook, and beyond, without you spending time creating it.",
  },
  {
    icon: Target,
    title: "Google Ads Setup & Management",
    desc: "We set up and manage your Google Ads campaigns — keyword targeting, ad copy, bid strategy, and ongoing optimisation. Qualified landscaping leads delivered directly to your inbox through paid search.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation Strategy",
    desc: "A dedicated growth plan built around your business goals, target area, and competitive landscape. We identify the highest-value opportunities and build a roadmap for sustainable lead growth across organic and paid channels.",
  },
  {
    icon: Zap,
    title: "Priority Support",
    desc: "Dedicated priority support with faster response times and a named account contact. Any changes, updates, or issues are handled within 24 hours. You're never waiting in a queue.",
  },
  {
    icon: Star,
    title: "Early Access to New Features",
    desc: "Premium Package customers are first to receive new AI capabilities, platform updates, and system improvements before they roll out to other plans.",
  },
  {
    icon: BarChart2,
    title: "Monthly Performance Reports",
    desc: "Monthly reporting on website traffic, quote completions, lead volume, conversion rates, and ad performance. Transparent data so you always know your return on investment.",
  },
  {
    icon: Shield,
    title: "Ongoing Optimisation",
    desc: "Continuous improvement of your website, ads, and follow-up sequences based on real performance data. We test, adjust, and improve every month — your system gets better over time, not stale.",
  },
];

const steps = [
  {
    step: "01",
    title: "Strategy & Discovery Call",
    desc: "A 60-minute call to understand your business goals, target market, current lead situation, and growth ambitions. We build your personalised strategy from this session.",
  },
  {
    step: "02",
    title: "Website & System Build",
    desc: "Your white-labelled website, AI quote system, design visualisation, follow-up sequences, and CRM are built and configured — identical to the Full System, done in 7 days.",
  },
  {
    step: "03",
    title: "Ads Setup & Content Creation",
    desc: "Google Ads campaigns are built and launched. Your first batch of social media content is created, reviewed with you, and scheduled for publication.",
  },
  {
    step: "04",
    title: "Launch & Activate",
    desc: "Everything goes live simultaneously — website, ads, social content, and automated follow-ups. Your business is active across multiple channels from day one.",
  },
  {
    step: "05",
    title: "Monthly Strategy Reviews",
    desc: "A monthly check-in to review performance data, discuss results, adjust strategy, and plan the next month's content and campaign optimisations.",
  },
];

const idealFor = [
  "You want a complete done-for-you marketing system, not just a website",
  "You want to grow aggressively and need leads from multiple channels",
  "You're serious about scaling your landscaping business",
  "You don't have time to manage social media or Google Ads yourself",
  "You want expert strategy and ongoing optimisation, not just a tool",
  "You're investing in your business and want the maximum return",
];

const faqs = [
  {
    q: "What's included in social media content creation?",
    a: "We produce a monthly content schedule including posts, captions, and creative assets for Instagram and Facebook. Content is reviewed and approved by you before publishing. Volume and frequency depend on your specific plan configuration.",
  },
  {
    q: "How does Google Ads management work?",
    a: "We build your campaigns from scratch — keyword research, ad copy, targeting, and bid strategy. We manage and optimise them monthly based on performance data. Note: your Google Ads spend is paid directly to Google and is not included in the £499/month fee.",
  },
  {
    q: "What is the lead generation strategy?",
    a: "After your discovery call, we produce a written strategy document covering target keywords, competitor analysis, content opportunities, ad channels, and a 90-day growth roadmap. This is revisited and updated quarterly.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "A full-service marketing agency typically charges £2,000–£5,000/month for comparable services — without the AI website, quote system, or garden visualisation included. Our integrated approach means everything works together from one platform.",
  },
  {
    q: "What if I want to drop down to the Full System later?",
    a: "You can change plans at any time with 30 days' notice. Downgrading to Full System retains your website, AI quoting, and CRM — you'd just lose the social content, ads management, and strategy sessions.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "No minimum contract. Cancel anytime with 30 days' notice. The setup fee covers the build cost regardless of how long you stay.",
  },
];

const testimonials = [
  {
    quote: "We were getting maybe 3–4 enquiries a month. After 3 months on the Premium Package with Google Ads running, we're consistently getting 15–20 qualified leads. The business has genuinely changed.",
    name: "Paul W.",
    role: "Landscaping & Garden Design, Yorkshire",
  },
  {
    quote: "I didn't want to manage ads or social media. I just wanted it done properly. That's exactly what the Premium Package is — they handle everything and I just focus on the actual landscaping work.",
    name: "Lisa C.",
    role: "Premier Landscaping, Berkshire",
  },
];

export default function PlanPremiumPackage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Premium Package Plan — £499/month | Trade Engine</title>
        <meta name="description" content="The complete done-for-you landscaping marketing system. AI website, quoting, garden design, Google Ads, social media, and lead generation strategy. £499/month." />
        <link rel="canonical" href="https://trade-engine.co.uk/plans/premium-package" />
      </Helmet>

      <Navigation />

      {/* Breadcrumb + Back */}
      <div className="pt-24 pb-0 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-1.5 text-sm text-slate-500">
              <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
              <ChevronRight size={14} className="text-slate-400" />
              <Link href="/pricing" className="hover:text-amber-600 transition-colors">Pricing</Link>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="text-slate-800 font-medium">Premium Package</span>
            </nav>
            <a
              href="/pricing#pricing-cards"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors border border-slate-200 hover:border-amber-300 bg-white rounded-lg px-3 py-1.5 shadow-sm"
            >
              <ArrowRight size={14} className="rotate-180" />
              Back to Pricing
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-700 text-sm font-medium">Full Growth Package</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Premium Package
          </h1>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">£499</span>
            <span className="text-slate-500 text-lg">/month</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">
            Setup from <span className="line-through text-slate-400">£998</span>{" "}
            <span className="text-amber-600 font-semibold">£499</span> — limited time offer
          </p>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            The complete done-for-you system. Your full white-labelled website, AI quoting, garden design, and automated follow-ups — plus social media, Google Ads, and a dedicated lead generation strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-base rounded-xl">
              <a href="https://buy.stripe.com/dRm14o6PY9zA9ER9ft6g806" target="_blank" rel="noopener noreferrer">
                Buy Now
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 font-semibold px-8 py-6 text-base rounded-xl hover:bg-slate-50">
              <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                <Calendar size={18} className="mr-2" />
                Book a Free Demo First
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything in the Premium Package</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Eight integrated components that cover your entire digital presence — website, AI tools, content, ads, and strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {included.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Icon className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 text-lg">From sign-up to a fully active multi-channel presence in 7 days.</p>
          </div>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">This Plan Is Right for You If…</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {idealFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Landscapers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="text-amber-400 fill-amber-400" size={14} />)}
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
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Plans */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-6">See how this plan compares to the others.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plans/quote-and-design">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-amber-400 hover:text-amber-600">
                Compare: Quote & Design £199/mo <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link href="/plans/full-system">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-amber-400 hover:text-amber-600">
                Compare: Full System £299/mo <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-slate-300 text-lg mb-10">
            Go live in 7 days. No contracts, cancel anytime. Setup from £499 — 50% off for a limited time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-base rounded-xl">
              <a href="https://buy.stripe.com/dRm14o6PY9zA9ER9ft6g806" target="_blank" rel="noopener noreferrer">
                Buy Now — £499/month
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-500 text-white font-semibold px-8 py-6 text-base rounded-xl hover:bg-slate-700">
              <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                <Calendar size={18} className="mr-2" />
                Book a Free Demo
              </a>
            </Button>
          </div>
          <a href="tel:+447877934782" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <Phone size={14} />
            Or call 07877 934782
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
