import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" asChild data-testid="button-back-home">
            <Link href="/">
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the Trade Engine website and services, you agree to be
            bound by these Terms of Service and all applicable laws and regulations. If
            you do not agree with any of these terms, you are prohibited from using or
            accessing this site.
          </p>

          <h2>2. Services Description</h2>
          <p>
            Trade Engine provides AI-powered website solutions for trade businesses,
            including but not limited to:
          </p>
          <ul>
            <li>Custom website design and development</li>
            <li>AI-powered instant quote systems</li>
            <li>AI garden/project visualization tools</li>
            <li>CRM integration and automation workflows</li>
            <li>White-label branding solutions</li>
            <li>Ongoing hosting, maintenance, and support</li>
          </ul>

          <h2>3. Pricing and Payment</h2>
          <h3>Setup Fee</h3>
          <p>
            A one-time setup fee of £4,995 is payable upon agreement to proceed with the
            service. This fee covers all initial setup, configuration, and training as
            outlined in our service agreement.
          </p>
          <h3>Monthly Subscription</h3>
          <p>
            A monthly subscription fee of £199 is payable in advance each month. This
            covers hosting, maintenance, AI credits, support, and updates.
          </p>
          <h3>Payment Terms</h3>
          <ul>
            <li>Setup fee is due upon contract signing</li>
            <li>Monthly fees are due on the same date each month</li>
            <li>All prices are exclusive of VAT where applicable</li>
            <li>Late payments may incur additional charges</li>
          </ul>

          <h2>4. Service Level Agreement</h2>
          <p>We commit to providing:</p>
          <ul>
            <li>99.9% website uptime</li>
            <li>Response to support requests within 24 hours</li>
            <li>Regular security updates and maintenance</li>
            <li>Ongoing feature improvements</li>
          </ul>

          <h2>5. Client Responsibilities</h2>
          <p>As a client, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information during setup</li>
            <li>Maintain the confidentiality of any login credentials</li>
            <li>Use the services in compliance with all applicable laws</li>
            <li>Pay all fees when due</li>
            <li>Not use the services for any unlawful purpose</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <h3>Trade Engine Property</h3>
          <p>
            The Trade Engine platform, software, and underlying technology remain the
            property of Trade Engine. You are granted a licence to use these components
            as part of your subscription.
          </p>
          <h3>Client Content</h3>
          <p>
            You retain ownership of all content, logos, images, and materials you provide.
            You grant us a licence to use this content solely for the purpose of
            delivering our services.
          </p>

          <h2>7. Data and Privacy</h2>
          <p>
            Your use of our services is also governed by our Privacy Policy. We will
            handle all personal data in accordance with the UK GDPR and Data Protection
            Act 2018.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Trade Engine shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages,
            including but not limited to:
          </p>
          <ul>
            <li>Loss of profits or revenue</li>
            <li>Loss of data</li>
            <li>Business interruption</li>
            <li>Loss of goodwill</li>
          </ul>
          <p>
            Our total liability for any claims arising from or related to these terms or
            our services shall not exceed the total fees paid by you in the 12 months
            preceding the claim.
          </p>

          <h2>9. Termination</h2>
          <h3>By Client</h3>
          <p>
            You may terminate your monthly subscription with 30 days written notice. The
            setup fee is non-refundable.
          </p>
          <h3>By Trade Engine</h3>
          <p>
            We may terminate or suspend your access to our services immediately, without
            prior notice, if you breach these terms or fail to pay fees when due.
          </p>
          <h3>Effect of Termination</h3>
          <p>
            Upon termination, your access to the platform will be revoked. We can provide
            an export of your data upon request.
          </p>

          <h2>10. Modifications to Service</h2>
          <p>
            We reserve the right to modify or discontinue any part of our services at any
            time. We will provide reasonable notice of any significant changes.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of
            England and Wales. Any disputes shall be subject to the exclusive jurisdiction
            of the courts of England and Wales.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. We will notify you of
            any changes by posting the new terms on this page and updating the "Last
            updated" date. Your continued use of the services after changes constitutes
            acceptance of the new terms.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            For any questions regarding these Terms of Service, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:legal@tradeengine.io">legal@tradeengine.io</a></li>
            <li>Website: <a href="https://tradeengine.io">tradeengine.io</a></li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Trade Engine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
