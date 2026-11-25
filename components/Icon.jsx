// Minimal stroke icons (24x24, stroke 2). No emoji, no external assets.
const PATHS = {
  code: (
    <>
      <path d="M8 6 2 12l6 6" />
      <path d="m16 6 6 6-6 6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11.5 15 5.5v13L3 13.5v-2z" />
      <path d="M7.5 13.5V18a2 2 0 0 0 4 0v-3.6" />
      <path d="M18.5 9.5a4 4 0 0 1 0 5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 20 5.5v6c0 4.8-3.4 8.3-8 10.5-4.6-2.2-8-5.7-8-10.5v-6l8-3z" />
      <path d="m8.8 11.8 2.2 2.2 4.2-4.4" />
    </>
  ),
  play: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="3" />
      <path d="M10 9.3v5.4l4.8-2.7L10 9.3z" fill="currentColor" stroke="none" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V11" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M2 20h20" />
    </>
  ),
  book: (
    <>
      <path d="M2 4.5h6A4 4 0 0 1 12 8.5v12a3 3 0 0 0-3-3H2V4.5z" />
      <path d="M22 4.5h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7V4.5z" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="m12 12 6.4-6.4" />
    </>
  ),
  gem: (
    <>
      <path d="M6.5 3.5h11L21 9.5 12 20.5 3 9.5l3.5-6z" />
      <path d="M3 9.5h18" />
      <path d="m9.5 3.5 2.5 6 2.5-6" />
      <path d="M12 9.5v11" />
    </>
  ),
  mountain: (
    <>
      <path d="m3 20 6-11 4 6.5 2.5-3.5L21 20H3z" />
      <circle cx="18.5" cy="5.5" r="1.6" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.5 18.5a4.2 4.2 0 0 0 .4-8.38 6 6 0 0 0-11.7 1.5A3.8 3.8 0 0 0 7 18.5h10.5z" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  chat: (
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  coins: (
    <>
      <circle cx="9" cy="9" r="6.5" />
      <path d="M15.5 4.6a6.5 6.5 0 0 1 0 11.8" />
      <path d="M6.8 9h.01M9 6.8h.01M11.2 9h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3z" />
      <path d="M19 15.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z" />
    </>
  ),
  bag: (
    <>
      <path d="M6 7h12l1 13.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5L6 7z" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    </>
  ),
};

export default function Icon({ name, size = 24, className = "" }) {
  const paths = PATHS[name] || PATHS.code;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}
