import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useUserStore } from "../store/userStore";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      setUser(response.data);
      navigate("/");
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          const errorMessage = error.response.data.error;
          if (errorMessage === "Invalid email or password") {
            toast.error("Incorrect email or password.");
          } else if (errorMessage === "Email does not exist") {
            toast.error(
              <div>
                User does not exist.{" "}
                <button
                  className="underline text-blue-500"
                  onClick={() => navigate("/signup")}>
                  Sign up here
                </button>
              </div>,
              { autoClose: false }
            );
          }
        } else {
          toast.error("Error logging in. Please try again.");
        }
      } else {
        console.error("Error logging in", error);
        toast.error("Error logging in. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
