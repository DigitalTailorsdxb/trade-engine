import { useState } from "react";
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
} from "lucide-react";
import gardenDesignImage from "@assets/design_(2)_1769642158706.png";

const features = [
  {
    icon: Calculator,
    title: "AI Instant Quotes",
    tagline: "15 seconds, not 2 days",
    description: "Intelligent 6-step conversational form that guides customers through their requirements with real-time pricing.",
    details: [
      "Natural conversational flow",
      "Real-time price calculations",
      "Professional PDF quotes",
      "Customisable pricing logic",
    ],
  },
  {
    icon: ImageIcon,
    title: "AI Garden Visualisation",
    tagline: "See the finished result first",
    description: "Customers upload a photo and receive an AI-generated preview of their new garden in 90 seconds.",
    details: [
      "Photo-to-design transformation",
      "Delivered via email instantly",
      "Based on project requirements",
      "Increases conversion 40%+",
    ],
  },
  {
    icon: Users,
    title: "HubSpot CRM Integration",
    tagline: "Never lose a lead",
    description: "Every lead captured and nurtured automatically with intelligent follow-up sequences.",
    details: [
      "Automatic lead capture",
      "WhatsApp & email sequences",
      "Full HubSpot integration",
      "Lead scoring & tracking",
    ],
  },
  {
    icon: Palette,
    title: "White-Labelled",
    tagline: "Looks like £20k development",
    description: "Your brand, your domain, your identity. No Trade Engine branding visible anywhere.",
    details: [
      "Your logo & colours",
      "Your own domain",
      "Branded PDF quotes",
      "Premium professional design",
    ],
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    tagline: "Set it and forget it",
    description: "Powerful automation workflows handle repetitive tasks so you can focus on your business.",
    details: [
      "Quote routing & notifications",
      "Automated team alerts",
      "Custom workflow triggers",
      "400+ app integrations",
    ],
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
          ? "bg-primary text-white shadow-lg shadow-primary/20" 
          : "bg-slate-50 hover:bg-slate-100 text-slate-900"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
          isActive ? "bg-white/20" : "bg-white shadow-sm"
        }`}>
          <Icon size={20} className={isActive ? "text-white" : "text-primary"} />
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

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const currentFeature = features[activeFeature];

  const handleDemoClick = () => {
    window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Features</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A complete system designed for trade businesses. No technical knowledge required.
          </p>
        </div>

        {/* AI Visualisation showcase */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50">
            <img 
              src={gardenDesignImage} 
              alt="AI-generated garden design" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">AI Garden Visualisation</p>
                  <p className="text-white text-xl font-semibold">Delivered in 90 seconds</p>
                </div>
                <Button variant="secondary" onClick={handleDemoClick}>
                  <Play size={16} className="mr-2" />
                  Try Live Demo
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature tabs */}
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
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <currentFeature.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {currentFeature.title}
                </h3>
                <p className="text-accent font-medium mb-4">{currentFeature.tagline}</p>
                <p className="text-slate-600 mb-6">{currentFeature.description}</p>
                <ul className="space-y-3">
                  {currentFeature.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
