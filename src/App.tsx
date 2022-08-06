import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Register } from "./pages/Register";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Homepage /> */}
      <Register />
      {/* <div className="bg-indigo-600 w-full h-screen"></div> */}
    </div>
  );
}

export default App;
