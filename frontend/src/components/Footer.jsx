import React from "react";

export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="muted">
        © {new Date().getFullYear()} {name} • Built with React + Vite
      </div>
    </footer>
  );
}
