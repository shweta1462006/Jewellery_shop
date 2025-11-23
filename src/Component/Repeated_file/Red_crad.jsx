import React from "react";
import { GiftIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Red_crad() {
  return (
    <div>
      <div className="min-h-[40vh] w-full bg-gradient-to-r from-[#cb0101] to-[#d93333] text-white flex items-center justify-between p-6 md:p-12 flex-col md:flex-row">

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h1 className="text-[32px] md:text-[38px] font-bold leading-tight mb-3">
            Gifts that Carry Blessings
          </h1>
          <p className="text-[16px] md:text-[18px] mb-5">
            Express your heartfelt wishes with Tanishq’s exquisitely designed silver idols
          </p>

          {/* NavLink Button */}
          <NavLink
            to="/silver-idols"
            className="bg-white text-[#cb0101] px-6 py-2 text-[15px] font-bold rounded-md flex items-center gap-2 mx-auto md:mx-0 hover:bg-red-100 hover:scale-105 transition-all duration-300"
          >
            <GiftIcon className="h-5 w-5 text-[#cb0101]" />
            Explore Silver Idols
          </NavLink>
        </div>

        {/* Image Card */}
        <div className="w-full md:w-[40%] max-w-[320px] h-[40vh] bg-white rounded-lg shadow-lg overflow-hidden mt-5 md:mt-0">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2020/11/KV/ZT/EN/60180044/new-product-1000x1000.jpeg"
            className="w-full h-full object-cover"
            alt="Silver Idol"
          />
        </div>
      </div>
    </div>
  );
}
