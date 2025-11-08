import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: November 7, 2025
          </p>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            These Terms of Service ("Terms") are a binding agreement between Navio, Inc. ("Navio," "we," "us," or "our") and the person or entity agreeing to them ("Customer," "you," or "your"). By creating an account, clicking "Accept," installing the Navio code snippet, or using the Services, you agree to these Terms.
          </p>
        </div>

        {/* Content Section */}
        <article className="max-w-4xl mx-auto space-y-10">

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
            <p className="text-foreground/80 leading-relaxed">
              If you accept on behalf of an organization, you represent that you have authority to bind that organization. If you don't agree, do not use the Services. Navio may update these Terms periodically by posting a revised version with an updated "Last updated" date. Continued use constitutes acceptance of the changes.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">1) Definitions</h2>

            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) "Services"</strong> means Navio's hosted software and components (including the in-app widget, guidance, Autopilot, analytics, dashboards, SDKs/snippets, and related websites).</li>
              <li className="leading-relaxed"><strong>b) "Customer Properties"</strong> means your websites, web apps, or other interfaces where you deploy the Navio agent/snippet.</li>
              <li className="leading-relaxed"><strong>c) "Customer Data"</strong> means data you or your End Users submit to or through the Services (e.g., events, UI context, content you ingest).</li>
              <li className="leading-relaxed"><strong>d) "Usage Data"</strong> means telemetry, logs, and aggregated/anonymous data about use of the Services.</li>
              <li className="leading-relaxed"><strong>e) "End Users"</strong> means users of your Customer Properties.</li>
              <li className="leading-relaxed"><strong>f) "Order"</strong> means an order form, online plan selection, or similar specifying plan, term, and pricing.</li>
              <li className="leading-relaxed"><strong>g) "Documentation"</strong> means Navio's published docs and policies referenced in an Order.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">2) Accounts; Trials; Beta</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) Accounts.</strong> Registration information must be accurate and kept current. You're responsible for credentials and all activity under your account.</li>
              <li className="leading-relaxed"><strong>b) Free Trials.</strong> Trial use is provided "as is" and may be rate-limited or feature-limited.</li>
              <li className="leading-relaxed"><strong>c) Beta/Preview.</strong> We may offer pre-release features ("Beta"). Betas may be changed or discontinued at any time and are provided without warranties or support.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">3) Access and Use</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) License.</strong> Subject to these Terms and your Order, Navio grants you a limited, non-exclusive, non-transferable license during the Term to access and use the Services for your internal business purposes.</li>
              <li className="leading-relaxed"><strong>b) Deployment Code.</strong> The Services include the right to deploy Navio's snippet/agent on Customer Properties to enable in-app guidance, automation, and data collection for use with the Services.</li>
              <li className="leading-relaxed"><strong>c) Restrictions.</strong> You will not (and will not permit others to): (i) reverse engineer or attempt to access source code; (ii) bypass security or usage limits; (iii) resell or provide the Services to third parties except as expressly permitted; (iv) use the Services to develop a competing product; (v) remove proprietary notices; or (vi) use the Services for unlawful, harmful, or high-risk activities (see 7).</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">4) Customer Responsibilities</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) Permissions and Consents.</strong> You are responsible for obtaining all necessary rights, consents, and notices to lawfully deploy the Navio agent on Customer Properties and process Customer Data (including End-User disclosures and cookie/analytics consents where required).</li>
              <li className="leading-relaxed"><strong>b) Configuration and Safeguards.</strong> You control when and where Autopilot is allowed to run. You must configure role-based rules, approvals, guardrails, and rate limits that align with your policies, and test flows in a safe environment before production.</li>
              <li className="leading-relaxed"><strong>c) Third-Party Services.</strong> If you enable connectors (e.g., Zendesk, Intercom, analytics), your use of those services is governed by their terms; Navio is not responsible for their acts or omissions.</li>
              <li className="leading-relaxed"><strong>d) Data Accuracy.</strong> You are responsible for the accuracy, quality, and legality of Customer Data and how you acquired it.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">5) Acceptable Use</h2>
            <p className="text-foreground/80 leading-relaxed">
              You will not use the Services to: (a) violate laws; (b) infringe intellectual property or privacy rights; (c) upload malicious code; (d) attempt unauthorized access; (e) perform or facilitate denial-of-service; (f) process sensitive data categories unless permitted in an Order and compliant with applicable law; (g) operate life-support, safety-critical, or other high-risk systems where failure could lead to death, personal injury, or severe damage; or (h) generate spam, deceptive practices, or illegal surveillance.
            </p>
          </section>

          {/* Section 6 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">6) Data; Privacy; Security</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) Customer Data.</strong> Between the parties, you own Customer Data. You grant Navio a non-exclusive, worldwide, royalty-free license to host, copy, process, transmit, and display Customer Data solely to provide, secure, and improve the Services as permitted by these Terms and our Privacy Notice (and, if applicable, a DPA). This license does not transfer ownership of Customer Data.</li>
              <li className="leading-relaxed"><strong>b) Usage Data.</strong> Navio may generate, use, and disclose Usage Data (including aggregated or de-identified data) to operate, analyze, secure, and improve the Services, and for benchmarking and industry insights, provided no Customer Data is disclosed in identifiable form.</li>
              <li className="leading-relaxed"><strong>c) Data Processing Addendum.</strong> If you are subject to Data Protection Laws (e.g., GDPR/UK GDPR), our Data Processing Addendum ("DPA") forms part of these Terms when executed or referenced in an Order.</li>
              <li className="leading-relaxed"><strong>d) Security.</strong> Navio will implement appropriate technical and organizational measures designed to protect Customer Data from unauthorized access, use, alteration, or disclosure.</li>
              <li className="leading-relaxed"><strong>e) Subprocessors.</strong> You authorize Navio to use subprocessors to provide the Services. Navio remains responsible for their performance and will maintain a list upon request.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">7) Product-Specific Terms (Guidance and Autopilot)</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) Guidance.</strong> The in-app guidance feature provides contextual instructions and UI highlights based on your configuration and content. You remain responsible for any instructions shown to End Users.</li>
              <li className="leading-relaxed"><strong>b) Autopilot.</strong> When enabled, Autopilot can navigate, click, and execute steps inside your Customer Properties or connected tools according to your configured rules/approvals. You designate which actions are permitted and under what conditions; Navio acts as your service provider to carry out those permitted actions. You are responsible for outcomes of authorized actions within your systems, rate limits, approvals, and any required audit or change-management processes.</li>
              <li className="leading-relaxed"><strong>c) Audit Trails.</strong> The Services may record execution logs and metadata for observability and troubleshooting. You should export and retain logs needed for your compliance program.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">8) Fees; Taxes</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) Fees.</strong> You agree to pay the fees specified in the Order. Fees are invoiced or charged in advance and are non-cancelable and non-refundable except as expressly provided.</li>
              <li className="leading-relaxed"><strong>b) Overages.</strong> If usage exceeds plan limits, overage fees may apply at then-current rates.</li>
              <li className="leading-relaxed"><strong>c) Taxes.</strong> Fees are exclusive of taxes. You are responsible for sales, use, VAT/GST, and similar taxes (excluding taxes based on Navio's income).</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">9) Support; Service Levels</h2>
            <p className="text-foreground/80 leading-relaxed">
              If your plan includes support or service levels, they are described in your Order or Documentation. Professional services (e.g., onboarding, implementation) are provided as specified in an Order and may be subject to separate terms.
            </p>
          </section>

          {/* Section 10 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">10) Intellectual Property</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) Ownership.</strong> Navio owns the Services, Documentation, and all related IP. No rights are granted except as expressly stated.</li>
              <li className="leading-relaxed"><strong>b) Feedback.</strong> If you provide feedback or suggestions, you grant Navio a perpetual, irrevocable, worldwide license to use them without restriction or compensation.</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">11) Confidentiality</h2>
            <p className="text-foreground/80 leading-relaxed">
              Each party may access the other's confidential information and will use it only to perform under these Terms and protect it with reasonable care. Exclusions apply for information that is public, already known, independently developed, or rightfully disclosed by a third party.
            </p>
          </section>

          {/* Section 12 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">12) Warranties; Disclaimers</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) Mutual.</strong> Each party represents it has authority to enter into these Terms.</li>
              <li className="leading-relaxed"><strong>b) Navio.</strong> We warrant that during a paid subscription the Services will perform materially in accordance with the Documentation. Your exclusive remedy is re-performance of the Services, or if we cannot cure, a pro-rata refund for the affected period.</li>
              <li className="leading-relaxed"><strong>c) Disclaimers.</strong> Except as expressly provided, the Services, Betas, and trials are provided "as is." Navio disclaims all other warranties, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted or error-free operation.</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">13) Indemnification</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) By Navio.</strong> We will defend and indemnify you against third-party claims alleging that the Services infringe a U.S. patent, copyright, or trademark, or misappropriate a trade secret, and pay finally awarded damages and reasonable defense costs, provided you promptly notify us and cooperate. We may repair, replace, or procure rights; if not feasible, we may terminate the affected Services with a pro-rata refund.</li>
              <li className="leading-relaxed"><strong>b) By Customer.</strong> You will defend and indemnify Navio against claims arising from (i) Customer Data, Customer Properties, or your configurations/instructions, (ii) use in violation of these Terms, or (iii) your use with third-party services or high-risk uses.</li>
            </ul>
          </section>

          {/* Section 14 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">14) Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              To the maximum extent permitted by law: (a) neither party will be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenues, goodwill, or data; and (b) each party's aggregate liability arising out of or relating to the Services will not exceed the amounts paid or payable by you to Navio for the Services giving rise to the claim during the twelve (12) months before the first event giving rise to liability. These limitations apply even if a remedy fails of its essential purpose.
            </p>
          </section>

          {/* Section 15 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">15) Term; Suspension; Termination</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) Term.</strong> These Terms start when you first accept them and continue for the subscription term in your Order, renewing per its terms unless terminated.</li>
              <li className="leading-relaxed"><strong>b) Suspension.</strong> We may suspend access immediately for non-payment, security risks, suspected violation of these Terms, or to comply with law.</li>
              <li className="leading-relaxed"><strong>c) Termination.</strong> Either party may terminate for material breach not cured within thirty (30) days after written notice. You may terminate at end of the then-current term per your Order.</li>
              <li className="leading-relaxed"><strong>d) Effect.</strong> Upon termination, your right to access the Services ends. Upon request within thirty (30) days, we will make available a copy of your Customer Data in a reasonable export format; we may then delete Customer Data per our retention policy, except where law requires retention.</li>
            </ul>
          </section>

          {/* Section 16 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">16) Modifications to the Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may modify features or functionality, or discontinue components, provided that we will not materially reduce core functionality of a paid plan during the current term without providing substantially equivalent functionality or a pro-rata refund for materially affected features.
            </p>
          </section>

          {/* Section 17 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">17) Compliance; Export; Sanctions</h2>
            <p className="text-foreground/80 leading-relaxed">
              You will comply with all applicable laws, including privacy, anti-corruption, export control, and sanctions laws. You will not permit access to the Services from embargoed jurisdictions or to prohibited parties.
            </p>
          </section>

          {/* Section 18 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">18) Government Use</h2>
            <p className="text-foreground/80 leading-relaxed">
              The Services are "commercial computer software" and related documentation; government end users' rights are limited by these Terms and applicable law.
            </p>
          </section>

          {/* Section 19 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">19) Publicity</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may use your name and logo to identify you as a customer on our websites and marketing materials, consistent with your brand guidelines. You may opt out with written notice.
            </p>
          </section>

          {/* Section 20 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">20) Dispute Resolution; Governing Law</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>a) Informal Resolution.</strong> Before filing a claim, the parties will attempt to resolve disputes informally for thirty (30) days.</li>
              <li className="leading-relaxed"><strong>b) Governing Law; Venue.</strong> These Terms are governed by the laws of the State of Delaware, without regard to conflicts of law. The exclusive jurisdiction and venue for disputes is the state and federal courts located in Delaware, and the parties consent to personal jurisdiction there.</li>
              <li className="leading-relaxed"><strong>c) Injunctive Relief.</strong> Either party may seek injunctive relief for actual or threatened misuse of confidential information or intellectual property.</li>
            </ul>
          </section>

          {/* Section 21 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">21) Notices</h2>
            <p className="text-foreground/80 leading-relaxed">
              Notices to Navio must be sent to legal@navio.example and to Navio, Inc., Attn: Legal, [insert address]. We may provide notices to you via the Services, email, or your account contact.
            </p>
          </section>

          {/* Section 22 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">22) Assignment</h2>
            <p className="text-foreground/80 leading-relaxed">
              You may not assign these Terms without Navio's prior written consent (not to be unreasonably withheld). Navio may assign these Terms in connection with a merger, acquisition, or sale of assets. Standard assignments/waivers/severability language applies.
            </p>
          </section>

          {/* Section 23 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">23) Force Majeure</h2>
            <p className="text-foreground/80 leading-relaxed">
              Neither party is liable for delays or failures due to events beyond reasonable control (e.g., internet failures, acts of God, labor disputes, governmental actions).
            </p>
          </section>

          {/* Section 24 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">24) Entire Agreement; Order of Precedence; Waiver; Severability</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms, the Order, the DPA (if applicable), and any referenced documents form the entire agreement and supersede prior agreements on the Services. If there is a conflict, the Order controls, then these Terms, then the Documentation. Failure to enforce a provision is not a waiver. If any provision is unenforceable, the remainder will remain in effect.
            </p>
          </section>

          {/* Section 25 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">25) Service-Specific Annex (Landing Page Alignment)</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This annex maps features described on the website to contractual responsibilities:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-foreground/80">
              <li className="leading-relaxed"><strong>Real-Time Guidance.</strong> Visual highlights, field nudges, and in-app help are advisory; you remain responsible for your product decisions and End-User outcomes.</li>
              <li className="leading-relaxed"><strong>Autopilot.</strong> Executes multi-step flows under your configured role rules, approvals, and rate limits; you control scope and permissions. Navio provides observability and logs.</li>
              <li className="leading-relaxed"><strong>Custom In-App Widget; Seamless Integration.</strong> Deployment via lightweight snippet; no backend changes required for baseline features (subject to your environment).</li>
              <li className="leading-relaxed"><strong>Connect Your Knowledge.</strong> You may ingest product docs, release notes, support content, and optionally connect helpdesk/analytics. You are responsible for content quality and rights.</li>
              <li className="leading-relaxed"><strong>Insights & Analytics.</strong> Intent heatmaps, drop-off points, and outcome tracking rely on events you choose to emit or enable; ensure compliance with your privacy notices and consent banners.</li>
            </ol>
          </section>

          {/* Section 26 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">26) Contact</h2>
            <p className="text-foreground/80 leading-relaxed">
              Questions about the Terms? Email <a href="mailto:legal@naviobot.com" className="text-primary hover:underline">legal@naviobot.com</a>
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}
