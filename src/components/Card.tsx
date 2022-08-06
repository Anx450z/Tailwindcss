import React from "react";

export const Card = (props: any) => {
  return (
    <div
      className="md:mt-[20vh] mt-[200px] min-w-[25rem] bg-white shadow-md border
 border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 ">
      {props.children}
    </div>
  );
};
