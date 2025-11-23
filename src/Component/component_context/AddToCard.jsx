import { useCart } from "./CardContext";

export default function AddToCard() {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        🛍 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-b py-5 last:border-b-0 hover:bg-gray-50 rounded-md transition-all duration-200"
            >
              {/* Product Image */}
              <img
                src={item.imageSrc}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg border shadow-sm mr-4"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-1">{item.price}</p>
              </div>

              {/* Buy Now Button on Right Side */}
              <button className="bg-amber-600 text-white text-sm px-4 py-2 rounded-md hover:bg-amber-700 transition shadow-md ml-4">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
