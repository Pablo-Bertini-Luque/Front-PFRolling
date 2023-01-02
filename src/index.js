import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import LoginEmail from "./pages/LoginEmail";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import { CompleteQuestions } from "./pages/CompleteQuestions";
import { QuestionsByCategory } from "./pages/QuestionsByCategory";
import ViewLoginUser from "./pages/ViewLoginUser";
import { NotFound } from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import MyProfile from "./pages/MyProfile";
import SuperAdmin from "./pages/SuperAdmin";
import MyQuestions from "./pages/MyQuestions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/email" element={<LoginEmail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/question/:id" element={<CompleteQuestions />} />
        <Route
          path="/question/category/:id"
          element={<QuestionsByCategory />}
        />
        <Route path="/login/user/:id" element={<ViewLoginUser />}>
          <Route path="MyProfile" element={<MyProfile />} />
          <Route path="MyQuestions" element={<MyQuestions />} />
        </Route>
        <Route path="/login/user/super-admin/:id" element={<SuperAdmin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
