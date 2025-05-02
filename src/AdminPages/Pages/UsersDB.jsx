import React from "react";

import { Card, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Loading from "../../UserPages/components/Loading";

const UsersDB = ({ users, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }
  const TABLE_HEAD = ["ID", "Name", "Email", "Phone", ""];
  return (
    <div>
      <Link to={"/admindb"}>
        <Button color="indigo" variant="gradient" className="m-1 text-xl">
          Back
        </Button>
      </Link>
      <div className="flex justify-center items-center p-11">
        <h1 className="font-extrabold text-5xl">Users</h1>
      </div>
      <Card className="h-full w-auto m-10 ">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, email, phone }, index) => {
              const isLast = index === users.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {id}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {phone}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Link to={`../ManageUsers/${id}`}>
                      <Button variant="outlined" color="indigo">
                        Manage user
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default UsersDB;
