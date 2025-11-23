import React from "react";

export default function Row1() {
  const items = [
    {
      name: "Necklaces",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1b9d8c3d/images/hi-res/514025YPGAA00_2.jpg?sw=480&sh=480",
    },
    {
      name: "Earrings",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw43880cbe/images/hi-res/50D5V2SEQABA02_2.jpg?sw=480&sh=480",
    },
    {
      name: "Bracelets",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe2a70403/images/hi-res/51D2D1BISAA00_1.jpg?sw=480&sh=480",
    },
    {
      name: "Rings",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2874701a/images/hi-res/51T815FDFAA00_1.jpg?sw=480&sh=480",
    },
    {
      name: "Bangles",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7b46e734/images/hi-res/51D3T1EDFAA02_2.jpg?sw=480&sh=480",
    },
    {
      name: "Anklets",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3e3adb07/images/hi-res/51D2I1AMAAA00_2.jpg?sw=480&sh=480",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-amber-50 py-12">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-3">
          Discover More Collections
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Handcrafted elegance — explore jewelry made to shine every moment.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-center py-2 text-sm font-semibold">
              {item.name}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
