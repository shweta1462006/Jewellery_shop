import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext1";
import Profile from "../component_context/Profile";
import Top_Header from "./Top_Header";
import { useCart } from "./CardContext";

export default function Navbar() {
  const { user } = useUser();
  const { cart } = useCart();
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Top_Header />

      <nav className="h-16 w-full bg-white flex items-center justify-between px-6 shadow-md sticky top-0 z-50 relative">

        {/* Left Menu Items */}
        <div className="hidden md:flex items-center space-x-6">
          {["rings", "bangles", "necklaces", "earrings"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className="text-gray-700 font-medium hover:text-amber-600 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </div>

        {/* Logo */}
        <NavLink to="/" className="relative flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-md">
            ⭐
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-serif font-bold text-gray-800">
              Moksh’s
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
              Fine Jewellery
            </span>
          </div>
        </NavLink>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">

          {/* Collection, Wedding, Gift */}
          {["Collection", "wedding", "gift"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className="text-gray-700 font-medium hover:text-amber-600 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}

          {/* Cart Icon */}
          <div className="relative">
            <svg
              onClick={() => setShowCart(!showCart)}
              className="w-6 h-6 text-gray-700 hover:text-amber-600 transition cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>

            {/* Badge Count */}
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-amber-600 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}

            {/* Cart Dropdown Preview */}
            {showCart && cart.length > 0 && (
              <div className="absolute right-0 top-10 bg-white border border-gray-200 rounded-lg shadow-xl w-72 p-4">
                <h3 className="text-lg font-semibold mb-3">🛍 Your Cart</h3>
                
                {/* Cart Items Preview */}
                <div className="max-h-60 overflow-y-auto">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center mb-3 border-b pb-2">
                      <img src={item.imageSrc} alt={item.name} className="w-12 h-12 rounded mr-3" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Cart Button */}
                <NavLink
                  to="/Addtocard"
                  className="block text-center bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition"
                  onClick={() => setShowCart(false)}
                >
                  View Cart
                </NavLink>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          {user ? (
            <div className="relative">
              <div
                onClick={() => setShowProfile(!showProfile)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-600 text-white font-bold uppercase cursor-pointer shadow-md"
              >
                {user.un ? user.un.charAt(0) : "U"}
              </div>

              {showProfile && (
                <div className="absolute right-0 top-12 bg-white border rounded-lg shadow-lg p-4 w-40">
                  <Profile />
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 shadow-md transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
}
