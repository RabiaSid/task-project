import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from "../../pages/home";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppHome />} />
      </Routes>
    </Router>
  );
}
