import React from "react";

export default function Row1({
  name1 = "Necklaces",
  img1 = "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1b9d8c3d/images/hi-res/514025YPGAA00_2.jpg?sw=480&sh=480",
  name2 = "Earrings",
  img2 = "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw43880cbe/images/hi-res/50D5V2SEQABA02_2.jpg?sw=480&sh=480",
  name3 = "Bracelets",
  img3 = "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe2a70403/images/hi-res/51D2D1BISAA00_1.jpg?sw=480&sh=480",
}) {
  const items = [
    { name: name1, image: img1 },
    { name: name2, image: img2 },
    { name: name3, image: img3 },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-amber-50 py-12">
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-3">
          Discover More Collections
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Handcrafted elegance — explore jewelry made to shine every moment.
        </p>
      </div>

      {/* Image Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-center py-3 font-semibold text-lg tracking-wide">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
