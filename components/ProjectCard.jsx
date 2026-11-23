import Icon from "./Icon";

// Project card with a CSS browser-mockup visual: gradient screen, centered
// icon, and skeleton bars. No screenshots — the VM has no working headless
// browser, and the mockups keep the look consistent and lightweight.
const VISUALS = {
  lottery: { gradient: "linear-gradient(135deg,#0f2a5c 0%,#1d4ed8 55%,#7c3aed 100%)", icon: "ball" },
  tv: { gradient: "linear-gradient(135deg,#0f172a 0%,#0f766e 100%)", icon: "play" },
  chart: { gradient: "linear-gradient(135deg,#0b0b0c 0%,#004383 100%)", icon: "chart" },
  book: { gradient: "linear-gradient(135deg,#1e293b 0%,#0e6db5 100%)", icon: "book" },
  radar: { gradient: "linear-gradient(135deg,#001e3c 0%,#0369a1 100%)", icon: "radar" },
  gem: { gradient: "linear-gradient(135deg,#312e81 0%,#be185d 100%)", icon: "gem" },
  mountain: { gradient: "linear-gradient(135deg,#0c4a6e 0%,#38bdf8 100%)", icon: "mountain" },
  cloud: { gradient: "linear-gradient(135deg,#1e1b4b 0%,#6366f1 100%)", icon: "cloud" },
  bull: { gradient: "linear-gradient(135deg,#78350f 0%,#b45309 55%,#f59e0b 100%)", icon: "coins" },
};

export default function ProjectCard({ project }) {
  const v = VISUALS[project.visual] || VISUALS.chart;
  return (
    <article className="project-card">
      <div className="mockup" aria-hidden="true">
        <div className="mockup-bar">
          <span className="mockup-dot" />
          <span className="mockup-dot" />
          <span className="mockup-dot" />
          <span className="mockup-url">{project.domain}</span>
        </div>
        <div className="mockup-screen" style={{ background: v.gradient }}>
          <span className="mockup-icon">
            <Icon name={v.icon} size={44} />
          </span>
          <span className="mockup-line w-70" />
          <span className="mockup-line w-45" />
        </div>
      </div>
      <div className="project-body">
        <span className="card-tag">{project.tag}</span>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Visit site &rarr;
          </a>
        )}
      </div>
    </article>
  );
}
