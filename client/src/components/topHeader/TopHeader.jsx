import React from "react";
import {FaViber} from "react-icons/fa6";
import {NavLink} from "react-router-dom";

const TopHeader = () => {
  return (
    <>
      <div className="font-poppins pt-1 border-b p-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaViber className="text-blue-500" />
          <span className="text-sm text-gray-700">Customer Support</span>
        </div>


        <div className="flex items-center space-x-2">
          <NavLink to="/sastobazar-login" className="text-sm text-gray-700 hover:text-blue-500">
            Login
          </NavLink>
          
          <span className="text-sm text-gray-700">/</span>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-500">
            Register
          </a>
        </div>
      </div>
    </>
  );
}

export default TopHeader;