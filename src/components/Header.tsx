"use client";
import Link from "next/link";
import { FaOpencart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 pt-4 pb-2 shadow ">
      <Link href={"/"}>
        {" "}
        <div className="flex gap-3 items-center justify-center">
          <FaOpencart className="text-5xl font-bold" />
          <span>Cart App</span>
        </div>{" "}
      </Link>
      <ul className="flex justify-center items-center gap-10">
        <li className="hover:text-black hover:bg-white rounded-lg p-1">
          {" "}
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-black hover:bg-white rounded-lg p-1">
          <Link href={"/about"}>About</Link>
        </li>

        <li className="hover:text-black hover:bg-white rounded-lg p-1 ">
          <Link href={"/cart"} className="flex items-center justify-center gap-2">
            <FaCartShopping />
            Cart
          </Link>
        </li>

        {/* <li className="hover:text-black hover:bg-white rounded-lg p-1">
          <Link href={"/login"}>Login</Link>
        </li>
        <li className="hover:text-black hover:bg-white rounded-lg p-1">
          <Link href={"/signup"}>Signup</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;
