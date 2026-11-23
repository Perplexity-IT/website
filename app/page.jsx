import Link from "next/link";
import { EMAIL, FAQS, MAILTO, PROCESS_STEPS, PROJECTS, SERVICES } from "../lib/site";
import PlanCard from "../components/PlanCard";
import ProjectCard from "../components/ProjectCard";
import FAQ from "../components/FAQ";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

export const metadata = {
  title: "Perplexity IT | Websites, SEO, Ads, AI & IT Services — Salt Lake City",
  description:
    "Perplexity IT builds fast websites, runs SEO and Meta + Google ad campaigns, migrates email to Microsoft 365, and sets up AI chatbots and AI phone receptionists for businesses and individuals worldwide — with on-site IT services in Salt Lake County, Utah.",
  alternates: { canonical: "/" },
};

const FEATURED = PROJECTS.slice(0, 6);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ---------- hero ---------- */}
      <section className="hero hero-premium">
        <div className="container">
          <p className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true" />
            Salt Lake City · Serving clients worldwide
          </p>
          <h1>
            Get found first —{" "}
            <span className="hero-accent">online and on Google.</span>
          </h1>
          <p className="lede">
            Perplexity IT builds fast websites, runs SEO and Meta + Google
            ad campaigns, migrates email to Microsoft 365, and sets up AI
            chatbots and AI phone receptionists for businesses and individuals anywhere —
            with on-site managed IT for Salt Lake County businesses — all
            by Nabin Pokhrel, a systems engineer who ships real products.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-white btn-lg" href={MAILTO}>
              Book a call &rarr;
            </a>
            <Link href="/work" className="btn btn-ghost-light btn-lg">
              See the work
            </Link>
          </div>
          <p className="hero-note">
            Flat quotes before any work starts · You own everything · No
            lock-in
          </p>
        </div>
      </section>

      {/* ---------- trust strip ---------- */}
      <section className="trust-strip" aria-label="Projects built by Perplexity IT">
        <div className="container">
          <p className="trust-label">Built and shipped by Perplexity IT</p>
          <ul className="trust-list">
            {PROJECTS.map((p) => (
              <li key={p.title}>{p.title}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Services</p>
              <h2 id="services-heading">Everything you need online</h2>
              <p>
                One partner for your website, your rankings, your ads, and
                your IT — no agencies, no hand-offs, no jargon.
              </p>
            </div>
          </Reveal>
          <div className="card-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <article className="card card-hover">
                  <span className="card-icon" aria-hidden="true">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <Link href={`/services#${s.id}`} className="card-link">
                    Learn more &rarr;
                  </Link>
                </article>
              </Reveal>
            ))}
            <Reveal delay={160}>
              <article className="card card-hover" style={{ background: "var(--blue)", borderColor: "var(--blue)" }}>
                <h3 style={{ color: "#fff" }}>Not sure where to start?</h3>
                <p style={{ color: "#d6e7f5" }}>
                  Tell me what you need. I&apos;ll tell you
                  honestly what will move the needle — and what won&apos;t.
                </p>
                <a href={MAILTO} className="card-link" style={{ color: "#fff" }}>
                  Book a call &rarr;
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- featured work ---------- */}
      <section className="section section-alt" aria-labelledby="work-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Our work</p>
              <h2 id="work-heading">Real projects, shipped and live</h2>
              <p>
                Before selling websites, I built my own — apps, games, and
                content platforms people actually use.
              </p>
            </div>
          </Reveal>
          <div className="card-grid">
            {FEATURED.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="section-more">
              <Link href="/work" className="btn btn-outline">
                See all work &rarr;
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- process ---------- */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <p className="eyebrow">How it works</p>
              <h2 id="process-heading">From first call to launch — in four steps</h2>
              <p>
                No surprises, no jargon. You always know what happens next.
              </p>
            </div>
          </Reveal>
          <ol className="process-grid">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} as="li" className="process-step">
                <span className="process-num" aria-hidden="true">
                  {s.n}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- plans ---------- */}
      <section className="section section-alt" id="plans" aria-labelledby="plans-heading">
        <div className="container">
          <Reveal>
            <div className="plans-wrap">
              <div className="plans-copy">
                <p className="eyebrow">Pricing</p>
                <h2 id="plans-heading">Priced per project. No lock-in.</h2>
                <p>
                  Every project is different, so there&apos;s no one-size
                  price list here. Tell me what you need and I&apos;ll quote
                  a flat project price — or a simple monthly plan for ads and
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
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Questions</p>
              <h2 id="faq-heading">Before you ask</h2>
              <p>
                The things people usually ask first.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="faq-wrap">
              <FAQ />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- final CTA ---------- */}
      <section className="cta-band" aria-labelledby="cta-heading">
        <div className="container">
          <div>
            <h2 id="cta-heading">Let&apos;s talk about your project.</h2>
            <p>
              Email {EMAIL} — I reply personally, usually the same day.
            </p>
          </div>
          <a className="btn btn-white btn-lg" href={MAILTO}>
            Book a call &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
