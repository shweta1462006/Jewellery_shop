import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Wedding() {
  const [liked, setLiked] = useState([false, false, false, false]);

  //  let product =[

  //   earnings:[
  //       {

  //   },{},{}
  //           ],
  //   necklace:[
  //   {},{},{}
  //   ],
  //   bracelets:[
  //   {},{},{}
  //   ],]


  
 
 

  const weddingData = [
    {
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw11003252/images/hi-res/51E2J1FAGAA00_1.jpg?sw=640&sh=640",
      hoverImg: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3f378193/images/hi-res/51E2J1FAGAA00_2.jpg?sw=640&sh=640",
      title: "",
    },
     {
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw777733df/images/hi-res/51E2J1FAXAA00_1.jpg?sw=640&sh=640",
      hoverImg: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2755b98b/images/hi-res/51E2J1FAXAA00_2.jpg?sw=640&sh=640",
      title: "",
    }, {
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5b099ce1/images/hi-res/51E2J1FAZAA00_1.jpg?sw=640&sh=640",
      hoverImg: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw57ed153a/images/hi-res/51E2J1FAZAA00_2.jpg?sw=640&sh=640",
      title: "",
    }, {
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd14f5351/images/hi-res/51E2J1FBCAA00_1.jpg?sw=640&sh=640",
      hoverImg: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfa0017a7/images/hi-res/51E2J1FBCAA00_2.jpg?sw=640&sh=640",
      title: "",
    }, {
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5545d6ec/images/hi-res/51E2J1FBNAA00_1.jpg?sw=640&sh=640",
      hoverImg: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw83f97cea/images/hi-res/51E2J1FBNAA00_2.jpg?sw=640&sh=640",
      title: "",
    }, {
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4ec80f6b/images/hi-res/51E2J1FATAA00_1.jpg?sw=640&sh=640",
      hoverImg: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfee56764/images/hi-res/51E2J1FATAA00_2.jpg?sw=640&sh=640",
      title: "",
    }, {
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa989f642/images/hi-res/51E2J1FAIAA00_1.jpg?sw=640&sh=640",
      hoverImg: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw196804e1/images/hi-res/51E2J1FAIAA00_2.jpg?sw=640&sh=640",
      title: "",
    }, {
      img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw90de74b5/images/hi-res/51E2J1FAMAA00_1.jpg?sw=640&sh=640",
      hoverImg: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb598444c/images/hi-res/51E2J1FAMAA00_2.jpg?sw=640&sh=640",
      title: "",
    }, 
    
  ];

  const toggleLike = (i) => {
    const updated = [...liked];
    updated[i] = !updated[i];
    setLiked(updated);
  };

  return (
    <div className="bg-[#faf6f0] py-10 min-h-screen">
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {weddingData.map((item, index) => (
          <div
            key={index}
            className="group relative aspect-square rounded-2xl bg-white p-3 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
          >
            {/* inner square */}
            <div className="w-full h-full rounded-xl overflow-hidden relative">

              {/* Default Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Hover Image */}
              <img
                src={item.hoverImg}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Overlay title */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 rounded-xl">
                <h2 className="text-white text-lg font-semibold tracking-wide">
                  {item.title}
                </h2>
              </div>

              {/* Heart Icon */}
              <button
                onClick={() => toggleLike(index)}
                className={`absolute bottom-3 right-3 p-3 rounded-full text-xl transition-all duration-300 ${
                  liked[index]
                    ? "text-red-600 bg-white shadow-md"
                    : "text-white bg-black/40"
                } opacity-0 group-hover:opacity-100`}
              >
                <FaHeart />
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
