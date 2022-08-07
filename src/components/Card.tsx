import React from "react";

export const Card = (props: any) => {
  const style = `md:mt-[15vh] mt-[30vh] min-w-[27rem] bg-white shadow-md border
                  border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8`
  return (
    <div
      className={style}>
      {props.children}
    </div>
  );
};
