import { EMAIL, MAILTO } from "../../lib/site";

export const metadata = {
  title: "Contact — Perplexity IT",
  description:
    "Contact Perplexity IT in Salt Lake City: email nabin@perplexityit.com to book a call about web development, SEO, Meta ads, Google ads, or IT services.",
};

export default function Contact() {
  return (
    <div className="container">
      <div className="page-head">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s talk</h1>
        <p>
          Tell me about your business and what you need — a website, better
          rankings, ads that bring in leads, or IT help. I reply personally,
          usually the same day.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="contact-card">
          <h2>Email me</h2>
          <p>
            The fastest way to reach me. Include a link to your current
            website if you have one — I&apos;ll take a look before we talk.
          </p>
          <a className="big-email" href={MAILTO}>
            {EMAIL}
          </a>
          <p style={{ marginTop: 24 }}>
            <a className="btn btn-black" href={MAILTO}>
              Book a call &rarr;
            </a>
          </p>
        </div>

        <div style={{ marginTop: 28, maxWidth: 640 }}>
          <h2 style={{ fontSize: 20, margin: "0 0 8px" }}>Where</h2>
          <p style={{ color: "var(--muted)", margin: 0, fontSize: 16.5 }}>
            Salt Lake City, Utah — serving businesses across Salt Lake County.
          </p>
        </div>
      </section>
    </div>
  );
}
