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
} from "lucide-react";

const included = [
  {
    icon: Zap,
    title: "AI Instant Quote System",
    desc: "A smart quote form embeds directly into your existing website. Customers answer a handful of questions and receive a fully calculated, branded quote in 15 seconds — no human involvement required. The system qualifies them by job type, size, and budget before you've even seen their name.",
  },
  {
    icon: Camera,
    title: "Photorealistic AI Garden Designs",
    desc: "Every quote is paired with an AI-generated visualisation of the customer's garden based on their brief. Customers see their finished space before committing — which dramatically increases conversion rates and average job values. No need to hire a garden designer.",
  },
  {
    icon: Mail,
    title: "Branded Email Delivery",
    desc: "The quote and garden design are automatically emailed to the customer under your business name and branding. Professional, instant, and consistent — even if the enquiry comes in at 11pm on a Sunday.",
  },
  {
    icon: BarChart2,
    title: "HubSpot CRM Integration",
    desc: "Every enquiry is automatically captured into HubSpot CRM — name, contact details, job type, budget range, and quote value. Your pipeline stays organised without any manual data entry. Follow up from one place.",
  },
  {
    icon: Globe,
    title: "Embed Into Your Existing Website",
    desc: "The system integrates with any website platform — WordPress, Wix, Squarespace, Webflow, or a custom site. We handle the technical setup. Your existing domain, design, and pages stay exactly as they are.",
  },
  {
    icon: Clock,
    title: "Live in 7 Days",
    desc: "From kickoff call to your first live AI quote — 7 days. We handle all the technical build, configuration, and testing. You just provide your logo, brand colours, and service details.",
  },
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We gather all the information and requirements we need from you — your service list, pricing structure, brand assets, and website details. We then configure the quote system around your actual jobs and pricing.",
  },
  {
    step: "02",
    title: "We Build the System",
    desc: "Our team sets up your AI quote engine, configures the garden design output, integrates HubSpot, and sets up your branded email templates. You don't need to do anything technical.",
  },
  {
    step: "03",
    title: "Embed & Test",
    desc: "We embed the system into your website and run full end-to-end testing — quote flow, design generation, email delivery, and CRM capture. You review and approve.",
  },
  {
    step: "04",
    title: "Go Live",
    desc: "Your AI quote system goes live. From this point, every visitor can get an instant quote and garden design at any time — 24/7. You receive every lead automatically in HubSpot.",
  },
];

const idealFor = [
  "You already have a website but your enquiry process is slow or manual",
  "You want to modernise your quoting without rebuilding your site",
  "You're spending too much time on site visits that don't convert",
  "You lose weekend and evening enquiries to faster competitors",
  "You want to automate the first stage of your sales process",
  "You want professional, branded quotes without hiring a designer",
];

const faqs = [
  {
    q: "Does this work with my existing website?",
    a: "Yes. The Quote & Design system embeds into any website platform — WordPress, Wix, Squarespace, Webflow, or a custom-built site. We handle the technical integration.",
  },
  {
    q: "Do I need to change my pricing structure?",
    a: "No. We configure the quote system around your actual services and pricing. You define the parameters — minimum job sizes, per-m² rates, service types — and the AI does the calculation.",
  },
  {
    q: "What if a customer enquires outside my service area?",
    a: "The system can be configured to filter by postcode area or region. Enquiries outside your coverage area can be automatically declined or redirected.",
  },
  {
    q: "What does the AI garden design actually show?",
    a: "Based on the customer's brief (garden size, style preferences, materials chosen), the AI generates a photorealistic rendering of the finished space. It's delivered with the quote, which makes customers emotionally invested before you've even spoken to them.",
  },
  {
    q: "Can I change the quote system after it's live?",
    a: "Yes. You can update your pricing, services, and configuration at any time. All plans include free ongoing system updates.",
  },
  {
    q: "Is there a setup fee?",
    a: "Yes — £249 setup (currently 50% off for a limited time). This covers the full technical build, configuration, testing, and integration. There are no hidden fees after that.",
  },
];

const testimonials = [
  {
    quote: "I was sceptical at first — I thought customers wouldn't use a digital quote form. But within 48 hours of going live we had three enquiries at 10pm that I'd never have captured before. All three booked.",
    name: "Mark S.",
    role: "Sole-trader landscaper, West Midlands",
  },
  {
    quote: "The AI garden visual is the bit that really sells it. Customers see their own garden transformed and they want it. I've used it to close jobs that I'd normally have to work hard to convert.",
    name: "Claire T.",
    role: "Garden Design & Landscaping, Hampshire",
  },
];

export default function PlanQuoteAndDesign() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Quote & Design Plan — £199/month | Trade Engine</title>
        <meta name="description" content="Add AI instant quoting and photorealistic garden design to your existing landscaping website. Plans from £199/month. Live in 7 days." />
        <link rel="canonical" href="https://trade-engine.co.uk/plans/quote-and-design" />
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
              <span className="text-slate-800 font-medium">Quote & Design</span>
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
            <span className="text-amber-700 text-sm font-medium">Starter Plan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Quote & Design
          </h1>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">£199</span>
            <span className="text-slate-500 text-lg">/month</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">
            Setup from <span className="line-through text-slate-400">£498</span>{" "}
            <span className="text-amber-600 font-semibold">£249</span> — limited time offer
          </p>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            Add AI instant quoting and photorealistic garden design to your existing website. Capture and qualify every enquiry automatically — 24/7, under your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-base rounded-xl">
              <a href="https://buy.stripe.com/dRmeVea2a5jk9ER9ft6g800" target="_blank" rel="noopener noreferrer">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything in Quote & Design</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Six tools that remove the manual work from your enquiry process — running 24/7, under your brand.</p>
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
            <p className="text-slate-600 text-lg">From sign-up to live system in 7 days.</p>
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
          <p className="text-slate-600 mb-6">Need more than AI quoting? See how this plan compares.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plans/full-system">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-amber-400 hover:text-amber-600">
                Compare: Full System £299/mo <ArrowRight size={16} className="ml-2" />
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
            Go live in 7 days. No contracts, cancel anytime. Setup from £249 — 50% off for a limited time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-base rounded-xl">
              <a href="https://buy.stripe.com/dRmeVea2a5jk9ER9ft6g800" target="_blank" rel="noopener noreferrer">
                Buy Now — £199/month
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
