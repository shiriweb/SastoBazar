import React from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="flex justify-center mx-auto w-1/2">
        <span className="text-base">Please enter your credentials</span>
        <form className="my-3 ">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              className="mt-1 px-4 py-3 border border-gray-300 rounded-md w-full outline-none"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="py-3 px-4 w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-700  outline-none"
            >
              Login
            </button>
          </div>
          <span>Don't have an account?  <NavLink to="/sastobazar-register" className="text-decoration-none" > register</NavLink></span>
        </form>
      </div>
    </>
  );
};