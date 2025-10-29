import React from "react";
import r89 from "../../assets/Images/r89.jpeg";
import m2 from "../../assets/Images/m2.jpg";
import img1459 from "../../assets/Images/1459.jpg";
import c1 from "../../assets/Images/c1.webp";
import bbb67 from "../../assets/Images/bbb67.webp";
import g178 from "../../assets/Images/g178.jpg";

export default function Grid_card() {
  const items = [
    {
      src: "https://media.istockphoto.com/id/954397408/photo/two-golden-sapphire-earrings-with-small-diamonds.jpg?s=612x612&w=0&k=20&c=GGyLMuTzjokYUYdfLl9MrQ_I9UGAtfb1RHEWjz4qEr0=",
      title: "EARRINGS",
    },
    { src:r89, title: "FINGER RINGS" },
    { src: m2, title: "MANGALSUTRA" },
    { src:img1459, title: "PENDANTS" },
    { src: c1, title: "CHAINS" },
    { src: bbb67, title: "BRACELETS" },
    {
      src: "https://media.istockphoto.com/id/1436594138/photo/indian-jewellery-gold-and-diamond.jpg?s=612x612&w=0&k=20&c=cp49EG-aFN9WuAzFDUOjzb51AOoR98LF_GW3UQ1KaY0=",
      title: "BANGLES",
    },
    { src: g178, title: "GOLD" },
  ];

  return (
    <div className="h-[130vh] w-[85%] ml-[6%] grid grid-rows-2 grid-cols-4 gap-[30px]">
      {items.map((item, index) => (
        <div
          key={index}
          className="h-[450px] w-[300px] rounded-[15px] flex flex-col items-center justify-center transition-transform duration-300 hover:scale-90"
        >
          <img
            src={item.src}
            alt={item.title}
            className="w-[300px] h-[400px] rounded-[15px] object-cover"
          />
          <p className="mt-3 font-bold font-[Playwrite_US_Modern] text-lg">
            {/* {item.title} */}
          </p>
        </div>
      ))}
    </div>
  );
}
