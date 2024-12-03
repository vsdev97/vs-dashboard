import React, { useState } from "react";
import LandingIntro from "./LandingIntro";
import { useNavigate, Link } from "react-router-dom";
import InputText from "../../components/Input/InputText";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
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
    localStorage.setItem("user", JSON.stringify(formData));
    toast.success("Registration Successful!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <img
        src="./login_bg.jpg"
        className="absolute inset-0 object-cover w-full h-full z-0"
        alt="Background"
      />
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-cyan-950	rounded-xl">
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
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
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <button type="submit" className="btn mt-2 w-full btn-primary">
                Register
              </button>
              <div className="text-center mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200"
                >
                  Login
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

export default Register;
