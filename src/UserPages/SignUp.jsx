
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp({ setLogged }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    address: "",
    gender: "",
    phone: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = import.meta.env.VITE_DB;

    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.age ||
      !user.address ||
      !user.gender ||
      !user.phone
    ) {
      return setError("Please fill all fields");
    }

    try {
      const existing = await axios.get(`${URL}/users`);
      const found = existing.data.find((u) => u.email === user.email);

      if (found) {
        return setError("Email already registered");
      }

      const res = await axios.post(`${URL}/users`, user);
      localStorage.setItem("id", res.data.id);
      setLogged(true);
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-teal-200">
      <div className="bg-white flex rounded-3xl shadow-lg max-w-5xl w-full p-5">
        {/* Left Side - Form */}
        <div className="w-1/2 px-10 py-6">
          <h2 className="text-pink-600 text-xl font-semibold">Logo Here</h2>
          <p className="text-sm mt-2">Join us today! It's free.</p>
          <h1 className="text-3xl font-bold text-gray-800 my-4">Sign Up</h1>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              className="p-3 rounded bg-blue-100"
              type="text"
              placeholder="Full Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
            <input
              className="p-3 rounded bg-blue-100"
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
            <input
              className="p-3 rounded bg-blue-100"
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <input
              className="p-3 rounded bg-blue-100"
              type="number"
              placeholder="Age"
              value={user.age}
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              required
            />
            <input
              className="p-3 rounded bg-blue-100"
              type="text"
              placeholder="Address"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              required
            />
            <input
              className="p-3 rounded bg-blue-100"
              type="tel"
              placeholder="Phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              required
            />
            <select
              className="p-3 rounded bg-blue-100"
              value={user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <button className="bg-pink-400 text-white py-2 rounded-full mt-2 hover:bg-pink-500">
              CREATE ACCOUNT →
            </button>
          </form>

          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 font-semibold">
              Login here
            </a>
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-1/2 flex items-center justify-center bg-teal-50 rounded-3xl">
          <img
            src="public\image\332b003c75249e55dce189cba573b1ad5398e39f.png"
            alt="Signup Illustration"
            className="max-h-96"
          />
        </div>
      </div>
    </div>
  );
}
