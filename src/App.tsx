import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      {/* <div className="bg-indigo-600 w-full h-screen"></div> */}
    </div>
  );
}

export default App;
