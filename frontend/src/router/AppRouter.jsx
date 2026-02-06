import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import SoftwarePage from "../pages/SoftwarePage";
import EducationPage from "../pages/EducationPage";
import WorkPage from "../pages/WorkPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* ===== PROJECT LIST PAGES (CATEGORY FILTER) ===== */}
      <Route path="/embedded" element={<ProjectsPage category="embedded" />} />
      <Route path="/games" element={<ProjectsPage category="games" />} />
      <Route path="/software" element={<ProjectsPage category="software" />} />

      {/* ===== DETAILS ===== */}
      <Route path="/projects/:slug" element={<ProjectDetailsPage />} />

      {/* ===== CV PAGES ===== */}
      <Route path="/work" element={<WorkPage />} />
      <Route path="/education" element={<EducationPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}