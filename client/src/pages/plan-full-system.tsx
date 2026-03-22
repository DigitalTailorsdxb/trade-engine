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
  Clock,
  Camera,
  Bell,
  Globe,
  Mail,
  BarChart2,
  Zap,
  Star,
  Layout,
  TrendingUp,
  Shield,
} from "lucide-react";

const included = [
  {
    icon: Layout,
    title: "Brand New White-Labelled Website",
    desc: "A professionally designed, conversion-optimised website built specifically for your landscaping business. Your logo, your colours, your content — but built to generate enquiries. Includes all service pages, gallery, about, contact, and a blog-ready structure.",
  },
  {
    icon: Zap,
    title: "AI Instant Quote System",
    desc: "The same AI quoting engine as the Quote & Design plan — fully integrated into your new website. Customers get an instant, branded quote in 15 seconds. Every enquiry is automatically qualified by job type and budget.",
  },
  {
    icon: Camera,
    title: "AI Garden Visualisation",
    desc: "Photorealistic AI garden design images delivered with every quote. Customers see their transformed garden before committing — which increases both conversion rates and average job values without any design cost to you.",
  },
  {
    icon: Bell,
    title: "Automated Follow-up Sequences",
    desc: "When a customer enquires, they immediately receive a branded quote and design. If they don't respond, an automated follow-up sequence re-engages them over the following days. You never manually chase a lead again.",
  },
  {
    icon: BarChart2,
    title: "HubSpot CRM Integration",
    desc: "Every enquiry flows into HubSpot CRM — fully tagged, categorised, and ready to manage. Your entire sales pipeline stays organised without manual data entry. One dashboard for all your leads.",
  },
  {
    icon: Globe,
    title: "Conversion-Optimised Enquiry Flow",
    desc: "The website is built around one goal: turning visitors into enquiries. Every page layout, CTA placement, and user journey is optimised based on what actually converts landscaping website visitors into paying customers.",
  },
  {
    icon: Mail,
    title: "Branded Email Delivery",
    desc: "All automated emails — quotes, designs, follow-ups — are sent under your business name and brand. Professional, consistent communication even on evenings and weekends.",
  },
  {
    icon: TrendingUp,
    title: "Priority 7-Day Deployment",
    desc: "Your new website goes live within 7 days. We handle the full build, configuration, content population, and testing. You provide brand assets and service details — we do the rest.",
  },
];

const steps = [
  {
    step: "01",
    title: "Kickoff Call & Discovery",
    desc: "A 45-minute call to understand your business, services, pricing, target area, and brand. We gather all assets — logo, photos, content — and plan the full website structure.",
  },
  {
    step: "02",
    title: "Website Build",
    desc: "Our team builds your custom white-labelled website, sets up the AI quote and design system, integrates HubSpot, and configures the automated follow-up sequences.",
  },
  {
    step: "03",
    title: "Review & Revisions",
    desc: "You review the completed website before launch. We make any requested changes — copy adjustments, design tweaks, service additions — until you're fully satisfied.",
  },
  {
    step: "04",
    title: "DNS & Go Live",
    desc: "We connect your domain, run final testing across all devices, and launch. From this point your website is live and capturing enquiries 24/7.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    desc: "After launch, we're available for support, system updates, and any changes you need. The monthly fee covers ongoing maintenance, updates, and CRM support.",
  },
];

const idealFor = [
  "You don't have a website, or your current site is outdated",
  "Your existing website generates few or no online enquiries",
  "You want a complete, professional digital presence under your brand",
  "You want to stop relying entirely on referrals and word-of-mouth",
  "You want automated follow-up so you never lose a lead",
  "You're ready to invest in a system that works 24/7",
];

const faqs = [
  {
    q: "Can I keep my existing domain name?",
    a: "Yes. Your new website runs on your existing domain. We handle the DNS configuration as part of the launch process.",
  },
  {
    q: "Do you write the website content?",
    a: "We provide the page structure and can draft initial content based on your kickoff call. You review and approve all copy before launch. We can also use content you already have.",
  },
  {
    q: "What if I want to make changes after launch?",
    a: "Your monthly subscription includes ongoing support and updates. You can request changes at any time and we'll turn them around within 2–3 business days.",
  },
  {
    q: "Will the website rank on Google?",
    a: "The Full System website is built with SEO fundamentals in place — proper meta tags, structured data, clean URL structure, fast loading, and mobile optimisation. For active ongoing SEO and content marketing, consider the Premium Package.",
  },
  {
    q: "What happens if I cancel?",
    a: "You can cancel anytime with 30 days' notice. The website is hosted on Trade Engine infrastructure, so you would need to migrate if you cancel — we provide a full data export.",
  },
  {
    q: "How is this different from hiring a web agency?",
    a: "A web agency would charge £5,000–£15,000 for a comparable custom website build, without the AI quote system, design visualisation, or automated follow-ups included. Our monthly model means you get everything for a fraction of the upfront cost.",
  },
];

const testimonials = [
  {
    quote: "I had a basic website that got zero enquiries. Within the first month of the new site going live, I had 14 qualified leads. Four became jobs. That's more than paid for a year of the subscription.",
    name: "Tom H.",
    role: "Landscaping Contractor, Cheshire",
  },
  {
    quote: "The automated follow-ups are the thing I didn't know I needed. I had a customer come back three weeks after enquiring because the system kept in touch. That job was worth £5,800.",
    name: "Rachel M.",
    role: "Garden Design & Landscaping, Surrey",
  },
];

export default function PlanFullSystem() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Full System Plan — £299/month | Trade Engine</title>
        <meta name="description" content="A complete white-labelled website with AI quoting, garden visualisation, and automated follow-ups for landscaping businesses. £299/month. Live in 7 days." />
        <link rel="canonical" href="https://trade-engine.co.uk/plans/full-system" />
      </Helmet>

      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-slate-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <Link href="/pricing" className="hover:text-amber-600 transition-colors">Pricing</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-medium">Full System</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
            <Star className="text-amber-500 fill-amber-500" size={14} />
            <span className="text-amber-700 text-sm font-medium">Most Popular Plan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Full System
          </h1>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">£299</span>
            <span className="text-slate-500 text-lg">/month</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">
            Setup from <span className="line-through text-slate-400">£998</span>{" "}
            <span className="text-amber-600 font-semibold">£499</span> — limited time offer
          </p>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            A complete, professionally built white-labelled website for your landscaping business — with AI quoting, garden visualisation, and automated follow-ups built in from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-base rounded-xl">
              <a href="https://buy.stripe.com/8x2eVe8Y61347wJcrF6g804" target="_blank" rel="noopener noreferrer">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything in the Full System</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Eight components that work together to automate your entire enquiry process — from first visit to confirmed job.</p>
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
            <p className="text-slate-600 text-lg">From sign-up to a live, fully operational website in 7 days.</p>
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
            <Link href="/plans/premium-package">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-amber-400 hover:text-amber-600">
                Compare: Premium Package £499/mo <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-10">
            Go live in 7 days. No contracts, cancel anytime. Setup from £499 — 50% off for a limited time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-base rounded-xl">
              <a href="https://buy.stripe.com/8x2eVe8Y61347wJcrF6g804" target="_blank" rel="noopener noreferrer">
                Buy Now — £299/month
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
