"use client";

import { useState } from "react";
import { EMAIL } from "../lib/site";

// Contact form with zero backend: submitting composes a prefilled email to
// Nabin via the visitor's own mail app. Nothing is stored on this site.
//
// To switch to direct submission later (Formspree / FormSubmit), set
// FORM_ENDPOINT below to the service URL — the submit handler posts the
// same fields there instead of opening mailto. No other change needed.
const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxx"

const SERVICE_OPTIONS = [
  "Web Development",
  "SEO",
  "Meta Ads",
  "Google Ads",
  "IT Services",
  "AI Chatbot",
  "AI Phone Receptionist",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "").trim();

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        setStatus(
          res.ok
            ? "sent"
            : "error"
        );
        if (res.ok) e.target.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    const subject = `New inquiry — ${service} — ${name}`;
    const body = [
      `Name: ${name}`,
      business ? `Business: ${business}` : null,
      `Email: ${email}`,
      `Service needed: ${service}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input type="text" name="name" required autoComplete="name" placeholder="Jane Smith" />
        </label>
        <label>
          Business <span className="optional">(optional)</span>
          <input type="text" name="business" autoComplete="organization" placeholder="Smith Cleaning Co." />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input type="email" name="email" required autoComplete="email" placeholder="you@yourbusiness.com" />
        </label>
        <label>
          Service needed
          <select name="service" defaultValue={SERVICE_OPTIONS[0]}>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Tell me about your project
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What do you need — a new website, better rankings, ads, IT help? Include your current website if you have one."
        />
      </label>
      <button type="submit" className="btn btn-black form-submit">
        Send message &rarr;
      </button>
      <p className="form-note">
        This opens your email app with everything prefilled — nothing is
        stored on this site. Prefer to write directly?{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      {status === "mailto" && (
        <p className="form-status" role="status">
          Your email app should have opened with the message ready to send.
        </p>
      )}
      {status === "sent" && (
        <p className="form-status" role="status">
          Thanks — your message was sent. I reply personally, usually the
          same day.
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-error" role="alert">
          Something went wrong sending the form — please email me directly at{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}
    </form>
  );
}
