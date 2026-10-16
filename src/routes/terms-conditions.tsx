import { createFileRoute } from "@tanstack/react-router";

const policyContent = [
  {
    label: "Scope of Services & Content Deliverables",
    text: "The Agency agrees to manage and execute the influencer marketing campaigns as outlined in the specific Campaign Brief or Statement of Work (SOW). Both the Client and the Influencer must strictly adhere to all agreed-upon deadlines, content guidelines, and Federal Trade Commission (FTC) endorsement guidelines (e.g., clear and conspicuous placement of #ad or #sponsored); failure to comply may result in immediate campaign suspension.",
  },
  {
    label: "Intellectual Property & Usage Rights",
    text: "Unless explicitly agreed otherwise in writing, the Influencer retains ownership of the created content, while the Client is granted a non-exclusive, worldwide, royalty-free license to use, repurpose, and amplify the content across their official digital channels for a period of six (6) months following the campaign end date.",
  },
  {
    label: "Limitation of Liability & Governing Law",
    text: "The Agency’s total liability for any claim arising out of these terms shall not exceed the total fees paid by the Client to the Agency for the specific campaign. These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware (or your specific registration state), without regard to conflict of law principles.",
  },
] as const;

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Nexora Elite Media LLC" },
      { name: "description", content: "Terms and conditions for Nexora Elite Media services and campaign deliverables." },
    ],
  }),
  component: function TermsConditionsPage() {
    return (
      <main className="policy-page">
        <div className="section-shell content-section">
          <a href="/" className="back-link">← Back to Home</a>
          <div className="policy-header">
            <p className="eyebrow">Legal</p>
            <h1>Terms & Conditions</h1>
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
