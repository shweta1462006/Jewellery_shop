import React from 'react'
import Card_layout from '../../Repeated_file/card_layout.jsx'
import Row1 from '../../Repeated_file/Row1.jsx'
import Row2 from '../../Repeated_file/Row2.jsx';

export default function Gold_ring() {
    const ringData = [
    {
      id: 1,
      name: "Pearl Elegance Necklace",
      description: "A graceful pearl necklace with gold accents.",
      price: "₹22,999",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaafaf1aa/images/hi-res/514223NAAABAP1_1.jpg?sw=640&sh=640",
      hoverImage:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaafaf1aa/images/hi-res/514223NAAABAP1_2.jpg?sw=640&sh=640",
      tag: "Exclusive",
    },
    {
      id: 2,
      name: "Gold Heart Necklace",
      description: "Delicate heart-shaped pendant with fine detailing.",
      price: "₹17,499",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8b8d6fd0/images/hi-res/514223NKA1AP1_1.jpg?sw=640&sh=640",
      hoverImage:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8b8d6fd0/images/hi-res/514223NKA1AP1_2.jpg?sw=640&sh=640",
      tag: "New Arrival",
    },
    {
      id: 3,
      name: "Diamond Choker",
      description: "Modern choker with diamond detailing and gold base.",
      price: "₹28,599",
      image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1c3b4c8b/images/hi-res/51P2O1NHAAA00_1.jpg?sw=640&sh=640",
      hoverImage:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1c3b4c8b/images/hi-res/51P2O1NHAAA00_2.jpg?sw=640&sh=640",
      tag: "Trending",
    },
  ];

  return (
    <div>
      <Card_layout/>
      <Row1/>
      <Card_layout  items={ringData}/>
      <Row2/>
    </div>
  )
}
