import React from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "./UserPages/Landing";
import Dashboard from "./AdminPages/Dashboard";
import Dashboard_body from "./AdminPages/Pages/Dashboard_body";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admindb/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
