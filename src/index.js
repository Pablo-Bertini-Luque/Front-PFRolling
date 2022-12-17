import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LoginEmail from "./pages/LoginEmail";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Question from "./pages/Question";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./pages/Categories";
import ViewLoginUser from "./pages/ViewLoginUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/email" element={<LoginEmail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/question/category/:id" element={<Categories />} />
        <Route path="/login/user/:id" element={<ViewLoginUser />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
