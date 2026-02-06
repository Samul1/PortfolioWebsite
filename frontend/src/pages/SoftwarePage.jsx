import React from "react";
import Section from "../components/Section";

/*const WORK = [
  {
    company: "Coming Soon...",
    role: "Software Developer",
    years: "2017 – Present",
    bullets: [
      "Web Frontend & Backend development",
      "4G base station OAM SW design & bug fixing",
    ],
  },
];*/

const WORK = [
  {
    company: "Coming Soon...",
    role: "",
    years: "",
    bullets: [
    ],
  },
];

export default function SoftwarePage() {
  return (
    <Section id="software" title="Software Development" subtitle="Working history and experience.">
      <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
        {WORK.map((w) => (
          <div key={w.company} className="card">
            <h3 className="h3">{w.company}</h3>
            <p className="muted">{w.role} • {w.years}</p>
            <ul className="list">
              {w.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
