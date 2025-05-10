import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../UserPages/components/Loading";
import { Input, Select, Option, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import UserEditDone from "./../Components/UserEditDone";
import UserDeleteConfirm from "./../Components/UserDeleteConfirm";

const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
  phone: /^\d{11}$/,
  address: /^[\w\s,-]{3,}$/,
  age: /^(1[01][0-9]|[1-9][0-9]?)$/,
};

const ManageUsers = ({ refreshUsers }) => {
  const { _id } = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState({});
  const [gen, setGen] = useState("");
  const [errors, setErrors] = useState({});
  const [sizeEd, setSizeEd] = useState(null);
  const [sizeDel, setSizeDel] = useState(null);
  const handleOpenEdit = (value) => setSizeEd(value);
  const handleOpenDelete = (value) => setSizeDel(value);
  const getUser = async () => {
    const VITE_DB = import.meta.env.VITE_DB;

    try {
      const req = await axios({
        url: `${VITE_DB}/users/${_id}`,
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

  const updateUser = async () => {
    const VITE_DB = import.meta.env.VITE_DB;

    try {
      await axios({
        url: `${VITE_DB}/users/${_id}`,
        method: "put",
        data: update,
      });

      handleOpenEdit("xs");
      refreshUsers();
    } catch (e) {
      console.log(e);
    }
  };
  const deleteUser = async () => {
    const VITE_DB = import.meta.env.VITE_DB;

    try {
      await axios({
        url: `${VITE_DB}/users/${_id}`,
        method: "delete",
      });
      refreshUsers();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center">
      <UserEditDone size={sizeEd} handleOpen={handleOpenEdit} />
      <UserDeleteConfirm
        size={sizeDel}
        handleOpen={handleOpenDelete}
        deleteUser={deleteUser}
      />
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
            onClick={updateUser}
            className="w-fit"
            variant="gradient"
            color="green"
            disabled={Object.keys(errors).length > 0}>
            Update Data
          </Button>
          <Button
            onClick={() => handleOpenDelete("xs")}
            className="w-fit"
            variant="gradient"
            color="red"
            disabled={Object.keys(errors).length > 0}>
            Delete Data
          </Button>
          <Link to={"/admindb/List/Users"}>
            <Button className="w-fit" variant="gradient" color="indigo">
              Cancel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
