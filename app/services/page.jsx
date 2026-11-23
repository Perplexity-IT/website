import { MAILTO } from "../../lib/site";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";

export const metadata = {
  title: "Services — Web Development, SEO, Meta Ads, Google Ads, IT Services, AI Chatbot & AI Phone Receptionist",
  description:
    "Perplexity IT services for Salt Lake County businesses: fast websites, local SEO, Meta and Google ad campaigns, managed IT services, an AI chatbot for your website, and an AI phone receptionist that answers every call.",
  alternates: { canonical: "/services" },
};

const SERVICES_DETAIL = [
  {
    id: "web-development",
    title: "Web Development",
    question: "What kind of websites does Perplexity IT build?",
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
    question: "What does Perplexity IT's SEO service do?",
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
    question: "How does Perplexity IT manage Meta ads?",
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
    question: "What do Perplexity IT's Google Ads campaigns do?",
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
    question: "What do Perplexity IT's IT services cover?",
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
    question: "What is Perplexity IT's AI chatbot?",
    intro:
      "A chatbot on your website that answers customer questions 24/7 — trained on your own business info, so it gives your answers, not generic ones.",
    points: [
      "Trained on your services, prices, hours, and FAQs",
      "Answers visitors any time — nights, weekends, holidays",
      "Captures leads: name, phone, and what they need",
      "Hands off to you whenever a question is beyond it",
      "Lives on your website — no app for customers to install",
    ],
    note: "Try it — the chat button at the bottom left of this page is a live demo of the chatbot we build for businesses.",
  },
  {
    id: "ai-phone-receptionist",
    title: "AI Phone Receptionist",
    question: "How does Perplexity IT's AI phone receptionist work?",
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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
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
          <h3 className="service-question">{s.question}</h3>
          <p>{s.intro}</p>
          <ul>
            {s.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
          {s.note && <p className="service-note">{s.note}</p>}
        </section>
      ))}

      <section className="section" aria-labelledby="compare-heading">
        <div className="section-head">
          <p className="eyebrow">Why one person</p>
          <h2 id="compare-heading">One-person company vs. a big agency</h2>
          <p>
            Agencies are a fine fit for some businesses. Here is how working
            with Perplexity IT is different.
          </p>
        </div>
        <div className="compare-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col">How it works</th>
                <th scope="col">Perplexity IT</th>
                <th scope="col">A typical big agency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Who does the work</th>
                <td>You talk to Nabin — the person doing the work</td>
                <td>You usually talk to an account manager</td>
              </tr>
              <tr>
                <th scope="row">Replies</th>
                <td>Direct email, usually the same day</td>
                <td>Through a ticket queue or account manager</td>
              </tr>
              <tr>
                <th scope="row">Pricing</th>
                <td>Flat quotes before work starts; monthly plans you can cancel anytime</td>
                <td>Retainers and hourly billing are common</td>
              </tr>
              <tr>
                <th scope="row">Ownership</th>
                <td>You own your website, ad accounts, and data</td>
                <td>Varies — some agencies hold the keys</td>
              </tr>
              <tr>
                <th scope="row">Decisions</th>
                <td>One person decides, so changes happen fast</td>
                <td>Decisions pass through layers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="contact-card">
          <h2>Need one of these — or all seven?</h2>
          <p>
            Email me with what you&apos;re looking for and I&apos;ll reply
            with next steps and a flat quote.
          </p>
          <a className="btn btn-black" href={MAILTO}>
            Book a call &rarr;
          </a>
        </div>
        <p className="last-updated">Last updated: November 22, 2026</p>
      </section>
    </div>
  );
}
