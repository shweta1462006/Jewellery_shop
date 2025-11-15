import React, { useState } from "react";

export default function ShowDetail({ object1 }) {

  const [mainImage, setMainImage] = useState(object1.imageSrc);

  return (
    <div>
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">

            {/* Main Image */}
            <div className="max-w-md mx-auto">
              <img
                className="w-full h-[400px] rounded-md"
                src={mainImage}
                alt="main"
              />

              <div className="flex gap-4 justify-center mt-4">
                <img
                  onClick={() => setMainImage(object1.imageSrc)}
                  src={object1.imageSrc}
                  className="w-24 h-24 border rounded-lg cursor-pointer hover:scale-105 transition"
                />

                <img
                  onClick={() => setMainImage(object1.miniImg2)}
                  src={object1.miniImg2}
                  className="w-24 h-24 border rounded-lg cursor-pointer hover:scale-105 transition"
                />
              </div>
            </div>

            {/* Details */}
            <div className="mt-6">
              <h1 className="text-2xl font-semibold">{object1.name}</h1>

              <div className="mt-4 flex items-center gap-4">
                <p className="text-3xl font-bold">{object1.price}</p>

                <div className="flex items-center gap-2">
                  ⭐⭐⭐⭐
                  <p className="text-sm">{object1.rating}</p>
                </div>
              </div>

              <hr className="my-6" />

              <p className="text-gray-600">{object1.longDescription}</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
