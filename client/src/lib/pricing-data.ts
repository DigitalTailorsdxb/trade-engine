export const plans = [
  {
    name: "Premium Website",
    price: "£129.99",
    slug: "/plans/premium-website",
    legacySlug: "/plans/quote-and-design",
    summary: "A complete, premium multi-page website built around your trade business.",
    details: [
      "Custom, professionally designed multi-page website",
      "Pages for your services, work, business and contact details",
      "Responsive design for mobile, tablet and desktop",
      "Your branding and domain",
      "A clear route for customers to enquire",
    ],
    bestFor: "For tradespeople ready for a website that reflects the quality of their work.",
  },
  {
    name: "Website + SEO",
    price: "£149.99",
    slug: "/plans/website-and-seo",
    legacySlug: "/plans/full-system",
    summary: "A premium multi-page website, with monthly SEO updates included.",
    details: [
      "Everything in Premium Website",
      "Monthly SEO updates",
      "Ongoing improvements to on-page search foundations",
      "Pages structured around your services and locations",
      "A polished, responsive experience across devices",
    ],
    bestFor: "For businesses that want their website cared for and improved month by month.",
  },
  {
    name: "Complete Package",
    price: "£300",
    slug: "/plans/complete-package",
    legacySlug: "/plans/premium-package",
    summary: "A complete monthly package exclusively for landscaping companies: premium website, monthly SEO, instant quoting and AI garden design.",
    details: [
      "Premium multi-page website",
      "Monthly SEO updates",
      "Instant quoting",
      "AI garden design for landscaping businesses",
      "Available exclusively to landscaping companies",
      "£300/month total",
    ],
    bestFor: "For landscaping companies only. £300/month is the total price, not an add-on.",
  },
] as const;

export const pricingFaqs = [
  {
    question: "What does Trade Engine build?",
    answer:
      "We build complete, premium multi-page websites for tradespeople. Your site is shaped around your business, services and existing brand—not just a single landing page.",
  },
  {
    question: "What is the difference between the plans?",
    answer:
      "Premium Website is £129.99/month and Website + SEO is £149.99/month; both are available to businesses across the trades. Complete Package is £300/month total and is exclusively for landscaping companies. It includes the premium website, monthly SEO updates, instant quoting and AI garden design.",
  },
  {
    question: "Is Complete Package £300 an add-on?",
    answer:
      "No. £300/month is the total monthly price, not an add-on. Complete Package is exclusively for landscaping companies and includes the premium website, monthly SEO updates, instant quoting and AI garden design.",
  },
  {
    question: "Is AI included in every plan?",
    answer:
      "No. Instant quoting and AI garden design are included only in Complete Package, which is exclusively for landscaping companies.",
  },
  {
    question: "What does monthly SEO updates mean?",
    answer:
      "Website + SEO and Complete Package include monthly SEO updates to the website. We can explain the scope for your business when you get in touch.",
  },
  {
    question: "Can I see a live example?",
    answer:
      "Yes. Explore the live Premium Landscapes website at premium-landscapes.co.uk, including the feature-specific demos linked around our site.",
  },
  {
    question: "Do you work with trades beyond landscaping?",
    answer:
      "Yes. Premium Website (£129.99/month) and Website + SEO (£149.99/month) are for businesses across the trades. Complete Package (£300/month total) is exclusively for landscaping companies.",
  },
];
