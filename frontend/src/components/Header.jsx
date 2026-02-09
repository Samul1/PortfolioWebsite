import React, { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";

import { NAV, PROJECTS, slugify } from "../services/siteData";

// ============================================================
// ===== HEADER / NAV (DATA-DRIVEN) =====
// - Dropdown-itemit generoidaan PROJECTS arraysta
// - Dropdown-labelit EI navigoi minnekään (vain itemit navigoi)
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

function Dropdown({ label, items }) {
  return (
    <div className="dropdown">
      {/* ===== NOT A LINK ANYMORE ===== */}
      <button
        type="button"
        className="nav2__item nav2__item--static"
        aria-haspopup="menu"
        aria-label={label}
        onClick={(e) => {
          // NOTE: ei tehdä mitään klikkauksella
          // (alasveto toimii hoverilla CSS:llä kuten ennen)
          e.preventDefault();
        }}
      >
        {label} <span className="caret">▾</span>
      </button>

      <div className="dropdown__menu" role="menu">
        {items.map((it) => (
          <Link key={it.to} className="dropdown__link" to={it.to} role="menuitem">
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
    const map = new Map();

    for (const p of PROJECTS) {
      const cat = p.category || "other";
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat).push(p);
    }

    for (const [cat, arr] of map.entries()) {
      arr.sort((a, b) => a.title.localeCompare(b.title));
      map.set(cat, arr);
    }

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
              const items = dropdownItemsByCategory[n.category] ?? [];
              return <Dropdown key={n.label} label={n.label} items={items} />;
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
