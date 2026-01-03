import React from "react";
import { useParams } from "react-router-dom";
import EarringProduct from "../component_context/Earring/EaringProducts";
import Practice from "../component_context/Practice";
export default function Useparams() {
  const { id } = useParams();

  const item = EarringProduct.find((e) => e.id == id);

  if (!item) {
    return <p className="text-center text-red-500">Product Not Found</p>;
  }

  return (
    <div>
<Practice item={item}/>
      
    </div>
  );
}
