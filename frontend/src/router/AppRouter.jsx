import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import EducationPage from "../pages/EducationPage";
import WorkPage from "../pages/WorkPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* ===== DETAILS ===== */}
      <Route path="/projects/:slug" element={<ProjectDetailsPage />} />

      {/* ===== CV PAGES ===== */}
      <Route path="/work" element={<WorkPage />} />
      <Route path="/education" element={<EducationPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
