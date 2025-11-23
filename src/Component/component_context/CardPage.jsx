import React from "react";
import { useCart } from "./CardContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-3"
            >
              <div className="flex items-center gap-4">
                <img src={item.imageSrc} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
