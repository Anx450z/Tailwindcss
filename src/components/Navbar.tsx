import React from "react";

function Navbar() {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/" },
    { name: "Login", url: "/" },
    { name: "Register", url: "/" },
  ];
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 font-[poppins]">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center
           font-[poppins] text-gray-800">
            Logo
          </div>
          <ul className="md:flex md:items-center">
            {links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl">
                <a
                  href={link.url}
                  className="text-gray-800 font-bold text-sm hover:text-indigo-600 duration-500">
                  {link.name.toLocaleUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
