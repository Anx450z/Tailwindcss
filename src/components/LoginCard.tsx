import React from "react";
import { Navigate } from "react-router-dom";

export const LoginCard = (props: any) => {
  return (
    <div className="flex mx-auto justify-center item-center ">
      <div
        className="md:mt-[20vh] mt-[200px] min-w-[25rem] bg-white shadow-md border
        border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8">
        <form className="space-y-6" action="#">
          <h3 className="text-xl font-medium text-gray-900">
            Sign In with your details
          </h3>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border
               border-gray-300 text-gray-900 sm:text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block
                w-full p-2.5"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label
              className="text-sm font-medium text-gray-900 
            block mb-2">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border
               border-gray-300 text-gray-900 sm:text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3
                  focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div className="text-sm ml-3">
                <label className="font-medium text-gray-900">Remember me</label>
              </div>
            </div>
            {/* <Navigate to ='/register'/> */}
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline
               ml-auto">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700
             hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
             font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Login to your account
          </button>
      
          <div className="text-sm font-medium text-gray-500">
            Not registered?{" "}
            <a
              href="#"
              className="text-blue-700 
              hover:underline">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
