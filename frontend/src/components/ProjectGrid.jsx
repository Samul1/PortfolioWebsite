import React from "react";

// ============================================================
// ===== PROJECT GRID =====
// ============================================================

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function ButtonLink({ href, children }) {
  return (
    <a className="btn btn--ghost" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid">
      {projects.map((p) => (
        <article key={p.title} className="card card--project">
          <div className="card__head">
            <div>
              <h3 className="h3">{p.title}</h3>
              <div className="muted">{p.subtitle}</div>
            </div>
          </div>

          <p className="card__text">{p.description}</p>

          <div className="pillRow">
            {p.tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="card__actions">
            {p.links.map((l) => (
              <ButtonLink key={l.label} href={l.href}>
                {l.label}
              </ButtonLink>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
