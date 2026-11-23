import WorkAccordion from "../../components/WorkAccordion";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";

export const metadata = {
  title: "Our Work — LotteryMigo, iptvdekh, BitBullGold, Techfolio, Knowledge Book & more",
  description:
    "Real projects built by Nabin Pokhrel: LotteryMigo lottery stats, iptvdekh.com live TV, the BitBullGold Solana trading desktop, Techfolio daily content, the Knowledge Book reference app, a flight radar app, and original games.",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return (
    <div className="container">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/work" },
        ]}
      />
      <div className="page-head">
        <p className="eyebrow">Our work</p>
        <h1>Real projects, shipped and live</h1>
        <p>
          Before selling websites, I built my own — apps, games, and content
          platforms people actually use. This is what &ldquo;I build
          things&rdquo; looks like in practice. Pick a category below to see
          what&apos;s in it.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 40 }}>
        <WorkAccordion />
      </section>
    </div>
  );
}
