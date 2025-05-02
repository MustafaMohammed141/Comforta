import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [isLogged, setIsLogged] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const VITE_DB = import.meta.env.VITE_DB;

    try {
      const req = await axios({
        url: `${VITE_DB}/users`,
        method: "get",
      });
      setUsers(req.data);
    } catch (e) {
      console.error("Error fetching users:", e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shopping" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login setLogged={setIsLogged} />} />
        <Route path="/signup" element={<SignUp setLogged={setIsLogged} />} />

        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/admindb/*" element={<Dashboard />} />
        
      </Routes>
    </div>
  );
}
