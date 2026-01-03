import React, { useState } from "react";
import Comment from "./Comment";

export default function Practice({ item }) {
  const [activeTab, setActiveTab] = useState("wished");
  const [showWishedDropdown, setShowWishedDropdown] = useState(true);
  const [showBoughtDropdown, setShowBoughtDropdown] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "wished") {
      setShowWishedDropdown(true);
      setShowBoughtDropdown(false);
    } else {
      setShowWishedDropdown(false);
      setShowBoughtDropdown(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-center p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-1">
        Product Name: {item.name}
      </h1>
      <p className="text-red-600 text-xl font-semibold mb-6">₹{item.price}</p>

      {/* Top Images */}
      <div className="flex justify-center gap-6 mb-6">
        <img
          src={item.img1}
          className="w-[680px] h-[580px] object-cover rounded-xl shadow-lg"
          alt="earring1"
        />
        <img
          src={item.img2}
          className="w-[680px] h-[580px] object-cover rounded-xl shadow-lg"
          alt="earring2"
        />
      </div>

      {/* Big Image */}
      <div className="flex justify-center mb-10">
        <img
          src={item.img3}
          className="w-[650px] h-[650px] object-cover rounded-xl shadow-md"
          alt="earring-main"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Jewellery Details
      </h2>

      {/* Tabs Section */}
      <div className="mt-6">
        <div className="flex justify-center mb-6">
          <div className="relative bg-gray-200 p-2 rounded-full flex w-[340px] shadow-md">
            <div
              className={`absolute top-2 bottom-2 w-1/2 rounded-full bg-red-500 transition-all duration-300 ${
                activeTab === "wished" ? "left-2" : "left-[170px]"
              }`}
            ></div>

            <button
              onClick={() => handleTabChange("wished")}
              className={`flex-1 py-3 font-semibold rounded-full relative z-10 transition-all ${
                activeTab === "wished" ? "text-white" : "text-gray-700"
              }`}
            >
              Product Details
            </button>

            <button
              onClick={() => handleTabChange("bought")}
              className={`flex-1 py-3 font-semibold rounded-full relative z-10 transition-all ${
                activeTab === "bought" ? "text-white" : "text-gray-700"
              }`}
            >
              Most Bought
            </button>
          </div>
        </div>

        {/* Product Details Dropdown */}
        {showWishedDropdown && (
          <div className="mt-4 p-6 bg-white rounded-xl shadow-lg w-[55%] mx-auto flex gap-6">
            <div className="w-[250px]">
              <img
                src={item.img1}
                className="w-[250px] h-[250px] rounded-lg shadow-md object-cover"
                alt="side"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Product Details</h3>
              <table className="w-full text-gray-700 text-lg border-collapse">
                <tbody>
                  <tr>
                    <td className="p-2 border">Karatage</td>
                    <td className="p-2 border">18K</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Material</td>
                    <td className="p-2 border">Gold</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Weight</td>
                    <td className="p-2 border">4.56g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Most Bought Dropdown */}
        {showBoughtDropdown && (
          <div className="mt-4 p-6 bg-white rounded-xl shadow-lg w-[75%] mx-auto flex gap-6">
            <div className="w-[250px]">
              <img
                src={item.img2}
                className="w-[250px] h-[250px] rounded-lg shadow-md object-cover"
                alt="side"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">
                🛒 Most Bought Products
              </h3>
              <table className="w-full text-gray-700 text-lg border-collapse">
                <tbody>
                  <tr>
                    <td className="p-2 border">Gold Chain</td>
                    <td className="p-2 border">₹92,000</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Ruby Earrings</td>
                    <td className="p-2 border">₹78,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <Comment />
    </div>
  );
}
