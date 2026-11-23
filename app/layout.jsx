import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import { MARK_SRC } from "../lib/images";

// Self-hosted at build time by next/font — no runtime Google Fonts request.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://perplexityit.com"),
  title: {
    default: "Perplexity IT | Websites, SEO, Ads, AI & IT Services in Salt Lake County",
    template: "%s | Perplexity IT",
  },
  description:
    "Perplexity IT builds fast websites, runs local SEO and Meta + Google ad campaigns, sets up AI chatbots and AI phone receptionists, and provides managed IT services for businesses in Salt Lake County, Utah.",
  keywords: [
    "web development Salt Lake City",
    "SEO Salt Lake County",
    "Meta ads Utah",
    "Google ads Salt Lake City",
    "IT services Salt Lake County",
    "managed IT Utah",
    "AI chatbot for small business",
    "AI phone receptionist Salt Lake City",
  ],
  openGraph: {
    title: "Perplexity IT | Websites, SEO, Ads, AI & IT Services",
    description:
      "Web development, SEO, Meta ads, Google ads, AI chatbot and AI phone receptionist setup, and IT services for Salt Lake County businesses — from Nabin Pokhrel, Salt Lake City.",
    url: "https://perplexityit.com",
    siteName: "Perplexity IT",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: MARK_SRC,
  },
};

const SERVICE_NAMES = [
  "Web Development",
  "SEO",
  "Meta Ads",
  "Google Ads",
  "IT Services",
  "AI Chatbot",
  "AI Phone Receptionist",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Perplexity IT",
  description:
    "Web development, SEO, Meta ads, Google ads, AI chatbot and AI phone receptionist setup, and IT services for businesses in Salt Lake County, Utah.",
  url: "https://perplexityit.com",
  email: "nabin@perplexityit.com",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Salt Lake County, UT",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salt Lake City",
    addressRegion: "UT",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Nabin Pokhrel",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Perplexity IT services",
    itemListElement: SERVICE_NAMES.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        {/* Marks JS as available so scroll-reveal starts hidden only then. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
