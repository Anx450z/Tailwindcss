import React from "react";

export const PasswordField = (props: any) => {
  return (
    <input
      type="password"
      name={props.name}
      id={props.id}
      placeholder="••••••••"
      className="bg-gray-50 border
        border-gray-300 text-gray-900 sm:text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />
  );
};
