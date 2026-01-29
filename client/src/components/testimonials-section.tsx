import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Users, Clock, Quote } from "lucide-react";
import { SiN8N, SiHubspot } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const stats = [
  {
    value: "40%",
    label: "Average increase in quote requests",
    icon: TrendingUp,
  },
  {
    value: "15 sec",
    label: "From visitor to qualified lead",
    icon: Users,
  },
  {
    value: "90 sec",
    label: "AI design delivery time",
    icon: Clock,
  },
];

const testimonials = [
  {
    quote:
      "Trade Engine completely transformed how we handle leads. We used to spend hours on quotes — now customers get pricing instantly and we close more deals.",
    author: "James Mitchell",
    role: "Owner, Mitchell Gardens",
    rating: 5,
  },
  {
    quote:
      "The AI garden visualisation is a game-changer. Customers love seeing what their garden could look like before we even start. It builds trust instantly.",
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
  { name: "HubSpot", icon: SiHubspot },
  { name: "n8n", icon: SiN8N },
  { name: "WhatsApp", icon: FaWhatsapp },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-white rounded-xl shadow-sm"
                data-testid={`stat-${index}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon size={20} className="text-primary sm:hidden" />
                  <Icon size={24} className="text-primary hidden sm:block" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Trade Businesses
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our clients have to say about their experience
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg shadow-slate-200/50 h-full" data-testid={`testimonial-${index}`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Quote size={18} className="text-primary" />
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed flex-1">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-slate-600 font-semibold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{testimonial.author}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integrations */}
        <div className="text-center">
          <p className="text-sm text-slate-500 mb-6">
            Integrates seamlessly with your favourite tools
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-400"
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
