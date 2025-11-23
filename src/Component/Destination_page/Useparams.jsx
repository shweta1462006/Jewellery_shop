import React from "react";
import { useParams } from "react-router-dom";
import EarringsDetail from "/src/Component/component_context/Earring/Earring";  // 👈 Correct import

export default function Useparams() {
  const { id } = useParams();

  const item = EarringsDetail.find((e) => e.id == id);

  if (!item) {
    return <p className="text-center text-red-500">Product Not Found</p>;
  }

  return (
    <div className="p-6">
      <img src={item.imageSrc} alt={item.name}  />
      <img src={item.hoverimageSrc} alt={item.name}  />

      <h2 >{item.rating}</h2>
      <p>Price: {item.price}</p>
      <p >Category: {item.category}</p>
      <p className="text-gray-600">Category: {item.duration}</p>
      <p className="text-gray-600">Category: {item.category}</p>

      
    </div>
  );
}
