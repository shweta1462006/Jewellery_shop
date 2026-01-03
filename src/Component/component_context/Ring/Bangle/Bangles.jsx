import React, { useState } from "react";
import BangleDetail from "./Bangle.js";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Row1, { cardDetail } from "../../../Repeated_file/Row1.jsx";
import { useCart } from "../../CardContext.jsx";

export default function Bangles() {
  const [selectedCategory, setSelectedCategory] = useState("Gold");
  const [SEARCH, setSEARCH] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // CATEGORY BASED CARD DATA (Row1 cards)
  const currentCardData = cardDetail.bangle[selectedCategory.toLowerCase()];
  console.log(currentCardData)

  const filteredRingsRow = currentCardData.slice(0, 3);

  // SEARCH LOGIC
  const FILTERBYALL = BangleDetail.filter(
    (product) =>
      product.name.toLowerCase().includes(SEARCH.toLowerCase()) ||
      product.location.toLowerCase().includes(SEARCH.toLowerCase()) ||
      product.duration.toLowerCase().includes(SEARCH.toLowerCase()) ||
      product.category.toLowerCase().includes(SEARCH.toLowerCase())
  );

  // CATEGORY FILTER
  const filteredRings = BangleDetail.filter(
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
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md ${
              selectedCategory === category
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

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {productsToShow.length > 0 ? (
            productsToShow.map((product, index) => (
              <React.Fragment key={product.id}>
                {/* PRODUCT CARD */}
                <div className="relative rounded-3xl shadow-xl bg-white border border-amber-200 overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
                  <Link to={`/ShowItem/${product.id}`}>
                    <div className="relative w-full h-80 overflow-hidden">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-100 hover:opacity-0"
                      />
                      <img
                        src={product.hoverimageSrc}
                        alt="hover-img"
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
                      />
                    </div>
                  </Link>

                  <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {product.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-400 text-black text-xs px-3 py-1 rounded-full shadow">
                    ⭐ {product.rating}
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-1 truncate">
                      {product.name}
                    </h3>

                    <div className="flex items-center text-sm text-gray-700 mb-3">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-red-500 mr-2"
                      />
                      <span>{product.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Beautifully crafted premium ring from Tanishq jewellery.
                    </p>

                    <p
                      className={`text-lg font-bold ${
                        product.isDiscount === "true"
                          ? "text-red-600"
                          : "text-amber-700"
                      }`}
                    >
                      {product.price}
                    </p>

                    <button
                      onClick={() => addToCart(product)}
                      className="mt-4 w-full rounded-lg py-2 text-sm font-bold border border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white transition-all"
                    >
                      Add to Cart 🛒
                    </button>

                    <button
                      onClick={() =>
                        product.isAvailable
                          ? navigate(`/useparams/${product.id}`)
                          : null
                      }
                      className={`mt-3 w-full rounded-lg py-3 text-sm font-bold transition-all ${
                        product.isAvailable
                          ? "bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white hover:shadow-lg"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {product.isAvailable ? "Buy Now" : "Out of Stock"}
                    </button>
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
