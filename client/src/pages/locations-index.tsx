import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MapPin, ArrowRight } from "lucide-react";
import { locationsByRegion, regionOrder } from "@/lib/location-data";

export default function LocationsIndex() {
  const totalLocations = Object.values(locationsByRegion).reduce(
    (sum, locs) => sum + locs.length,
    0
  );

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Landscaping Estimating Software — All UK Locations | Trade Engine</title>
        <meta
          name="description"
          content="Trade Engine serves landscaping businesses across the UK. AI-powered quoting, garden visualisation, and automated follow-ups — available in 100 cities and towns. Find your location."
        />
        <link rel="canonical" href="https://trade-engine.co.uk/locations" />
        <meta property="og:title" content="Landscaping Estimating Software — All UK Locations | Trade Engine" />
        <meta property="og:description" content="AI-powered landscaping estimating software available across the UK. Find your city and see how Trade Engine can help your landscaping business grow." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/locations" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Landscaping Estimating Software — All UK Locations | Trade Engine" />
        <meta name="twitter:description" content="AI-powered landscaping estimating software available across the UK in 100 cities and towns." />
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={14} className="text-amber-600" />
            <span className="text-amber-700 text-sm font-medium">{totalLocations} UK locations</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Landscaping Estimating Software<br className="hidden sm:block" />
            Across the UK
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Trade Engine serves landscaping businesses in cities and towns across England, Scotland, Wales, and Northern Ireland. Select your location to find out how we can help you win more jobs.
          </p>
        </div>
      </section>

      {/* Locations by Region */}
      <section className="py-16 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {regionOrder.map((region) => {
              const locs = locationsByRegion[region];
              if (!locs || locs.length === 0) return null;
              return (
                <div key={region}>
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin size={18} className="text-amber-500" />
                    <h2 className="text-xl font-bold text-slate-900">{region}</h2>
                    <span className="text-sm text-slate-400">({locs.length} locations)</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {locs.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/landscaping-estimating-software-${loc.slug}`}
                        className="group flex items-center justify-between bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 rounded-xl px-4 py-3 transition-all"
                        data-testid={`link-location-${loc.slug}`}
                      >
                        <span className="text-slate-700 group-hover:text-amber-700 text-sm font-medium transition-colors">
                          {loc.name}
                        </span>
                        <ArrowRight
                          size={13}
                          className="text-slate-400 group-hover:text-amber-500 transition-colors flex-shrink-0 ml-1"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Don't see your city?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              We serve landscaping businesses across the whole of the UK. If your town isn't listed, get in touch — we can still help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/hello-trade-engine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all"
                data-testid="button-locations-book-demo"
              >
                Book a Free Demo
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:hello@trade-engine.co.uk"
                className="inline-flex items-center justify-center gap-2 border border-slate-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-slate-700 transition-all"
                data-testid="button-locations-email"
              >
                hello@trade-engine.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
