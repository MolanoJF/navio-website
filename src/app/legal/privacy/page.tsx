import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: November 7, 2025
          </p>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            We take your privacy seriously. This Privacy Policy explains how Navio collects, uses, shares, and protects your personal information.
          </p>
        </div>

        {/* Content Section */}
        <article className="max-w-4xl mx-auto space-y-10">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">1) Scope & Roles</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>Who this covers.</strong> This Policy applies to (a) visitors to our sites, (b) prospects and customers, and (c) end users who interact with Navio's in-app widget/agent on our customers' apps ("End Users").</li>
              <li className="leading-relaxed"><strong>Controller vs. processor.</strong> For our own website, sales, support, and account data, Navio is a <strong>data controller</strong>. When customers deploy our snippet/agent inside their product, Navio generally acts as a <strong>data processor/service provider</strong> on their instructions and contract; the customer's own privacy notice governs what they collect from End Users in their app.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-6">2) Information We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">A) Information you provide</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Account/contact details (name, email, role), billing info, messages, and content you upload or connect (e.g., product docs, release notes, support content).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">B) Information we collect automatically</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="leading-relaxed"><strong>Usage & device data.</strong> IP address, identifiers, browser/OS, pages and actions, session metadata, event timestamps, and diagnostics/logs.</li>
                  <li className="leading-relaxed"><strong>In-app interaction data.</strong> UI elements Navio highlights, steps shown, clicks/actions executed by Autopilot (when enabled), success/failure events, and performance/latency metrics.</li>
                  <li className="leading-relaxed"><strong>Cookies & similar tech.</strong> To run the widget, keep you signed in, measure usage, and improve the product (see "Cookies" below).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">C) From integrations & third parties (optional)</h3>
                <p className="text-foreground/80 leading-relaxed">
                  If you connect tools (e.g., Zendesk/Intercom/help center/analytics), we receive the data you authorize through those integrations to surface guidance and context. Your use of those tools is governed by their policies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">D) De-identified/aggregated data</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We may create de-identified or aggregated datasets for benchmarking, trends, and product improvement; we do not attempt to re-identify individuals from such data.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">3) How We Use Information</h2>
            <ul className="space-y-2 text-foreground/80 mb-4">
              <li className="leading-relaxed">Provide, secure, maintain, and improve the Services (including the widget, guidance, Autopilot, analytics, and dashboards).</li>
              <li className="leading-relaxed">Configure and operate flows you define (e.g., role-based rules, approvals, rate limits), surface contextual help, and produce insights like intent heatmaps and drop-off points.</li>
              <li className="leading-relaxed">Communicate with you (product updates, support, security, billing) and run core business operations (fraud prevention, audits, compliance).</li>
              <li className="leading-relaxed">Develop new features, quality assurance, and research (including aggregated analysis).</li>
              <li className="leading-relaxed">With your consent, send marketing; you can opt out anytime.</li>
            </ul>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
              <p className="text-foreground/80"><strong>Legal bases (EEA/UK/Switzerland):</strong> We rely on performance of contract, legitimate interests (e.g., to secure and improve the Services), consent (where required, e.g., certain cookies/marketing), and legal obligations.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">4) Product-Specific Notes (Guidance & Autopilot)</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>Guidance.</strong> We process UI context, events, and your connected content to show step-by-step instructions and in-app help.</li>
              <li className="leading-relaxed"><strong>Autopilot (optional).</strong> When you enable it, Navio executes permitted clicks/navigation and logs execution metadata for observability and audit. Customers control scope, permissions, and approvals in their environment.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">5) Cookies & Similar Technologies</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use cookies, local storage, and similar technologies to run core features (authentication, session continuity), remember preferences, and analyze usage/performance. Where required, we'll request consent and provide choices (e.g., cookie banner). You can manage cookies via your browser; blocking some cookies may impact functionality.
            </p>
          </section>

          {/* Section 6 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">6) How We Share Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We share information with:
            </p>
            <ul className="space-y-3 text-foreground/80 mb-4">
              <li className="leading-relaxed"><strong>Service providers/subprocessors</strong> (cloud hosting, security, analytics, email, customer support) under contracts requiring confidentiality and appropriate safeguards.</li>
              <li className="leading-relaxed"><strong>Integrations you enable</strong> (help desks, analytics, knowledge sources) as instructed by you.</li>
              <li className="leading-relaxed"><strong>Professional advisors</strong> and <strong>law enforcement</strong> when required by law or to protect rights, safety, and security.</li>
              <li className="leading-relaxed"><strong>Corporate transactions</strong> (merger, acquisition) with continuity of protections.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed">
              We also disclose <strong>aggregated/de-identified</strong> insights that do not identify individuals.
            </p>
          </section>

          {/* Section 7 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">7) International Transfers</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may transfer, store, and process information in countries outside your own. When required, we use appropriate safeguards (e.g., Standard Contractual Clauses and comparable mechanisms) and implement technical/organizational measures to protect data during transfer and at rest/in transit.
            </p>
          </section>

          {/* Section 8 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">8) Security</h2>
            <p className="text-foreground/80 leading-relaxed">
              We implement technical and organizational measures to protect information, including industry-standard encryption in transit and at rest, access controls/roles, rate limiting/abuse protections, and vulnerability management. No system is 100% secure; we maintain programs to prevent, detect, and respond to incidents.
            </p>
          </section>

          {/* Section 9 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">9) Data Retention</h2>
            <p className="text-foreground/80 leading-relaxed">
              We retain personal information for as long as needed to provide the Services, comply with legal obligations, resolve disputes, enforce agreements, and for legitimate business needs. Customers can configure or request export/deletion consistent with our retention practices and applicable law.
            </p>
          </section>

          {/* Section 10 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">10) Your Privacy Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Depending on where you live, you may have rights to:
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4">
              <li className="leading-relaxed">Access, correct, update, or delete your personal information;</li>
              <li className="leading-relaxed">Object to or restrict processing;</li>
              <li className="leading-relaxed">Port your data;</li>
              <li className="leading-relaxed">Withdraw consent where processing is based on consent;</li>
              <li className="leading-relaxed">Lodge a complaint with a supervisory authority.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-4">
              End Users should direct requests to the relevant <strong>customer</strong> (the controller for in-app data); we'll support them as the processor. You can also contact Navio for our own controller data.
            </p>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
              <p className="text-foreground/80"><strong>U.S. state laws (e.g., CA/VA/CO/CT/UT):</strong> If these apply, you may have additional rights regarding access, deletion, correction, and opt-out of "sale," "sharing," or targeted advertising. We do not sell personal information as defined by these laws, and we honor applicable opt-out rights. (We provide mechanisms to limit cross-context behavioral advertising where required.)</p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">11) Children's Privacy</h2>
            <p className="text-foreground/80 leading-relaxed">
              The Services are not directed to children under 16, and we do not knowingly collect personal information from them. If we learn we've collected such data, we'll delete it.
            </p>
          </section>

          {/* Section 12 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">12) Do Not Track & Global Privacy Control</h2>
            <p className="text-foreground/80 leading-relaxed">
              Some browsers offer "Do Not Track" or GPC signals. Our Services respond consistent with applicable law and our cookie/consent tooling; certain functionality may require essential cookies.
            </p>
          </section>

          {/* Section 13 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">13) Third-Party Sites & Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our sites and products may link to or integrate with third-party services. Their privacy practices are governed by their own policies, not this one. Review those policies before enabling integrations.
            </p>
          </section>

          {/* Section 14 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">14) Changes to This Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this Policy to reflect changes in technology, law, or our Services. If we make material changes, we'll post the updated Policy and adjust the "Last updated" date; when required, we'll provide additional notice or seek consent. Continued use of the Services after the effective date means you accept the changes.
            </p>
          </section>

          {/* Section 15 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">15) Contact Us</h2>
            <ul className="space-y-2 text-foreground/80">
              <li className="leading-relaxed"><strong>Email:</strong> <a href="mailto:privacy@navio.example" className="text-primary hover:underline">privacy@navio.example</a></li>
              <li className="leading-relaxed"><strong>Mail:</strong> Navio, Inc., Attn: Privacy, [insert address]</li>
              <li className="leading-relaxed"><strong>Security reports:</strong> <a href="mailto:security@navio.example" className="text-primary hover:underline">security@navio.example</a></li>
            </ul>
          </section>

          {/* Section 16 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-6">16) Region-Specific Disclosures</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">EEA/UK/Switzerland</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="leading-relaxed"><strong>Controller:</strong> For Navio website/sales/support data: Navio, Inc. For in-app End-User data, the relevant customer is controller and Navio acts as processor.</li>
                  <li className="leading-relaxed"><strong>Legal bases:</strong> contract, legitimate interests, consent (where required), legal obligations.</li>
                  <li className="leading-relaxed"><strong>Transfers:</strong> safeguarded by SCCs or equivalent measures; additional technical/organizational measures apply.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">California (CPRA) & certain U.S. states</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="leading-relaxed">We act as a <strong>service provider/processor</strong> to our customers for in-app data. For our own site/account data, we act as a <strong>business/controller</strong>.</li>
                  <li className="leading-relaxed">We do not sell or share personal information for cross-context behavioral advertising as defined by CPRA; if this changes, we will provide required notices and opt-out mechanisms.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 17 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">17) Data Subject / Consumer Requests</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              To exercise rights:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="leading-relaxed"><strong>End Users:</strong> contact the customer whose app you were using; we'll assist them in fulfilling your request.</li>
              <li className="leading-relaxed"><strong>Website/prospect/account data:</strong> contact Navio at <a href="mailto:privacy@navio.example" className="text-primary hover:underline">privacy@navio.example</a>. We may need to verify your identity or authority. If we cannot comply due to legal or contractual limits, we'll explain why where appropriate.</li>
            </ul>
          </section>

          {/* Section 18 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">18) Data Processing Addendum (DPA)</h2>
            <p className="text-foreground/80 leading-relaxed">
              For customers subject to data protection laws (e.g., GDPR/UK GDPR), our DPA (including applicable transfer mechanisms) becomes part of your agreement when executed or referenced in your order.
            </p>
          </section>

          {/* Section 19 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">19) Sub-processors</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use vetted service providers to process data on our behalf and remain responsible for their performance. We maintain a current list upon request and will provide advance notice of material changes as required.
            </p>
          </section>

          {/* Section 20 */}
          <section className="pt-4 border-t border-border">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">20) How Our Practices Map to Your Expectations (Quick Read)</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="leading-relaxed"><strong>What we collect:</strong> account/contact info, usage/device data, in-app interaction data, and data from integrations you enable.</li>
              <li className="leading-relaxed"><strong>Why:</strong> to run guidance/Autopilot, analytics/insights, support, security, and product improvement.</li>
              <li className="leading-relaxed"><strong>Choices:</strong> manage cookies, marketing preferences, and submit rights requests.</li>
              <li className="leading-relaxed"><strong>Security:</strong> encryption in transit/at rest, access controls, rate limiting, and incident response.</li>
            </ul>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}
