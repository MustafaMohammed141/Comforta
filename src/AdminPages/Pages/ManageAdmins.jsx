import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../UserPages/components/Loading";
import UserEditDone from "../Components/UserEditDone";
import { Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
  phone: /^\d{11}$/,
};

const ManageAdmins = ({ refreshAdmin }) => {
  const { id } = useParams();
  const [Admin, setAdmin] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState({});
  const [errors, setErrors] = useState({});
  const [sizeEd, setSizeEd] = useState(null);
  const handleOpenEdit = (value) => setSizeEd(value);
  const getAdmin = async () => {
    const VITE_DB = import.meta.env.VITE_DB;

    try {
      const req = await axios({
        url: `${VITE_DB}/Admins/${id}`,
        method: "get",
      });
      setAdmin(req.data);
      setUpdate(req.data);
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

  const updateAdmin = async () => {
    const VITE_DB = import.meta.env.VITE_DB;
    try {
      await axios({
        url: `${VITE_DB}/Admins/${id}`,
        method: "put",
        data: update,
      });
      handleOpenEdit("xs");

      refreshAdmin();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center">
      <UserEditDone size={sizeEd} handleOpen={handleOpenEdit} />

      <div className="border-2 border-indigo-500 bg-blue-gray-50 border-solid rounded-md w-full p-12 m-9 flex items-center flex-col gap-28">
        <div className="flex justify-center flex-wrap flex-row gap-16">
          <div className="w-72">
            <Input
              onChange={handleInputChange}
              name="name"
              type="text"
              color="black"
              label="Name"
              defaultValue={Admin.name}
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
              defaultValue={Admin.email}
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
              defaultValue={Admin.password}
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
              defaultValue={Admin.phone}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={updateAdmin}
            className="w-fit"
            variant="gradient"
            color="green"
            disabled={Object.keys(errors).length > 0}>
            Update Data
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

export default ManageAdmins;
