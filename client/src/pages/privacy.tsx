import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Trade Engine ("we," "our," or "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website tradeengine.io and use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Fill out contact forms or request a demo</li>
            <li>Subscribe to our newsletter</li>
            <li>Communicate with us via email, phone, or other channels</li>
            <li>Use our services as a client</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Business address</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information
            about your device, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages visited and time spent on each page</li>
            <li>Date and time of access</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and provide customer support</li>
            <li>Process and manage your account</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraudulent or illegal activity</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to
            third parties without your consent, except in the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share information with trusted
              third-party service providers who assist us in operating our website and
              services, subject to confidentiality agreements.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information if required
              by law or in response to valid legal processes.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition,
              or sale of assets, your information may be transferred as part of that
              transaction.
            </li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your
            personal information against unauthorised access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Your Rights</h2>
          <p>Under the UK GDPR and Data Protection Act 2018, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (right to be forgotten)</li>
            <li>Object to processing of your data</li>
            <li>Request restriction of processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:privacy@tradeengine.io">privacy@tradeengine.io</a>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. Cookies are
            small text files stored on your device that help us understand how you use
            our website. You can control cookies through your browser settings.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible
            for the privacy practices of these external sites and encourage you to review
            their privacy policies.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not
            knowingly collect personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page and updating the "Last
            updated" date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices,
            please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:privacy@tradeengine.io">privacy@tradeengine.io</a></li>
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
