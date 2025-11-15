import React from "react";
import ScrollStack, { ScrollStackItem } from "../../Reactbit/UI/ScrollStack";

export default function MVPage() {
  const cards = [
    {
      title: "Royal Wedding Elegance",
      desc: "This is the first card in the stack",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/01/1544151807_adrika_parthiv_vivekkrishnanphotography_111.jpg",
    },
    {
      title: "Luxury Stone Tower Ceremony",
      desc: "This is the second card in the stack",
      img: "https://catchmotion.com/wp-content/uploads/2018/05/Indian_Wedding_stone-tower_winery-17-1.jpg",
    },
    {
      title: "Classic Heritage Moments",
      desc: "This is the third card in the stack",
      img: "https://tse1.mm.bing.net/th/id/OIP.OGoNgl4iYthZR7V8WQkA8AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 via-yellow-50 to-white">
      <ScrollStack>
        {cards.map((card, index) => (
          <ScrollStackItem key={index}>
            <div
              className="flex flex-col justify-center items-center text-center w-full h-[80vh] md:h-[90vh] p-6 md:p-12 rounded-2xl shadow-lg text-white relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-2xl md:text-4xl font-bold tracking-wide mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {card.title}
              </h2>
              <p className="text-base md:text-lg max-w-[600px] leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]">
                {card.desc}
              </p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}
