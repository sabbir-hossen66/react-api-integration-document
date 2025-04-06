import { useState } from "react";
import axios from "axios";
import React from "react";
import axiosInstance from "./axiosInstance";
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axiosInstance.post(
        "https://hash-take-backend.vercel.app/api/v1/auth/connect",
        {
          walletAddress: "4",
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    //   try {
    //     const response = await axios.post(
    //       "https://user-authentication-production-106c.up.railway.app/api/auth/register",
    //       formData
    //     );
    //     setMessage("Registration successful! ✅");
    //   } catch (error) {
    //     setMessage(error.response?.data?.message || "Registration failed ❌");
    //   } finally {
    //     setLoading(false);
    //   }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      {message && <p className="mb-4 text-center">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
