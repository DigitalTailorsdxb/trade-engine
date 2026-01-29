import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Check, 
  Zap, 
  Palette, 
  Globe, 
  Headphones, 
  RefreshCw, 
  Shield, 
  TrendingUp,
  Calculator,
  Image,
  Users,
  Smartphone,
  Clock,
  Mail,
  MessageSquare,
  FileText,
  Settings,
  BarChart3,
  Rocket,
  Gift,
  ArrowRight
} from "lucide-react";
import logoImage from "@assets/ChatGPT_Image_Jan_28,_2026,_11_37_25_PM_1769643450348.png";

export default function Pricing() {
  const setupIncludes = [
    {
      icon: Globe,
      title: "Fully Custom Website",
      description: "A complete, professionally designed website built specifically for your landscaping business. White-labelled with your branding, colours, and logo throughout."
    },
    {
      icon: Calculator,
      title: "AI Quote System",
      description: "The complete instant quoting engine with both Full Garden Makeover and Individual Product paths. Customised with your pricing, services, and business logic."
    },
    {
      icon: Image,
      title: "AI Visualisation System",
      description: "Photo-to-design AI technology integrated into your site. Customers upload a photo, receive a photorealistic preview in 90 seconds."
    },
    {
      icon: Users,
      title: "HubSpot CRM Setup",
      description: "Full HubSpot CRM integration configured and ready to use. All leads automatically captured and synced in real-time."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive design optimised for phones, tablets, and desktops. Lightning-fast loading under 3 seconds on any device."
    },
    {
      icon: Palette,
      title: "Brand Customisation",
      description: "Your logo, colours, fonts, and imagery throughout. Looks like you spent £15,000+ on a premium agency build."
    },
    {
      icon: FileText,
      title: "Content Writing",
      description: "Professional copywriting for all pages including your homepage, services, about page, and contact information."
    },
    {
      icon: Settings,
      title: "Technical Setup",
      description: "Domain configuration, SSL certificates, email integration, and all technical infrastructure handled for you."
    },
  ];

  const monthlyIncludes = [
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Direct access to our support team for any questions, changes, or issues. Typical response time under 2 hours."
    },
    {
      icon: RefreshCw,
      title: "Unlimited Updates",
      description: "Need to change pricing, add services, or update content? We handle all updates at no extra cost."
    },
    {
      icon: Shield,
      title: "Hosting & Security",
      description: "Enterprise-grade hosting with 99.9% uptime, SSL certificates, daily backups, and security monitoring."
    },
    {
      icon: Zap,
      title: "AI Credits Included",
      description: "Monthly AI visualisation credits included. Your customers can generate garden previews without any additional cost to you."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track visitors, quote requests, and conversions. Understand what's working and optimise your results."
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Automated follow-up sequences to nurture leads. Quote reminders, thank you emails, and review requests."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Connect your WhatsApp Business for instant lead notifications. Never miss a hot prospect again."
    },
    {
      icon: TrendingUp,
      title: "Ongoing Optimisation",
      description: "Regular improvements to conversion rates, loading speed, and user experience based on real data."
    },
  ];

  const bonuses = [
    {
      value: "£250",
      title: "Free Ad Spend",
      description: "Meta & Google Ads credit to kickstart your marketing. We'll help you set up your first campaigns."
    },
    {
      value: "FREE",
      title: "First Month AI",
      description: "Your first month of AI visualisation credits are completely free. See results before you pay."
    },
    {
      value: "FREE",
      title: "Onboarding Call",
      description: "1-hour kickoff call to gather your requirements, branding, and ensure we build exactly what you need."
    },
  ];

  const comparison = [
    { item: "Custom website design", traditional: "£3,500", tradeEngine: "Included" },
    { item: "AI quote system development", traditional: "£5,500", tradeEngine: "Included" },
    { item: "AI visualisation system", traditional: "£6,000", tradeEngine: "Included" },
    { item: "CRM integration", traditional: "£1,500", tradeEngine: "Included" },
    { item: "Mobile optimisation", traditional: "£1,000", tradeEngine: "Included" },
    { item: "Content writing", traditional: "£500", tradeEngine: "Included" },
    { item: "Hosting (per year)", traditional: "£500", tradeEngine: "Included" },
    { item: "Ongoing support (per year)", traditional: "£1,500", tradeEngine: "Included" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pricing | £3,499 Setup + £199/Month | Trade Engine</title>
        <meta name="description" content="Trade Engine pricing: £3,499 one-time setup includes AI quote system, garden visualisation, and HubSpot CRM. £199/month covers hosting, support, and AI credits. Rolling monthly, no tie-ins." />
        <link rel="canonical" href="https://trade-engine.co.uk/pricing" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <img 
            src={logoImage} 
            alt="Trade Engine Logo" 
            className="h-32 md:h-40 mx-auto mb-8"
            data-testid="img-pricing-logo"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Everything you need to transform your landscaping business online. 
            One setup fee, one monthly subscription, no hidden costs.
          </p>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden border-2 border-amber-200 glow-ring">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-2">The Complete Package</h2>
              <p className="text-amber-100">Everything included. No surprises.</p>
            </div>
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 bg-slate-50 rounded-lg">
                  <p className="text-slate-600 mb-2">One-Time Setup</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    £3,499
                  </p>
                  <p className="text-slate-500 mt-2">Paid once to get started</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-lg">
                  <p className="text-slate-600 mb-2">Monthly Subscription</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    £199
                  </p>
                  <p className="text-slate-500 mt-2">Per month, cancel anytime</p>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg glow-ring-subtle"
                  data-testid="button-pricing-get-started"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-slate-500 mt-4 text-sm">
                  30-day money-back guarantee on setup fee
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
              <Gift className="h-5 w-5" />
              <span className="font-semibold">Launch Bonuses</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Plus These Bonuses Worth Over £500
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="text-center p-6 border-amber-200">
                <p className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {bonus.value}
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{bonus.title}</h3>
                <p className="text-slate-600">{bonus.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Fee Breakdown */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Included in the £3,499 Setup
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              This is a complete done-for-you build. You provide your branding and requirements, 
              we handle everything else.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setupIncludes.map((item, index) => (
              <Card key={index} className="p-6 hover-elevate">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Subscription Breakdown */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Included in the £199/Month
            </h2>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <Check className="h-5 w-5" />
              <span className="font-semibold">Rolling Monthly - Cancel Anytime</span>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              No long-term contracts. No tie-ins. Cancel whenever you want with 30 days notice. 
              We keep you because you love the service, not because you're locked in.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyIncludes.map((item, index) => (
              <Card key={index} className="p-6 hover-elevate">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compare the Value
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building these features separately would cost £20,000 with traditional agencies. 
              Here's the breakdown.
            </p>
          </div>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-slate-900">Traditional Agency</th>
                    <th className="text-center p-4 font-semibold text-amber-600 bg-amber-50">Trade Engine</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-t border-slate-200">
                      <td className="p-4 text-slate-700">{row.item}</td>
                      <td className="p-4 text-center text-slate-500">{row.traditional}</td>
                      <td className="p-4 text-center bg-amber-50">
                        <span className="inline-flex items-center gap-1 text-amber-600 font-semibold">
                          <Check className="h-4 w-4" />
                          {row.tradeEngine}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-slate-300 bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Total Investment</td>
                    <td className="p-4 text-center font-bold text-slate-700">£20,000+</td>
                    <td className="p-4 text-center bg-amber-100">
                      <span className="font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-lg">
                        £3,499 + £199/mo
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <Rocket className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Real Question: What's Your ROI?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            If the average landscaping job is worth £5,000 - £15,000, you only need 
            <span className="text-amber-400 font-bold"> one extra customer per month</span> to 
            see a massive return on your investment.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-4xl font-bold text-amber-500 mb-2">40%+</p>
              <p className="text-slate-300">Higher conversion with AI visualisation</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-4xl font-bold text-amber-500 mb-2">24/7</p>
              <p className="text-slate-300">Lead capture while you sleep</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-4xl font-bold text-amber-500 mb-2">15 sec</p>
              <p className="text-slate-300">Instant quotes vs days of waiting</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg"
            data-testid="button-pricing-cta-bottom"
            onClick={() => window.location.href = '/#contact'}
          >
            Start Winning More Customers
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Pricing Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                What happens if I want to cancel?
              </h3>
              <p className="text-slate-600">
                You can cancel your monthly subscription at any time with 30 days notice. 
                Your website remains yours - we'll help you transfer it to your own hosting 
                if you wish to continue independently.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Are there any hidden fees?
              </h3>
              <p className="text-slate-600">
                No. The £3,499 setup and £199/month covers everything listed above. 
                The only additional cost would be if you exceed the included AI visualisation 
                credits (most businesses never do), or request custom development work beyond 
                standard updates.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                How long does setup take?
              </h3>
              <p className="text-slate-600">
                Most websites are live within 2-3 weeks from kickoff. We start with a 
                1-hour onboarding call to gather your requirements, then build and refine 
                until you're 100% happy.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Do I need to provide anything?
              </h3>
              <p className="text-slate-600">
                We'll need your logo, brand colours, photos of your work (we can help source 
                stock images if needed), and your pricing structure. We handle everything else 
                including copywriting and technical setup.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Is there a money-back guarantee?
              </h3>
              <p className="text-slate-600">
                Yes. If you're not satisfied with your website within 30 days of launch, 
                we'll refund your setup fee in full. We're confident you'll love the results.
              </p>
            </Card>
            <Card className="p-6 border-2 border-green-200 bg-green-50/50">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Can I cancel the monthly subscription?
              </h3>
              <p className="text-slate-600">
                Absolutely! It's a rolling monthly contract with no tie-ins. Cancel anytime 
                with just 30 days notice. No penalties, no questions asked. We earn your 
                business every month.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-amber-100 mb-4 max-w-2xl mx-auto">
            Join landscaping businesses already using Trade Engine to win more customers 
            and grow their revenue.
          </p>
          <p className="text-amber-200 mb-8">
            Rolling monthly subscription - cancel anytime, no tie-ins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-amber-600 border-white hover:bg-amber-50 px-8 py-6 text-lg"
              data-testid="button-pricing-contact"
              onClick={() => window.location.href = '/#contact'}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg"
              data-testid="button-pricing-demo"
              onClick={() => window.open('https://www.premium-landscapes.co.uk', '_blank')}
            >
              See Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
