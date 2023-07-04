import React from "react";
import logo from "../shirt.svg";

const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 z-50 rounded-lg shadow bg-gray-900 m-4">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              CustomTShirt
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 3{" "}
          <a href="/" className="hover:underline">
            CustomTShirt™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
