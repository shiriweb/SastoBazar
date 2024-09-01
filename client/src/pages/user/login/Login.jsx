import React from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center  mx-auto w-1/2 ">
        <div className="w-full max-w-md bg-gray-100 p-8 ">
          <span className="text-gray-700 mb-6">
            Please enter your credentials
          </span>
          <form className="my-3">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                placeholder="Enter your Email"
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-700 focus:outline-none "
              >
                Login
              </button>
            </div>
            <p className="text-center text-gray-700">
              Don't have an account?
              <NavLink
                to="/sastobazar-register"
                className="text-decoration-none text-orange-500 hover:text-orange-700"
              >
                {" "}
                Register
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
