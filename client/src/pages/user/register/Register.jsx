import React from "react";
import { NavLink } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <div className="flex justify-center items-center  mx-auto w-1/2 ">
        <div className="w-full max-w-md p-8 bg-gray-100">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md "
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md "
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                name="con_password"
                placeholder="Re-write Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md "
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-700 "
              >
                Register
              </button>
            </div>
            <p className="text-center text-gray-700">
              Already have an account?
              <NavLink
                to="/sastobazar-login"
                className="text-decoration-none text-orange-500  hover:text-orange-700"
              >
                {" "}
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
