import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "The entire setup process takes approximately one week from our initial discovery call to going live. This includes configuring your website, setting up integrations, importing your pricing, and conducting your training session. We work efficiently while ensuring everything is perfect before launch.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "Not at all! We handle all the technical aspects — from setup to ongoing maintenance. You'll receive training on how to use the system, but it's designed to be intuitive and user-friendly. If you can use a smartphone, you can manage your Trade Engine website.",
  },
  {
    question: "What if I want to make changes after launch?",
    answer:
      "We're here to help! Minor updates like pricing changes or contact details can be done through your dashboard. For larger changes, simply reach out to our support team and we'll make the updates for you. Most changes are included in your monthly subscription.",
  },
  {
    question: "How does the AI design visualization work?",
    answer:
      "Your customer uploads a photo of their garden or outdoor space. Our AI analyzes the image along with their project requirements and generates a realistic preview of what their completed project could look like. The result is delivered via email within 90 seconds, giving customers a powerful visual that helps them commit to their project.",
  },
  {
    question: "What CRM systems do you integrate with?",
    answer:
      "We integrate with most popular CRM systems including Airtable, Zoho CRM, HubSpot, and more. We also support custom integrations via n8n, which connects to over 400 different apps and services. During our discovery call, we'll discuss your current systems and ensure seamless integration.",
  },
  {
    question: "Can I see a live example before committing?",
    answer:
      "Absolutely! We have a fully functional demo website at Premium Landscapes that showcases all the features in action. You can go through the entire quote process, see the AI design generation, and experience exactly what your customers will see. Just scroll up to the demo section to try it out.",
  },
  {
    question: "What happens if something goes wrong?",
    answer:
      "Our team monitors your website 24/7 and addresses any issues immediately. If you notice anything unusual, simply contact our support team and we'll resolve it quickly. Your monthly subscription includes priority support, so you're never left waiting.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes, you can cancel your monthly subscription with 30 days notice. However, we're confident you'll see the value — most clients report a positive ROI within the first month. We also offer a satisfaction guarantee during the setup phase.",
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
      className="border-b last:border-b-0"
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left hover-elevate px-4 -mx-4 rounded-md"
        data-testid={`button-faq-${index}`}
      >
        <span className="font-medium text-foreground pr-8">{faq.question}</span>
        <ChevronDown
          size={20}
          className={`text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-8">
          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <HelpCircle size={16} />
            <span className="text-sm font-medium">Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Trade Engine
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-card rounded-md border p-4 md:p-6">
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
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
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
