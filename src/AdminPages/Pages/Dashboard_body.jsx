
import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Loading from "../../UserPages/components/Loading";

const Dashboard_body = ({ admin }) => {
  const adminId = localStorage.getItem("id");
  const found = admin.find((a) => a.id === Number(adminId));
  if (!found) return <Loading />;
  return (
    <div>
      <div className="w-full flex justify-center p-10">
        <h1 className="text-5xl font-extrabold">Welcome {found.name}</h1>
      </div>
      <div className="w-full flex justify-around p-10">
        <Link to="/admindb/List/Users">
          <Button variant="gradient" size="lg">
            Users
          </Button>
        </Link>
        <Link to="/admindb/Products">
          <Button variant="gradient" size="lg">
            Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard_body;
