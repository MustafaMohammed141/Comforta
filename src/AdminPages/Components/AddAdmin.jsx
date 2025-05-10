import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
const AddAdmin = ({ open, handleOpen, refreshAdmin }) => {
  const [user, setUser] = useState({});
  const [wrongPass, setWrongPass] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const post = async () => {
    const VITE_DB = import.meta.env.VITE_DB;
    try {
      const req = await axios({
        url: `${VITE_DB}/Admins`,
        method: "post",
        data: {
          _id: "",
          name: user.name,
          email: user.email,
          password: user.password,
          phone: user.phone,
        },
      });
      handleOpen();
      refreshAdmin();
    } catch (e) {
      console.log(e);
    }
  };
  const isValid = () => {
    if (user.password === user.confirm) {
      setWrongPass("");
      post();
    } else {
      setWrongPass("Please recheck your password");
    }
  };

  return (
    <>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none">
        <Card className="mx-auto w-full h-[60vh]">
          <Typography className=" flex items-center justify-center pt-5 font-bold text-xl">
            Enter User's Data
          </Typography>
          <CardBody className="flex flex-wrap  justify-center gap-10 p-5 mt-5">
            <div className="w-72">
              <Input
                label="User Name"
                name="name"
                value={user.name}
                size="lg"
                onChange={handleChange}
              />
            </div>
            <div className="w-72">
              <Input
                label="Email"
                name="email"
                value={user.email}
                size="lg"
                onChange={handleChange}
              />
            </div>
            <div className="w-72">
              <Input
                label="Password"
                type="password"
                name="password"
                value={user.password}
                size="lg"
                onChange={handleChange}
              />
            </div>
            <div className="w-72">
              <Input
                label="Confirm your password"
                type="password"
                name="confirm"
                value={user.confirm}
                size="lg"
                onChange={handleChange}
              />
            </div>
            <div className="w-72">
              <Input
                label="Phone Number"
                name="phone"
                value={user.phone}
                size="lg"
                onChange={handleChange}
              />
            </div>
          </CardBody>
          {wrongPass && <p className="text-red-500 text-center">{wrongPass}</p>}
          <CardFooter className="pt-0 flex justify-center mt-10">
            <Button
              variant="gradient"
              color="green"
              onClick={isValid}
              className="w-64">
              Add User
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default AddAdmin;
