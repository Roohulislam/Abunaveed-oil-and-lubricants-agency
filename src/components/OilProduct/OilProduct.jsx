import React from "react";
import Slider from "react-slick";

import OilData from "../../Data/oillubricant.json";

const OilProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 3 items at a time for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mx-auto">
      <div className="text-3xl font-bold pt-4 text-center hover:text-blue-700">
        Products - Oil and Lubricants
      </div>
      <Slider {...settings} className="m-8">
        {OilData.map((data) => (
          <div
            key={data.id}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform transition 
            duration-300 hover:scale-105 border hover:border-blue-500 mx-2"
          >
            {/* Image Section */}
            <div className="w-full h-[300px]">
              <img
                src={data.img}
                className="w-full h-full object-cover"
                alt={data.title}
              />
            </div>

            {/* Description Section */}
            <div className="p-4 flex flex-col justify-between h-[220px]">
              <h2 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-700 text-center">
                {data.title}
              </h2>
              <p className="text-gray-600 text-sm text-center mb-4">
                {data.description}
              </p>
              <div className="flex justify-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OilProduct;
