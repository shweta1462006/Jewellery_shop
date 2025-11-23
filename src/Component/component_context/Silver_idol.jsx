import React from "react";
import IdolDetail from "./Silver_idol.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Silver_idol() {
  return (
    <div className="bg-white min-h-screen py-12 text-black">
      
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#D97706]">
          Silver Idols Collection
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* --- MAP START --- */}
          {IdolDetail.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl shadow-lg bg-white border border-[#F4D38B]"
            >
              {/* Image Hover Effect */}
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
                  Beautifully crafted idol from Tanishq’s divine collection.
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
          ))}
          {/* --- MAP END --- */}
        </div>
      </div>
    </div>
  );
}
