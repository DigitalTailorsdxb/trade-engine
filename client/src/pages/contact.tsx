import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, MapPin, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/ChatGPT_Image_Jan_28,_2026,_11_37_25_PM_1769643450348.png";

const contactMethods = [
  {
    icon: Calendar,
    title: "Book a Call",
    description: "Schedule a free 30-minute video call to see Trade Engine in action",
    action: "Book Now",
    href: "https://calendly.com/hello-trade-engine/30min",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll get back to you within a few hours",
    action: "hello@trade-engine.co.uk",
    href: "mailto:hello@trade-engine.co.uk",
    highlight: false,
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Give us a call during business hours (Mon-Fri, 9am-6pm)",
    action: "07877 934782",
    href: "tel:+447877934782",
    highlight: false,
  },
  {
    icon: SiWhatsapp,
    title: "WhatsApp",
    description: "Message us on WhatsApp for a quick response",
    action: "Chat on WhatsApp",
    href: "https://wa.me/447877934782",
    highlight: false,
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Trade Engine</title>
        <meta name="description" content="Get in touch with Trade Engine. Book a free demo call, email us, call us, or message us on WhatsApp. We're here to help your landscaping business grow." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img 
              src={logoImage} 
              alt="Trade Engine" 
              className="h-24 sm:h-32 md:h-40 w-auto mx-auto mb-8"
            />
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Let's Talk
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to transform your landscaping business? Choose how you'd like to connect with us.
            </p>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className={`border-2 ${method.highlight ? 'border-amber-400/50 glow-ring' : 'border-slate-200'}`}
                  data-testid={`card-contact-${method.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${method.highlight ? 'bg-gradient-to-br from-amber-100 to-orange-100' : 'bg-slate-100'}`}>
                      <method.icon size={28} className={method.highlight ? 'text-amber-600' : 'text-slate-600'} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {method.description}
                    </p>
                    <Button
                      size="lg"
                      className={`w-full ${method.highlight 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25' 
                        : 'bg-slate-900 hover:bg-slate-800'}`}
                      asChild
                      data-testid={`button-contact-${method.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {method.action}
                        <ArrowRight size={18} className="ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 mb-6">
              <MapPin size={28} className="text-amber-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Based in the East Midlands
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-2">
              We work with landscaping businesses across the United Kingdom.
            </p>
            <p className="text-slate-500">
              Response time: Within a few hours during business hours (Mon-Fri, 9am-6pm GMT)
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
