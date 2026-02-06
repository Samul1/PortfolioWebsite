import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

import { PROFILE } from "./services/siteData";

// ============================================================
// ===== THEME HOOK =====
// ============================================================
function useStoredTheme(defaultTheme = "dark") {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;

    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default function App() {
  const [theme, setTheme] = useStoredTheme("dark");
  const onToggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="app">
      <div className="bgGlow" aria-hidden="true" />

      <Header name={PROFILE.name} theme={theme} onToggleTheme={onToggleTheme} />

      <main className="main">
        <AppRouter />
        <div className="container">
          <Footer name={PROFILE.name} />
        </div>
      </main>
    </div>
  );
}
