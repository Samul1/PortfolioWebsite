// ============================================================
// ===== SITE DATA =====
// - Päivitä nämä omiksi linkeiksi ja projekteiksi.
// - Tähän on tarkoitus koskea useimmin.
// ============================================================
import avatarUrl from "../assets/avatar.jpg";
import heroBgUrl from "../assets/hero-bg.jpg";

export const PROFILE = {
  name: "Samul1",
  title: "C/C++ / GameEngine / Fullstack Developer",
  tagline:
    "I build game engines, real-time systems, and clean, maintainable web applications.",
  location: "Finland",
  // ===== HERO ASSETS =====
  heroBg: heroBgUrl,      // esim "/assets/hero_forest.jpg" tai "" jos ei kuvaa
  avatar: avatarUrl,      // esim "/assets/avatar.png" tai "" jos ei kuvaa
  socials: [
    { label: "GitHub", href: "https://github.com/Samul1", kind: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samulijuu", kind: "linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/@ByteShell/videos", kind: "youtube" },
    { label: "itch.io", href: "https://byteshell.itch.io/", kind: "itch" },
  ],
  // ===== PRIMARY CTA =====
  hireMeUrl: "https://www.linkedin.com/in/samulijuu",
};

export const PROJECTS = [
  {
    // ===== Embedded =====

    // ===== Software =====
    title: "CaffeineEngine",
    category: "software",
    subtitle: "MVC C++-pelimoottori (2D/3D)",
    description:
      "Oma pelimoottori: renderöinti (OpenGL/Vulkan), resurssit, GLFW-input, 2D/3D, MiniAudio, Box2D.",
    tags: ["C++", "OpenGL", "Vulkan", "Engine", "CMake", "Box2D", "MiniAudio"],
    links: [{ label: "Repo", href: "https://github.com/Samul1" }], // TODO
  },
  {
    title: "C-tutorial",
    category: "software",
    subtitle: "C-tutoriaali",
    description:
      "Tässä on C-tutorial repo, jonka voit forkata itsellesi ja tehdä omaan tahtiin.",
    tags: ["C","tutorial"],
    links: [{ label: "Repo", href: "https://github.com/Samul1/C-projects" }], 
  },
  {
    title: "Programmer's Cheatsheet",
    category: "software",
    subtitle: "Devaajan lunttilappu",
    description:
      "Olen tälle sivustolle yrittänyt koota eri kielistä yleisimmin käytettyjä komentoja käteviksi korteiksi.",
    tags: ["dictionary","C/C++","SQL","Python","SFML","OpenGL","MiniAudio"],
    links: [{ label: "Web", href: "https://samul1.github.io/ProgrammersCheatSheet/" }], 
  },
  // ===== Games =====
  {
    title: "OpenGL Graphics Demo",
    category: "games",
    subtitle: "OpenGL Grafiikka Demo",
    description:
      "3D Grafiikka demo.",
    tags: ["C/C++","OpenGL","MiniAudio","3D","Realtime Graphincs"],
    links: [{ label: "Youtube", href: "https://www.youtube.com/watch?v=_QcemBLPKSI" }], 
  },
  {
    title: "9-to-5 Meme Duel",
    category: "games",
    subtitle: "",
    description:
      "Game Jam game | FGJ 2024 | My responsibilities were Music & SFX.",
    tags: ["Godot","Rythm Game"],
    links: [{ label: "itch.io", href: "https://futuristicx.itch.io/9-to-5-meme-duel" }], 
  },
];

// ============================================================
// ===== HELPERS =====
// ============================================================

export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ============================================================
// ===== NAV MODEL (NO HARDCODED PROJECT ITEMS) =====
// ============================================================

export const NAV = [
  { type: "link", label: "Portfolio", to: "/" },

  { type: "dropdown", label: "Embedded", to: "/embedded", category: "embedded" },
  { type: "dropdown", label: "Games", to: "/games", category: "games" },
  { type: "dropdown", label: "Software", to: "/software", category: "software" },

  { type: "link", label: "Work", to: "/work" },
  { type: "link", label: "Education", to: "/education" },
];