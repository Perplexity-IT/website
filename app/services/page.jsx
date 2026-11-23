import { MAILTO } from "../../lib/site";

export const metadata = {
  title: "Services — Web Development, SEO, Meta Ads, Google Ads, IT Services, AI Chatbot & AI Phone Receptionist",
  description:
    "Perplexity IT services for Salt Lake County businesses: fast websites, local SEO, Meta and Google ad campaigns, managed IT services, an AI chatbot for your website, and an AI phone receptionist that answers every call.",
};

const SERVICES_DETAIL = [
  {
    id: "web-development",
    title: "Web Development",
    intro:
      "Fast, modern websites built with current tools (Next.js, Vercel) — designed to load quickly, rank well, and turn visitors into customers.",
    points: [
      "Business websites, landing pages, and web apps",
      "Mobile-first design — most of your customers are on phones",
      "Built for speed: fast load times help rankings and conversions",
      "Easy to update, and you own everything",
    ],
  },
  {
    id: "seo",
    title: "SEO",
    intro:
      "Local SEO that puts your business on the map — literally. Audits, technical fixes, and Google Business Profile work that helps nearby customers find you first.",
    points: [
      "Site audits: speed, mobile, titles, headings, broken links",
      "Local keyword research for the terms your customers search",
      "Google Business Profile setup and optimization",
      "Service and location pages, content, and schema markup",
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    intro:
      "Facebook and Instagram campaigns managed month to month — with a hard daily budget cap as a guardrail, and reporting you can actually read.",
    points: [
      "Campaign setup, targeting, and creative",
      "Monthly management fee — not a percentage of your spend",
      "Daily budget caps so spend never runs away",
      "Clear monthly reporting: what ran, what it cost, what it brought in",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    intro:
      "Search and Performance Max campaigns that put you in front of people actively looking for what you do — with budgets you control.",
    points: [
      "Search campaigns for high-intent local keywords",
      "Performance Max and Local Services campaigns",
      "Conversion tracking set up properly from day one",
      "Monthly management with transparent reporting",
    ],
  },
  {
    id: "it-services",
    title: "IT Services",
    intro:
      "Managed IT for small businesses, from a systems engineer with 7+ years running Microsoft 365, Azure, and Entra ID for 1,000+ users — now available to local companies.",
    points: [
      "Microsoft 365 setup, migrations, and day-to-day administration",
      "Entra ID, Conditional Access, MFA, and identity security",
      "Intune device management and Windows Autopilot",
      "Azure VMs, storage, and networking",
      "Practical, plain-English support — no ticket black holes",
    ],
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    intro:
      "A chatbot on your website that answers customer questions 24/7 — trained on your own business info, so it gives your answers, not generic ones.",
    points: [
      "Trained on your services, prices, hours, and FAQs",
      "Answers visitors any time — nights, weekends, holidays",
      "Captures leads: name, phone, and what they need",
      "Hands off to you whenever a question is beyond it",
      "Lives on your website — no app for customers to install",
    ],
  },
  {
    id: "ai-phone-receptionist",
    title: "AI Phone Receptionist",
    intro:
      "An AI agent that answers your business phone with a natural voice, 24/7 — so no call goes unanswered, even when you're busy, closed, or with another customer.",
    points: [
      "Answers every call, any time of day",
      "Books appointments into your calendar",
      "Takes messages and sends them straight to you",
      "Answers common questions: hours, location, services, prices",
      "You set the script and the answers — it only says what you tell it to",
    ],
  },
];

export default function Services() {
  return (
    <div className="container">
      <div className="page-head">
        <p className="eyebrow">Services</p>
        <h1>What we do</h1>
        <p>
          Seven services, one person accountable. Every engagement starts with
          a conversation — book a call and we&apos;ll scope it together.
        </p>
      </div>

      {SERVICES_DETAIL.map((s) => (
        <section
          className="service-block"
          id={s.id}
          key={s.id}
          aria-labelledby={`${s.id}-heading`}
        >
          <h2 id={`${s.id}-heading`}>{s.title}</h2>
          <p>{s.intro}</p>
          <ul>
            {s.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </section>
      ))}

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="contact-card">
          <h2>Need one of these — or all five?</h2>
          <p>
            Email me with what you&apos;re looking for and I&apos;ll reply
            with next steps and a flat quote.
          </p>
          <a className="btn btn-black" href={MAILTO}>
            Book a call &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
