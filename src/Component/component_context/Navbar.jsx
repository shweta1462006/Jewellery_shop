import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext1";
import Profile from "../component_context/Profile";
import Top_Header from "./Top_Header";

export default function Navbar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Top_Header />

      <nav className="h-16 w-full bg-white flex items-center justify-between px-6 shadow-md sticky top-0 z-50 relative">
        
        {/* Left Section - NO DROPDOWN */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/rings"
            className="text-gray-700 font-medium hover:text-amber-600 transition"
          >
            Rings
          </NavLink>

          <NavLink
            to="/bangles"
            className="text-gray-700 font-medium hover:text-amber-600 transition"
          >
            Bangles
          </NavLink>

          <NavLink
            to="/necklaces"
            className="text-gray-700 font-medium hover:text-amber-600 transition"
          >
            Necklaces
          </NavLink>

          <NavLink
            to="/earrings"
            className="text-gray-700 font-medium hover:text-amber-600 transition"
          >
            Earrings
          </NavLink>
        </div>

        {/* Center Logo */}
        <NavLink
          to="/"
          className="relative flex items-center space-x-2 group select-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 shadow-md group-hover:shadow-lg transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.6"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3l2.5 4.5L19 9l-3.5 4 1 5-4.5-2.5L7.5 18l1-5L5 9l4.5-1.5L12 3z"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-serif font-bold text-gray-800 tracking-wide group-hover:text-amber-600 transition-all duration-200">
              Moksh’s
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-700 transition-all duration-300">
              Fine Jewellery
            </span>
          </div>
        </NavLink>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/pricing"
            className="text-gray-700 font-medium hover:text-amber-600 transition"
          >
            Pricing
          </NavLink>

          <NavLink
            to="/faqs"
            className="text-gray-700 font-medium hover:text-amber-600 transition"
          >
            FAQs
          </NavLink>

          <NavLink
            to="/about"
            className="text-gray-700 font-medium hover:text-amber-600 transition"
          >
            About
          </NavLink>

          {user ? (
            <div className="flex items-center space-x-3 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800 text-sm">
                Welcome, <span className="font-semibold">{user.un}</span>
              </span>
              <Profile />
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <NavLink to="/rings" className="block text-gray-700 font-medium">
            Rings
          </NavLink>
          <NavLink to="/bangles" className="block text-gray-700 font-medium">
            Bangles
          </NavLink>
          <NavLink to="/necklaces" className="block text-gray-700 font-medium">
            Necklaces
          </NavLink>
          <NavLink to="/earrings" className="block text-gray-700 font-medium">
            Earrings
          </NavLink>
          <NavLink to="/pricing" className="block text-gray-700 font-medium">
            Pricing
          </NavLink>
          <NavLink to="/faqs" className="block text-gray-700 font-medium">
            FAQs
          </NavLink>
          <NavLink to="/about" className="block text-gray-700 font-medium">
            About
          </NavLink>
          <NavLink
            to="/login"
            className="block bg-amber-600 text-white text-center py-2 rounded-md"
          >
            Login
          </NavLink>
        </div>
      )}
    </>
  );
}
