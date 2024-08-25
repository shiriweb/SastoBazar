import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="mb-4 bold">"We bring the best products at the best prices"</p>
      <div className="flex justify-center space-x-4">
        <a href="" className="text-gray-400 ">
          <FiFacebook className="h-6 w-6" />
        </a>
        <a href="" className="text-gray-400 ">
          <FiInstagram className="h-6 w-6" />
        </a>
        <a href="" className="text-gray-400 ">
          <FiTwitter className="h-6 w-6" />
        </a>
      </div>
      <div className="mt-4 text-gray-500">
        <p>&copy; 2024 SastoBazar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
