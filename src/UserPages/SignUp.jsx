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
    gender:  "",
    phone: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = import.meta.env.VITE_DB;

    if (!user.name || !user.email || !user.password || !user.age || !user.address || !user.gender || !user.phone) {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="tel"
          placeholder="phone"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <select
          value={user.gender}
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
