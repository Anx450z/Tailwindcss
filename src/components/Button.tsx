import React from "react";

function Button(props:any) {
  console.log(props.type)
  let style = `text-white bg-blue-700 hover:bg-blue-800' 
    font-medium rounded-lg text-sm px-5 py-2.5 text-center md:ml-8`
  if(props.type === "expanded"){
    style = `w-full text-white bg-blue-700 hover:bg-blue-800' 
    font-medium rounded-lg text-sm px-5 py-2.5 text-center`
  }


  return (
    <>
      <button
        className={style} >
        {props.text}
      </button>
    </>
  );
}

export default Button;
