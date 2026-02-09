import React from "react";
import { useParams, Link } from "react-router-dom";

import { PROFILE, PROJECTS, slugify } from "../services/siteData";
import ImageCarousel from "../components/ImageCarousel";

// ============================================================
// ===== PROJECT DETAILS PAGE (REFERENCE-LIKE LAYOUT) =====
// - Title + body text
// - Image carousel (slides)
// - Author block at bottom
// ============================================================

export default function ProjectDetailsPage() {
  const { slug } = useParams();

  const proj = PROJECTS.find((p) => slugify(p.title) === slug);

  if (!proj) {
    return (
      <div className="container page">
        <h1 className="page__title">Not found</h1>
        <p className="muted">Project not found.</p>
        <Link className="btn btn--ghost" to="/projects">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container page__inner">
        {/* ===== BREADCRUMB (OPTIONAL) ===== */}
        <div className="crumb">
          <span className="crumb__dim">{proj.category}</span>
          <span className="crumb__sep">/</span>
          <span className="crumb__dim">{proj.title}</span>
        </div>

        {/* ===== TITLE ===== */}
        <h1 className="page__title">{proj.title}</h1>

        {/* ===== BODY ===== */}
        <div className="page__content">
          <div className="page__text">
            {proj.subtitle ? <p className="page__lead">{proj.subtitle}</p> : null}

            {(proj.body || [proj.description]).map((p, idx) => (
              <p key={idx} className="page__p">
                {p}
              </p>
            ))}

            {proj.links?.length ? (
              <div className="page__actions">
                {proj.links.map((l) => (
                  <a key={l.label} className="btn btn--primary" href={l.href} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {/* ===== SLIDES ===== */}
          <div className="page__media">
            <ImageCarousel slides={proj.images || []} />
          </div>
        </div>

        {/* ===== AUTHOR (BOTTOM) ===== */}
        <div className="author">
          <img className="author__avatar" src={PROFILE.avatar} alt={`${PROFILE.name} avatar`} />
          <div className="author__meta">
            <div className="author__name">{PROFILE.name}</div>
            <div className="author__muted">Open to Game Dev & Software Engineering roles.</div>

            <div className="author__links">
              {PROFILE.socials.map((s) => (
                <a key={s.label} className="author__link" href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="page__footerSpace" />
      </div>
    </div>
  );
}
