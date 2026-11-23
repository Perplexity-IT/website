import { MAILTO } from "../lib/site";

export default function PlanCard() {
  return (
    <div className="plan-card">
      <p className="popular">Most popular</p>
      <h3>Website + Growth Plan</h3>
      <p className="plan-sub">
        One partner for your website, your rankings, and your ads — priced per
        project, no lock-in.
      </p>
      <ul>
        <li>Custom website, built to rank and bring in calls</li>
        <li>Local SEO setup — Google Business Profile included</li>
        <li>Meta &amp; Google ads managed month to month</li>
        <li>Direct line to Nabin — no account reps, no hand-offs</li>
      </ul>
      <a className="btn btn-white" href={MAILTO}>
        Book a call &rarr;
      </a>
    </div>
  );
}
