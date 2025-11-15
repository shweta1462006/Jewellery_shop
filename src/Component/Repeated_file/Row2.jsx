import React from "react";

export default function Row2() {
  const products = [
    {
      id: 1,
      name: "Gold Ring",
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9f0966b0/images/hi-res/50D4B3FAIAA09_1.jpg?sw=320&sh=320",
    },
    {
      id: 2,
      name: "Diamond Ring",
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweccfa199/images/hi-res/50D2PTFYXAA09_1.jpg?sw=320&sh=320",
    },
    {
      id: 3,
      name: "Heritage Ring",
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2874701a/images/hi-res/51T815FDFAA00_1.jpg?sw=320&sh=320",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      {/* Outer container */}
      <div className="flex flex-col md:flex-row w-full md:w-4/5 h-auto md:h-[50vh] rounded-2xl shadow-lg overflow-hidden bg-white">

        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:w-2/5 w-full border-b md:border-b-0 md:border-r border-gray-300 p-6 text-center bg-white">
          <h2 className="text-3xl font-bold text-amber-700 mb-2">
            Elegant Collection
          </h2>
          <p className="text-gray-600 text-base w-4/5">
            Discover our handcrafted jewelry pieces made with precision and timeless beauty.
          </p>
        </div>

        {/* Right Section with background */}
        <div
          className="relative flex justify-around items-center md:w-3/5 w-full h-[60vh] bg-center bg-cover"
          style={{
            background:
              "url('https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd8ef7708/homepage/HeroBanner/mriganka-wo-desktop-new.jpg') no-repeat center/cover",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          {/* Product Boxes */}
          <div className="flex space-x-4 z-10">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white/90 rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-24 md:w-32 text-center"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-24 md:h-32 object-cover"
                />
                <div className="py-2">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
