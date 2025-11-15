// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import Card_tittle from "../Pages/Card_tittle";
import Grid_card from "../Pages/Grid_card";
import Mokshsworld from "../Pages/Mokshsworld";
import MVPage from "../Pages/MVPage";
// import Masonry from "../../Reactbit/UI/Masonry";
const slides = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2024/01/11/14/40/ai-generated-8501940_1280.jpg",
    title: "Elegant Jewellery Collection",
    subtitle: "Discover timeless beauty that shines as bright as you.",
  },
  {
    id: 2,
    image:
      "https://static.vecteezy.com/system/resources/previews/042/102/059/large_2x/ai-generated-jewelry-diamond-ring-on-wooden-table-with-bokeh-background-ai-generative-photo.jpeg",
    title: "Luxury Rings & Bracelets",
    subtitle: "Handcrafted elegance, made for you.",
  },
  {
    id: 3,
    image:
      "https://img1.etsystatic.com/070/0/9590975/il_570xN.820665939_2rzg.jpg",
    title: "Exclusive Necklaces",
    subtitle: "Shine brighter than ever with premium design.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden text-white flex items-center justify-start">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            {index === current && (
              <div className="relative z-10 max-w-3xl px-8 md:px-16 text-left flex flex-col justify-center h-full">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-slideIn">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)]">
                    Elegant
                  </span>{" "}
                  {slide.title.replace("Elegant", "")}
                </h1>
                <p className="text-lg md:text-2xl mb-10 text-gray-200 max-w-xl animate-slideInDelay">
                  {slide.subtitle}
                </p>
                <a
                  href="#shop"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transform transition duration-300 animate-slideInDelay2"
                >
                  Explore Collection ✨
                </a>
              </div>
            )}
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                idx === current ? "bg-yellow-400 scale-125" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(idx)}
            ></button>
          ))}
        </div>

        {/* Inline keyframes */}
        <style>{`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateX(-80px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slideIn {
            animation: slideIn 1s ease-out forwards;
          }
          .animate-slideInDelay {
            animation: slideIn 1.3s ease-out forwards;
          }
          .animate-slideInDelay2 {
            animation: slideIn 1.6s ease-out forwards;
          }
        `}</style>
      </section>

      {/* Moved Card_tittle inside the return */}
      {/* <Card_tittle /> */}
      <Grid_card/>
      {/* <Card_tittle card_tittle1="Mokashs World" card_tittle2="A campanion of Every ocasion"/> */}
      <Mokshsworld/>
    {/* <MVPage/> */}

    </>
  );
};

export default Hero;






