import React from "react";
import { GiftIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Red_Card2() {
  return (
    <div>
      <div className="min-h-[40vh] w-full bg-gradient-to-r from-[#cb0101] to-[#dc055ebd] text-white flex items-center justify-between p-6 md:p-12 flex-col md:flex-row">

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h1 className="text-[32px] md:text-[38px] font-bold leading-tight mb-3">
          Gifting Blessing
          </h1>
          <p className="text-[16px] md:text-[18px] mb-5">
Auspicious Jewellery by Tanishq          </p>

          {/* NavLink Button */}
          <NavLink
            to="/silver-idols"
            className="bg-white text-[#cb0101] px-6 py-2 text-[15px] font-bold rounded-md flex items-center gap-2 mx-auto md:mx-0 hover:bg-red-100 hover:scale-105 transition-all duration-300"
          >
            <GiftIcon className="h-5 w-5 text-[#cb0101]" />
Explore Auspicious Jewellery          </NavLink>
        </div>

        {/* Image Card */}
        <div className="w-full md:w-[40%] max-w-[320px] h-[40vh] bg-white rounded-lg shadow-lg overflow-hidden mt-5 md:mt-0">
          <img
            src="https://di2ponv0v5otw.cloudfront.net/posts/2023/04/10/6434e4e4027427810c19dea2/m_6434e7c4f644e5d94381a28b.jpeg"
            className="w-full h-full object-cover"
            alt="Silver Idol"
          />
        </div>
      </div>
    </div>
  );
}
