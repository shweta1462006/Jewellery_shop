import React, { useState } from "react";
import TourDetail from "./Practice.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function PracticeCard() {
  const [selectedCategory, setSelectedCategory] = useState("Adventure");

  const filteredTours = TourDetail.filter(
    (tour) => tour.category === selectedCategory
  );

  return (
    <div className="bg-[#0F172A] min-h-screen py-12 text-white">
      {/* Category Tabs */}
      <div className="flex justify-center mb-12 flex-wrap gap-4">
        {["Adventure", "Treckking", "Beaches", "Heritages"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white shadow-lg"
                : "bg-[#334155] text-gray-300 hover:bg-[#475569]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-[#FBBF24]">
          {selectedCategory} Tours
        </h2>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTours.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl shadow-xl overflow-hidden group hover:shadow-3xl hover:scale-105 transform transition-all duration-300"
            >
              <Link to={`/ShowItem/${product.id}`}>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt || product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </Link>

              {/* Duration Badge */}
              <div className="absolute top-3 left-3 bg-[#111827]/70 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md select-none">
                {product.duration}
              </div>

              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center select-none">
                ⭐ {product.rating}
              </div>

              {/* Card Content */}
              <div className="p-6 bg-[#1E293B]/50 backdrop-blur-sm rounded-b-2xl text-white">
                <h3 className="text-xl font-semibold mb-1 truncate">{product.name}</h3>

                <div className="flex items-center space-x-2 text-sm text-gray-300 mb-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-red-400" />
                  <span>{product.location || "Location info"}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magni?
                </p>

                <p
                  className={`text-lg font-semibold ${
                    product.isDiscount === "true" ? "text-red-500" : "text-amber-300"
                  }`}
                >
                  {product.price}/Person
                </p>

                <button
                  disabled={product.isAvailable !== "true"}
                  className={`mt-6 w-full rounded-lg py-3 text-sm font-semibold transition-all duration-200 ${
                    product.isAvailable === "true"
                      ? "bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white hover:scale-95 shadow-lg"
                      : "bg-[#334155] text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {product.isAvailable === "true" ? "Book Now" : "Sold Out"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
