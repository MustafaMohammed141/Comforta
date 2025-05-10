
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Login = ({ setLogged }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_DB;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const adminRes = await axios.get(`${URL}/admins`);
      const adminMatch = adminRes.data.find(
        (a) => a.email === user.email && a.password === user.password
      );

      if (adminMatch) {
        localStorage.setItem("id", adminMatch.id);
        localStorage.setItem("role", "h@m@y@a@m"); //we signed the role to be something hard to figure to make hard acess dash board
        setLogged(true);
        navigate("/admindb");
        return;
      }

      const userRes = await axios.get(`${URL}/users`);
      const userMatch = userRes.data.find(
        (u) => u.email === user.email && u.password === user.password
      );

      if (userMatch) {
        localStorage.setItem("id", userMatch.id);
        localStorage.setItem("role", "1");
        setLogged(true);
        navigate("/");
      } else {
        setError("You don't have account");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("You don't have account ");
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-200 to-purple-200">
      <div className="bg-white flex rounded-3xl shadow-lg max-w-4xl p-5">
        <div className="w-1/2 px-8 py-6">
          <h2 className="text-pink-600 text-xl font-semibold">Logo Here</h2>
          <p className="text-sm mt-2">Welcome back !!!</p>
          <h1 className="text-3xl font-bold text-gray-800 my-4">Log In</h1>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              className="p-3 rounded bg-blue-100"
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
            <div className="relative">
              <input
                className="p-3 rounded bg-blue-100 w-full"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
              <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                Forgot Password?
              </span>
            </div>
            <button className="bg-pink-400 text-white py-2 rounded-full mt-2 hover:bg-pink-500">
              LOGIN →
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400 text-sm">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <p className="text-sm mt-4 text-center">
            Don’t have an account yet?{" "}
            <a href="/signup" className="text-blue-500 font-semibold">
              Sign up for free
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center bg-teal-50 rounded-3xl">
          <img
            src="public\image\332b003c75249e55dce189cba573b1ad5398e39f.png"
            alt="Girl with Laptop"
            className="max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
