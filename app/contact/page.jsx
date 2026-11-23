import { EMAIL, MAILTO } from "../../lib/site";
import ContactForm from "../../components/ContactForm";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";

export const metadata = {
  title: "Contact — Perplexity IT",
  description:
    "Contact Perplexity IT in Salt Lake City: email nabin@perplexityit.com to book a call about web development, SEO, Meta ads, Google ads, email migration, IT services, an AI chatbot, or an AI phone receptionist.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <div className="container">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <div className="page-head">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s talk</h1>
        <p>
          Tell me what you need — a website, better
          rankings, ads that bring in leads, an AI chatbot or phone
          receptionist, email migration, or IT help. I reply personally,
          usually the same day.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="contact-layout">
          <div>
            <div className="contact-card">
              <h2>Send a message</h2>
              <p>
                Fill this in and it opens your email app with everything
                prefilled — or write to me directly at{" "}
                <a href={MAILTO}>{EMAIL}</a>. Include a link to your current
                website if you have one — I&apos;ll take a look before we talk.
              </p>
              <ContactForm />
            </div>
          </div>
          <div>
            <div className="contact-side">
              <h2>Or email me directly</h2>
              <a className="big-email" href={MAILTO}>
                {EMAIL}
              </a>
              <h2 style={{ marginTop: 32 }}>Where</h2>
              <p>
                Salt Lake City, Utah — working with businesses and individuals worldwide.
                On-site IT support is available in Salt Lake County.
              </p>
              <h2 style={{ marginTop: 32 }}>What happens next</h2>
              <p>
                I read every message myself and reply with next steps — and a
                flat quote if the work is clear enough to price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
