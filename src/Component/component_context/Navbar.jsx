import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "../component_context/Profile";
import Top_Header from './Top_Header';
import { useUser } from "../context/UserContext1";

export default function Navbar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false); // for mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(null); // for desktop dropdowns

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <>
      <Top_Header />
      <nav className="h-16 w-full bg-gray-100 flex items-center justify-between px-6 shadow-md sticky top-0 z-50 relative">
        {/* Left Section: Jewelry Categories Dropdown (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Rings Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('rings')}
              className="text-gray-700 hover:text-gray-500 transition flex items-center space-x-1"
            >
              <span>Rings</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === 'rings' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20 border border-gray-200">
                <NavLink to="/rings/gold" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Gold Rings</NavLink>
                <NavLink to="/rings/silver" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Silver Rings</NavLink>
                <NavLink to="/rings/diamond" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Diamond Rings</NavLink>
                <NavLink to="/rings/platinum" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Platinum Rings</NavLink>
              </div>
            )}
          </div>

          {/* Bangles Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('bangles')}
              className="text-gray-700 hover:text-gray-500 transition flex items-center space-x-1"
            >
              <span>Bangles</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === 'bangles' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20 border border-gray-200">
                <NavLink to="/bangles/gold" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Gold Bangles</NavLink>
                <NavLink to="/bangles/silver" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Silver Bangles</NavLink>
                <NavLink to="/bangles/kada" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Kada Bangles</NavLink>
                <NavLink to="/bangles/designer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Designer Bangles</NavLink>
              </div>
            )}
          </div>

          {/* Other Categories */}
          <NavLink to="/necklaces" className="text-gray-700 hover:text-gray-500 transition">Necklaces</NavLink>
          <NavLink to="/earrings" className="text-gray-700 hover:text-gray-500 transition">Earrings</NavLink>
        </div>

        {/* Center Section: Logo */}
        <NavLink to="/" className="flex items-center space-x-2 text-gray-700 font-bold text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z" />
          </svg>
          <span>Moksh's</span>
        </NavLink>

        {/* Right Section: More Links + User/Profile or Login (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/pricing" className="text-gray-700 hover:text-gray-500 transition">Pricing</NavLink>
          <NavLink to="/faqs" className="text-gray-700 hover:text-gray-500 transition">FAQs</NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-gray-500 transition">About</NavLink>
          {user ? (
            <div className="flex items-center space-x-3 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium text-sm md:text-base">
                Welcome, <span className="text-gray-900 font-semibold">{user.un}</span>
              </span>
              <Profile />
            </div>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span className="font-medium">Login</span>
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md md:hidden z-10 border-t border-gray-200">
            <div className="flex flex-col space-y-2 p-4">
              {/* Jewelry Categories in Mobile */}
              <div>
                <span className="font-semibold text-gray-700">Rings</span>
                <div className="ml-4 space-y-1">
                  <NavLink to="/rings/gold" className="block text-gray-600 hover:text-gray-500" onClick={() => setIsOpen(false)}>Gold Rings</NavLink>
                  <NavLink to="/rings/silver" className="block text-gray-600 hover:text-gray-500" onClick={() => setIsOpen(false)}>Silver Rings</NavLink>
                  <NavLink to="/rings/diamond" className="block text-gray-600 hover:text-gray-500" onClick={() => setIsOpen(false)}>Diamond Rings</NavLink>
                  <NavLink to="/rings/platinum" className="block text-gray-600 hover:text-gray-500" onClick={() => setIsOpen(false)}>Platinum Rings</NavLink>
                </div>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Bangles</span>
                <div className="ml-4 space-y-1">
                  <NavLink to="/bangles/gold" className="block text-gray-600 hover:text-gray-500" onClick={() => setIsOpen(false)}>Gold Bangles</NavLink>
                  <NavLink to="/bangles/silver" className="block text-gray-600 hover:text-gray-500" onClick={() => setIsOpen(false)}>Silver Bangles</NavLink>
                  <NavLink to="/bangles/kada" className="block text-gray-600 hover:text-gray-500" onClick={() => setIsOpen(false)}>Kada Bangles</NavLink>
                  <NavLink to="/bangles/designer" className="block text-gray-600 hover:text-gray-500" onClick={() => setIsOpen(false)}>Designer Bangles</NavLink>
                </div>
              </div>
              <NavLink to="/necklaces" className="text-gray-700 hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>Necklaces</NavLink>
              <NavLink to="/earrings" className="text-gray-700 hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>Earrings</NavLink>
              <NavLink to="/pricing" className="text-gray-700 hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>Pricing</NavLink>
              <NavLink to="/faqs" className="text-gray-700 hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>FAQs</NavLink>
              <NavLink to="/about" className="text-gray-700 hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>About</NavLink>
              {/* User Section in Mobile */}
              <div className="mt-2">
                {user ? (
                  <div className="flex items-center space-x-3 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-md">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium text-sm">
                      Welcome, <span className="text-gray-900 font-semibold">{user.un}</span>
                    </span>
                    <Profile />
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span className="font-medium">Login</span>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
