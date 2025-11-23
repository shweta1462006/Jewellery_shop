import React from "react";
import { NavLink } from "react-router-dom";

export default function GCoins_page() {
  return (
    <div>
      <div className="w-full bg-white flex items-center justify-between px-6 md:px-16 py-10 text-gray-700 flex-col md:flex-row">

        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Gifts that Carry Blessings
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Express your heartfelt wishes with Tanishq’s exquisitely designed silver idols
          </p>

          {/* Button with NavLink */}
          <NavLink to="/Gold_coin">
            <button className="bg-white text-[#cb0101] px-6 py-3 font-bold rounded-md border border-[#cb0101] hover:bg-red-100 transition duration-300">
              Explore Silver Idols
            </button>
          </NavLink>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-2/5 h-[50vh] overflow-hidden rounded-lg">
          <img
            src="https://staticimg.tanishq.co.in/microsite/gifting/assets/images/crossSection/goldcoins.jpg"
            alt="Silver Idol"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

      </div>
    </div>
  );
}
