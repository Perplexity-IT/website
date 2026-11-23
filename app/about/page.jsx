import { COVER_SRC } from "../../lib/images";
import { MAILTO } from "../../lib/site";

export const metadata = {
  title: "About Nabin Pokhrel — Perplexity IT",
  description:
    "Nabin Pokhrel is a systems engineer and builder in Salt Lake City with 7+ years in IT — Microsoft 365, Azure, Entra ID — now building websites and ad campaigns for local businesses.",
};

export default function About() {
  return (
    <div className="container">
      <div className="page-head">
        <p className="eyebrow">About</p>
        <h1>Nabin Pokhrel — engineer, builder, one-person company</h1>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="split">
          <div>
            <p>
              I&apos;m a systems engineer based in Salt Lake City with 7+
              years in IT. By day I&apos;ve run Microsoft 365 for 1,000+
              users, migrated 500+ mailboxes to Exchange Online with zero
              data loss, and moved on-premises identity to the cloud with
              zero downtime.
            </p>
            <p>
              Outside work I build things — lottery tools, a live TV app, a
              flight radar, games, an animated series. Perplexity IT is
              where those two sides meet: the discipline of enterprise IT
              and the speed of someone who ships.
            </p>
            <p>
              When you hire Perplexity IT, you get me — not a sales rep, not
              a ticket queue. I scope the work, build it, and answer your
              emails.
            </p>
            <p style={{ marginTop: 24 }}>
              <a className="btn btn-black" href={MAILTO}>
                Book a call &rarr;
              </a>
            </p>
          </div>
          <img
            src={COVER_SRC}
            alt="Wasatch mountains over the Salt Lake City skyline at golden hour"
            width={1600}
            height={609}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="card-grid">
          <article className="card">
            <h3>7+ years in IT</h3>
            <p>
              Systems administration at scale — Microsoft 365, Azure, Entra
              ID, Intune, and PowerShell automation.
            </p>
          </article>
          <article className="card">
            <h3>Certified</h3>
            <p>
              Microsoft Azure Administrator (AZ-104), AWS Solutions Architect
              — Associate, CompTIA Cloud+ and Project+.
            </p>
          </article>
          <article className="card">
            <h3>Builder</h3>
            <p>
              Eight shipped products and counting — web apps, games, and
              content platforms built end to end.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
