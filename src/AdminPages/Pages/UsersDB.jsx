
import { Card, Typography, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UsersTable from "./UsersTable";
import AdminsTable from "./AdminsTable";
import Loading from "../../UserPages/components/Loading";
const UsersDB = ({ users, isLoading, admin, refreshAdmin }) => {
  const [active, setActive] = useState(1);
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "indigo",
    onClick: () => {
      setActive(index);
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex flex-row-reverse justify-between p-3">
        <div className="w-1/3"></div>
        <div className="flex items-center w-1/3 justify-center mt-7 gap-2">
          <Button {...getItemProps(1)} size="lg">
            Users
          </Button>
          <Button {...getItemProps(2)} size="lg">
            Admins
          </Button>
        </div>
        <Link to={"/admindb"} className="w-1/3">
          <Button color="indigo" variant="gradient" className="m-1 text-xl">
            Back
          </Button>
        </Link>
      </div>
      <div className="p-4">
        {active === 1 ? (
          <UsersTable users={users} isLoading={isLoading} />
        ) : (
          <AdminsTable
            admin={admin}
            refreshAdmin={refreshAdmin}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default UsersDB;
