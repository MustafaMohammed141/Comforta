import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./UserPages/Landing";
import Dashboard from "./AdminPages/Pages/Dashboard";
import Products from "./UserPages/Products";
import CartPage from "./UserPages/CartPage";
import Login from "./UserPages/Login";
import SignUp from "./UserPages/SignUp";
import Contact from "./UserPages/Contact";
import About from "./UserPages/About";
import axios from "axios";
export default function App() {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(true);
  const [products, setProducts] = useState([]);

  const getUsers = async () => {
    const VITE_DB = import.meta.env.VITE_DB;

    try {
      const req = await axios({
        url: `${VITE_DB}/users`,
        method: "get",
      });
      setUsers(req.data);

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const getAdmin = async () => {
    const VITE_DB = import.meta.env.VITE_DB;
    try {
      const req = await axios({
        url: `${VITE_DB}/Admins`,
        method: "get",
      });
      setAdmin(req.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const getProds = async () => {
    const VITE_DB = import.meta.env.VITE_DB;

    try {
      const req = await axios({
        url: `${VITE_DB}/products`,
        method: "get",
      });
      setProducts(req.data);

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUsers();
    getProds();
    getAdmin();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 over">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shopping" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login setLogged={setIsLogged} />} />
        <Route path="/signup" element={<SignUp setLogged={setIsLogged} />} />

        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />

        <Route
          path="/admindb/*"
          element={
            <Dashboard
              products={products}
              setProducts={setProducts}
              users={users}
              admin={admin}
              isLoading={isLoading}
              refreshUsers={getUsers}
              refreshAdmin={getAdmin}
            />
          }
        />
      </Routes>
    </div>
  );
}
