import React from "react";
import exec1 from "../../assets/banner/exec.jpg";
import exec2 from "../../assets/banner/exec2.jpg";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
const BannerTwo = () => {
  return (
    <section className="bg-gray-200 px-4 py-8 md:flex md:items-center container my-3 md:justify-between">
      {/* Left Side - Images */}
      <div className="md:w-1/2 flex flex-col space-y-4">
        <div className="flex space-x-4">
          <img
            src={exec2}
            alt="First Image"
            className="w-1/2 rounded-lg shadow-lg"
          />
          <img
            src={exec1}
            alt="Second Image"
            className="w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 md:pl-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Chilas Heavy Machinery
        </h1>
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <div className="flex items-center">
          <FaRegCheckCircle className="bg-blue-500 mb-2 rounded-full" />
          <p className="text-gray-600 mb-2 px-3 font-bold">
            Top-quality machinery.
          </p>
        </div>
        <div className="flex items-center">
          <FaRegCheckCircle className="bg-blue-500 mb-2 rounded-full" />
          <p className="text-gray-600 mb-2 px-3 font-bold">Rent per hour.</p>
        </div>
        <div className="flex items-center">
          <FaRegCheckCircle className="bg-blue-500 mb-2 rounded-full" />
          <p className="text-gray-600 mb-2 px-3 font-bold">
            Easy monthly rental facility.
          </p>
        </div>
        <div className="flex items-center">
          <FaRegCheckCircle className="bg-blue-500 mb-2 rounded-full" />
          <p className="text-gray-600 mb-2 px-3 font-bold">
            Skilled operators available
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            BOOK NOW
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            CONTACT US
          </button>
        </div>

        {/* Additional Paragraphs */}
        <div className="flex items-center">
          <FaWhatsapp className=" mb-2 " />
          <p className="text-gray-600 mb-2 px-3 font-bold hover:cursor-pointer  hover:text-blue-700">
            03455000088
          </p>
        </div>
        <div className="flex items-center">
          <BiLogoGmail className=" mb-2 " />
          <p className="text-gray-600 mb-2 px-3 font-bold hover:cursor-pointer hover:text-blue-700">
            qare123@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
