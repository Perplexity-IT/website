// Rule-based demo chatbot brain — zero cost, no API key, no server.
// Answers ONLY from real facts already on the site (the 8 services, the 12
// FAQs, the process steps, the 9 portfolio projects, contact email, Salt
// Lake City base with worldwide service except on-site IT). Anything else
// gets a graceful fallback that points
// at the contact form / book-a-call. NEVER invents prices, timelines
// beyond what the FAQ states, client counts, ratings, or testimonials.
//
// getBotReply(input) returns { text, chips?, lead? }:
//   text  — the bot's reply (may contain \n line breaks; the widget renders
//           them with white-space: pre-line)
//   chips — optional follow-up suggestion chips to show after this reply
//   lead  — true when the visitor shows intent to book / get a quote; the
//           widget then runs the lead-capture flow (name, email, need).
import { SERVICES, PROJECTS, FAQS, PROCESS_STEPS, EMAIL } from "./site";

export const GREETING =
  "Hi! I'm the Perplexity IT assistant — a demo of the chatbot we build for businesses and individuals. Ask me about our services, pricing, or how working with us goes.";

export const QUICK_REPLIES = [
  "What services do you offer?",
  "How much does a website cost?",
  "Tell me about the AI chatbot",
  "Book a call",
];

const BOOK_CHIP = "Book a call";
const SERVICES_CHIP = "What services do you offer?";

function normalize(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function has(norm, ...words) {
  return words.some((w) => norm.includes(w));
}

function faqAnswer(q) {
  const found = FAQS.find((f) => f.q === q);
  return found ? found.a : "";
}

const SERVICES_OVERVIEW = `We offer eight services:\n\n${SERVICES.map(
  (s) => `• ${s.title} — ${s.short}`
).join("\n")}\n\nWant the details on any one of them? Just ask.`;

const PROCESS_TEXT = `Here's how working with Perplexity IT goes:\n\n${PROCESS_STEPS.map(
  (s) => `${s.n}. ${s.title} — ${s.text}`
).join("\n")}`;

const PROJECTS_TEXT = `Nine shipped projects, including LotteryMigo (lottery statistics and number tools), iptvdekh.com (11,000+ live channels), BitBullGold (Solana trading desktop), Techfolio (daily tech content), Knowledge Book (a 1,200-entry reference app), and Flight Radar (live flight tracking over Salt Lake City). You can see them all on the Work page — want the details on any one?`;

function projectReply(project) {
  const live = project.href ? ` Live at ${project.domain}.` : "";
  return {
    text: `${project.title} — ${project.text}${live}`,
    chips: ["What other projects have you built?", BOOK_CHIP],
  };
}

const REPLIES = {
  greeting: {
    text: "Hi there! I'm the Perplexity IT assistant — a demo of the chatbot we build for businesses and individuals. I can tell you about our services, pricing, and how working with Nabin goes. What would you like to know?",
    chips: QUICK_REPLIES,
  },
  thanks: {
    text: "You're welcome! Anything else you'd like to know about Perplexity IT?",
    chips: [SERVICES_CHIP, BOOK_CHIP],
  },
  goodbye: {
    text: `Thanks for stopping by! If you'd like to talk to Nabin, book a call or email ${EMAIL} — he replies personally, usually the same day.`,
  },
  identity: {
    text: "I'm the demo version of the AI chatbot Perplexity IT builds for small businesses and individuals. I run entirely in your browser and answer from what's on this site — the client version is trained on your own info and captures leads, like I'm doing here. Want to see what the chatbot service includes?",
    chips: ["Tell me about the AI chatbot", BOOK_CHIP],
  },
  cost: {
    text: `${faqAnswer(
      "How much does a website cost?"
    )}\n\nWant a quote for your project? I can take your details and email them to Nabin.`,
    chips: [BOOK_CHIP, "How long does a website take?"],
  },
  timeline: {
    text: faqAnswer("How long does a website take?"),
    chips: ["How much does a website cost?", BOOK_CHIP],
  },
  adBilling: {
    text: faqAnswer("How does ad billing work?"),
    chips: ["Tell me about Meta Ads", "Tell me about Google Ads"],
  },
  ownership: {
    text: faqAnswer("Do I own my website and accounts?"),
    chips: [BOOK_CHIP],
  },
  whyOnePerson: {
    text: faqAnswer("Why hire a one-person company instead of an agency?"),
    chips: [BOOK_CHIP, SERVICES_CHIP],
  },
  services: { text: SERVICES_OVERVIEW, chips: ["Tell me about the AI chatbot", BOOK_CHIP] },
  web: {
    text: "Web Development — fast, modern websites built with current tools (Next.js, Vercel), designed to load quickly, rank well, and turn visitors into customers. Mobile-first, built for speed, and you own everything. Most websites launch in 1–3 weeks. Want a quote?",
    chips: ["How much does a website cost?", BOOK_CHIP],
  },
  seo: {
    text: "SEO — local SEO that puts your business on the map: site audits (speed, mobile, titles, headings, broken links), local keyword research, Google Business Profile setup and optimization, and service and location pages with schema markup.",
    chips: [BOOK_CHIP],
  },
  metaAds: {
    text: "Meta Ads — Facebook and Instagram campaigns managed month to month, with a hard daily budget cap as a guardrail. Monthly management fee — never a percentage of your spend — and clear monthly reporting: what ran, what it cost, what it brought in.",
    chips: ["How does ad billing work?", BOOK_CHIP],
  },
  googleAds: {
    text: "Google Ads — Search and Performance Max campaigns that put you in front of people actively looking for what you do, with budgets you control and conversion tracking set up properly from day one.",
    chips: ["How does ad billing work?", BOOK_CHIP],
  },
  adsGeneral: {
    text: "We run both Meta Ads (Facebook and Instagram) and Google Ads (Search and Performance Max). Your ad spend goes directly to Google or Meta — you own the accounts — and management is a flat monthly fee with a daily budget cap. Which one are you curious about?",
    chips: ["Tell me about Meta Ads", "Tell me about Google Ads"],
  },
  it: {
    text: "IT Services — on-site managed IT in Salt Lake County, from a systems engineer with 7+ years running Microsoft 365, Azure, and Entra ID for 1,000+ users: Microsoft 365 setup and migrations, Entra ID with Conditional Access and MFA, Intune device management and Windows Autopilot, Azure VMs, storage, and networking — plus plain-English support. Everything else we do is remote and available worldwide.",
    chips: [BOOK_CHIP],
  },
  emailMigration: {
    text: "Email Migration — we move your email to Microsoft 365 with zero data loss: mailboxes, calendars, and contacts, planned around your schedule so work doesn't stop during the move. Nabin has migrated 500+ mailboxes to Exchange Online. It's done fully remotely, so it works for businesses and individuals anywhere.",
    chips: [BOOK_CHIP],
  },
  chatbot: {
    text: "AI Chatbot — a chatbot on your website that answers customer questions 24/7, trained on your own business info (services, prices, hours, FAQs). It captures leads and hands off to you whenever a question is beyond it. And you're looking at one right now — I'm the demo version!",
    chips: ["How does the AI phone receptionist work?", BOOK_CHIP],
  },
  phone: {
    text: faqAnswer("How does the AI phone receptionist work?"),
    chips: ["Tell me about the AI chatbot", BOOK_CHIP],
  },
  process: { text: PROCESS_TEXT, chips: [BOOK_CHIP] },
  projects: {
    text: PROJECTS_TEXT,
    chips: ["Tell me about LotteryMigo", "Tell me about BitBullGold"],
  },
  area: {
    text: "Perplexity IT is based in Salt Lake City, Utah. Websites, SEO, ads, email migration, and AI services are delivered remotely to businesses and individuals anywhere in the world — only on-site IT support is limited to Salt Lake County.",
    chips: [BOOK_CHIP],
  },
  contact: {
    text: `You can reach Nabin by email at ${EMAIL} — he replies personally, usually the same day. Or I can take your details right here and email them to him.`,
    chips: [BOOK_CHIP],
  },
  replyTime: {
    text: `Nabin replies personally, usually the same day. Email him at ${EMAIL}, or book a call and he'll get back to you.`,
    chips: [BOOK_CHIP],
  },
  lead: {
    lead: true,
    text: "Great — let's get that started. I'll take a few details and email them straight to Nabin. What's your name?",
  },
};

function fallback() {
  return {
    text: `I don't have an answer for that yet — I'm a demo chatbot, so I only know what's on this site. The fastest way to get an answer is to book a call, or email Nabin at ${EMAIL} — he replies personally, usually the same day.`,
    chips: [SERVICES_CHIP, BOOK_CHIP],
  };
}

// Fuzzy fallback: score FAQ questions and service blurbs by shared
// meaningful tokens. Needs at least 2 shared tokens to answer.
const STOP = new Set([
  "a", "an", "the", "is", "are", "was", "were", "do", "does", "did", "can",
  "could", "would", "should", "i", "you", "me", "my", "we", "us", "it",
  "its", "this", "that", "what", "how", "when", "where", "who", "why",
  "about", "for", "of", "to", "in", "on", "and", "or", "with", "your",
  "yours", "please", "tell", "get", "got", "have", "has", "had", "am",
  "be", "been", "there", "here", "any", "some", "much", "many", "long",
]);

function meaningfulTokens(norm) {
  return norm
    .split(" ")
    .filter((t) => t.length > 2 && !STOP.has(t));
}

function fuzzyReply(norm) {
  const inputTokens = meaningfulTokens(norm);
  if (inputTokens.length === 0) return null;
  let best = null;
  let bestScore = 0;

  for (const f of FAQS) {
    const qTokens = meaningfulTokens(f.q);
    const score = inputTokens.filter((t) => qTokens.includes(t)).length;
    if (score > bestScore) {
      bestScore = score;
      best = { text: f.a, chips: [BOOK_CHIP] };
    }
  }
  for (const s of SERVICES) {
    const sTokens = meaningfulTokens(`${s.title} ${s.short}`);
    const score = inputTokens.filter((t) => sTokens.includes(t)).length;
    if (score > bestScore) {
      bestScore = score;
      best = { text: `${s.title} — ${s.short}`, chips: [BOOK_CHIP] };
    }
  }
  return bestScore >= 2 ? best : null;
}

export function getBotReply(input) {
  const norm = normalize(input);
  if (!norm) return fallback();

  // 1. Lead intent — quote, call, or "I want this".
  if (
    has(
      norm,
      "book a call",
      "book a meeting",
      "schedule a call",
      "set up a call",
      "get a quote",
      "get started",
      "hire you",
      "work with you",
      "sign up",
      "i want",
      "i need",
      "interested in",
      "talk to nabin",
      "talk to someone",
      "talk to a person",
      "contact nabin",
      "speak to nabin",
      "speak to someone"
    )
  ) {
    return REPLIES.lead;
  }

  // 2. Greeting.
  if (/^(hi|hello|hey|yo|hiya|good (morning|afternoon|evening))\b/.test(norm)) {
    return REPLIES.greeting;
  }

  // 3. Thanks / goodbye.
  if (has(norm, "thank", "thanks", "thx")) return REPLIES.thanks;
  if (has(norm, "goodbye", "bye", "see you")) return REPLIES.goodbye;

  // 4. Identity.
  if (
    has(norm, "who are you", "what are you", "are you ai", "are you a robot", "are you a bot", "are you human", "are you real", "your name")
  ) {
    return REPLIES.identity;
  }

  // 5. Cost — before the web rule, so "how much does a website cost" lands here.
  if (has(norm, "price", "pricing", "cost", "how much", "charge", "fee", "rates", "rate card", "quote")) {
    return REPLIES.cost;
  }

  // 6. Timeline.
  if (has(norm, "how long", "timeline", "turnaround", "how fast", "when can", "when will", "launch")) {
    return REPLIES.timeline;
  }

  // 7. Ad billing.
  if (has(norm, "ad billing", "ad spend", "who pays", "budget cap", "pay the platform")) {
    return REPLIES.adBilling;
  }

  // 8. Ownership / lock-in / cancel.
  if (has(norm, "own my", "do i own", "lock in", "locked in", "cancel anytime", "cancel monthly")) {
    return REPLIES.ownership;
  }

  // 9. Why a one-person company.
  if (has(norm, "why you", "why perplexity", "one person company", "one-person", "instead of an agency", "vs agency", "versus agency", "difference between")) {
    return REPLIES.whyOnePerson;
  }

  // 10. Phone number — there is no phone number; point at email (before the
  // phone-receptionist rule, which also matches "phone").
  if (has(norm, "phone number", "call you", "ring you")) {
    return REPLIES.contact;
  }

  // 11. Services overview.
  if (
    norm === "services" ||
    has(norm, "what services", "which services", "list of services", "services do you offer", "services you offer", "what do you offer", "what do you do", "what can you do", "what do you provide", "all services", "your offerings", "offerings")
  ) {
    return REPLIES.services;
  }

  // 12. Per-service topics (specific first).
  if (has(norm, "phone receptionist", "receptionist", "answer calls", "answering calls", "missed call", "missed calls", "ai phone")) {
    return REPLIES.phone;
  }
  if (has(norm, "chatbot", "chat bot", "ai chat", "chat widget")) {
    return REPLIES.chatbot;
  }
  if (has(norm, "seo", "search engine", "rank on google", "google ranking", "rankings", "google business")) {
    return REPLIES.seo;
  }
  if (has(norm, "meta ads", "meta ad", "facebook ads", "facebook ad", "instagram ads", "instagram ad", "fb ads", "ig ads")) {
    return REPLIES.metaAds;
  }
  if (has(norm, "google ads", "google ad", "adwords", "performance max", "ppc")) {
    return REPLIES.googleAds;
  }
  if (has(norm, "ads", "advertising", "campaign")) {
    return REPLIES.adsGeneral;
  }
  // Email migration — before the IT rule, so "migrate email to Microsoft 365" lands here.
  if (has(norm, "email migration", "migrate email", "migrate our email", "mailbox migration", "migrate mailboxes", "move email", "exchange online", "migrate to microsoft 365", "migrate to 365")) {
    return REPLIES.emailMigration;
  }
  // "it" alone is too common — require an IT phrase.
  if (
    has(norm, "it services", "it service", "it support", "managed it", "microsoft 365", "microsoft", "365", "azure", "entra", "intune", "autopilot", "m365", "office 365", "tech support", "computer support")
  ) {
    return REPLIES.it;
  }
  if (has(norm, "website", "web development", "web design", "landing page", "rebuild", "redesign", "new site", "my site")) {
    return REPLIES.web;
  }

  // 13. Process.
  if (has(norm, "process", "how does it work", "how do we start", "how it works", "steps", "what happens", "how does working", "working with")) {
    return REPLIES.process;
  }

  // 14. Specific projects, then portfolio in general.
  for (const p of PROJECTS) {
    const name = p.title.toLowerCase();
    if (norm.includes(name) || (p.domain && norm.includes(p.domain.replace("www.", "")))) {
      return projectReply(p);
    }
  }
  if (has(norm, "portfolio", "projects", "your work", "examples", "show me", "built", "clients", "case stud")) {
    return REPLIES.projects;
  }

  // 15. Area / location.
  if (has(norm, "where are you", "where is", "location", "based", "salt lake", "utah", "county", "serve", "area")) {
    return REPLIES.area;
  }

  // 16. Contact / reply time.
  if (has(norm, "email", "contact", "reach you", "reach nabin", "get in touch")) {
    return REPLIES.contact;
  }
  if (has(norm, "hours", "open", "available", "when do you reply", "when will you reply", "respond")) {
    return REPLIES.replyTime;
  }

  // 17. Fuzzy match against FAQs and services, else graceful fallback.
  return fuzzyReply(norm) || fallback();
}
