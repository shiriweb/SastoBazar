import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-200 py-10 mt-7">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          <div className="mb-6 lg:mb-0">
            <a href="#">
              <img
                src="../../src/assets/images/logo.png"
                alt="Logo"
                className="h-12 mb-4"
              />
            </a>
            <p className="text-black">
              We provide you the best items in best price.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-3 text-black">Product Categories</h5>
            <ul>
              <Link to="/home" className="hover:text-yellow-400">
                <li>Home</li>
              </Link>

              <Link to="/aboutus" className="hover:text-yellow-400">
                <li>Services</li>
              </Link>
              <Link to="/about-us" className="hover:text-yellow-400">
                <li>About Us</li>
              </Link>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-3 text-black ">Customer Service</h5>
            <ul>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-3 text-black">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400">
          <p>&copy; 2024 Sasto Bazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
