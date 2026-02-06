import React from "react";
import { useParams, Link } from "react-router-dom";
import Section from "../components/Section";
import { PROJECTS } from "../services/siteData";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const proj = PROJECTS.find((p) => slugify(p.title) === slug);

  if (!proj) {
    return (
      <Section id="notfound" title="Not found" subtitle="Project not found.">
        <div className="card">
          <p className="muted">Select a project from the category pages.</p>
          <Link className="btn btn--ghost" to="/games">Go to Games</Link>
        </div>
      </Section>
    );
  }

  return (
    <Section id="project" title={proj.title} subtitle={proj.subtitle}>
      <div className="card">
        <p className="muted">{proj.description}</p>

        <div className="pillRow" style={{ marginTop: 14 }}>
          {proj.tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        <div className="card__actions" style={{ marginTop: 16 }}>
          {proj.links.map((l) => (
            <a key={l.label} className="btn btn--ghost" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
