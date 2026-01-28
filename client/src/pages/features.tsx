import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  ImageIcon,
  Users,
  Palette,
  Workflow,
  ChevronRight,
  Play,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Settings,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import gardenDesignImage from "@assets/Lewis-Reid-quote-1768925587897-design_1768990223449.jpg";

const features = [
  {
    icon: Calculator,
    title: "AI Instant Quotes",
    tagline: "15 seconds, not 2 days",
    description: "Intelligent 6-step conversational form that guides customers through their requirements with real-time pricing. No more back-and-forth emails or missed opportunities.",
    details: [
      "Natural conversational flow that feels human",
      "Real-time price calculations as customers answer",
      "Professional branded PDF quotes sent instantly",
      "Customisable pricing logic for your business",
      "Mobile-optimised for on-the-go enquiries",
      "Captures all project details upfront",
    ],
    benefits: [
      { icon: Clock, text: "Quotes in 15 seconds vs 2+ days" },
      { icon: TrendingUp, text: "40% higher conversion rate" },
      { icon: Zap, text: "Zero manual quote creation" },
    ],
  },
  {
    icon: ImageIcon,
    title: "AI Garden Visualisation",
    tagline: "See the finished result first",
    description: "Customers upload a photo of their garden and receive an AI-generated preview of their new landscape in just 90 seconds. This single feature can transform your close rate.",
    details: [
      "Photo-to-design transformation using latest AI",
      "Delivered via email within 90 seconds",
      "Based on customer's specific requirements",
      "Increases conversion by 40%+ on average",
      "Multiple design variations available",
      "High-resolution images for presentations",
    ],
    benefits: [
      { icon: ImageIcon, text: "Stunning visual previews" },
      { icon: TrendingUp, text: "40%+ conversion increase" },
      { icon: Clock, text: "90 second delivery" },
    ],
  },
  {
    icon: Users,
    title: "HubSpot CRM Integration",
    tagline: "Never lose a lead again",
    description: "Every lead is captured and nurtured automatically with intelligent follow-up sequences. Full HubSpot integration means your entire sales pipeline is managed for you.",
    details: [
      "Automatic lead capture from all forms",
      "WhatsApp & email follow-up sequences",
      "Full HubSpot CRM synchronisation",
      "Lead scoring and qualification",
      "Automated appointment booking",
      "Detailed analytics and reporting",
    ],
    benefits: [
      { icon: MessageSquare, text: "WhatsApp & email automation" },
      { icon: Users, text: "Full HubSpot integration" },
      { icon: Shield, text: "Never miss a lead" },
    ],
  },
  {
    icon: Palette,
    title: "White-Labelled Design",
    tagline: "Looks like £20k development",
    description: "Your brand, your domain, your identity. No Trade Engine branding visible anywhere. Your customers see only your professional, premium-quality website.",
    details: [
      "Your logo and brand colours throughout",
      "Your own custom domain",
      "Branded PDF quotes and emails",
      "Premium professional design quality",
      "Custom fonts and styling options",
      "Fully responsive on all devices",
    ],
    benefits: [
      { icon: Palette, text: "100% your branding" },
      { icon: Shield, text: "No Trade Engine visible" },
      { icon: Settings, text: "Fully customisable" },
    ],
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    tagline: "Set it and forget it",
    description: "Powerful automation workflows handle repetitive tasks so you can focus on your business. From lead notifications to team alerts, everything runs automatically.",
    details: [
      "Quote routing and instant notifications",
      "Automated team alerts via email/SMS",
      "Custom workflow triggers for any event",
      "Integration with 400+ apps and services",
      "Scheduled follow-ups and reminders",
      "Complete audit trail of all actions",
    ],
    benefits: [
      { icon: Workflow, text: "400+ app integrations" },
      { icon: Mail, text: "Automated notifications" },
      { icon: Clock, text: "24/7 operation" },
    ],
  },
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "24/7 Error Handling",
    description: "Continuous monitoring ensures your site stays online and performs optimally.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimisation",
    description: "Built-in search engine optimisation to help you rank higher in local searches.",
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description: "Lightning-fast load times with continuous performance monitoring.",
  },
  {
    icon: Settings,
    title: "Continuous Feature Upgrades",
    description: "Regular updates with new features and improvements at no extra cost.",
  },
  {
    icon: Shield,
    title: "Security Updates",
    description: "Regular security patches and updates to keep your site protected.",
  },
  {
    icon: Users,
    title: "Complete Onboarding",
    description: "Dedicated onboarding session to get you up and running smoothly.",
  },
];

function FeatureCard({
  feature,
  isActive,
  onClick,
}: {
  feature: (typeof features)[0];
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
  const currentFeature = features[activeFeature];

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
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">Features</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Everything Your Business Needs
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              A complete AI-powered system designed specifically for trade businesses. 
              No technical knowledge required.
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
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50">
            <img 
              src={gardenDesignImage} 
              alt="AI-generated garden design visualisation" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">AI Garden Visualisation</p>
                  <p className="text-white text-xl font-semibold">Delivered in 90 seconds</p>
                </div>
                <Button variant="secondary" onClick={handleDemoClick} data-testid="button-visualisation-demo">
                  <Play size={16} className="mr-2" />
                  Try Live Demo
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Core Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Five powerful features that work together to transform how you capture and convert leads.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feature list */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  feature={feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>

            {/* Feature detail */}
            <div>
              <Card className="sticky top-24 border-0 shadow-xl shadow-slate-200/50">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                    <currentFeature.icon size={28} className="text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {currentFeature.title}
                  </h3>
                  <p className="text-amber-600 font-medium mb-4">{currentFeature.tagline}</p>
                  <p className="text-slate-600 mb-6">{currentFeature.description}</p>
                  
                  {/* Details */}
                  <ul className="space-y-3 mb-8">
                    {currentFeature.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Benefits */}
                  <div className="border-t border-slate-100 pt-6">
                    <p className="text-sm font-medium text-slate-500 mb-4">Key Benefits</p>
                    <div className="grid grid-cols-1 gap-3">
                      {currentFeature.benefits.map((benefit, index) => {
                        const BenefitIcon = benefit.icon;
                        return (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-amber-50">
                            <BenefitIcon size={18} className="text-amber-600" />
                            <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Included With Every Plan
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Essential features that keep your website running smoothly, all included in your monthly subscription.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow" data-testid={`card-additional-feature-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join landscaping businesses already using Trade Engine to capture more leads and close more deals.
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
