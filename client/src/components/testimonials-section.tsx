import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Users, Quote } from "lucide-react";
import { SiAirtable, SiN8N, SiZoho } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const stats = [
  {
    value: "40%",
    label: "Average increase in quote requests",
    icon: TrendingUp,
  },
  {
    value: "2 min",
    label: "From visitor to qualified lead",
    icon: Users,
  },
  {
    value: "90 sec",
    label: "AI design delivery time",
    icon: Star,
  },
];

const testimonials = [
  {
    quote:
      "Trade Engine completely transformed how we handle leads. We used to spend hours on quotes — now customers get pricing instantly and we close more deals.",
    author: "James Mitchell",
    role: "Owner, Premium Landscapes",
    rating: 5,
  },
  {
    quote:
      "The AI garden visualization is a game-changer. Customers love seeing what their garden could look like before we even start. It builds trust instantly.",
    author: "Sarah Thompson",
    role: "Director, Green Space Gardens",
    rating: 5,
  },
  {
    quote:
      "We went from missing leads to never losing one. The automated follow-ups mean every potential customer gets the attention they deserve.",
    author: "David Chen",
    role: "Founder, Urban Outdoor Living",
    rating: 5,
  },
];

const integrations = [
  { name: "n8n", icon: SiN8N },
  { name: "Airtable", icon: SiAirtable },
  { name: "WhatsApp", icon: FaWhatsapp },
  { name: "Zoho", icon: SiZoho },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-md border"
                data-testid={`stat-${index}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Trade{" "}
            <span className="text-primary">Businesses Like Yours</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about their experience with Trade Engine
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} data-testid={`testimonial-${index}`}>
              <CardContent className="pt-6">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Quote size={20} className="text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-chart-4 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integrations */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Integrates seamlessly with your favorite tools
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                  data-testid={`integration-${integration.name.toLowerCase()}`}
                >
                  <Icon size={24} />
                  <span className="font-medium">{integration.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
