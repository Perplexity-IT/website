import Link from "next/link";
import { MARK_SRC } from "../lib/images";
import { EMAIL, LINKEDIN, SERVICES } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img
              className="footer-mark"
              src={MARK_SRC}
              alt=""
              width={44}
              height={44}
            />
            <p>
              Perplexity IT — web development, SEO, Meta ads, Google ads, AI
              chatbots, AI phone receptionists, and IT services for
              businesses in Salt Lake County, Utah.
            </p>
            <p>
              Built and run by{" "}
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                Nabin Pokhrel
              </a>
              , Salt Lake City.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/work">Our Work</Link>
              </li>
              <li>
                <Link href="/about">About Nabin</Link>
              </li>
              <li>
                <Link href="/#plans">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>Salt Lake City, UT</li>
              <li>Serving Salt Lake County</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Perplexity IT. All rights reserved.</span>
          <span>Last updated: November 22, 2026</span>
          <span>Built in Salt Lake City, Utah.</span>
        </div>
      </div>
    </footer>
  );
}
