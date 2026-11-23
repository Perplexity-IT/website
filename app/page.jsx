import Link from "next/link";
import { COVER_SRC } from "../lib/images";
import { EMAIL, MAILTO, SERVICES } from "../lib/site";
import PlanCard from "../components/PlanCard";

export const metadata = {
  title: "Perplexity IT | Websites, SEO, Ads & IT Services in Salt Lake County",
  description:
    "Perplexity IT builds fast websites, runs local SEO and Meta + Google ad campaigns, and provides managed IT services for businesses in Salt Lake County, Utah.",
};

const PROJECTS = [
  {
    tag: "Web app",
    title: "LotteryMigo",
    text: "Lottery stats and number tools, with a 1,400+ draw archive updated three times a week.",
    href: "https://lotterymigo.com",
  },
  {
    tag: "Streaming",
    title: "iptvdekh.com",
    text: "11,000+ live channels in one fast single-page app — search, favorites, and categories.",
    href: "https://iptvdekh.com",
  },
  {
    tag: "Content",
    title: "Techfolio",
    text: "Daily tech and finance content — three posts and a reel a day, on Instagram and Facebook.",
    href: null,
  },
  {
    tag: "Reference app",
    title: "Knowledge Book",
    text: "A 1,200-entry sysadmin and DevOps reference — searchable manuals, cheatsheets, and tools.",
    href: null,
  },
  {
    tag: "App",
    title: "Flight Radar",
    text: "Live aircraft tracking over Salt Lake City — radar view, flight search, and follow mode.",
    href: null,
  },
  {
    tag: "Games",
    title: "Gem Peaks & Mountain Rush",
    text: "Two original games built from scratch — a Himalayan match-3 and a downhill avalanche runner.",
    href: null,
  },
];

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${COVER_SRC})` }}
      >
        <div className="container">
          <p className="hero-eyebrow">Salt Lake County, Utah</p>
          <h1>
            Websites, SEO, and ads for local businesses — done right.
          </h1>
          <p className="lede">
            Perplexity IT is a one-person company: fast websites, local SEO,
            Meta and Google ads, and managed IT — built and run by Nabin
            Pokhrel, a systems engineer who ships real products.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-white" href={MAILTO}>
              Book a call &rarr;
            </a>
            <Link href="/work" className="btn btn-outline" style={{ borderColor: "#fff", color: "#fff", background: "transparent" }}>
              See our work
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2 id="services-heading">Everything a local business needs online</h2>
            <p>
              One partner for your website, your rankings, your ads, and your
              IT — no agencies, no hand-offs, no jargon.
            </p>
          </div>
          <div className="card-grid">
            {SERVICES.map((s) => (
              <article className="card" key={s.id}>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link href={`/services#${s.id}`} className="card-link">
                  Learn more &rarr;
                </Link>
              </article>
            ))}
            <article className="card" style={{ background: "var(--blue)", borderColor: "var(--blue)" }}>
              <h3 style={{ color: "#fff" }}>Not sure where to start?</h3>
              <p style={{ color: "#d6e7f5" }}>
                Tell me what your business needs. I&apos;ll tell you honestly
                what will move the needle — and what won&apos;t.
              </p>
              <a href={MAILTO} className="card-link" style={{ color: "#fff" }}>
                Book a call &rarr;
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="work-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our work</p>
            <h2 id="work-heading">Real projects, shipped and live</h2>
            <p>
              Before selling websites, I built my own — apps, games, and
              content platforms people actually use.
            </p>
          </div>
          <div className="card-grid">
            {PROJECTS.map((p) => (
              <article className="card" key={p.title}>
                <span className="card-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    Visit site &rarr;
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="plans" aria-labelledby="plans-heading">
        <div className="container">
          <div className="plans-wrap">
            <div className="plans-copy">
              <p className="eyebrow">Pricing</p>
              <h2 id="plans-heading">Priced per project. No lock-in.</h2>
              <p>
                Every business is different, so there&apos;s no one-size
                price list here. Tell me what you need and I&apos;ll quote a
                flat project price — or a simple monthly plan for ads and
                ongoing work.
              </p>
              <ul>
                <li>Flat quote before any work starts — no surprises</li>
                <li>You own your website, your ad accounts, and your data</li>
                <li>Monthly management you can cancel anytime</li>
                <li>One person accountable, start to finish</li>
              </ul>
            </div>
            <PlanCard />
          </div>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-heading">
        <div className="container">
          <div>
            <h2 id="cta-heading">Let&apos;s talk about your business.</h2>
            <p>
              Email {EMAIL} — I reply personally, usually the same day.
            </p>
          </div>
          <a className="btn btn-white" href={MAILTO}>
            Book a call &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
