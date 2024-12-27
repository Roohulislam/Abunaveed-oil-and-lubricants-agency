import React from "react";
import banner from "../../assets/banner/qare.jpg";

const Banner = () => {
  return (
    <section className="bg-gray-100 px-4 py-8 md:flex container  md:items-center md:justify-between">
      {/* Left Side - Image */}
      <div className="md:w-1/2  container mb-4 md:mb-0">
        <img
          src={banner}
          alt="Banner"
          className="w-[400px] h-[400px] rounded-full shadow-lg mx-9 "
        />
      </div>

      {/* Right Side - Title and Paragraph */}
      <div className=" container md:w-1/2 md:pl-8 mx-9">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Abunaveed and Brothers Oil,Lubricants and Autoparts Agency.
        </h1>
        <p className="text-gray-600 text-sm">
          Abunaveed and Brothers Oil, Lubricants, and Autoparts Agency is a
          trusted provider of premium-quality automotive products in Pakistan,
          proudly serving regions such as Gilgit and Chilas. We specialize in
          offering a comprehensive range of oil lubricants and auto parts
          designed to ensure the smooth performance and longevity of your
          vehicles.
        </p>
      </div>
    </section>
  );
};

export default Banner;
