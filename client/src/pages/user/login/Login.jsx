import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../components/header/Header";
import {toast} from "react-toastify";

export const Login = () => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    let { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config={
        method:post,
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(loginValue)
      }
      const res = await fetch('http://httpbin.org/post')
      if(res.ok){
        toast.success("Login Successfully");

      }else{
        ToastContainer.error("Invalid Login",res.statusText)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center  mx-auto w-1/2 ">
        <div className="w-full max-w-md bg-gray-100 p-8 ">
          <h2 className="text-2xl font-semibold mb-2">Login</h2>
          <span className="text-gray-700 mb-6">
            Please enter your credentials
          </span>
          <form onSubmit={handleSubmit} className="my-3">
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
                value={loginValue.email}
                onChange={handleChange}
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
                value={loginValue.password}
                onChange={handleChange}

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
