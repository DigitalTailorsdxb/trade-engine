import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calculator,
  ImageIcon,
  Users,
  Palette,
  Workflow,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  MessageSquare,
  Database,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "AI Instant Quote System",
    tagline: "Customers get pricing in 2 minutes, not 2 days",
    description:
      "Transform your quoting process with an intelligent 6-step conversational form that guides customers through their requirements.",
    details: [
      "6-step conversational form that feels natural",
      "Dual mode: Full project quotes OR individual product selection",
      "Real-time price calculations as they build their quote",
      "Professional PDF quotes generated automatically",
      "Customizable pricing logic from your own spreadsheet",
    ],
  },
  {
    icon: ImageIcon,
    title: "AI Garden Visualization",
    tagline: "Let customers SEE their new garden before you build it",
    description:
      "Customers upload a photo of their garden and receive an AI-generated preview of what their new design could look like.",
    details: [
      "Upload photo and receive AI transformation",
      "Delivered via email in just 90 seconds",
      "Based on customer's actual project requirements",
      "Dramatically increases customer engagement",
      "Sets you apart from every competitor",
    ],
  },
  {
    icon: Users,
    title: "Automated CRM & Follow-ups",
    tagline: "Never lose a lead again",
    description:
      "Every lead is captured and nurtured automatically with intelligent follow-up sequences across multiple channels.",
    details: [
      "Every lead captured automatically — nothing slips through",
      "WhatsApp & email follow-up sequences",
      "Integration with Airtable, Zoho CRM, and more",
      "Instant notifications when leads come in",
      "Full lead history and communication tracking",
    ],
  },
  {
    icon: Palette,
    title: "White-Label Ready",
    tagline: "Looks like you spent £20k on development",
    description:
      "Your website, your brand. Everything is customized to match your business identity perfectly.",
    details: [
      "Your logo, colors, and contact details throughout",
      "Your own domain name",
      "Fully branded PDF quotes with your business info",
      "Professional design that matches premium pricing",
      "No Trade Engine branding visible to customers",
    ],
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    tagline: "Set it and forget it",
    description:
      "Powerful automation workflows handle the heavy lifting so you can focus on what you do best — running your business.",
    details: [
      "Quote routing based on project type and size",
      "Automated notifications to your team",
      "Pricing logic pulled from your spreadsheet",
      "Custom workflow triggers and actions",
      "Integration with 400+ apps and services",
    ],
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = feature.icon;

  return (
    <Card
      className="hover-elevate cursor-pointer transition-all duration-200"
      onClick={() => setIsExpanded(!isExpanded)}
      data-testid={`card-feature-${index}`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon size={24} className="text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">{feature.title}</CardTitle>
            <p className="text-sm font-medium text-accent">{feature.tagline}</p>
          </div>
          <button className="text-muted-foreground p-1" data-testid={`button-expand-feature-${index}`}>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{feature.description}</p>
        {isExpanded && (
          <ul className="space-y-2">
            {feature.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Settings size={16} />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-primary">Dominate Your Market</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete system designed specifically for trade businesses. No technical
            knowledge required — we handle everything.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card rounded-md border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock size={24} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">2 min</p>
            <p className="text-sm text-muted-foreground">Average quote time</p>
          </div>
          <div className="text-center p-6 bg-card rounded-md border">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <FileText size={24} className="text-accent" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">90 sec</p>
            <p className="text-sm text-muted-foreground">AI design delivery</p>
          </div>
          <div className="text-center p-6 bg-card rounded-md border">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={24} className="text-secondary" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">24/7</p>
            <p className="text-sm text-muted-foreground">Automated follow-ups</p>
          </div>
        </div>
      </div>
    </section>
  );
}
