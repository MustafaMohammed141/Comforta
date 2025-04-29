import React from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "./UserPages/Landing";
import Dashboard from "./AdminPages/Dashboard";
import Products from "./UserPages/Products";
import CartPage from "./UserPages/CartPage";
import Login from "./UserPages/Login";
import SignUp from "./UserPages/SignUp";
import Contact from "./UserPages/Contact";
import About from "./UserPages/About";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shopping" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/admindb/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
