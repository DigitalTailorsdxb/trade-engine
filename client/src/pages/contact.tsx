import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

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
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-4">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Let's Talk
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to transform your landscaping business? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Main CTA - Book a Call */}
        <section className="pb-16 md:pb-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 p-8 md:p-12 text-center text-white shadow-2xl shadow-amber-500/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Calendar size={36} className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Book a Free Demo Call
                </h2>
                <p className="text-lg text-amber-100 max-w-xl mx-auto mb-8">
                  Schedule a 30-minute video call to see Trade Engine in action. We'll walk you through everything and answer all your questions.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-amber-50 shadow-lg px-8 py-6 text-lg font-semibold"
                  asChild
                  data-testid="button-contact-calendly"
                >
                  <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                    Book Your Call
                    <ArrowRight size={20} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-slate-400 text-sm font-medium">or reach us directly</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
        </div>

        {/* Contact Options */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Email */}
              <a 
                href="mailto:hello@trade-engine.co.uk"
                className="group flex flex-col items-center p-8 rounded-2xl border-2 border-slate-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300"
                data-testid="link-contact-email"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-amber-100 flex items-center justify-center mb-4 transition-colors">
                  <Mail size={24} className="text-slate-600 group-hover:text-amber-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
                <p className="text-amber-600 font-medium text-center">hello@trade-engine.co.uk</p>
              </a>

              {/* Phone */}
              <a 
                href="tel:+447877934782"
                className="group flex flex-col items-center p-8 rounded-2xl border-2 border-slate-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300"
                data-testid="link-contact-phone"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-amber-100 flex items-center justify-center mb-4 transition-colors">
                  <Phone size={24} className="text-slate-600 group-hover:text-amber-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Phone</h3>
                <p className="text-amber-600 font-medium">07877 934782</p>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/447877934782"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 rounded-2xl border-2 border-slate-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-300"
                data-testid="link-contact-whatsapp"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-green-100 flex items-center justify-center mb-4 transition-colors">
                  <SiWhatsapp size={24} className="text-slate-600 group-hover:text-green-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">WhatsApp</h3>
                <p className="text-green-600 font-medium">Message Us</p>
              </a>
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600">East Midlands, United Kingdom</p>
                  <p className="text-slate-500 text-sm mt-1">Serving landscaping businesses nationwide</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Response Time</h3>
                  <p className="text-slate-600">Within a few hours</p>
                  <p className="text-slate-500 text-sm mt-1">Monday - Friday, 9am - 6pm GMT</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
