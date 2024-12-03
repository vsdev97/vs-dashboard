import React, { lazy, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { themeChange } from "theme-change";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));

themeChange(false);

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Layout />} />
          {/* <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/app/welcome" : "/login"} replace />}
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
