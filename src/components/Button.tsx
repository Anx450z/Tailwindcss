import React from "react";

function Button(props: any) {
  return (
    <>
      {/* <button className="bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded
     md:ml-8 hover:bg-indigo-400 duration-500">
      {props.children}
    </button> */}
      <button
        className=" text-white bg-blue-700 hover:bg-blue-800 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center md:ml-8">
        {props.children}
      </button>
    </>
  );
}

export default Button;
