import React, { useState } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import Loading from "../../UserPages/components/Loading";
import AddAdmin from "../Components/AddAdmin";
import AdminDeleteConfirm from "../Components/AdminDeleteConfirm";
import { Link } from "react-router-dom";
const AdminsTable = ({ admin, isLoading, refreshAdmin }) => {
  const TABLE_HEAD = ["ID", "Name", "Email", "phone", ""];
  const [open, setOpen] = useState(false);
  const [sizeEd, setSizeEd] = useState(null);
  const [sizeDel, setSizeDel] = useState(null);
  const handleOpenEdit = (value) => setSizeEd(value);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleOpenDelete = (value) => {
    setSizeDel(value);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-center items-center p-11">
        <h1 className="font-extrabold text-5xl">Admins</h1>
      </div>
      <div className="flex justify-end mb-[-20px]">
        <Button onClick={handleOpen} size="lg" color="green">
          Add
        </Button>
      </div>
      <AddAdmin
        open={open}
        refreshAdmin={refreshAdmin}
        handleOpen={handleOpen}
      />
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
            {admin.map(({ id, name, email, phone }, index) => {
              const isLast = index === admin.length - 1;
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
                    <div className="flex gap-1">
                      <Button
                        variant="gradient"
                        onClick={() => handleOpenDelete("xs")}
                        color="red">
                        Delete
                      </Button>
                      <AdminDeleteConfirm
                        size={sizeDel}
                        id={id}
                        refreshAdmin={refreshAdmin}
                        handleOpenDelete={handleOpenDelete}
                      />
                      <Link to={`../ManageAdmins/${id}`}>
                        <Button variant="gradient" color="green">
                          Manage user
                        </Button>
                      </Link>
                    </div>
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

export default AdminsTable;
