import React from "react";

function Button(props: any) {
  let style = `text-white bg-blue-700 hover:bg-blue-800' 
              font-medium rounded-lg text-sm px-5 py-2.5 text-center md:ml-8
              hover:bg-blue-800 focus:ring-4 focus:ring-blue-300`;
  if (props.type === "expanded") {
    style = `w-full text-white bg-blue-700 hover:bg-blue-800' 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center
            hover:bg-blue-800 focus:ring-4 focus:ring-blue-300`;
  }

  return (
    <>
      <button className={style} onClick={props.onClick}>{props.text}</button>
    </>
  );
}

export default Button;
