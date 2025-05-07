import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const UserDeleteConfirm = ({ size, deleteUser, handleOpen }) => {
  return (
    <div>
      <div>
        <Dialog open={size === "xs"} size={size || "md"} handler={handleOpen}>
          <DialogHeader>Status</DialogHeader>
          <DialogBody>
            <p className="font-bold text-red-500">BECAREFULL!</p>
            once you click Delete you won't be able to retrive the data
          </DialogBody>
          <DialogFooter className="flex justify-around">
            <Link to={"/admindb/List/Users"}>
              <Button
                variant="gradient"
                color="red"
                onClick={() => {
                  handleOpen(null);
                  deleteUser();
                }}>
                <span>Delete</span>
              </Button>
            </Link>
            <Link to={"/admindb/List/Users"}>
              <Button
                variant="gradient"
                color="indigo"
                onClick={() => handleOpen(null)}>
                <span>Close</span>
              </Button>
            </Link>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default UserDeleteConfirm;
