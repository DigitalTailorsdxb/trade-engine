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
        <p className="text-muted-foreground mb-2">
          Trade Engine
        </p>
        <p className="text-muted-foreground mb-8">
          Last updated: 28 January 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Trade Engine Ltd ("we", "us", "our") is committed to protecting your privacy and personal data.
            This Privacy Policy explains how we collect, use, store, and protect personal information when you use our website, software, and services.
            By using this website, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2>2. Who We Are</h2>
          <p>
            <strong>Trade Engine</strong><br />
            Registered in England and Wales<br />
            Registered office: Barwell Road, Leicester, United Kingdom
          </p>
          <p>
            For the purposes of data protection law, Trade Engine is the Data Controller.
          </p>

          <h2>3. What Data We Collect</h2>
          <p>We may collect and process the following categories of personal data:</p>
          
          <h3>Information you provide directly</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Property address / postcode</li>
            <li>Landscaping requirements and preferences</li>
            <li>Budget information (where provided)</li>
          </ul>

          <h3>Automatically generated data</h3>
          <ul>
            <li>AI-generated designs and visualisations</li>
            <li>Indicative quotes and pricing estimates</li>
            <li>Uploaded files or images (if applicable)</li>
          </ul>

          <h3>Technical data</h3>
          <ul>
            <li>IP address</li>
            <li>Device and browser information</li>
            <li>Website usage analytics</li>
          </ul>

          <h2>4. How We Use Your Data</h2>
          <p>We use personal data to:</p>
          <ul>
            <li>Generate indicative landscaping quotes</li>
            <li>Produce design concepts and visualisations</li>
            <li>Store customer requirements and outputs</li>
            <li>Share relevant information with approved landscaping contractors</li>
            <li>Communicate regarding your enquiry</li>
            <li>Improve platform functionality and performance</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p><strong>We do not sell personal data.</strong></p>

          <h2>5. Legal Basis for Processing</h2>
          <p>We process personal data under one or more of the following legal bases:</p>
          <ul>
            <li><strong>Consent</strong> – where you submit information voluntarily</li>
            <li><strong>Legitimate interest</strong> – to operate and improve our services</li>
            <li><strong>Contractual necessity</strong> – where data is needed to deliver requested services</li>
            <li><strong>Legal obligation</strong> – where required by law</li>
          </ul>

          <h2>6. Sharing Your Data</h2>
          <p>We may share your data with:</p>
          <ul>
            <li>Approved landscaping contractors relevant to your enquiry</li>
            <li>Service providers supporting hosting, analytics, email, or storage</li>
            <li>Legal or regulatory authorities if required</li>
          </ul>
          <p>All third parties are required to process data securely and lawfully.</p>

          <h2>7. Data Storage & Security</h2>
          <ul>
            <li>Data is stored securely using industry-standard safeguards</li>
            <li>Access is restricted to authorised personnel only</li>
            <li>We take reasonable technical and organisational measures to prevent unauthorised access, loss, or misuse</li>
          </ul>
          <p>Despite this, no system can be guaranteed 100% secure.</p>

          <h2>8. Data Retention</h2>
          <p>We retain personal data only for as long as necessary to:</p>
          <ul>
            <li>Fulfil the purpose it was collected for</li>
            <li>Meet legal, accounting, or regulatory requirements</li>
          </ul>
          <p>Data may be anonymised and retained for analytics and system improvement.</p>

          <h2>9. Your Rights (UK GDPR)</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to processing</li>
            <li>Withdraw consent at any time</li>
            <li>Request data portability</li>
          </ul>
          <p>Requests can be made by contacting us using the details below.</p>

          <h2>10. Cookies & Tracking</h2>
          <p>We may use cookies and similar technologies to:</p>
          <ul>
            <li>Improve website functionality</li>
            <li>Analyse site usage</li>
            <li>Enhance user experience</li>
          </ul>
          <p>You can manage cookie preferences via your browser settings.</p>

          <h2>11. Children's Data</h2>
          <p>
            This website is not intended for use by individuals under the age of 18.
            We do not knowingly collect data from children.
          </p>

          <h2>12. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites.
            We are not responsible for the privacy practices or content of external sites.
          </p>

          <h2>13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time.
            Any changes will be posted on this page with a revised "Last updated" date.
          </p>

          <h2>14. Contact Us</h2>
          <p>For data protection enquiries or to exercise your rights:</p>
          <p>
            <strong>Trade Engine</strong><br />
            Email: <a href="mailto:hello@trade-engine.co.uk">hello@trade-engine.co.uk</a>
          </p>
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
