import React from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const AdminDeleteConfirm = ({ size, handleOpenDelete, id, refreshAdmin }) => {
  const deleteUser = async () => {
    const VITE_DB = import.meta.env.VITE_DB;
    try {
      await axios({
        url: `${VITE_DB}/Admins/${id}`,
        method: "delete",
      });
      refreshAdmin();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <Dialog
          open={size === "xs"}
          size={size || "md"}
          handler={handleOpenDelete}>
          <DialogHeader>Status</DialogHeader>
          <DialogBody>
            <p className="font-bold text-red-500">BECAREFULL!</p>
            once you click Delete you won't be able to retrive the data
          </DialogBody>
          <DialogFooter className="flex justify-around">
            <Button
              variant="gradient"
              color="red"
              onClick={() => {
                deleteUser();
                handleOpenDelete(null);
              }}>
              <span>Delete</span>
            </Button>
            <Button
              variant="gradient"
              color="indigo"
              onClick={() => handleOpenDelete(null)}>
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminDeleteConfirm;
