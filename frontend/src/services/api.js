import axios from "axios";

// ============================================================
// ===== AXIOS CLIENT =====
// - Dev: Vite proxy hoitaa /api -> backend
// ============================================================

export const api = axios.create({
  baseURL: "/api",
  timeout: 10_000,
  withCredentials: true, // valmius jos myöhemmin tulee session-cookie
});

// ============================================================
// ===== OPTIONAL INTERCEPTORS =====
// - Tänne voit lisätä myöhemmin:
//   - auth token header
//   - centralized error handling / logging
// ============================================================

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // ===== NORMALIZE ERROR =====
    const msg =
      err?.response?.data?.error ||
      err?.message ||
      "Unknown network error";

    // eslint-disable-next-line no-console
    console.warn("[api] error:", msg);

    return Promise.reject(err);
  }
);
