import React from "react";

export default function Collection_layout({ bannerImg, img1, img2, img3, p1, p2, p3 }) {
  return (
    <div className="w-full bg-gray-50">

      {/* Top Banner */}
      <div className="w-full h-[10vh] sm:h-[75vh] lg:h-[85vh]">
        <img
          src={bannerImg}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mt-8 mb-4 text-gray-800 tracking-wide">
        Sparkling Collection
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
          <img
            src={img1}
            className="w-full h-64 object-cover rounded-xl"
          />
          <h3 className="text-xl font-medium text-center mt-4">{p1}</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
          <img
            src={img2}
            className="w-full h-64 object-cover rounded-xl"
          />
          <h3 className="text-xl font-medium text-center mt-4">{p2}</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300">
          <img
            src={img3}
            className="w-full h-64 object-cover rounded-xl"
          />
          <h3 className="text-xl font-medium text-center mt-4">{p3}</h3>
        </div>

        

      </div>
          <div className="flex justify-center mt-6 pb-10">
        <button className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition">
          Shop The Collection
        </button>
      </div>
    
    </div>
    
  );
}
