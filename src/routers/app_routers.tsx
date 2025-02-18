import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home.tsx";
import About from "../pages/about.tsx";
// import ContactPage from "../pages/contact"; // 例如還有聯絡我們頁面
// import ServicesPage from "../pages/services"; // 例如還有服務頁面
// import NotFoundPage from "../pages/not_found"; // 404 頁面

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="*" element={<NotFoundPage />} /> 404 頁面 */}
    </Routes>
  );
}