import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function Card_layout() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);


  const navigate = useNavigate();


  const ringData = [
    {
      id: 1,
      name: "Elegant Gold Ring",
      description:
        "A beautifully crafted gold ring with sapphire detailing — perfect for every occasion.",
      price: "₹12,999",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9f0966b0/images/hi-res/50D4B3FAIAA09_1.jpg?sw=640&sh=640",
      hoverImage:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0532639e/images/hi-res/50D4B3FAIAA09_2.jpg?sw=640&sh=640",
      tag: "New Arrival",
    },
    {
      id: 2,
      name: "Classic Diamond Ring",
      description:
        "A timeless gold and diamond ring designed to sparkle with every moment.",
      price: "₹15,499",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweccfa199/images/hi-res/50D2PTFYXAA09_1.jpg?sw=640&sh=640",
      hoverImage:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwde8ad4ef/images/hi-res/50D2PTFYXAA09_2.jpg?sw=640&sh=640",
      tag: "Best Seller",
    },
    {
      id: 3,
      name: "Royal Heritage Ring",
      description:
        "Inspired by royal designs, this gold ring blends tradition and modern elegance.",
      price: "₹18,999",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2874701a/images/hi-res/51T815FDFAA00_1.jpg?sw=640&sh=640",
      hoverImage:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc7fbd404/images/hi-res/51T815FDFAA00_2.jpg?sw=640&sh=640",
      tag: "Limited Stock",
    },
    {
      id: 4,
      name: "Graceful Floral Ring",
      description:
        "Delicate floral motif crafted in gold with intricate detailing.",
      price: "₹11,499",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5dff711d/images/hi-res/51T815FKA1A00_1.jpg?sw=640&sh=640",
      hoverImage:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5dff711d/images/hi-res/51T815FKA1A00_2.jpg?sw=640&sh=640",
      tag: "Trending",
    },
    {
      id: 5,
      name: "Diamond Bloom Ring",
      description:
        "Elegant bloom-shaped ring with finely cut diamonds and gold finish.",
      price: "₹19,299",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe03c233f/images/hi-res/516061FFUAA00_1.jpg?sw=640&sh=640",
      hoverImage:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe03c233f/images/hi-res/516061FFUAA00_2.jpg?sw=640&sh=640",
      tag: "New Arrival",
    },
    {
      id: 6,
      name: "Gold Twirl Ring",
      description:
        "A gold ring designed with a modern twist for a chic everyday look.",
      price: "₹13,599",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw639af5d9/images/hi-res/51D3B1FXSAA00_1.jpg?sw=640&sh=640",
      hoverImage:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw639af5d9/images/hi-res/51D3B1FXSAA00_2.jpg?sw=640&sh=640",
      tag: "Hot Pick",
    },
  ];

  // Add to cart

  // Wishlist toggle
  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        alert(`${item.name} removed from wishlist 💔`);
        return prev.filter((i) => i.id !== item.id);
      } else {
        alert(`${item.name} added to wishlist ❤️`);
        return [...prev, item];
      }
    });
  };

  // Split into rows of 3
  const rows = [];
  for (let i = 0; i < ringData.length; i += 3) {
    rows.push(ringData.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-amber-50">
      {rows.map((group, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 max-w-7xl mx-auto"
        >
          {group.map((item) => {
            const isWishlisted = wishlist.some((i) => i.id === item.id);
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  {/* Wishlist + Cart Buttons */}
                  <div className="absolute top-3 right-3 z-10 flex space-x-2">
                    <button
                      onClick={() => toggleWishlist(item)}
                      className="p-2 rounded-full bg-white/70 backdrop-blur-md shadow-md hover:scale-110 transition-all"
                    >
                      <HeartIcon
                        className={`w-6 h-6 transition-colors ${
                          isWishlisted
                            ? "text-red-500 fill-red-500"
                            : "text-gray-500 hover:text-red-400"
                        }`}
                      />
                    </button>

                <button
  onClick={() => navigate(`/detail/${item.id}`)}
  className="flex items-center bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-yellow-600 hover:to-amber-700 shadow-lg hover:shadow-amber-300/50 transform hover:scale-105 active:scale-95 transition-all"
>
  Buy Now
</button>
                  </div>

                  {/* Images */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <img
                    src={item.hoverImage}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-extrabold text-amber-700">
                      {item.price}
                    </span>
                    <button
                      className="flex items-center bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-yellow-600 hover:to-amber-700 shadow-lg hover:shadow-amber-300/50 transform hover:scale-105 active:scale-95 transition-all"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* ✅ Wishlist Summary */}
      {wishlist.length > 0 && (
        <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-2xl font-bold text-amber-700 mb-4">
            ❤️ Your Wishlist ({wishlist.length})
          </h3>
          <div className="flex flex-wrap gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="w-40 bg-yellow-50 rounded-xl shadow p-3 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-28 object-cover rounded-lg mb-2"
                />
                <p className="text-sm font-semibold text-gray-700 line-clamp-1">
                  {item.name}
                </p>
                <p className="text-amber-600 text-sm font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
