import { useState } from "react";
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
    tagline: "Stops tyre-kickers before first contact",
    description: "Sets price expectations upfront - customers see real costs instantly before you lift a finger.",
    details: [
      "Qualifies buyers by budget reality",
      "Reduces unpaid site visits",
      "Anchors customers to market costs",
      "Prevents price haggling",
    ],
  },
  {
    icon: ImageIcon,
    title: "AI Garden Visualisation",
    tagline: 'Removes "I can\'t picture it" blockers',
    description: "Customers see their finished garden in 90 seconds - get faster approvals and cut revision loops.",
    details: [
      "Turns ideas into something tangible",
      "Aligns expectations before work starts",
      "Reduces scope creep post-agreement",
      "Increases conversion 40%+",
    ],
  },
  {
    icon: Users,
    title: "HubSpot CRM Integration",
    tagline: "Centralises all customer data",
    description: "Stores design, quote, and requirements in one place. Makes customer follow-ups intelligent.",
    details: [
      "Prevents lost information across staff",
      "Enables easy handover to installers",
      "Creates repeatable job records",
      "Lead scoring for hot prospects",
    ],
  },
  {
    icon: Palette,
    title: "White-Labelled",
    tagline: 'Differentiates from "cowboy" competitors',
    description: "Makes your business look premium and modern. Builds trust before the first call.",
    details: [
      "Positions you as professional",
      "Signals confidence in pricing",
      'Reduces "get 5 quotes" mentality',
      "Your brand, your domain",
    ],
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    tagline: "Frees you to focus on delivery",
    description: "Automates first interaction entirely. Reduces admin workload and eliminates follow-up chasing.",
    details: [
      "Works 24/7 without you",
      "Replaces manual quoting",
      "Cuts email back-and-forth",
      "400+ app integrations",
    ],
  },
];

function FeatureAccordion({
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
    <div className="rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className={`w-full text-left p-5 transition-all duration-300 ${
          isActive 
            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20 rounded-t-xl" 
            : "bg-white hover:bg-slate-50 text-slate-900 rounded-xl border border-slate-200"
        }`}
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
      
      {/* Expandable content underneath */}
      <div className={`overflow-hidden transition-all duration-300 ${
        isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-white border border-t-0 border-slate-200 rounded-b-xl p-6">
          <p className="text-slate-600 mb-4">{feature.description}</p>
          <ul className="space-y-2">
            {feature.details.map((detail, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="text-slate-700 text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const handleDemoClick = () => {
    window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  };

  const handleToggle = (index: number) => {
    setActiveFeature(activeFeature === index ? -1 : index);
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A complete system designed for trade businesses. No technical knowledge required.
          </p>
        </div>

        {/* AI Visualisation showcase */}
        <div className="mb-12 sm:mb-20 -mx-4 sm:mx-0">
          <div className="relative sm:max-w-4xl sm:mx-auto sm:rounded-2xl overflow-hidden glow-ring-intense">
            <img 
              src={gardenDesignImage} 
              alt="AI-generated garden design" 
              className="w-full h-auto min-h-[400px] sm:min-h-0 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
              <div className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">AI Garden Visualisation</p>
                  <p className="text-white text-xl sm:text-2xl font-semibold">Delivered in 90 seconds</p>
                </div>
                <Button variant="secondary" onClick={handleDemoClick} className="w-full sm:w-auto">
                  <Play size={16} className="mr-2" />
                  Try Live Demo
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature accordions */}
        <div className="max-w-3xl mx-auto space-y-3">
          {features.map((feature, index) => (
            <FeatureAccordion
              key={index}
              feature={feature}
              isActive={activeFeature === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
