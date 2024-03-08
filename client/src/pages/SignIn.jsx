import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../utils/Notifications";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        notifyError(data.message);
        setLoading(false);
        return;
      }

      setLoading(false);
      navigate("/profile");
    } catch (error) {
      notifyError(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl text-center text-cyan-500 uppercase font-semibold my-9 font-serif">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="email flex flex-col gap-2 uppercase">
          <label htmlFor="email" className="text-rose-600">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-3 outline-none rounded-lg"
            onChange={handleChange}
          />
        </div>
        <div className="password flex flex-col gap-2 uppercase">
          <label htmlFor="password" className="text-rose-600">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-3 outline-none rounded-lg "
            onChange={handleChange}
          />
        </div>
        <button
          disabled={loading}
          className="bg-rose-600 text-white p-3 rounded-lg mt-5 hover:opacity-90 disabled:opacity-80"
        >
          {loading ? "Signing In" : "Sign In"}
        </button>
        <button className="bg-blue-600 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-65">
          Sign In with Google
        </button>
      </form>
      <div className="text-white mt-3 flex gap-2 justify-center">
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className="hover:text-orange-500 uppercase text-blue-600">
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
}