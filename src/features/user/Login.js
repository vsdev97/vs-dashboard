import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingIntro from "./LandingIntro";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredData = JSON.parse(localStorage.getItem("user"));
    if (!registeredData) {
      toast.error("No registered data found!");
      return;
    }
    if (
      formData?.email === registeredData?.email &&
      formData?.password === registeredData?.password
    ) {
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/welcome");
      }, 1000);
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <img
        src="./login_bg.jpg"
        className="absolute inset-0 object-cover w-full h-full z-0"
        alt="Background"
      />
      <div className="card mx-auto w-full max-w-5xl shadow-xl relative z-10">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-cyan-950 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <button type="submit" className="btn mt-2 w-full btn-primary">
                Login
              </button>
              <div className="text-center mt-4">
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
