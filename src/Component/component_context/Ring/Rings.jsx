import React, { useState } from "react";
import RingDetail from "./Ring.js";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Row1, { cardDetail } from "../../Repeated_file/Row1";
import { useCart } from "../CardContext";

export default function Rings() {
  const [selectedCategory, setSelectedCategory] = useState("Gold");
  const [SEARCH, setSEARCH] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // CATEGORY BASED CARD DATA (Row1 cards)
  const currentCardData = cardDetail.ring[selectedCategory.toLowerCase()];
  console.log(currentCardData)

  const filteredRingsRow = currentCardData.slice(0, 3);

  // SEARCH LOGIC
  const FILTERBYALL = RingDetail.filter(
    (product) =>
      product.name.toLowerCase().includes(SEARCH.toLowerCase()) ||
      product.location.toLowerCase().includes(SEARCH.toLowerCase()) ||
      product.duration.toLowerCase().includes(SEARCH.toLowerCase()) ||
      product.category.toLowerCase().includes(SEARCH.toLowerCase())
  );

  // CATEGORY FILTER
  const filteredRings = RingDetail.filter(
    (item) =>
      item.category === selectedCategory &&
      (item.name.toLowerCase().includes(SEARCH.toLowerCase()) ||
        item.duration.toLowerCase().includes(SEARCH.toLowerCase()))
  );

  const productsToShow = SEARCH ? FILTERBYALL : filteredRings;

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen py-16 text-black">

      {/* CATEGORY TABS */}
      <div className="flex justify-center mb-6 flex-wrap gap-4">
        {["Gold", "Diamond", "Silver"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md ${selectedCategory === category
              ? "bg-gradient-to-r from-[#FBBF24] to-[#D97706] text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-10 px-4">
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search by title, rating, category..."
            value={SEARCH}
            onChange={(e) => setSEARCH(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
          />

          {SEARCH && (
            <button
              onClick={() => setSEARCH("")}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-[#B45309] drop-shadow-md">
          {selectedCategory} Rings Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {productsToShow.length > 0 ? (
            productsToShow.map((product, index) => (
              <React.Fragment key={product.id}>
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">

  {/* Image */}
<div className="relative h-72 overflow-hidden group">

  {/* Normal Image */}
  <img
    src={product.imageSrc}
    alt={product.name}
    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
  />

  {/* Hover Image */}
  <img
    src={product.hoverimageSrc}
    alt={product.name}
    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
  />

  {/* Rating badge */}
  <span className="absolute top-3 right-3 bg-yellow-600 text-white text-xs px-2 py-1 rounded-lg shadow">
    ⭐ {product.rating}
  </span>

  {/* Duration badge */}
  <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
    {product.duration}
  </span>

</div>
  {/* CONTENT AREA */}
  <div className="p-4">

    {/* TITLE */}
    <h3 className="text-lg font-semibold text-gray-900 leading-tight line-clamp-1">
      {product.name}
    </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laborum.</p>
    <div className="flex items-end gap-2 mt-3">

      {/* ₹ symbol upper + price */}
      <div className="flex items-start gap-0.5">
        <span className="text-xs text-gray-700 leading-none">₹</span>
        <p className="text-xl font-bold text-gray-900 leading-none">
          {product.price}
        </p>
      </div>

      {/* MRP */}
      <div className="flex items-center gap-1">
        <span className="text-xs text-gray-500">M.R.P:</span>
        <p className="text-sm line-through text-gray-500">
          {product.oldPrice}
        </p>
      </div>

      {/* OFFER */}
      <p className="text-sm font-semibold text-green-700">
        {product.offer} OFF
      </p>
    </div>



    {/* AMAZON-LIKE INFO LABELS */}
    <div className="flex flex-col gap-1 text-[13px] mt-2">

      {product.brought && (
        <span className="text-gray-700">
          {product.brought} <span className="text-gray-500">bought this month</span>
        </span>
      )}

      {product.freedelivery && (
        <span className="text-green-700 font-medium">
          Free Delivery <span className="text-gray-500">— {product.freedelivery}</span>
        </span>
      )}

      {product.fastdelivery && (
        <span className="text-blue-700">
          Fast Delivery <span className="text-gray-500">by {product.fastdelivery}</span>
        </span>
      )}
    </div>

    {/* PRICE SECTION */}

    {/* BUTTONS */}
<div className="mt-4 flex flex-col sm:flex-row gap-3">
  {/* Add to Cart Button */}
  <button
    onClick={() => addToCart(product)}
    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white transition-all shadow-sm"
  >
    🛒 Add to Cart
  </button>

  {/* Buy Now / Out of Stock Button */}
  <button
    className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all shadow-sm ${
      product.isAvailable
        ? "bg-amber-600 text-white hover:bg-amber-700"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
    onClick={() => product.isAvailable && navigate(`/useparams/${product.id}`)}
  >
    {product.isAvailable ? "Detail" : "Out of Stock"}
  </button>
</div>

  </div>
</div>

                {/* EXTRA 3 CARDS SECTION → After 6th card */}
                {index === 5 && (
                  <div className="col-span-3 mt-14">
                    <div className="bg-gradient-to-b from-yellow-50 via-white to-amber-50 py-20">
                      <div className="max-w-5xl mx-auto text-center mb-16 px-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-amber-700 drop-shadow">
                          Discover More Collections
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mt-3 tracking-wide">
                          Handcrafted elegance — explore jewelry made to shine.
                        </p>
                      </div>

                      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
                        {filteredRingsRow.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => navigate(item.path)}
                            className="group cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-xl bg-white relative transition-all duration-500"
                          >
                            <div className="overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>

                            <div className="absolute bottom-0 inset-x-0 pb-5 text-center">
                              <h3 className="text-white text-2xl font-semibold drop-shadow-lg tracking-wide">
                                {item.name}
                              </h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 text-lg mt-10">
              No results found for "{SEARCH}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
