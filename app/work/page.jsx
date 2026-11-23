export const metadata = {
  title: "Our Work — LotteryMigo, iptvdekh, Techfolio, Knowledge Book & more",
  description:
    "Real projects built by Nabin Pokhrel: LotteryMigo lottery stats, iptvdekh.com live TV, Techfolio daily content, the Knowledge Book reference app, a flight radar app, and original games.",
};

const PROJECTS = [
  {
    tag: "Web app",
    title: "LotteryMigo",
    text: "Lottery statistics and number tools. A 1,400+ draw archive that updates three times a week, a physics-based number drum, heatmaps and charts, a ticket checker, and printable number sheets.",
    href: "https://lotterymigo.com",
  },
  {
    tag: "Streaming",
    title: "iptvdekh.com",
    text: "11,000+ live channels in one fast single-page app — USA, India, Nepal, movies, news, sports, and kids categories, with search, favorites, and a featured-live rail.",
    href: "https://iptvdekh.com",
  },
  {
    tag: "Content",
    title: "Techfolio",
    text: "Daily tech and finance content on Instagram and Facebook — three posts and a motion-graphics reel every day, built on an automated overnight production pipeline.",
    href: null,
  },
  {
    tag: "Reference app",
    title: "Knowledge Book",
    text: "A 1,200-entry sysadmin and DevOps reference app — searchable manuals, cheatsheets, and tools across 15 chapters, built from a curated open knowledge base.",
    href: null,
  },
  {
    tag: "App",
    title: "Flight Radar",
    text: "A live flight-tracking app: radar and map views of aircraft over Salt Lake City, flight search with follow mode, and tap-a-plane route details.",
    href: null,
  },
  {
    tag: "Games",
    title: "Gem Peaks",
    text: "An original Himalayan match-3 game — 12 levels from Lukla to the summit, with dynamic difficulty, streaks, and a weekly race.",
    href: null,
  },
  {
    tag: "Games",
    title: "Mountain Rush",
    text: "A downhill avalanche survival runner built in Godot — seven switchable modes from snowball roll to wingsuit glide, across 20 real mountains.",
    href: null,
  },
  {
    tag: "Animation",
    title: "Above the Cloud",
    text: "An original animated series: a Nepali engineer falls through the Khumbu Icefall and discovers a hidden yeti civilization. Pilot episode complete.",
    href: null,
  },
];

export default function Work() {
  return (
    <div className="container">
      <div className="page-head">
        <p className="eyebrow">Our work</p>
        <h1>Real projects, shipped and live</h1>
        <p>
          Before selling websites, I built my own — apps, games, and content
          platforms people actually use. This is what &ldquo;I build
          things&rdquo; looks like in practice.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="card-grid two">
          {PROJECTS.map((p) => (
            <article className="card" key={p.title}>
              <span className="card-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Visit site &rarr;
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
