import React from "react";
import GCOINSDetail from "./GCoins.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Silver_idol() {
  return (
    <div className="bg-gradient-to-b from-[#FFF8EC] to-[#FDF3D7] min-h-screen py-16 text-gray-800">
      
      {/* Page Title */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520] tracking-wide drop-shadow-md">
          Silver Idols Collection
        </h2>
        <p className="text-lg text-gray-600 mt-2">Divinity meets elegance</p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {GCOINSDetail.map((product) => (
            <div
              key={product.id}
              className="relative bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl border border-[#F4D38B] overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              {/* Image Section with Gradient Overlay */}
              <Link to={`/ShowItem/${product.id}`}>
                <div className="relative h-80 group overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs px-4 py-1 rounded-full shadow-md">
                    {product.duration}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-4 py-1 rounded-full shadow-md">
                    ⭐ {product.rating}
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                  {product.name}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-red-500 mr-2" />
                  <span>{product.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  A divine masterpiece crafted with elegance and devotion.
                </p>

                <p
                  className={`text-lg font-bold ${
                    product.isDiscount === "true" ? "text-red-600" : "text-[#B8860B]"
                  }`}
                >
                  {product.price}
                </p>

                <button
                  disabled={product.isAvailable !== "true"}
                  className={`mt-5 w-full py-3 rounded-full text-sm font-bold shadow-md transition-all ${
                    product.isAvailable === "true"
                      ? "bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {product.isAvailable === "true" ? "Buy Now" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
