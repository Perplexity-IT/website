"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGO_SRC } from "../lib/images";
import { EMAIL, MAILTO, SERVICES } from "../lib/site";
import PlanCard from "./PlanCard";

const getCustomers = SERVICES.filter((s) => s.column === "customers");
const buildSupport = SERVICES.filter((s) => s.column === "support");

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  // Close menus on navigation and on Escape.
  useEffect(() => {
    setMegaOpen(false);
    setCompanyOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setCompanyOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close menus when clicking outside the nav.
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMegaOpen(false);
        setCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container">
          <span className="util-left">
            <span>Serving Salt Lake County, UT</span>
            <span className="util-dot hide-mobile" aria-hidden="true">
              •
            </span>
            <span className="hide-mobile">
              Websites, SEO, ads &amp; IT — one local partner
            </span>
          </span>
          <span className="util-right">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={MAILTO}>Book a call &rarr;</a>
          </span>
        </div>
      </div>

      <div className="container mega-wrap" ref={navRef}>
        <nav className="nav-row" aria-label="Main">
          <Link href="/" className="logo-link" aria-label="Perplexity IT — home">
            <img
              className="logo-img"
              src={LOGO_SRC}
              alt="Perplexity IT"
              width={270}
              height={77}
            />
          </Link>

          <div className="nav-links">
            <div
              className="nav-item"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                className={`nav-button${megaOpen ? " active" : ""}`}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onClick={() => {
                  setMegaOpen((v) => !v);
                  setCompanyOpen(false);
                }}
              >
                Services <span className="caret">▾</span>
              </button>
            </div>

            <div className="nav-item">
              <Link href="/work" className="nav-link">
                Our Work
              </Link>
            </div>

            <div className="nav-item">
              <Link href="/#plans" className="nav-link">
                Pricing
              </Link>
            </div>

            <div
              className="nav-item"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                type="button"
                className={`nav-button${companyOpen ? " active" : ""}`}
                aria-expanded={companyOpen}
                aria-haspopup="true"
                onClick={() => {
                  setCompanyOpen((v) => !v);
                  setMegaOpen(false);
                }}
              >
                Company <span className="caret">▾</span>
              </button>
              {companyOpen && (
                <div className="dropdown">
                  <Link href="/about">About Nabin</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              )}
            </div>
          </div>

          <div className="nav-actions">
            <Link href="/#plans" className="btn btn-outline">
              Website Plan
            </Link>
            <a href={MAILTO} className="btn btn-black">
              Talk to a person &rarr;
            </a>
          </div>

          <button
            type="button"
            className="hamburger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </nav>

        {megaOpen && (
          <div
            className="mega-menu"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="mega-grid">
              <div>
                <p className="mega-col-label">Get customers</p>
                {getCustomers.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services#${s.id}`}
                    className="mega-service"
                  >
                    <h3>{s.name}</h3>
                    <p>{s.short}</p>
                  </Link>
                ))}
              </div>
              <div>
                <p className="mega-col-label">Build &amp; support</p>
                {buildSupport.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services#${s.id}`}
                    className="mega-service"
                  >
                    <h3>{s.name}</h3>
                    <p>{s.short}</p>
                  </Link>
                ))}
              </div>
              <PlanCard />
            </div>
            <div className="mega-footer">
              <Link href="/services">All services &rarr;</Link>
              <Link href="/work">See our work &rarr;</Link>
            </div>
          </div>
        )}
      </div>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <span className="mobile-section-title">Services</span>
        {SERVICES.map((s) => (
          <Link
            key={s.id}
            href={`/services#${s.id}`}
            className="mobile-sub"
          >
            {s.title}
          </Link>
        ))}
        <Link href="/work">Our Work</Link>
        <Link href="/#plans">Pricing</Link>
        <Link href="/about">About Nabin</Link>
        <Link href="/contact">Contact</Link>
        <a href={MAILTO} className="btn btn-black">
          Talk to a person &rarr;
        </a>
      </div>
    </header>
  );
}
