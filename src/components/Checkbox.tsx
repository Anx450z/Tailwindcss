import React from "react";

export const Checkbox = (props: any) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={props.id}
          aria-describedby={props.id}
          type="checkbox"
          className="bg-gray-50 border border-gray-300 focus:ring-3
                  focus:ring-blue-300 h-4 w-4 rounded"
        />
      </div>
      <div className="text-sm ml-3">
        <label className="font-medium text-gray-900">{props.children}</label>
      </div>
    </div>
  );
};
