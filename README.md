# Perplexity IT — website

Professional website for Perplexity IT, a one-person company in Salt Lake
County, UT. Services: web development, SEO, Meta ads, Google ads, IT services.

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
