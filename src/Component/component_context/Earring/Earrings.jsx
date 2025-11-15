import React, { useState } from "react";
import EarringsDeatil from "./Earring.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Earrings() {
  const [selectedCategory, setSelectedCategory] = useState("Gold");
const navigate = useNavigate();

  const filteredRings = EarringsDeatil.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="bg-white min-h-screen py-12 text-black">
      
      {/* Category Tabs */}
      <div className="flex justify-center mb-12 flex-wrap gap-4">
        {["Gold", "Diamond", "Engagement"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-[#D97706]">
          {selectedCategory} Rings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRings.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl shadow-lg bg-white border border-[#F4D38B]"
            >
              {/* Only Image Hover Effect */}
              <Link to={`/ShowItem/${product.id}`}>
                <div className="relative w-full h-64 overflow-hidden">
                  {/* Normal Image */}
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-100 hover:opacity-0"
                  />

                  {/* Hover Image (corrected) */}
                  <img
                    src={product.hoverimageSrc}  
                    alt="hover"
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
                  />
                </div>
              </Link>

              {/* Badges */}
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {product.duration}
              </div>

              <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                ⭐ {product.rating}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 truncate">
                  {product.name}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-red-500 mr-2" />
                  <span>{product.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  Beautifully crafted ring from Tanishq jewellery collection.
                </p>

                <p
                  className={`text-lg font-semibold ${
                    product.isDiscount === "true" ? "text-red-600" : "text-amber-600"
                  }`}
                >
                  {product.price}
                </p>

              <button
  onClick={() => navigate(`/detail/${item.id}`)}
  className="flex items-center bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-yellow-600 hover:to-amber-700 shadow-lg hover:shadow-amber-300/50 transform hover:scale-105 active:scale-95 transition-all"
>
  Buy Now
</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
