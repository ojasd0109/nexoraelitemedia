import { createFileRoute } from "@tanstack/react-router";

const policyContent = [
  {
    label: "Non-Refundable Retainers & Onboarding Fees",
    text: "All initial strategy development charges, platform onboarding fees, and monthly agency retainers are 100% non-refundable once the onboarding process has begun or work on the campaign strategy has commenced.",
  },
  {
    label: "Campaign Cancellation & Creator Commitments",
    text: "Clients may cancel a campaign by providing a written 30-day notice. However, the Client remains fully liable for any portion of the budget that has already been legally or financially committed to influencers for scheduled content creation and cannot be clawed back.",
  },
  {
    label: "Dispute Resolution & Service Credits",
    text: "Refunds will not be issued for missed influencer performance metrics or organic reach fluctuations. In the event that an influencer fails to deliver a scheduled post entirely, the Agency will work to secure a replacement creator or issue a proportional service credit toward a future campaign.",
  },
] as const;

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Nexora Elite Media LLC" },
      { name: "description", content: "Refund and cancellation policy for campaign services and agency retainers." },
    ],
  }),
  component: function RefundPolicyPage() {
    return (
      <main className="policy-page">
        <div className="section-shell content-section">
          <a href="/" className="back-link">← Back to Home</a>
          <div className="policy-header">
            <p className="eyebrow">Legal</p>
            <h1>Refund Policy</h1>
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
