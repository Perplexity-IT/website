"use client";

import { useState } from "react";
import { FAQS } from "../lib/site";

// Accessible accordion. First item open by default.
export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={f.q}>
            <h3 className="faq-q">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="faq-chev" aria-hidden="true">
                  ▾
                </span>
              </button>
            </h3>
            <div
              className="faq-a-wrap"
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
            >
              <p className="faq-a">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
