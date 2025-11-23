import React, { useState } from "react";

export default function ProductCard({ item }) {
  const [selectedImage, setSelectedImage] = useState(item.imageSrc);

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-sm mx-auto">

      {/* Product Image */}
      <img
        src={selectedImage}
        alt={item.name}
        className="w-full h-64 object-cover rounded-lg cursor-pointer"
      />

      {/* Thumbnail Images */}
      <div className="flex gap-3 mt-3 justify-center">
        {[item.imageSrc, item.hoverimageSrc, item.sideView, item.backView].map(
          (img, idx) =>
            img && (
              <img
                key={idx}
                src={img}
                alt="thumb"
                onClick={() => setSelectedImage(img)}
                className="w-16 h-16 object-cover rounded-md border cursor-pointer hover:scale-105 shadow-sm transition"
              />
            )
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{item.name}</h2>

        <p className="text-yellow-500 text-sm font-medium">
          ⭐ {item.rating} ({item.reviews} reviews)
        </p>

        <p className="text-xl font-bold text-gray-800 mt-2">
          ₹ {item.price}
        </p>

        <p className="text-gray-600 text-sm mt-1">
          Category: {item.category}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold">
          Add to Cart
        </button>
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-semibold">
          Buy Now
        </button>
      </div>
    </div>
  );
}
