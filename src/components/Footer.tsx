"use client";
import Link from "next/link";
import { FaOpencart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 py-12 pt-20">
      <div
        className="max-w-6xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 
      text-center sm:text-left lg:text-left   "
      >
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 ">
            <span className="flex items-center gap-2 py-1">
              <FaOpencart className="text-5xl font-bold" />
              <span> Cart App is</span>{" "}
            </span>
            <span>
              e-commerce app which was build for e-shopping with nextjs.
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@cartapp.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Cart App. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
