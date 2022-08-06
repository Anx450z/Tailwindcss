import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    <Route path="login" element={<LoginPage />} /> 
    <Route path="register" element={<RegisterPage />} />
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
} 

export default App;
