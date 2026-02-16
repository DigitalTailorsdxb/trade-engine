import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import logoImage from "@assets/ChatGPT_Image_Jan_28,_2026,_11_37_25_PM_1769643450348.png";

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How long does it take to get my website live?",
        answer: "Once we have your company information, product pricing, logos, and design specifications, your website will be built within 7 days. We configure the AI systems, set up your CRM integration, and run thorough testing. Once you're happy with everything, we go live."
      },
      {
        question: "Do I need any technical knowledge to use the system?",
        answer: "Not at all! We handle everything technical - from setup to ongoing maintenance. Your website is designed to work automatically in the background, capturing leads and generating quotes while you focus on your business. If you can send a text message, you can manage your Trade Engine website."
      },
      {
        question: "What do I need to provide to get started?",
        answer: "We'll need access to your website domain (or we can help you purchase one), your logo and any brand assets, your pricing structure for different services, and any specific design preferences. Photos of your previous work are helpful if you have them - otherwise we can source professional stock images. We handle everything else including copywriting and all technical setup."
      },
      {
        question: "Can I see a working example before I commit?",
        answer: "Absolutely! Visit our fully functional demo at www.premium-landscapes.co.uk to experience everything your customers will see. Try the quote system, request an AI garden visualisation, and explore all the features. We encourage you to test it thoroughly - that's exactly what your customers will experience."
      },
    ]
  },
  {
    title: "Pricing & Payments",
    faqs: [
      {
        question: "What's included in the £3,499 setup fee?",
        answer: "Everything needed for a complete professional website: custom design and development, AI-powered instant quote system with your pricing, AI garden visualisation system, HubSpot CRM integration with automation workflows, complete white-labelling with your branding, domain configuration, SSL certificates, professional copywriting for all pages, and comprehensive onboarding training. Plus £250 in free advertising credit to kickstart your lead generation."
      },
      {
        question: "What does the £199 monthly subscription cover?",
        answer: "Your monthly fee includes: premium hosting with 99.9% uptime, SSL security certificates, 24/7 monitoring and error handling (we fix issues before you notice them), AI visualisation credits for your customers, continuous feature upgrades, SEO optimisation, priority support, performance optimisation, and automatic security updates and backups. It's comprehensive - you won't pay for hosting, maintenance, or support separately."
      },
      {
        question: "Are there any hidden fees or extra costs?",
        answer: "No hidden fees. The £3,499 setup and £199/month covers everything listed. The only additional costs would be if you exceed the generous included AI visualisation credits (most businesses never do), or if you request custom development work beyond standard updates and changes."
      },
      {
        question: "Can I cancel at any time? Am I tied into a contract?",
        answer: "It's a simple rolling monthly subscription with absolutely no tie-ins. Cancel anytime with just 30 days notice - no penalties, no questions asked, no exit fees. We earn your business every single month through results, not contracts. Most clients see positive ROI within the first month."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfer, credit/debit cards, and direct debit for monthly payments. The setup fee is paid upfront to begin work, and the monthly subscription starts once your website goes live. We can discuss payment arrangements if needed."
      },
    ]
  },
  {
    title: "The AI Quote System",
    faqs: [
      {
        question: "How does the instant quote system work?",
        answer: "Customers go through a simple 6-step guided process on your website. They select what they want (Full Garden Makeover or Individual Products), answer questions about their project, upload photos if they want, and receive an instant professional quote. The system calculates pricing in real-time based on your pricing rules. No waiting days for callbacks - quotes are delivered in 15 seconds."
      },
      {
        question: "Can I customise the pricing and quote options?",
        answer: "Completely. We configure the quote system with your exact pricing structure across over 120 products in 20 categories — including paving (natural stone and manufactured), decking, turf, aggregates, planting, structures and pergolas, ponds, water features, fire pits and seating, outdoor kitchens, fencing, walls, hedging, steps, drainage, lighting, and decorative features. You can set pricing per square metre, per linear metre, or as fixed prices, and configure minimum order values. We'll work with you during setup to get it exactly right."
      },
      {
        question: "What do customers receive after requesting a quote?",
        answer: "Customers receive a professional branded PDF quote emailed instantly, featuring your logo and business details. The quote includes a breakdown of their selections, total pricing, and next steps. You also receive an instant notification with all their details synced to your CRM."
      },
      {
        question: "Can customers get quotes outside of business hours?",
        answer: "Yes! That's one of the biggest benefits. Your website works 24/7, so customers can request quotes at 10pm on a Sunday or 6am before work. You capture leads while competitors make them wait. Over 40% of quote requests come outside normal business hours."
      },
    ]
  },
  {
    title: "AI Garden Visualisation",
    faqs: [
      {
        question: "How does the AI garden design feature work?",
        answer: "Customers upload a photo of their current garden through your website. Our AI analyses the image along with their project requirements and generates a photorealistic preview of what their finished garden could look like. The design is delivered to their email inbox within 90 seconds. It's completely free for your customers to use."
      },
      {
        question: "Is the AI visualisation free for my customers?",
        answer: "Yes, 100% free for your customers. There's no charge or barrier to using it. This removes hesitation and encourages more people to engage with your website. The included AI credits in your monthly subscription cover typical usage - most businesses never exceed them."
      },
      {
        question: "How realistic are the AI-generated designs?",
        answer: "Very realistic. The AI creates photorealistic previews that show customers what their garden could look like with new features like patios, decking, or landscaping. While it's not a final architectural plan, it gives customers a powerful visual that helps them imagine the finished result and commit to their project."
      },
      {
        question: "Does the AI visualisation really increase conversions?",
        answer: "Yes - businesses using AI visualisation see conversion rates increase by 40% or more on average. When customers can see what their garden could look like, they're much more likely to proceed. It removes uncertainty and gets them excited about the project."
      },
    ]
  },
  {
    title: "CRM & Lead Management",
    faqs: [
      {
        question: "How does the HubSpot integration work?",
        answer: "Every lead from your website - quote requests, enquiries, AI design requests - is automatically captured and synced to your HubSpot CRM in real-time. Customer details, project requirements, quote values, and all interactions are stored and organised. You get a complete picture of every potential customer in one place."
      },
      {
        question: "What automated follow-ups are included?",
        answer: "We set up intelligent follow-up sequences that nurture leads automatically. If someone requests a quote but doesn't respond, they receive friendly follow-up emails and optional SMS messages. High-value leads get priority attention. The automation runs 24/7 so you never miss an opportunity, even when you're on a job site."
      },
      {
        question: "Do I need an existing HubSpot account?",
        answer: "No. If you don't have HubSpot already, we'll set up a free HubSpot account for you as part of the setup. HubSpot's free tier is powerful enough for most landscaping businesses. If you already use HubSpot, we'll integrate seamlessly with your existing account."
      },
      {
        question: "Can I see all my leads in one place?",
        answer: "Yes. Your HubSpot CRM becomes your central hub for all customer data. Every quote request, design visualisation, enquiry, and follow-up is logged and tracked. You can see the full history of every lead, including what they requested, when they visited, and where they are in your sales process."
      },
    ]
  },
  {
    title: "Website & Branding",
    faqs: [
      {
        question: "Is my website completely white-labelled?",
        answer: "Yes, completely. Your website features your business name, logo, colours, and branding throughout. There's absolutely no mention of Trade Engine anywhere your customers can see. To them, it looks like you've invested £20,000+ in a premium custom-built website. We handle all the technology behind the scenes while you get all the credit."
      },
      {
        question: "Can I use my own domain name?",
        answer: "Absolutely. We'll configure your website on your own domain (like www.yourbusiness.co.uk). If you don't have a domain yet, we'll help you purchase one and set it up as part of the setup process. You own your domain - it's yours."
      },
      {
        question: "What does the website look like on mobile?",
        answer: "Beautiful and fully functional. Over 70% of visitors browse on mobile, so we build mobile-first. Every feature works perfectly on phones, tablets, and desktops. Customers can request quotes and AI designs from anywhere - their sofa, the train, or standing in their garden."
      },
      {
        question: "Can I make changes to my website after launch?",
        answer: "Yes! Minor updates like pricing changes, new photos, or contact details can often be done quickly. For larger changes, simply contact our support team and we'll make the updates for you. Most changes are included in your monthly subscription. Your website also benefits from continuous feature upgrades as we release new capabilities."
      },
    ]
  },
  {
    title: "Support & Maintenance",
    faqs: [
      {
        question: "What support do I get after my website goes live?",
        answer: "Priority support is included in your monthly subscription. Whether you have questions, need changes, or encounter any issues, our team is here to help. Most support requests are handled within a few hours. You're never left dealing with technical problems on your own."
      },
      {
        question: "What happens if something goes wrong with my website?",
        answer: "We monitor your website 24/7 with automated error detection. In most cases, we identify and fix issues before you even notice them. If anything unusual happens, you can contact our support team immediately and we'll resolve it fast. Downtime is extremely rare thanks to our enterprise-grade hosting."
      },
      {
        question: "Are software updates and security included?",
        answer: "Yes, all included. We handle security updates, performance optimisation, and feature upgrades automatically. Your website stays secure, fast, and up-to-date without you having to think about it. Daily backups mean your data is always protected."
      },
      {
        question: "How do I contact support if I need help?",
        answer: "You'll have direct access to our support team via email and phone. Response times are typically within a few hours during business days. For urgent issues, we prioritise and respond faster. We're committed to keeping your website running smoothly."
      },
    ]
  },
];

function FAQItem({ faq, isOpen, onToggle }: { 
  faq: { question: string; answer: string }; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className={`border-b border-slate-200 last:border-b-0 ${isOpen ? "bg-slate-50" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-5 text-left transition-colors hover:bg-slate-50"
        data-testid={`faq-toggle-${faq.question.slice(0, 20).replace(/\s/g, '-')}`}
      >
        <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
        <ChevronDown 
          size={20} 
          className={`text-amber-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-5 text-slate-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

function FAQCategory({ category, openIndex, setOpenIndex, categoryIndex }: {
  category: typeof faqCategories[0];
  openIndex: string | null;
  setOpenIndex: (key: string | null) => void;
  categoryIndex: number;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
          <HelpCircle size={18} className="text-amber-600" />
        </div>
        {category.title}
      </h2>
      <Card className="divide-y divide-slate-200">
        {category.faqs.map((faq, index) => {
          const key = `${categoryIndex}-${index}`;
          return (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === key}
              onToggle={() => setOpenIndex(openIndex === key ? null : key)}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ | Common Questions About Trade Engine for Landscapers</title>
        <meta name="description" content="Find answers to frequently asked questions about Trade Engine. Learn about pricing, setup time, AI features, CRM integration, and how our system helps landscaping businesses grow." />
        <link rel="canonical" href="https://trade-engine.co.uk/faq" />
        <meta property="og:title" content="FAQ | Common Questions About Trade Engine for Landscapers" />
        <meta property="og:description" content="Learn about pricing, setup time, AI features, CRM integration, and how our system helps landscaping businesses grow." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trade-engine.co.uk/faq" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <img 
            src={logoImage} 
            alt="Trade Engine Logo" 
            className="h-24 md:h-32 mx-auto mb-8"
            data-testid="img-faq-logo"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about Trade Engine. Can't find what you're looking for? 
            Get in touch and we'll be happy to help.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, index) => (
            <FAQCategory
              key={index}
              category={category}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              categoryIndex={index}
            />
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            We're here to help. Get in touch and we'll answer any questions you have about 
            getting started with Trade Engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-amber-600 border-white hover:bg-amber-50 px-8 py-6 text-lg"
              data-testid="button-faq-contact"
              onClick={() => window.location.href = '/#contact'}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg"
              data-testid="button-faq-demo"
              onClick={() => window.open('https://www.premium-landscapes.co.uk', '_blank')}
            >
              See Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
