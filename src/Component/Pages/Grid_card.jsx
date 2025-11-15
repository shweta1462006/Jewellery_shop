import React from "react";
import r89 from "../../assets/Images/r89.jpeg";
import m2 from "../../assets/Images/m2.jpg";
import img1459 from "../../assets/Images/1459.jpg";
import c1 from "../../assets/Images/c1.webp";
import bbb67 from "../../assets/Images/bbb67.webp";
import g178 from "../../assets/Images/g178.jpg";
import Card_tittle from "./Card_tittle";

export default function Grid_card() {
  const items = [
    {
      src: "https://media.istockphoto.com/id/954397408/photo/two-golden-sapphire-earrings-with-small-diamonds.jpg?s=612x612&w=0&k=20&c=GGyLMuTzjokYUYdfLl9MrQ_I9UGAtfb1RHEWjz4qEr0=",
      title: "EARRINGS",
    },
    { src: r89, title: "FINGER RINGS" },
    { src: m2, title: "MANGALSUTRA" },
    { src: img1459, title: "PENDANTS" },
    { src: c1, title: "CHAINS" },
    { src: bbb67, title: "BRACELETS" },
    {
      src: "https://media.istockphoto.com/id/1436594138/photo/indian-jewellery-gold-and-diamond.jpg?s=612x612&w=0&k=20&c=cp49EG-aFN9WuAzFDUOjzb51AOoR98LF_GW3UQ1KaY0=",
      title: "BANGLES",
    },
    { src: g178, title: "GOLD" },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-amber-50 to-yellow-100 min-h-screen flex flex-col items-center">
      <Card_tittle
        card_tittle1="Mokash's Collection"
        card_tittle2="Explore Our Newly Launched Collection..."
        css1="text-center py-8"
        css2="mt-3 text-2xl sm:text-3xl md:text-[34px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 drop-shadow-[0_2px_6px_rgba(255,215,0,0.4)]"
        css3="mb-3 text-lg sm:text-xl md:text-[22px] text-red-500 font-medium italic"
      />

      <div className="w-full flex justify-center items-center py-10">
        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden flex flex-col items-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-95 bg-white/40 backdrop-blur-sm"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
              />
              <p className="mt-3 mb-4 font-merienda font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-900 via-orange-900 to-red-500 drop-shadow-[0_2px_6px_rgba(255,215,0,0.4)] text-base sm:text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
