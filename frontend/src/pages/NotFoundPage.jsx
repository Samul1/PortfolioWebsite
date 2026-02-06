import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function NotFoundPage() {
  return (
    <Section id="notfound" title="404" subtitle="Sivua ei löytynyt.">
      <div className="card">
        <p className="muted">Tämä reitti ei ole olemassa.</p>
        <Link className="btn btn--ghost" to="/">Back to home</Link>
      </div>
    </Section>
  );
}
