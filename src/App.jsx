<<<<<<< HEAD
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
import Loading from "./UserPages/components/Loading";
export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const getProducts = async () => {
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
    getProducts();
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

        <Route
          path="/admindb/*"
          element={
            <Dashboard
              users={users}
              products = {products}
              setProducts = {setProducts}
              isLoading={isLoading}
              refreshUsers={getUsers}
            />
          }
        />
      </Routes>
      
=======
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

export default function FurnitureLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header/>
      <Hero/>
      <Featured/>
      <Footer/>
>>>>>>> 726897ae2a9104ba85bb68001f4659cb094afee9
    </div>
  );
}
