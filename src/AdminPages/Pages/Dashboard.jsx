import React from "react";
import Header from "../../UserPages/components/Header";
import Dashboard_body from "./Dashboard_body";
import { Routes, Route } from "react-router-dom";
import ProductsDB from "./ProductsDB";
import UsersDB from "./UsersDB";
import ManageUsers from "./ManageUsers";

const Dashboard = ({ users, isLoading, refreshUsers }) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Dashboard_body />} />
        <Route path="/Products" element={<ProductsDB />} />
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
      </Routes>
    </div>
  );
};

export default Dashboard;
