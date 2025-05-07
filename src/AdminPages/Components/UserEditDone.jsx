import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const UserEditDone = ({ size, handleOpen }) => {
  return (
    <div>
      <div>
        <Dialog open={size === "xs"} size={size || "md"} handler={handleOpen}>
          <DialogHeader>Status</DialogHeader>
          <DialogBody>Data Updated Successfully</DialogBody>
          <DialogFooter>
            <Link to={"/admindb/List/Users"}>
              <Button
                variant="gradient"
                color="red"
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

export default UserEditDone;
