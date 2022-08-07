import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
            <Route path="/user-reset-password" element={<ResetPassword />} />
            <Route path="/send-password-reset-email" element={<SendPasswordResetEmail/>} />
        </Routes>
      </BrowserRouter>
      {/* <div className='bg-indigo-600 min-h-[200px]'>
      </div> */}
    </>
  );
}

export default App;
