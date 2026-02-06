import React from "react";

// ============================================================
// ===== SECTION WRAPPER =====
// ============================================================

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="section__header">
        <h2 className="h2">{title}</h2>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
