import React from "react";
import Section from "../components/Section";

const EDUCATION = [
  {
    name: "Bachelor of Engineering in Information and Communications Technology, Game Technology",
    years: "4",
    details: [
      "Game programming, game engines",
      "software development, simulation, interactive technologies",
    ],
  },
];

const CERTS = [
  { name: "Python Developer", year: "15 June 2025" },
  { name: "Elements of Cloud and Cybersecurity", year: "01 September 2024" },
];

export default function EducationPage() {
  return (
    <Section id="education" title="Education" subtitle="Education, Courses and Certificates.">
      <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
        <div className="card">
          <h3 className="h3">Education</h3>
          <ul className="list">
            {EDUCATION.map((e) => (
              <li key={e.name}>
                <strong>{e.name}</strong> <span className="muted">({e.years})</span>
                <ul className="list">
                  {e.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="h3">Courses / Certificates</h3>
          <ul className="list">
            {CERTS.map((c) => (
              <li key={c.name}>
                {c.name} <span className="muted">({c.year})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
