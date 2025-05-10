import Header from "../../UserPages/components/Header";
import Dashboard_body from "./Dashboard_body";
import { Routes, Route } from "react-router-dom";
import ProductsDB from "./ProductsDB";
import UsersDB from "./UsersDB";
import ManageUsers from "./ManageUsers";
import ManageAdmins from "./ManageAdmins";

const Dashboard = ({ users, isLoading, refreshUsers, admin, refreshAdmin }) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route
          index
          element={<Dashboard_body admin={admin} isLoading={isLoading} />}
        />
        <Route path="/Products" element={<ProductsDB />} />
        <Route
          path="/List/*"
          element={
            <UsersDB
              users={users}
              isLoading={isLoading}
              refreshAdmin={refreshAdmin}
              admin={admin}
            />
          }
        />
        <Route
          path="/ManageUsers/:_id"
          element={
            <ManageUsers
              users={users}
              admin={admin}
              isLoading={isLoading}
              refreshUsers={refreshUsers}
            />
          }
        />
        <Route
          path="/ManageAdmins/:_id"
          element={
            <ManageAdmins
              users={users}
              admin={admin}
              isLoading={isLoading}
              refreshAdmin={refreshAdmin}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
