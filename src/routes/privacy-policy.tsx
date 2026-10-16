import { createFileRoute } from "@tanstack/react-router";

const policyContent = [
  {
    label: "Information We Collect",
    text: "We collect personal and professional data necessary to run our marketing operations, including names, email addresses, phone numbers, social media handles, audience demographic metrics, and financial information for processing payments from both Brands and Influencers.",
  },
  {
    label: "How We Use Your Data",
    text: "The collected information is used exclusively to facilitate brand-influencer matchmaking, execute and track marketing campaigns, process billing and payouts, verify social media analytics, and communicate critical updates regarding our services.",
  },
  {
    label: "US State Privacy Compliance & User Rights",
    text: "We comply with applicable US privacy regulations, including the California Consumer Privacy Act (CCPA) and other state privacy laws. We do not sell your personal data; it is shared only with verified third-party processors. Users retain the right to access, delete, opt-out of data sharing, or request the permanent deletion of their personal data from our systems at any time.",
  },
] as const;

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Nexora Elite Media LLC" },
      { name: "description", content: "Privacy policy describing how Nexora Elite Media collects, uses, and protects customer data." },
    ],
  }),
  component: function PrivacyPolicyPage() {
    return (
      <main className="policy-page">
        <div className="section-shell content-section">
          <a href="/" className="back-link">← Back to Home</a>
          <div className="policy-header">
            <p className="eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
          </div>
          <div className="policy-card">
            <ul>
              {policyContent.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    );
  },
});
