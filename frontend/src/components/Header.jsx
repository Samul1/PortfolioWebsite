import React, { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";

import { NAV, PROJECTS, slugify } from "../services/siteData";

// ============================================================
// ===== HEADER / NAV (DATA-DRIVEN) =====
// - Dropdown-itemit generoidaan PROJECTS arraysta
// ============================================================

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav2__item ${isActive ? "is-active" : ""}`}
    >
      {label}
    </NavLink>
  );
}

function Dropdown({ to, label, items }) {
  return (
    <div className="dropdown">
      <NavLink
        to={to}
        className={({ isActive }) => `nav2__item ${isActive ? "is-active" : ""}`}
      >
        {label} <span className="caret">▾</span>
      </NavLink>

      <div className="dropdown__menu">
        {items.map((it) => (
          <Link key={it.to} className="dropdown__link" to={it.to}>
            {it.label}
            <span style={{ opacity: 0.65 }}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header({ theme, onToggleTheme }) {
  // ============================================================
  // ===== BUILD DROPDOWN ITEMS ONCE =====
  // ============================================================
  const dropdownItemsByCategory = useMemo(() => {
    // group by category
    const map = new Map();

    for (const p of PROJECTS) {
      const cat = p.category || "other";
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat).push(p);
    }

    // sort alphabetically by title
    for (const [cat, arr] of map.entries()) {
      arr.sort((a, b) => a.title.localeCompare(b.title));
      map.set(cat, arr);
    }

    // convert to link items
    // convert to link items
    const toItems = (category) => {
      const projects = map.get(category) || [];

      return projects.map((p) => ({
        label: p.title,
        to: `/projects/${slugify(p.title)}`,
      }));
    };

    return {
      embedded: toItems("embedded"),
      games: toItems("games"),
      software: toItems("software"),
    };
  }, []);

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <Link className="brandLink" to="/">
          <div className="brand">
            <span className="brand__dot" />
            <span className="brand__text">Portfolio</span>
          </div>
        </Link>

        <nav className="nav2">
          {NAV.map((n) => {
            if (n.type === "dropdown") {
              const items = dropdownItemsByCategory[n.category] ?? [
                { label: "All", to: n.to },
              ];

              return (
                <Dropdown
                  key={n.label}
                  to={n.to}
                  label={n.label}
                  items={items}
                />
              );
            }

            return <NavItem key={n.label} to={n.to} label={n.label} />;
          })}
        </nav>

        <div className="topbar__actions">
          <button className="iconBtn" title="Toggle theme" onClick={onToggleTheme} type="button">
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
      </div>
    </header>
  );
}
