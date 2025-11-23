import React, { useState } from "react";
import Card_tittle from "../../Pages/Card_tittle";
import Red_crad from "../../Repeated_file/red_crad";
import GCoins_page from "../GCoins_page";
import Red_Card2 from "../../Repeated_file/Red_Crad2";

export default function GiftGrid() {
  const [activeTab, setActiveTab] = useState("wished");

  const mostWished = [
    {
      id: 1,
      img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf9c911d1/images/hi-res/50D2P2FPAAA09_1.jpg",
      name: "Golden Charm Ring",
      price: "₹42,500",
    },
    {
      id: 2,
      img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe5444692/images/hi-res/50D5B2PFZAAA10_1.jpg",
      name: "Diamond Stud Earrings",
      price: "₹58,000",
    },
    {
      id: 3,
      img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf3c1ce5d/images/hi-res/HLS2D1FBEAM80_1.jpg",
      name: "Elegance Necklace",
      price: "₹79,999",
    },
    {
      id: 4,
      img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc789149d/images/hi-res/50E5B1FCFAA02_1.jpg",
      name: "Silver Heart Pendant",
      price: "₹29,500",
    },
  ];

  const mostBought = [
    {
      id: 1,
      img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd68e23bf/images/hi-res/503416SFIAGB04_1.jpg",
      name: "Classic Gold Ring",
      price: "₹45,000",
    },
    {
      id: 2,
      img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbae03302/images/hi-res/50D3FF2DBAGA09_1.jpg",
      name: "Royal Diamond Ring",
      price: "₹62,000",
    },
    {
      id: 3,
      img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw31b7a835/images/hi-res/50OHI12CZDBA02_1.jpg",
      name: "Trendy Hoop Earrings",
      price: "₹39,999",
    },
    {
      id: 4,
      img: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8ef42c65/images/hi-res/511169FXDAA32_1.jpg",
      name: "Stylish Bracelet",
      price: "₹48,750",
    },
  ];

  const cardsToShow = activeTab === "wished" ? mostWished : mostBought;

  return (
    <>
      {/* Shop by Occasion Title */}
      <Card_tittle
        card_tittle1="Shop by Occasion"
        card_tittle2="Explore the curated Gifting List for Every Occasion"
        css1="text-center bg-white py-6"
        css2="text-red-600 text-[36px] font-bold"
        css3="text-slate-600 text-[22px] font-medium"
      />

      {/* Image Grid Section */}
      <section className="h-screen w-full grid grid-rows-7 grid-cols-4 gap-1 bg-white p-1">
        <div className="row-start-1 row-end-8 col-start-1 col-end-3 rounded-lg overflow-hidden">
          <img
            src="https://staticimg.tanishq.co.in/microsite/gifting/assets/images/shopbyOccasion/wedding-desktop.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="row-start-1 row-end-4 col-start-3 col-end-4 rounded-lg overflow-hidden">
          <img
            src="https://staticimg.tanishq.co.in/microsite/gifting/assets/images/shopbyOccasion/birthday-desktop.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="row-start-1 row-end-3 col-start-4 col-end-5 rounded-lg overflow-hidden">
          <img
            src="https://staticimg.tanishq.co.in/microsite/gifting/assets/images/shopbyOccasion/treatyourself-d.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="row-start-4 row-end-8 col-start-3 col-end-4 rounded-lg overflow-hidden">
          <img
            src="https://staticimg.tanishq.co.in/microsite/gifting/assets/images/shopbyOccasion/birthday-desktop.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="row-start-3 row-end-8 col-start-4 col-end-5 rounded-lg overflow-hidden">
          <img
            src="https://staticimg.tanishq.co.in/microsite/gifting/assets/images/shopbyOccasion/anniversary-desktop.jpg"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Top Picks Title */}
      <Card_tittle
        card_tittle1="Top Picks"
        card_tittle2="Explore what’s trending"
        css1="text-center bg-white py-6"
        css2="text-red-600 text-[36px] font-bold"
        css3="text-slate-600 text-[22px] font-medium"
      />

      {/* Tabs Section */}
      <div className="w-full bg-white p-6">
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab("wished")}
            className={`px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md 
            ${
              activeTab === "wished"
                ? "bg-red-500 text-white scale-105 shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
             Most Wished
          </button>

          <button
            onClick={() => setActiveTab("bought")}
            className={`px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md 
            ${
              activeTab === "bought"
                ? "bg-red-500 text-white scale-105 shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Most Bought
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cardsToShow.map((card) => (
            <div
              key={card.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white p-3 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="w-full h-72 object-cover"
              />

              <div className="mt-3 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {card.name}
                </p>
                <p className="text-red-500 font-bold text-base">
                  {card.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Red_crad/>
      <GCoins_page/>
      <Red_Card2/>
    </>
  );
}
