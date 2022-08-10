import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/LocalStorageService";
import Button from "./common/Button";

function Navbar() {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  const navigate = useNavigate()

  const token = getToken();

  const handleLogin = () => {
    navigate("/login")
  }
  const handleProfile = () => {
    navigate("/profile")
  }

  return (
    <>
      <div className="w-full fixed top-0 left-0">
        <div
          className="md:flex items-center justify-between
            bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center
              text-gray-800">
            Logo
          </div>
          <ul
            className="md:flex md:items-center md:pb-0 pb-7 absolute
              md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0
              pl-9 transition-all duration-500 ease-in-out">
            {links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-2">
                <a
                  href={link.url}
                  className="text-gray-800 font-bold text-sm hover:text-indigo-600 
                    duration-500">
                  {link.name.toLocaleUpperCase()}
                </a>
              </li>
            ))}
            {token ? (
              <Button text="Profile" onClick={handleProfile} />
            ) : (
              <Button text="Login" onClick={handleLogin} />
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
