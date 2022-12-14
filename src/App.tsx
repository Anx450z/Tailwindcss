import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import ChangePassword from "./pages/ChangePassword";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
import SendPasswordResetEmail from "./pages/SendPasswordResetEmail";
import { useSelector } from "react-redux";
import RequestEmailVerification from "./pages/RequestEmailVerification";
import UserEmailVerification from "./pages/UserEmailVerification";

function App() {

  const {token} = useSelector(state=>(state as any).auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={!token ? <LoginPage /> : <Navigate to="/profile" />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={token ? <Profile /> :<Navigate to="/login" />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="request-email-verification" element={<RequestEmailVerification />} />
            <Route path="user-email-verification" element={<UserEmailVerification />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route>
            <Route path="/send-reset-password-email" element={<SendPasswordResetEmail/>} />
            <Route path ="*" element={<h1> Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
