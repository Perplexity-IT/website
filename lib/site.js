export const EMAIL = "nabin@perplexityit.com";
export const MAILTO =
  "mailto:nabin@perplexityit.com?subject=Book%20a%20call%20—%20Perplexity%20IT";

export const SERVICES = [
  {
    id: "web-development",
    name: "Websites",
    title: "Web Development",
    short: "Fast, modern websites built to turn visitors into customers.",
    column: "customers",
    icon: "code",
  },
  {
    id: "google-ads",
    name: "Google Ads",
    title: "Google Ads",
    short: "Search and Performance Max campaigns that bring in real leads.",
    column: "customers",
    icon: "target",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    title: "Meta Ads",
    short: "Facebook and Instagram campaigns, managed month to month.",
    column: "customers",
    icon: "megaphone",
  },
  {
    id: "seo",
    name: "SEO",
    title: "SEO",
    short: "Local SEO that puts you on the map — audits, fixes, and Google Business Profile.",
    column: "customers",
    icon: "search",
  },
  {
    id: "it-services",
    name: "IT Services",
    title: "IT Services",
    short: "Managed IT for small business — Microsoft 365, Azure, Entra ID, and day-to-day support.",
    column: "support",
    icon: "shield",
  },
  {
    id: "ai-chatbot",
    name: "AI Chatbot",
    title: "AI Chatbot",
    short: "A chatbot for your website that answers customer questions 24/7, trained on your own business info.",
    column: "ai",
    icon: "chat",
  },
  {
    id: "ai-phone-receptionist",
    name: "AI Phone Receptionist",
    title: "AI Phone Receptionist",
    short: "An AI agent that answers your business calls 24/7 — books appointments, takes messages, answers questions.",
    column: "ai",
    icon: "phone",
  },
];

// Real projects only. `visual` keys map to gradients + icons in ProjectCard.
// `href` is set only where a real public site exists.
export const PROJECTS = [
  {
    tag: "Web app",
    title: "LotteryMigo",
    text: "Lottery statistics and number tools. A 1,400+ draw archive that updates three times a week, a physics-based number drum, heatmaps and charts, a ticket checker, and printable number sheets.",
    href: "https://lotterymigo.com",
    visual: "lottery",
    domain: "lotterymigo.com",
  },
  {
    tag: "Streaming",
    title: "iptvdekh.com",
    text: "11,000+ live channels in one fast single-page app — USA, India, Nepal, movies, news, sports, and kids categories, with search, favorites, and a featured-live rail.",
    href: "https://iptvdekh.com",
    visual: "tv",
    domain: "iptvdekh.com",
  },
  {
    tag: "Trading app",
    title: "BitBullGold",
    text: "Solana trading desktop for Windows — a local-first scanner with private keys encrypted in memory, direct RPC execution, Jupiter Aggregator V6 routing, Jito tip bundles, and Raydium/Pump/Meteora feeds, with fail-safes for balance, position, and slippage.",
    href: "https://bitbullgold.com",
    visual: "bull",
    domain: "bitbullgold.com",
  },
  {
    tag: "Content",
    title: "Techfolio",
    text: "Daily tech and finance content on Instagram and Facebook — three posts and a motion-graphics reel every day, built on an automated overnight production pipeline.",
    href: null,
    visual: "chart",
    domain: "Perplexity IT",
  },
  {
    tag: "Reference app",
    title: "Knowledge Book",
    text: "A 1,200-entry sysadmin and DevOps reference app — searchable manuals, cheatsheets, and tools across 15 chapters, built from a curated open knowledge base.",
    href: null,
    visual: "book",
    domain: "Perplexity IT",
  },
  {
    tag: "App",
    title: "Flight Radar",
    text: "A live flight-tracking app: radar and map views of aircraft over Salt Lake City, flight search with follow mode, and tap-a-plane route details.",
    href: null,
    visual: "radar",
    domain: "Perplexity IT",
  },
  {
    tag: "Games",
    title: "Gem Peaks",
    text: "An original Himalayan match-3 game — 12 levels from Lukla to the summit, with dynamic difficulty, streaks, and a weekly race.",
    href: null,
    visual: "gem",
    domain: "Perplexity IT",
  },
  {
    tag: "Games",
    title: "Mountain Rush",
    text: "A downhill avalanche survival runner built in Godot — seven switchable modes from snowball roll to wingsuit glide, across 20 real mountains.",
    href: null,
    visual: "mountain",
    domain: "Perplexity IT",
  },
  {
    tag: "Animation",
    title: "Above the Cloud",
    text: "An original animated series: a Nepali engineer falls through the Khumbu Icefall and discovers a hidden yeti civilization. Pilot episode complete.",
    href: null,
    visual: "cloud",
    domain: "Perplexity IT",
  },
];

// Honest answers only — no invented prices or timelines beyond the ranges
// stated here. Used both by the on-page FAQ and the FAQPage JSON-LD.
export const FAQS = [
  {
    q: "How long does a website take?",
    a: "Most small business websites launch in 1–3 weeks from the kickoff call, depending on how much content and how many pages are involved. You get a timeline in the quote before any work starts.",
  },
  {
    q: "How much does a website cost?",
    a: "Every project is quoted flat before work starts — no hourly billing and no surprises. Tell me what you need (pages, features, timeline) and I'll send a quote you can approve or walk away from.",
  },
  {
    q: "How does ad billing work?",
    a: "Your ad spend goes directly to Google or Meta — you pay the platforms, not me, and you own the ad accounts. I charge a flat monthly management fee, never a percentage of your spend, and every campaign runs with a daily budget cap so spend never runs away.",
  },
  {
    q: "What do your IT services cover?",
    a: "Microsoft 365 setup, migrations, and day-to-day administration; Entra ID, Conditional Access, and MFA; Intune device management and Windows Autopilot; Azure VMs, storage, and networking — plus plain-English support for small businesses in Salt Lake County.",
  },
  {
    q: "How does the AI phone receptionist work?",
    a: "It answers your business calls with a natural voice, any time of day — nights, weekends, and when you're busy with another customer. It books appointments, takes messages, and answers common questions like your hours, location, services, and prices. You set the script and the answers, so it only says what you tell it to say, and anything it can't handle comes to you as a message.",
  },
  {
    q: "What does the AI chatbot need from me?",
    a: "Your services, prices, hours, and the questions customers ask most. I train the chatbot on your own business info, put it on your website, and it answers visitors 24/7, captures leads, and hands off to you whenever a question is beyond it.",
  },
  {
    q: "Do I own my website and accounts?",
    a: "Yes. Your website, domain, ad accounts, and data are yours. There is no lock-in, and monthly management can be cancelled anytime.",
  },
  {
    q: "Why hire a one-person company instead of an agency?",
    a: "You talk to the person doing the work — no sales reps, no account managers, no hand-offs. That means faster decisions, one person accountable start to finish, and a price that doesn't carry agency overhead.",
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Book a call",
    text: "Tell me about your business and what you need — a website, better rankings, ads, or IT help. The first conversation is free, with no pressure.",
  },
  {
    n: "02",
    title: "Plan & quote",
    text: "I scope the work and send a flat quote with a timeline. Nothing starts until you approve it.",
  },
  {
    n: "03",
    title: "Build & launch",
    text: "I build, you review, we launch together. Most websites are live in 1–3 weeks.",
  },
  {
    n: "04",
    title: "Grow & support",
    text: "Monthly management for ads, SEO, and IT keeps things improving — and you can cancel anytime.",
  },
];
