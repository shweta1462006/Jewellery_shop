import React from "react";
import Row3 from "../../Repeated_file/Row3";
import Gallery from "../../Pages/Gallery";
// import Scroll_line from "../../Pages/Scroll_line";


export default function Wedding() {
  const weddingData = [
    {
      img: "https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/7.png",
      title: "Bihari Wedding",
    },
    {
      img: "https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/1.png",
      title: "Gujarati Wedding",
    },
    {
      img: "https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/12.png",
      title: "Marwadi Wedding",
    },
    {
      img: "https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/2.png",
      title: "Punjabi Wedding",
    },
    {
      img: "https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/10.png",
      title: "South Indian Wedding",
    },
    {
      img: "https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/3.png",
      title: "Kashmiri Wedding",
    },
    {
      img: "https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/bengali-bride.jpg",
      title: "Tamil Wedding",
    },
    {
      img: "https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/punjabi-bride.jpg",
      title: "Odia Wedding",
    },
  ];

  return (
    <div className="bg-[#faf6f0] p-8 min-h-screen">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Top Heading */}
        <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-3 mb-8">
          <div className="gr"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {weddingData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.img}
                className="w-full h-[260px] object-cover rounded-lg"
                alt={item.title}
              />

              <span className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-lg text-[15px] backdrop-blur-sm">
                {item.title}
              </span>
            </div>
          ))}

        </div>

        {/* Footer Section */}
        <div className="flex items-center gap-3 text-[24px] font-bold text-[#444] mt-12">
          <i className="fa-solid fa-store text-[26px] text-red-500"></i>
          The Mokash
        </div>

        <hr className="mt-4 border-gray-300" />
      </div>
      <Row3/>
      <Gallery/>

      <h1 className="center">What other bride is looking for</h1>

      
  

  
    </div>
    
  );
}
