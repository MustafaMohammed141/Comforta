import React from "react";
import Header from "../../UserPages/components/Header";
import Dashboard_body from "./Dashboard_body";
import { Routes, Route } from "react-router-dom";
import ProductsDB from "./ProductsDB";
import UsersDB from "./UsersDB";
import ManageUsers from "./ManageUsers";
import ManageProducts from "./ManageProducts";

const Dashboard = ({ users, isLoading, refreshUsers, products, setProducts }) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Dashboard_body />} />
        <Route path="/Products" element={<ProductsDB products = {products} setProducts={setProducts}/>} />
        <Route
          path="/Users"
          element={<UsersDB users={users} isLoading={isLoading} />}
        />
        <Route
          path="/ManageUsers/:id"
          element={
            <ManageUsers
              users={users}
              isLoading={isLoading}
              refreshUsers={refreshUsers}
            />
          }
        />
        <Route
          path="/ManageProducts/:id"
          element={
            <ManageProducts
              products={products}
              setProducts={setProducts}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
