// ===== BACKEND ENTRYPOINT =====
// Minimal Express API, jotta saat heti "fullstack" rungon pystyyn.

import express from "express";
import cors from "cors";

const app = express();

// ===== MIDDLEWARE =====
app.use(cors({
  origin: "http://localhost:5173", // Vite dev server
  credentials: true
}));
app.use(express.json());

// ===== ROUTES =====
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Backend alive" });
});

// ===== START =====
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});