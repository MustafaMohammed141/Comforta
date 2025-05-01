import React from "react";
import Header from "./Components/Header";
import Dashboard_body from "./Pages/Dashboard_body";
import { Routes, Route } from "react-router-dom";
import ProductsDB from "./Pages/ProductsDB";
import UsersDB from "./Pages/UsersDB";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Dashboard_body />} />
        <Route path="/Products" element={<ProductsDB />} />
        <Route path="/Users" element={<UsersDB />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
