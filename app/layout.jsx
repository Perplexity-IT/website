import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MARK_SRC } from "../lib/images";

export const metadata = {
  metadataBase: new URL("https://perplexityit.com"),
  title: {
    default: "Perplexity IT | Websites, SEO, Ads & IT Services in Salt Lake County",
    template: "%s | Perplexity IT",
  },
  description:
    "Perplexity IT builds fast websites, runs local SEO and Meta + Google ad campaigns, and provides managed IT services for businesses in Salt Lake County, Utah.",
  keywords: [
    "web development Salt Lake City",
    "SEO Salt Lake County",
    "Meta ads Utah",
    "Google ads Salt Lake City",
    "IT services Salt Lake County",
    "managed IT Utah",
  ],
  openGraph: {
    title: "Perplexity IT | Websites, SEO, Ads & IT Services",
    description:
      "Web development, SEO, Meta ads, Google ads, and IT services for Salt Lake County businesses — from Nabin Pokhrel, Salt Lake City.",
    url: "https://perplexityit.com",
    siteName: "Perplexity IT",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: MARK_SRC,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Perplexity IT",
  description:
    "Web development, SEO, Meta ads, Google ads, and IT services for businesses in Salt Lake County, Utah.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
