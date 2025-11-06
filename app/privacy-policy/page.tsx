import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="py-8 border-b border-gray-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo/gymvid-transparent-logo.png"
              alt="GymVid Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-dark mb-4 text-center">Privacy Policy</h1>

        <div className="text-sm text-gray-medium mb-8 text-center">
          <p><strong>Effective Date:</strong> January 4, 2025</p>
          <p><strong>Last Updated:</strong> January 4, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">1. Introduction</h2>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              Welcome to GymVid. We are committed to protecting your privacy and handling your personal information with care and respect. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://gymvid.com" className="text-primary-glow hover:underline">gymvid.com</a> and interact with our services.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              GymVid is operated from Melbourne, Australia. By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              <strong>Contact Information:</strong><br />
              For any privacy-related inquiries, please contact us at <a href="mailto:hello@gymvid.com" className="text-primary-glow hover:underline">hello@gymvid.com</a>
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-gray-dark mb-3">2.1 Information You Provide Directly</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              When you register for early access or express interest in investing, we collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Waitlist Registration:</strong> First name, email address, and feature interests (AI-powered logging, form analysis, social features, competition features)</li>
              <li><strong>Investor Inquiries:</strong> First name, last name, email address, investor type (VC fund, angel investor, strategic partner, fitness influencer), and investment range (optional)</li>
              <li><strong>Other Communications:</strong> Any information you choose to provide when contacting us</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">2.2 Information Collected Automatically</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referral source (how you arrived at our website)</li>
              <li>Date and time of visit</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">2.3 Cookies and Similar Technologies</h3>
            <p className="text-base text-gray-dark leading-relaxed">
              Currently, our website does not use cookies for analytics or advertising. We may implement cookies in the future for website analytics (such as Google Analytics) or marketing purposes. If we do, we will update this policy and implement appropriate consent mechanisms as required by law.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">3. How We Use Your Information</h2>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Product Updates:</strong> To notify waitlist subscribers about early access, product launches, and feature updates</li>
              <li><strong>Investment Communications:</strong> To send pitch decks, investment information, and seed round notifications to interested investors</li>
              <li><strong>Email Marketing:</strong> To send newsletters, product announcements, and relevant fitness content (you can unsubscribe at any time)</li>
              <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website performance and user experience</li>
              <li><strong>Customer Support:</strong> To respond to your inquiries and provide assistance</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              <li><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">Legal Basis for Processing (GDPR)</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              For users in the European Union, our legal basis for processing your personal information includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Consent:</strong> When you provide your email address and submit our forms, you consent to receiving marketing communications</li>
              <li><strong>Legitimate Interests:</strong> We have a legitimate interest in operating our website, improving our services, and protecting against security threats</li>
            </ul>
          </section>

          {/* How We Share Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">4. How We Share Your Information</h2>

            <h3 className="text-xl font-medium text-gray-dark mb-3">4.1 Service Providers</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              We share your information with trusted third-party service providers who assist us in operating our website and delivering our services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>SendGrid (Twilio Inc.):</strong> Email delivery and marketing communications platform. Your contact information, feature interests, and email engagement data are stored with SendGrid. Data is processed in the United States. SendGrid is GDPR-compliant and provides appropriate data protection safeguards. Privacy policy: <a href="https://www.twilio.com/legal/privacy" className="text-primary-glow hover:underline" target="_blank" rel="noopener noreferrer">twilio.com/legal/privacy</a></li>
              <li><strong>Amazon Web Services (AWS):</strong> Website hosting and infrastructure provider. Server logs (IP addresses, browser information, page visits) are processed through AWS EC2 infrastructure. AWS is SOC 2 Type 2, ISO 27001, and PCI DSS compliant. Privacy policy: <a href="https://aws.amazon.com/privacy" className="text-primary-glow hover:underline" target="_blank" rel="noopener noreferrer">aws.amazon.com/privacy</a></li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">4.2 Other Disclosures</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              We may also share your information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Legal Requirements:</strong> To comply with legal obligations, court orders, or government requests</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you will be notified)</li>
              <li><strong>With Your Consent:</strong> For any other purpose with your explicit consent</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">4.3 We Do NOT:</h3>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li>Sell your personal information to third parties</li>
              <li>Share your information for purposes other than those stated in this policy</li>
              <li>Use your data for automated decision-making that significantly affects you</li>
            </ul>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">5. International Data Transfers</h2>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              GymVid is based in Australia. Your personal information may be transferred to and processed in countries outside your country of residence, including the United States, where our service providers (SendGrid, AWS) operate data centers.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              When we transfer personal information internationally, we ensure appropriate safeguards are in place:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Standard Contractual Clauses:</strong> Our service providers use EU-approved Standard Contractual Clauses for data transfers</li>
              <li><strong>GDPR Compliance:</strong> SendGrid and AWS maintain GDPR-compliant data processing agreements</li>
              <li><strong>Security Measures:</strong> All data transfers are encrypted and subject to strict security protocols</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">6. Data Retention</h2>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Waitlist & Investor Contacts:</strong> Until you unsubscribe from our mailing list or request deletion of your information</li>
              <li><strong>Email Engagement Data:</strong> Up to 3 years for analytics and service improvement purposes</li>
              <li><strong>Server Logs:</strong> Typically retained for 30-90 days for security and troubleshooting</li>
              <li><strong>Aggregated/Anonymized Data:</strong> May be retained indefinitely as it cannot identify you personally</li>
            </ul>
            <p className="text-base text-gray-dark leading-relaxed">
              After the retention period, we will securely delete or anonymize your personal information in accordance with applicable data protection laws.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">7. Your Rights and Choices</h2>

            <h3 className="text-xl font-medium text-gray-dark mb-3">7.1 All Users</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Unsubscribe:</strong> Opt-out of marketing emails at any time using the unsubscribe link in our emails</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">7.2 European Union/UK Users (GDPR Rights)</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              If you are located in the EU or UK, you have additional rights under GDPR:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Data Portability:</strong> Receive your data in a structured, commonly-used format</li>
              <li><strong>Object to Processing:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Restrict Processing:</strong> Request restriction of processing in certain circumstances</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (does not affect prior processing)</li>
              <li><strong>Lodge a Complaint:</strong> File a complaint with your local supervisory authority</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">7.3 California Users (CCPA Rights)</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we collect</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt-out of the "sale" or "sharing" of personal information (Note: We do not sell your personal information)</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising your rights</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">7.4 Australian Users (Privacy Act Rights)</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              Under the Australian Privacy Act and Australian Privacy Principles (APPs), you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Access:</strong> Request access to your personal information (APP 12)</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information (APP 13)</li>
              <li><strong>Complain:</strong> Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" className="text-primary-glow hover:underline" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a> or call 1300 363 992</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">How to Exercise Your Rights</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              To exercise any of these rights, please contact us at <a href="mailto:hello@gymvid.com" className="text-primary-glow hover:underline">hello@gymvid.com</a> with the subject line "Privacy Request."
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              We will respond to your request within 30 days (or as required by applicable law). We may need to verify your identity before processing your request.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">8. Cookies and Tracking Technologies</h2>

            <h3 className="text-xl font-medium text-gray-dark mb-3">8.1 Current Cookie Usage</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              Our website currently does not use cookies for analytics, advertising, or tracking purposes. The only data processed is through essential website functionality (hosting via AWS EC2).
            </p>

            <h3 className="text-xl font-medium text-gray-dark mb-3">8.2 Future Cookie Implementation</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              If we implement cookies in the future (such as Google Analytics or Meta Pixel for advertising), we will:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li>Update this Privacy Policy with detailed cookie information</li>
              <li>Implement a cookie consent banner for users in jurisdictions requiring consent (EU/UK)</li>
              <li>Provide clear options to accept, reject, or customize cookie preferences</li>
              <li>Respect your browser's "Do Not Track" signals where technically feasible</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-dark mb-3">8.3 Managing Cookies</h3>
            <p className="text-base text-gray-dark leading-relaxed">
              You can control cookies through your browser settings. Please note that disabling cookies may affect website functionality. For more information on managing cookies, visit <a href="https://www.allaboutcookies.org" className="text-primary-glow hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">9. Data Security</h2>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>Encryption:</strong> All data transmitted between your browser and our website is encrypted using HTTPS/TLS protocols</li>
              <li><strong>Access Controls:</strong> Strict access controls limit who can view or process your personal information</li>
              <li><strong>Secure Service Providers:</strong> Our service providers (SendGrid, AWS) maintain industry-standard security certifications (SOC 2, ISO 27001)</li>
              <li><strong>Regular Security Reviews:</strong> We regularly review and update our security practices</li>
            </ul>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              <strong>Data Breach Notification:</strong> In the event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law (within 72 hours for GDPR, 30 days for Australian Privacy Act).
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">10. Children's Privacy</h2>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:hello@gymvid.com" className="text-primary-glow hover:underline">hello@gymvid.com</a>. We will promptly delete such information from our records.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              <strong>Note:</strong> Australia is developing a Children's Online Privacy Code (required by December 10, 2026). We will update our practices and this policy to comply with the Code when it comes into effect.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              When we make changes, we will:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li>Update the "Last Updated" date at the top of this policy</li>
              <li>For material changes, notify you via email (if you've subscribed to our mailing list) or display a prominent notice on our website</li>
              <li>In some cases, seek your renewed consent if required by law</li>
            </ul>
            <p className="text-base text-gray-dark leading-relaxed">
              Your continued use of our website after changes are posted constitutes your acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">12. Contact Information</h2>

            <h3 className="text-xl font-medium text-gray-dark mb-3">Privacy Inquiries</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-light rounded-lg p-6 mb-4">
              <p className="text-base text-gray-dark leading-relaxed mb-2">
                <strong>Email:</strong> <a href="mailto:hello@gymvid.com" className="text-primary-glow hover:underline">hello@gymvid.com</a>
              </p>
              <p className="text-base text-gray-dark leading-relaxed mb-2">
                <strong>Subject Line:</strong> Privacy Request
              </p>
              <p className="text-base text-gray-dark leading-relaxed">
                <strong>Location:</strong> Melbourne, Australia
              </p>
            </div>

            <h3 className="text-xl font-medium text-gray-dark mb-3">Complaints</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              If you believe we have not handled your personal information appropriately, you have the right to lodge a complaint:
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li><strong>First:</strong> Contact us directly at <a href="mailto:hello@gymvid.com" className="text-primary-glow hover:underline">hello@gymvid.com</a> - we will investigate and respond within 30 days</li>
              <li><strong>Australian Users:</strong> Office of the Australian Information Commissioner (OAIC) - <a href="https://www.oaic.gov.au" className="text-primary-glow hover:underline" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a> or call 1300 363 992</li>
              <li><strong>EU Users:</strong> Your local data protection authority (supervisory authority in your EU member state)</li>
              <li><strong>UK Users:</strong> Information Commissioner's Office (ICO) - <a href="https://ico.org.uk" className="text-primary-glow hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
            </ul>
          </section>

          {/* Additional Disclosures */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-dark mb-4">13. Additional Disclosures</h2>

            <h3 className="text-xl font-medium text-gray-dark mb-3">13.1 California Residents (CCPA Disclosures)</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              <strong>Categories of Personal Information Collected (Last 12 Months):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li>Identifiers (name, email address)</li>
              <li>Internet or network activity (IP address, browsing behavior)</li>
              <li>Professional information (investor type, investment range)</li>
              <li>Inferences drawn from above (feature interests, user preferences)</li>
            </ul>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              <strong>Business Purposes for Collection:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li>Providing product updates and communications</li>
              <li>Marketing and promotional purposes</li>
              <li>Website operation and improvement</li>
              <li>Security and fraud prevention</li>
            </ul>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              <strong>Categories of Third Parties We Share With:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-base text-gray-dark leading-relaxed">
              <li>Email service providers (SendGrid/Twilio)</li>
              <li>Website hosting providers (AWS)</li>
              <li>Analytics providers (if implemented in the future)</li>
            </ul>
            <p className="text-base text-gray-dark leading-relaxed">
              <strong>Sale/Sharing of Personal Information:</strong> We do not sell your personal information and have not sold personal information in the preceding 12 months. For purposes of targeted advertising (if implemented in the future), we may "share" information as defined by CCPA. You will have the right to opt-out via a "Do Not Sell or Share My Personal Information" link.
            </p>

            <h3 className="text-xl font-medium text-gray-dark mb-3 mt-8">13.2 Australian Privacy Principles (APPs) Compliance</h3>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              GymVid complies with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth), as amended by the Privacy and Other Legislation Amendment Act 2024.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              <strong>Cross-Border Disclosure (APP 8):</strong> We disclose personal information to recipients located outside Australia, primarily in the United States (SendGrid, AWS). By using our services, you consent to this disclosure. We take reasonable steps to ensure overseas recipients comply with the APPs.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-4">
              <strong>2025 Privacy Law Updates:</strong> This Privacy Policy reflects Australia's updated privacy obligations, including enhanced rights to data deletion, mandatory retention period disclosures, and strengthened security requirements.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              <strong>Serious Data Breaches:</strong> In the event of an eligible data breach, we will notify the OAIC and affected individuals in accordance with the Notifiable Data Breaches (NDB) scheme.
            </p>
          </section>

          {/* Closing Statement */}
          <section className="mb-8">
            <div className="bg-primary-glow/5 border border-primary-glow/20 rounded-lg p-6">
              <p className="text-base text-gray-dark leading-relaxed">
                <strong>Thank you for trusting GymVid with your information.</strong> We are committed to protecting your privacy and using your data responsibly. If you have any questions or concerns, please don't hesitate to contact us at <a href="mailto:hello@gymvid.com" className="text-primary-glow hover:underline">hello@gymvid.com</a>.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-light py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-medium">
            © 2025 GymVid. All rights reserved. | <Link href="/" className="text-primary-glow hover:underline">Back to Home</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
