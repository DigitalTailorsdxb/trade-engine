import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "The entire setup process takes approximately one week from our initial discovery call to going live. This includes configuring your website, setting up HubSpot CRM integration, importing your pricing, creating your automation workflows, and conducting your complete onboarding session. We work efficiently while ensuring everything is perfect before launch.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "Not at all! We handle all the technical aspects — from setup to ongoing maintenance. You'll receive comprehensive onboarding training on how to use the system, but it's designed to be intuitive and user-friendly. If you can use a smartphone, you can manage your Trade Engine website.",
  },
  {
    question: "What's included in the £3,499 setup fee?",
    answer:
      "The setup fee covers everything needed to get you up and running: full website design and development, AI-powered quote system configuration, AI garden design generator setup, HubSpot CRM integration, n8n automation workflows, complete white-labelling to your brand, your own domain setup, and comprehensive onboarding training. Plus, you get £250 in free ad spend to kickstart your marketing on Meta and Google Ads.",
  },
  {
    question: "What's included in the £199 monthly fee?",
    answer:
      "Your monthly subscription covers: premium hosting and SSL certificates, 24/7 error monitoring and handling (we fix issues before you even notice them), AI credits for design generation, continuous feature upgrades as we release new capabilities, SEO optimisation and regular updates, priority support, ongoing performance optimisation, and security updates with automatic backups. Essentially, we handle all the technical maintenance so you can focus on running your business.",
  },
  {
    question: "How does the AI design visualisation work?",
    answer:
      "Your customer uploads a photo of their garden or outdoor space. Our AI analyses the image along with their project requirements and generates a realistic preview of what their completed project could look like. The result is delivered via email within 90 seconds, giving customers a powerful visual that helps them commit to their project. This feature alone has been shown to increase conversion rates by up to 40%.",
  },
  {
    question: "How does HubSpot CRM integration work?",
    answer:
      "We integrate directly with HubSpot CRM to ensure all your leads are automatically captured and synced. When a customer requests a quote or submits an enquiry through your website, their details are instantly added to your HubSpot account with all relevant information tagged and organised. This includes contact details, project requirements, quote values, and interaction history. The integration also powers our automated follow-up sequences.",
  },
  {
    question: "What automation is included?",
    answer:
      "We use n8n to power sophisticated automation workflows that handle repetitive tasks. This includes automated email and SMS follow-ups with leads who haven't responded, lead scoring to identify your hottest prospects, quote generation and delivery, design visualisation processing, CRM updates, and notification systems to alert you when high-value leads come in. The automation runs 24/7, ensuring you never miss an opportunity even when you're busy on a job site.",
  },
  {
    question: "Can I see a live example before committing?",
    answer:
      "Absolutely! We have a fully functional demo website at Premium Landscapes (www.premium-landscapes.co.uk) that showcases all the features in action. You can go through the entire quote process, see the AI design generation, and experience exactly what your customers will see. We encourage you to test it thoroughly before booking a call with us.",
  },
  {
    question: "What if I want to make changes after launch?",
    answer:
      "We're here to help! Minor updates like pricing changes or contact details can often be done through your dashboard or by contacting our support team. For larger changes, simply reach out and we'll make the updates for you. Most changes are included in your monthly subscription. Our continuous feature upgrades also mean your site gets better over time without any additional cost.",
  },
  {
    question: "What happens if something goes wrong?",
    answer:
      "Our team monitors your website 24/7 with automated error detection. In most cases, we identify and resolve issues before you even notice them. If you do notice anything unusual, simply contact our priority support team and we'll resolve it quickly. Your monthly subscription includes comprehensive error handling and support, so you're never left waiting or dealing with technical problems on your own.",
  },
  {
    question: "What's included in the £250 free ad spend?",
    answer:
      "When you sign up, we provide £250 in advertising credit that you can use on Meta (Facebook/Instagram) or Google Ads. This helps you start generating leads immediately while your organic presence grows. We can also provide guidance on how to set up effective campaigns targeting landscaping customers in your area.",
  },
  {
    question: "Is my website really white-labelled?",
    answer:
      "Yes, completely. Your website will feature your business name, logo, colours, and branding throughout. There's no mention of Trade Engine anywhere on your customer-facing site. To your customers, it appears as though you've invested £20,000+ in a custom-built solution. We handle all the technology behind the scenes while you get all the credit.",
  },
  {
    question: "How do SEO updates work?",
    answer:
      "Your monthly subscription includes ongoing SEO optimisation. We regularly update your site's technical SEO, ensure fast loading times, maintain mobile responsiveness, and implement best practices as search engine algorithms evolve. We also provide properly structured content and metadata to help you rank for relevant landscaping searches in your area.",
  },
  {
    question: "Can I cancel at any time? Am I tied into a contract?",
    answer:
      "Absolutely! It's a simple rolling monthly subscription with no tie-ins whatsoever. Cancel anytime with just 30 days notice — no penalties, no questions asked. We earn your business every single month. However, we're confident you'll see the value — most clients report a positive ROI within the first month simply from the increased lead conversion. The system typically pays for itself with just 2-3 extra jobs per month.",
  },
  {
    question: "Do you offer support after setup?",
    answer:
      "Absolutely. Your monthly subscription includes priority support for any questions or issues. We're here to help you get the most out of your system. Whether you need help understanding your analytics, want advice on follow-up sequences, or have technical questions, our team is available to assist.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border-b border-slate-100 last:border-b-0 ${isOpen ? "bg-slate-50" : ""}`}
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-5 text-left transition-colors"
        data-testid={`button-faq-${index}`}
      >
        <span className="font-medium text-slate-900 pr-8">{faq.question}</span>
        <ChevronDown
          size={20}
          className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 px-5">
          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about Trade Engine
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-500">
            Still have questions?{" "}
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:underline font-medium"
              data-testid="button-faq-contact"
            >
              Get in touch
            </button>{" "}
            and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
