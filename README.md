# Perplexity IT — website

Professional website for Perplexity IT, a one-person company in Salt Lake
County, UT. Services: web development, SEO, Meta ads, Google ads, IT services,
AI chatbot, AI phone receptionist.

- **Stack:** Next.js 14 (App Router), static export (`output: 'export'`).
- **Hosting:** Vercel — auto-deploys on every push to `main`.
- **Domain:** perplexityit.com (DNS at GoDaddy; email on Microsoft 365 —
  do not touch MX records).
- **Preview:** https://website-git-main-perplexity-it.vercel.app

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export in out/
```

## Notes

- Brand images live in `lib/images.js` as data URIs — the GitHub connector
  cannot push binary files, so the real logo and cover art are embedded as
  text. To swap in real image files later, drop them in `public/` and update
  the imports.
- Contact is email-only (`nabin@perplexityit.com`); no phone number and no
  pricing on the site by design — the CTA is "book a call" (mailto).
- No client counts, ratings, or years-in-business claims anywhere on the
  site — only real work is shown.
- Demo chatbot (`components/ChatWidget.jsx`, brain in
  `lib/chatbot-knowledge.js`): a floating widget on every page, bottom-left.
  Rule-based, zero cost, no API key — it answers only from facts already on
  the site and captures leads via the same mailto composer as the contact
  form. It is itself the demo of the AI Chatbot service.
- The contact form (`components/ContactForm.jsx`) has no backend: it composes
  a prefilled mailto in the visitor's own mail app. To switch to direct
  submission, set `FORM_ENDPOINT` in that file to a Formspree/FormSubmit URL
  — one line, no other change needed.
- Project cards use CSS browser mockups, not screenshots — no working
  headless browser on the build VM, and the mockups keep the look
  consistent. To use real screenshots later, add them as data URIs in
  `lib/images.js` and reference them in `components/ProjectCard.jsx`.
- Scroll-reveal animations are a lightweight IntersectionObserver hook
  (`components/Reveal.jsx`); content stays visible with JS disabled.

## SEO / AI search (added Nov 22, 2026)

- Canonical site URL lives in one place: `SITE_URL` in `lib/site.js`.
  It is currently the Vercel preview URL because perplexityit.com still
  points at the old GoDaddy site. **When DNS moves to Vercel**, change
  `SITE_URL` to `https://perplexityit.com` and update the hardcoded URLs
  in `public/sitemap.xml`, `public/robots.txt`, and `public/llms.txt`.
- `public/robots.txt` explicitly allows AI retrieval bots (OAI-SearchBot,
  GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, and more)
  plus Googlebot/Bingbot. Nothing is blocked.
- `public/llms.txt` summarizes the business for LLM agents. Keep it
  honest — no invented prices, clients, or results.
- Every page has a canonical tag (via `alternates.canonical` + the
  `metadataBase` in `app/layout.jsx`). Inner pages carry BreadcrumbList
  JSON-LD (`components/BreadcrumbJsonLd.jsx`). Layout carries LocalBusiness
  + Organization JSON-LD; the homepage carries FAQPage JSON-LD generated
  from `FAQS` in `lib/site.js` (add a question there and the schema
  follows automatically).
- Service sections lead with a question heading + a direct answer
  (answer-first, for AI extraction). The Services page has a
  "one-person company vs. big agency" comparison table — keep the wording
  fair and generic, no invented numbers.
- Footer carries the author byline (Nabin Pokhrel + LinkedIn) and a
  "Last updated" date. Update that date only when content actually
  changes — do not fake recency.
- Still to do (needs Nabin, not a code change): submit the sitemap in
  Google Search Console + Bing Webmaster Tools; off-site brand mentions
  (directories, Reddit, YouTube, reviews).
