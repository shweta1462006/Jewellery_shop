import React from "react";
import Stack from "../../Reactbit/UI/Stack";
import Card_tittle from "./Card_tittle";

const images = [
  { id: 1, img: "https://images.pexels.com/photos/30452301/pexels-photo-30452301.jpeg" },
  { id: 2, img: "https://images.pexels.com/photos/9035610/pexels-photo-9035610.jpeg" },
  { id: 3, img: "https://images.pexels.com/photos/30452277/pexels-photo-30452277.jpeg" },
  { id: 4, img: "https://images.pexels.com/photos/9344398/pexels-photo-9344398.jpeg" }
];

export default function Mokshsworld() {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-white via-amber-50 to-yellow-100">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:px-8 xl:grid-cols-2">
        
        {/* Left side text */}
        <div className="max-w-xl space-y-6">
          <Card_tittle
            card_tittle1="Mokash's Collection"
            card_tittle2="Celebrate the sparkle of every moment..."
            css1="text-center w-full font-merienda space-y-3"
            css2="text-[42px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 drop-shadow-[0_2px_6px_rgba(255,215,0,0.4)]"
            css3="text-[20px] md:text-[24px] text-slate-600 italic tracking-wide"
          />

          <p className="text-gray-700 text-lg leading-relaxed">
            This festive season, embrace the radiance of timeless beauty with
            <span className="font-semibold text-yellow-600"> Mokash Jewels</span>.  
            Our exclusive Diwali collection captures the essence of light, love,
            and celebration — handcrafted with precision to bring out the inner
            sparkle in you.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Whether it’s a family gathering, a wedding, or a festival filled with
            joy, our elegant jewellery pieces are designed to make every
            occasion unforgettable. Adorn yourself with brilliance that never fades.
          </p>

          <button className="mt-6 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-black font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all">
            Explore the Festive Collection ✨
          </button>
        </div>

        {/* Right side image stack */}
        <div className="flex justify-center items-center">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 400, height: 600 }}
            cardsData={images}
          />
        </div>
      </div>
    </div>
  );
}
