"use client";

import { useState } from "react";
import Link from "next/link";
import { AI_OFFERINGS, PROJECTS, WORK_CATEGORIES } from "../lib/site";
import ProjectCard from "./ProjectCard";
import Icon from "./Icon";

// Portfolio accordion for the Our Work page. All categories collapsed by
// default; one open at a time. Mirrors the FAQ accordion pattern
// (aria wiring, chevron rotation, grid-rows expand animation).
//
// Web / App / Game / Animation show shipped projects as ProjectCards.
// AI services shows offerings as plain cards instead — services we build
// for clients, not portfolio case studies, so no mockup or fake stats.
export default function WorkAccordion() {
  const [open, setOpen] = useState(-1);

  return (
    <div className="work-cat-list">
      {WORK_CATEGORIES.map((cat, i) => {
        const isAi = cat.id === "ai";
        const items = isAi
          ? AI_OFFERINGS
          : PROJECTS.filter((p) => p.category === cat.id);
        const isOpen = open === i;
        return (
          <div className={`work-cat${isOpen ? " open" : ""}`} key={cat.id}>
            <h2 className="work-cat-head">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`work-cat-panel-${cat.id}`}
                id={`work-cat-button-${cat.id}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="work-cat-main">
                  <span className="work-cat-title">
                    {cat.label}
                    <span className="work-cat-count">
                      {items.length} {cat.noun}
                      {items.length === 1 ? "" : "s"}
                    </span>
                  </span>
                  <span className="work-cat-blurb">{cat.blurb}</span>
                </span>
                <span className="work-cat-chev" aria-hidden="true">
                  ▾
                </span>
              </button>
            </h2>
            <div
              className="work-cat-wrap"
              id={`work-cat-panel-${cat.id}`}
              role="region"
              aria-labelledby={`work-cat-button-${cat.id}`}
            >
              <div className="work-cat-inner">
                <div className="work-cat-body">
                  {isAi ? (
                    <>
                      <p className="work-cat-note">
                        Services we build and set up for businesses — not
                        client case studies. The chatbot on this site (bottom
                        left) is a live demo.
                      </p>
                      <div className="card-grid">
                        {AI_OFFERINGS.map((o) => (
                          <article
                            className="card card-hover"
                            key={o.title}
                          >
                            <span
                              className="card-icon"
                              aria-hidden="true"
                            >
                              <Icon name={o.icon} size={26} />
                            </span>
                            <h3>{o.title}</h3>
                            <p>{o.text}</p>
                            <Link href={o.href} className="card-link">
                              Learn more &rarr;
                            </Link>
                          </article>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="card-grid two">
                      {items.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
