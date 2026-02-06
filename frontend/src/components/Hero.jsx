import React from "react";

// ============================================================
// ===== HERO =====
// ============================================================

export default function Hero({ profile, onNavClick }) {
  return (
    <section id="home" className="hero">
      <div className="hero__left">
        <div className="kicker">
          <span className="kicker__pill">{profile.location}</span>
          <span className="kicker__sep">•</span>
          <span className="kicker__pill">{profile.title}</span>
        </div>

        <h1 className="h1">
          Portfolio & Projects
          <span className="h1__accent"> — {profile.name}</span>
        </h1>

        <p className="lead">{profile.tagline}</p>

        <div className="hero__cta">
          <button className="btn btn--primary" onClick={() => onNavClick("projects")} type="button">
            View Projects
          </button>
          <button className="btn btn--ghost" onClick={() => onNavClick("contact")} type="button">
            Contact
          </button>
        </div>

        <div className="socialRow">
          {profile.socials.map((s) => (
            <a key={s.label} className="chip" href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hero__right">
        <div className="card card--profile">
          <div className="profileArt" aria-hidden="true">
            <div className="profileArt__ring" />
            <div className="profileArt__core" />
          </div>

          <div className="card__body">
            <div className="statGrid">
              <div className="stat">
                <div className="stat__k">Focus</div>
                <div className="stat__v">C++ / Realtime</div>
              </div>
              <div className="stat">
                <div className="stat__k">Web</div>
                <div className="stat__v">React / Node</div>
              </div>
              <div className="stat">
                <div className="stat__k">Infra</div>
                <div className="stat__v">Docker / Linux</div>
              </div>
              <div className="stat">
                <div className="stat__k">Style</div>
                <div className="stat__v">Clean MVP</div>
              </div>
            </div>
          </div>
        </div>

        <div className="miniNote">
          <span className="dot" />
          <span>
            Tip: Lisää projektit suoraan <code>PROJECTS</code> arrayhin.
          </span>
        </div>
      </div>
    </section>
  );
}
