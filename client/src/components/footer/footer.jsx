import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='font-poppins p-4 bg-gray-200 text-gray-700'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col md:flex-row items-center'>
          <a href='/' className='text-sm text-gray-500 hover:text-gray-700 mx-2'>
            Home
          </a>
          <a href='/about' className='text-sm text-gray-500 hover:text-gray-700 mx-2'>
            About Us
          </a>
          <a href='/terms' className='text-sm text-gray-500 hover:text-gray-700 mx-2'>
            Terms and Conditions
          </a>
          <a href='/privacy' className='text-sm text-gray-500 hover:text-gray-700 mx-2'>
            Privacy Policy
          </a>
        </div>
        <div className='flex items-center mt-4 md:mt-0'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FiFacebook className='h-6 w-6 text-gray-700 hover:text-blue-600' />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FiTwitter className='h-6 w-6 text-gray-700 hover:text-blue-400' />
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FiInstagram className='h-6 w-6 text-gray-700 hover:text-pink-500' />
          </a>
        </div>
      </div>
      <div className='text-center text-sm text-gray-500 mt-4'>
        &copy; 2024 SastoBazar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
