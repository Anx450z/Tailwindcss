import React, { useEffect, useState } from "react";

export const Alert = (props:any) => {

  const [alert, setAlert] = useState({
    background : `bg-green-700 text-center py-4 lg:px-4 
                  absolute bottom-0 w-screen`,
        banner : `p-2 bg-green-600 items-center text-green-100,
                     leading-none lg:rounded-full flex lg:inline-flex`,
        pill : `flex rounded-full bg-green-500 uppercase 
                   px-2 py-1 text-xs font-bold mr-3`
  })
  
  
  useEffect(() =>{
    if(props.error.type === "error"){
      setAlert({
        background :`bg-red-700 text-center py-4 lg:px-4
                    absolute bottom-0 w-screen`,
        banner :`p-2 bg-red-600 items-center text-red-100
                     leading-none lg:rounded-full flex lg:inline-flex`,
        pill : `flex rounded-full bg-red-500 uppercase 
                   px-2 py-1 text-xs font-bold mr-3`
    })
    }
    if(props.error.type === "success"){
      setAlert({
        background :`bg-blue-700 text-center py-4 lg:px-4
                    absolute bottom-0 w-screen`,
        banner :`p-2 bg-blue-600 items-center text-blue-100
                     leading-none lg:rounded-full flex lg:inline-flex`,
        pill : `flex rounded-full bg-blue-500 uppercase 
                   px-2 py-1 text-xs font-bold mr-3`
    })
    }
  },[props])
  
  return (
    <div className={alert.background}>
      <div
        className={alert.banner }
        >
        <span className={alert.pill}>
          {props.error.type}
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          {props.error.msg}
        </span>
        <svg
          className="fill-current opacity-75 h-4 w-4"
          viewBox="0 0 20 20">
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </div>
  );
};
