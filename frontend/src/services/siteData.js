// ============================================================
// ===== SITE DATA =====
// - Päivitä nämä omiksi linkeiksi ja projekteiksi.
// - Tähän on tarkoitus koskea useimmin.
// ============================================================
import avatarUrl from "../assets/avatar.jpg";
import heroBgUrl from "../assets/hero-bg.jpg";

import ce1 from "../assets/projects/caffeine/1.jpg";
import ce2 from "../assets/projects/caffeine/2.jpg";
import ce3 from "../assets/projects/caffeine/3.jpg";
import ce4 from "../assets/projects/caffeine/4.jpg";

import tempImg from "../assets/tempImg.jpg";

import md1 from "../assets/projects/memeduel/1.jpg";

import ogd1 from "../assets/projects/opengldemo/1.jpg";
import ogd2 from "../assets/projects/opengldemo/2.jpg";
import ogd3 from "../assets/projects/opengldemo/3.jpg";
import ogd4 from "../assets/projects/opengldemo/4.jpg";

import pcs1 from "../assets/projects/cheatsheet/1.jpg";

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
  // ===== Embedded =====
  {
    title: "SmartHome Systems",
  category: "embedded",
  subtitle: "Raspberry Pi sensor hub + web dashboard",
  description:
    "An embedded monitoring system built on Raspberry Pi 5: hourly climate logging (DHT22) to a remote MariaDB and real-time flood detection with a water level sensor.",
  body: [
    "SmartHome Systems is an embedded monitoring project where I built a Raspberry Pi 5 based sensor hub and a lightweight web dashboard for visualizing the collected data.",
    "A Python service reads temperature and humidity from a DHT22 sensor once per hour and stores the measurements in a MariaDB table hosted on CSC Pukki.",
    "In parallel, the same service continuously monitors a water level sensor. When the configured threshold is exceeded, it immediately records a flood event into a dedicated database table.",
    "On top of the database, I implemented a Node.js backend that exposes the latest readings and flood status to a simple HTML + CSS frontend.",
    "The UI is presented as three cards: Temperature, Humidity, and a Flood Radar. Flood Radar shows either “OK” (no flood events) or a red “Flood!” state when a threshold event has been detected.",
    "The Flood Radar card also includes a Reset button that clears the flood-event table, allowing the user to acknowledge the event and return the dashboard back to the normal state.",
    "Components: Raspberry Pi 5, DHT22, Water level sensor, MCP3008 (ADC), MariaDB, Node.js, HTML/CSS.",
  ],
  images: [{ src: tempImg, alt: "SmartHome dashboard / sensor setup" }],
  tags: ["Python", "Raspberry Pi", "Embedded", "Sensors", "MariaDB", "Node.js", "HTML", "CSS", "Fullstack"],
  links: [{ label: "Repo", href: "https://github.com/Samul1" }], // TODO
  },
  // ===== Software =====
  {
    title: "CaffeineEngine",
    category: "software",
    subtitle: "MVC C++-pelimoottori (2D/3D)",
    description:
      "Oma pelimoottori: renderöinti (OpenGL/Vulkan), resurssit, GLFW-input, 2D/3D, MiniAudio, Box2D.",
    body: [
      "CaffeineEngine is a modular C++ game/graphics engine project.",
      "It focuses on clean architecture (systems, resources, rendering abstraction), fast iteration, and solid tooling.",
      "Current highlights include OpenGL/Vulkan rendering paths, asset loading, audio, and Box2D integration.",
    ],
    images: [
      { src: ce1, alt: "CaffeineEngine screenshot 1" },
      { src: ce2, alt: "CaffeineEngine screenshot 2" },
      { src: ce3, alt: "CaffeineEngine screenshot 3" },
      { src: ce4, alt: "CaffeineEngine screenshot 4" },
    ],
    tags: ["C++", "OpenGL", "Vulkan", "Engine", "CMake", "Box2D", "MiniAudio"],
    links: [{ label: "Repo", href: "https://github.com/Samul1" }], // TODO
  },
  {
    title: "C-tutorial",
    category: "software",
    subtitle: "Learn C through missions (work in progress)",
    description:
      "A hands-on C tutorial series built around small coding missions and boss challenges—designed to teach real programming by writing and running code, not just reading theory.",
    body: [
      "C-projects is my step-by-step C tutorial repository where learning happens through practical missions. Each module introduces a concept, shows small examples, and then immediately challenges you to implement it yourself.",
      "The structure is beginner-friendly: short explanations, clear code snippets, and lots of quick ‘remember this’ notes. After completing the mission set, you face a boss challenge that combines multiple topics into one small program.",
      "The repo also includes a simple Windows setup guide (MSYS2 + GCC) so new learners can compile and run C programs quickly from the terminal.",
      "Topics start from the basics—program structure, output, formatting, variables, data types, math, and comments—and expand module by module toward real C problem-solving habits.",
    ],
    images: [{ src: tempImg, alt: "C-tutorial missions structure" }],
    tags: ["C", "tutorial", "missions", "beginner", "gcc", "MSYS2"],
    links: [{ label: "Repo", href: "https://github.com/Samul1/C-projects" }],
  },
  {
    title: "Programmer's Cheatsheet",
    category: "software",
    subtitle: "Quick-reference web app for common dev commands & patterns",
    description:
      "A clean, card-based cheatsheet site for quickly looking up commonly used syntax and workflows across multiple languages and libraries.",
    body: [
      "Programmer’s Cheatsheet is a small web project built to make everyday lookups fast and frictionless. The site presents common commands, syntax patterns, and practical snippets in compact, readable cards.",
      "The content covers a mix of languages and libraries I use frequently: Python, SQL, C/C++, SFML, OpenGL, and MiniAudio. The main focus is clarity—each section is designed to be quickly scannable while still being useful in real projects.",
      "From a technical perspective, this project showcases clean static frontend work with HTML and CSS, plus a minimal JavaScript layer for simple navigation and UI behavior. The result is a lightweight site that loads fast and stays easy to maintain.",
    ],
    images: [
      { src: pcs1, alt: "Programmer’s Cheatsheet home page with card-based categories" },
    ],
    tags: ["HTML", "CSS", "JavaScript", "C/C++", "Python", "SQL", "SFML", "OpenGL", "MiniAudio", "Reference"],
    links: [{ label: "Web", href: "https://samul1.github.io/ProgrammersCheatSheet/" }],
  },
  // ===== Games =====
  {
    title: "OpenGL Graphics Demo",
  category: "games",
  subtitle: "Real-time 3D scene demo (OpenGL + C++)",
  description:
    "A horror-themed real-time 3D demo featuring model/texture loading, audio playback, and basic collision to keep the player inside the scene.",
  body: [
    "This project is a real-time 3D graphics demo built with OpenGL and C++. The goal was to create a small horror-themed environment that feels atmospheric, responsive, and technically solid.",
    "I implemented a first-person controller (WASD) with an FPS-style camera constrained to the ground plane, so movement stays believable inside the scene.",
    "For content, I used Assimp to import meshes and stb_image for texture loading. The project is built with CMake to keep the setup clean and portable.",
    "Audio is handled with MiniAudio, allowing background music and sound effects to play simultaneously with low overhead.",
    "To prevent the player from walking through geometry or leaving the graveyard, I added a simple AABB-based collision system for environment boundaries (e.g., buildings and fences).",
  ],
  images: [
    { src: ogd1, alt: "Graveyard scene with spotlight and foggy horror mood" },
    { src: ogd2, alt: "Gate and fence view showcasing scene blocking and lighting" },
    { src: ogd3, alt: "Close-up lighting / emissive glow look from inside the pumpkin" },
    { src: ogd4, alt: "Pumpkin prop in the scene as a focal object" },
  ],
  tags: ["C++", "OpenGL", "Assimp", "stb_image", "CMake", "MiniAudio", "3D", "Realtime Graphics", "AABB"],
  links: [{ label: "YouTube", href: "https://www.youtube.com/watch?v=_QcemBLPKSI" }],
  },
  {
  title: "9-to-5 Meme Duel",
  category: "games",
  subtitle: "Game Jam rhythm game",
  description:
    "A fast-paced rhythm game created during FGJ 2024, blending meme culture with timing-based gameplay.",
  body: [
    "9-to-5 Meme Duel is a rhythm-based game developed during Finnish Game Jam 2024 as a small team project.",
    "The core gameplay focuses on timing, rhythm, and reactive feedback, combining humor and meme-driven presentation with arcade-style mechanics.",
    "My main responsibility in the project was audio production: designing and implementing sound effects (SFX) and background music (BGM).",
    "I composed the background tracks and created sound effects that support the rhythm gameplay, reinforce player actions, and enhance overall game feel.",
    "All audio assets were designed to sync tightly with gameplay timing, ensuring clear feedback and an engaging audiovisual experience.",
  ],
  images: [
    { src: md1, alt: "9-to-5 Meme Duel gameplay screenshot" },
  ],
  tags: ["Godot", "Rhythm Game", "Game Jam", "Audio Design", "SFX", "BGM", "FL Studio"],
  links: [
    { label: "itch.io", href: "https://futuristicx.itch.io/9-to-5-meme-duel" },
  ],
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

// ===== NAV MODEL (NO CATEGORY PAGES) =====
export const NAV = [
  { type: "link", label: "Portfolio", to: "/" },

  // NOTE: dropdowns are NOT links anymore
  { type: "dropdown", label: "Embedded", category: "embedded" },
  { type: "dropdown", label: "Games", category: "games" },
  { type: "dropdown", label: "Software", category: "software" },

  { type: "link", label: "Work", to: "/work" },
  { type: "link", label: "Education", to: "/education" },
];