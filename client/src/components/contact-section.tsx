import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Clock, Video, ArrowRight } from "lucide-react";
import logoImage from "@assets/ChatGPT_Image_Jan_28,_2026,_11_37_25_PM_1769643450348.png";

export function ContactSection() {
  const handleBookCall = () => {
    window.open("https://calendly.com/your-link", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src={logoImage} 
            alt="Trade Engine" 
            className="h-24 sm:h-32 md:h-40 w-auto mx-auto mb-6"
          />
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Book a free video call to see Trade Engine in action and discuss how it can work for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Book a Call Card */}
          <Card className="border-2 border-amber-400/50 glow-ring" data-testid="card-contact-book">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-6">
                <Video size={28} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Book a Video Call
              </h3>
              <p className="text-slate-600 mb-6">
                Schedule a free 30-minute demo call. We'll show you how Trade Engine works and answer all your questions.
              </p>
              <ul className="text-sm text-slate-600 space-y-2 mb-6 text-left">
                <li className="flex items-center gap-3">
                  <Clock size={16} className="text-amber-500 flex-shrink-0" />
                  30-minute personalised demo
                </li>
                <li className="flex items-center gap-3">
                  <Calendar size={16} className="text-amber-500 flex-shrink-0" />
                  Choose a time that suits you
                </li>
              </ul>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0 shadow-lg shadow-amber-500/25"
                asChild
                data-testid="button-book-call"
              >
                <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                  Book Your Free Call
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information Card */}
          <Card className="border border-slate-200" data-testid="card-contact-info">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <a
                      href="mailto:hello@trade-engine.co.uk"
                      className="text-slate-900 hover:text-amber-600 transition-colors font-medium"
                      data-testid="link-contact-email"
                    >
                      hello@trade-engine.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Phone</p>
                    <a
                      href="tel:+447877934782"
                      className="text-slate-900 hover:text-amber-600 transition-colors font-medium"
                      data-testid="link-contact-phone"
                    >
                      07877 934782
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Location</p>
                    <p className="text-slate-900 font-medium">East Midlands, United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  We typically respond within a few hours during business hours (Mon-Fri, 9am-6pm GMT).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
