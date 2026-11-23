"use client";

import { useEffect, useState } from "react";
import { MAILTO } from "../lib/site";

// Fixed bottom-right "Book a call" pill. Appears once the visitor has
// scrolled past the hero (~560px), with a dismiss button.
export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show || dismissed) return null;

  return (
    <div className="sticky-cta" role="complementary" aria-label="Book a call">
      <a className="sticky-cta-btn" href={MAILTO}>
        Book a call <span aria-hidden="true">&rarr;</span>
      </a>
      <button
        type="button"
        className="sticky-cta-close"
        aria-label="Dismiss book a call button"
        onClick={() => setDismissed(true)}
      >
        &times;
      </button>
    </div>
  );
}
