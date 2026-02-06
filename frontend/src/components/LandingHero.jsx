import React from "react";

// ============================================================
// ===== LANDING HERO =====
// - Täysleveä tausta (valinnainen)
// - Tumma overlay
// - Keskitetty avatar + nimi + tagline + ikonirivi + CTA
// ============================================================

function Icon({ kind }) {
  // ===== MINIMAL INLINE SVG ICONS =====
  // (Ei kirjastoja. Helppo vaihtaa myöhemmin lucide-reactiin.)
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 };

  if (kind === "github") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M9 19c-4 1.5-4-2.5-5-3m10 6v-3.4c0-1 .1-1.4-.5-2 1.7-.2 3.5-.8 3.5-4A3.1 3.1 0 0 0 16 7.5 2.9 2.9 0 0 0 16 5s-.7-.2-2 1a6.6 6.6 0 0 0-4 0c-1.3-1.2-2-1-2-1a2.9 2.9 0 0 0 0 2.5A3.1 3.1 0 0 0 7 12.6c0 3.2 1.8 3.8 3.5 4-.6.6-.6 1.2-.5 2V22" />
      </svg>
    );
  }

  if (kind === "linkedin") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2a4 4 0 0 1 2-3Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 4a2 2 0 1 0 0 .01Z" />
      </svg>
    );
  }

  if (kind === "youtube") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M22 12s0-4-1-5-4-1-9-1-8 0-9 1-1 5-1 5 0 4 1 5 4 1 9 1 8 0 9-1 1-5 1-5Z" />
        <path d="M10 9.5v5l5-2.5-5-2.5Z" />
      </svg>
    );
  }

  if (kind === "itch") {
    // ei “virallinen” itch-logo, mutta “controller-ish” merkki placeholderiksi
    return (
      <svg {...common} aria-hidden="true">
        <path d="M7 10h10v8a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-8Z" />
        <path d="M9 10V7a3 3 0 0 1 6 0v3" />
        <path d="M10 14h.01M14 14h.01" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden="true">
      <path d="M12 2v20M2 12h20" />
    </svg>
  );
}

export default function LandingHero({ profile }) {
  const hasBg = Boolean(profile.heroBg);
  const hasAvatar = Boolean(profile.avatar);

  return (
    <section className={`landing ${hasBg ? "landing--hasBg" : ""}`}>
      {/* ===== BACKGROUND ===== */}
      {hasBg ? (
        <div
          className="landing__bg"
          style={{ backgroundImage: `url(${profile.heroBg})` }}
          aria-hidden="true"
        />
      ) : (
        <div className="landing__bg landing__bg--fallback" aria-hidden="true" />
      )}

      {/* ===== OVERLAY ===== */}
      <div className="landing__overlay" aria-hidden="true" />

      {/* ===== CONTENT ===== */}
      <div className="landing__content">
        <div className="avatar">
          {hasAvatar ? (
            <img className="avatar__img" src={profile.avatar} alt={`${profile.name} avatar`} />
          ) : (
            <div className="avatar__placeholder">
              <div className="avatar__placeholderText">Aseta kuva</div>
            </div>
          )}
        </div>

        <h1 className="landing__name">{profile.name}</h1>
        <p className="landing__tagline">{profile.tagline}</p>

        <div className="landing__icons">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              className="iconLink"
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              aria-label={s.label}
            >
              <Icon kind={s.kind} />
            </a>
          ))}
        </div>

        <a className="btn btn--primary landing__cta" href={profile.hireMeUrl} target="_blank" rel="noreferrer">
          Hire Me!
        </a>
      </div>
    </section>
  );
}
