import React from "react";
import url1 from "../../assets/Images/1459.jpg"
import { useNavigate } from "react-router-dom";


export const cardDetail = {
  ring: {
    gold: [
      { name: "gold", img: url1 },
      { name: "gold", img: "url2" },
      { name: "gold", img: "url3" },
    ],
    diamond: [
      { name: "diamond", img: url1 },
      { name: "diamond", img: "url2" },
      { name: "diamond", img: "url3" },
    ],
    silver: [
      { name: "silver", img: url1 },
      { name: "silver", img: "url2" },
      { name: "silver", img: "url3" },
    ],
  },

  bangle: {
    gold: [
      { name: "gold", img: url1 },
      { name: "gold", img: "url2" },
      { name: "gold", img: "url3" },
    ],
    diamond: [
      { name: "diamond", img: url1 },
      { name: "diamond", img: "url2" },
      { name: "diamond", img: "url3" },
    ],
    silver: [
      { name: "silver", img: url1 },
      { name: "silver", img: "url2" },
      { name: "silver", img: "url3" },
    ],
  },

  necklaces: {
    gold: [
      { name: "gold", img: url1 },
      { name: "gold", img: "url2" },
      { name: "gold", img: "url3" },
    ],
    diamond: [
      { name: "diamond", img: url1 },
      { name: "diamond", img: "url2" },
      { name: "diamond", img: "url3" },
    ],
    silver: [
      { name: "silver", img: url1 },
      { name: "silver", img: "url2" },
      { name: "silver", img: "url3" },
    ],
  },

  earring: {
    gold: [
      { name: "gold", img: url1 },
      { name: "gold", img: "url2" },
      { name: "gold", img: "url3" },
    ],
    diamond: [
      { name: "diamond", img: url1 },
      { name: "diamond", img: "url2" },
      { name: "diamond", img: "url3" },
    ],
    silver: [
      { name: "silver", img: url1 },
      { name: "silver", img: "url2" },
      { name: "silver", img: "url3" },
    ],
  }
};

export default function Row1({
  name1 = "Necklaces",
  img1 = "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1b9d8c3d/images/hi-res/514025YPGAA00_2.jpg?sw=480&sh=480",
  name2 = "Earrings",
  img2 = "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw43880cbe/images/hi-res/50D5V2SEQABA02_2.jpg?sw=480&sh=480",
  name3 = "Bracelets",
  img3 = "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe2a70403/images/hi-res/51D2D1BISAA00_1.jpg?sw=480&sh=480",
}) {

  const navigate = useNavigate();

  return (
    <></>
  );
}
