import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../UserPages/components/Loading";
import {
  Input,
  Select,
  Option,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
  phone: /^\d{11}$/,
  address: /^[\w\s,-]{3,}$/,
  age: /^(1[01][0-9]|[1-9][0-9]?)$/,
};

const ManageUsers = ({ refreshUsers }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState({});
  const [gen, setGen] = useState("");
  const [errors, setErrors] = useState({});
  const [size, setSize] = React.useState(null);
  const handleOpen = (value) => setSize(value);
  const getUsers = async () => {
    const VITE_DB = import.meta.env.VITE_DB;

    try {
      const req = await axios({
        url: `${VITE_DB}/users/${id}`,
        method: "get",
      });
      setUser(req.data);
      setUpdate(req.data);
      setGen(req.data.gender);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const validateField = (name, value) => {
    if (patterns[name] && !patterns[name].test(value)) {
      setErrors((e) => ({ ...e, [name]: `Invalid ${name}` }));
    } else {
      setErrors((e) => {
        const { [name]: removed, ...rest } = e;
        return rest;
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
    validateField(name, value);
  };

  const updateUsers = async () => {
    const VITE_DB = import.meta.env.VITE_DB;

    try {
      await axios({
        url: `${VITE_DB}/users/${id}`,
        method: "put",
        data: update,
      });
      handleOpen("xs");
      refreshUsers();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-indigo-500 bg-blue-gray-50 border-solid rounded-md w-full p-12 m-9 flex items-center flex-col gap-28">
        <div className="flex justify-center flex-wrap flex-row gap-16">
          <div className="w-72">
            <Input
              onChange={handleInputChange}
              name="name"
              type="text"
              color="black"
              label="Name"
              defaultValue={user.name}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="w-72">
            <Input
              onChange={handleInputChange}
              name="email"
              type="text"
              color="black"
              label="Email"
              defaultValue={user.email}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="w-72">
            <Input
              onChange={handleInputChange}
              name="password"
              type="text"
              color="black"
              label="Password"
              defaultValue={user.password}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="w-72">
            <Input
              onChange={handleInputChange}
              name="phone"
              type="text"
              color="black"
              label="Phone"
              defaultValue={user.phone}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div className="w-72">
            <Input
              onChange={handleInputChange}
              name="address"
              type="text"
              color="black"
              label="Address"
              defaultValue={user.address}
            />
            {errors.address && <p className="text-red-500">{errors.address}</p>}
          </div>
          <div className="w-72">
            <Select
              name="gender"
              label="Gender"
              value={gen}
              onChange={(value) => {
                setUpdate({ ...update, gender: value });
                setGen(value);
              }}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </div>
          <div className="w-72">
            <Input
              onChange={handleInputChange}
              name="age"
              type="text"
              color="black"
              label="Age"
              defaultValue={user.age}
            />
            {errors.age && <p className="text-red-500">{errors.age}</p>}
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={updateUsers}
            className="w-fit"
            variant="outlined"
            color="deep-orange"
            disabled={Object.keys(errors).length > 0} // Disable if there are errors
          >
            Update Data
          </Button>
          <Link to={"/admindb/Users"}>
            <Button className="w-fit" variant="outlined" color="indigo">
              Cancel
            </Button>
          </Link>
        </div>
      </div>
      {/*=========================================================================================*/}
      {/* PopUp */}
      <div>
        <Dialog open={size === "xs"} size={size || "md"} handler={handleOpen}>
          <DialogHeader>Status</DialogHeader>
          <DialogBody>Data Updated Successfully</DialogBody>
          <DialogFooter>
            <Link to={"/admindb/Users"}>
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

export default ManageUsers;
