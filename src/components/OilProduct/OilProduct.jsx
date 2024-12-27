import React from "react";
import OilData from "../../Data/oillubricant.json";

const OilProduct = () => {
  return (
    <div>
      <div className="text-3xl font-bold pt-4 container">
        Products- Oil and Lubricants
      </div>
      <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {OilData.map((data) => (
          <div
            key={data.id}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <div>
              <img
                src={data.img}
                className="w-full h-48 object-cover"
                alt={data.title}
              />
            </div>

            {/* Description Section */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {data.title}
              </h2>
              <p className="text-gray-600 text-sm">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OilProduct;
