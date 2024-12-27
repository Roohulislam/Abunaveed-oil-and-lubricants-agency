import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/abu_logo.png";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-400 text-white px-4 py-3 rounded m-3">
      <div className=" m-3 mx-auto flex justify-between items-center">
        {/* Hamburger menu */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <MdMenu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="text-2xl font-semibold flex justify-center ">
          <div className="flex justify-center items-center">
            <a href="#">
              <img src={logo} className="w-9 rounded mr-5" alt="" />
            </a>
            Abunaveed oil's
          </div>
        </div>

        {/* Search bar */}
        <div className="hidden lg:flex items-center w-1/3 ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-l-md text-gray-800 focus:outline-none"
          />
          <button className="bg-blue-400 px-3 py-2 rounded-r-md text-white hover:bg-blue-600">
            <CiSearch className="w-5 h-6" />
          </button>
        </div>

        {/* Cart */}
        <button className="text-white relative">
          <FaShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md text-gray-800 focus:outline-none"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
