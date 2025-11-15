import React, { useState } from "react";
import NecklacesDetail from "./Necklace.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Row1 from "../../Repeated_file/Row1";   // <-- IMPORT HERE

export default function Necklaces() {
  const [selectedCategory, setSelectedCategory] = useState("Gold");

  const filteredRings = NecklacesDetail.filter(
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

          {/* --- MAP START --- */}
          {filteredRings.map((product, index) => (
            <React.Fragment key={product.id}>
              
              {/* --- CARD --- */}
              <div className="relative rounded-2xl shadow-lg bg-white border border-[#F4D38B]">

                {/* Only Image Hover Effect */}
                <Link to={`/ShowItem/${product.id}`}>
                  <div className="relative w-full h-72 overflow-hidden">
                    {/* Normal Image */}
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-100 hover:opacity-0"
                    />

                    {/* Hover Image */}
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
                <div className="p-4">
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
                    disabled={product.isAvailable !== "true"}
                    className={`mt-6 w-full rounded-lg py-3 text-sm font-bold transition-all ${
                      product.isAvailable === "true"
                        ? "bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {product.isAvailable === "true" ? "Buy Now" : "Out of Stock"}
                  </button>
                </div>
              </div>
              {/* --- CARD END --- */}

              {/* --- 3 Rows (9 items) ke baad ExtraSection show --- */}
              {index === 5 && (
                <div className="col-span-3 mt-10">
                  <Row1/>
                </div>
              )}

            </React.Fragment>
          ))}
          {/* --- MAP END --- */}

        </div>
      </div>
    </div>
  );
}
