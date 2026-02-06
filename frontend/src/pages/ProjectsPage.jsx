import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { PROJECTS } from "../services/siteData";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProjectsPage({ category }) {
  const list = category
    ? PROJECTS.filter((p) => p.category === category)
    : PROJECTS;

  const title =
    category === "embedded" ? "Embedded" :
    category === "games" ? "Games" :
    category === "software" ? "Software" :
    "Projects";

  const subtitle =
    category ? "Select a project to view details." : "All projects.";

  return (
    <Section id="projects" title={title} subtitle={subtitle}>
      <div className="card">
        <div className="linkList">
          {list.map((p) => {
            const slug = slugify(p.title);
            return (
              <Link key={p.title} className="linkRow" to={`/projects/${slug}`}>
                <span className="linkRow__label">{p.title}</span>
                <span className="linkRow__arrow">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
