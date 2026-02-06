import React from "react";
import Section from "../components/Section";

const WORK = [
  /*{
    company: "KajaPro Oy",
    role: "Software Developer",
    years: "2017 – Present",
    bullets: [
      "Web frontend & backend development",
      "4G base station OAM software design & bug fixing",
    ],
  },*/
  {
    company: "Coming Soon...",
    role: "",
    years: "",
    bullets: [
    ],
  },
];

export default function WorkPage() {
  return (
    <Section id="work" title="Work" subtitle="Work history and responsibilities.">
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
