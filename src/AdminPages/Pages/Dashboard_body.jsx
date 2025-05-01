import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Dashboard_body = () => {
  return (
    <div>
      <div className="w-full flex justify-center p-10">
        <h1 className="text-5xl font-extrabold">Welcome Admin</h1>
      </div>
      <div className="w-full flex justify-around p-10">
        <Link to="/admindb/Users">
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
