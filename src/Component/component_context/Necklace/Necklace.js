// ---------------- EXTRA IMAGES (19–30 Normal Images) ----------------
const extraImages = [
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/501819FJCAA00_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/507215VDZABA09_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/505218FVJAA02_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/510215FCVAA00_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/500918FJHAA09_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/502315FAJAA00_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D2C2FUEAA02_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D3I1FNKAA02_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D4C2FNVAA02_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/510512FSWAA02_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/51A1A1FBDAA00_1.jpg",
  "https://staticimg.tanishq.co.in/Tanishq/Catalog/51V2E2GNYAA09_1.jpg",
];


// ---------------- MAIN RING DATA (1–18) ----------------
const NecklacesDetail = [
  {
    id: 1,
    name: "Classic Gold Ring",
    category: "Gold",
    price: "₹45,000",
    rating: "4.7",
    duration: "In Stock",
    isDiscount: "false",
    isAvailable: "true",
    location: "Tanishq Gold Collection",

    imageSrc:
      "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4686444e/images/hi-res/511003FBGAA00_2.jpg?sw=480&sh=480",

    hoverimageSrc:
      "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4686444e/images/hi-res/511003FBGAA00_1.jpg?sw=480&sh=480",
  },

  {
    id: 2,
    name: "Royal Gold Ring",
    category: "Gold",
    price: "₹52,000",
    rating: "4.6",
    duration: "Trending",
    isDiscount: "true",
    isAvailable: "true",
    location: "Tanishq Exclusive",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/516061FFZAA00_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/516061FFZAA00_2.jpg",
  },

  {
    id: 3,
    name: "Traditional Gold Ring",
    category: "Gold",
    price: "₹48,500",
    rating: "4.5",
    duration: "In Stock",
    isDiscount: "false",
    isAvailable: "true",
    location: "Tanishq Premium Gold",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D2PTFYXAA09_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D2PTFYXAA09_2.jpg",
  },

  {
    id: 4,
    name: "Designer Gold Ring",
    category: "Gold",
    price: "₹56,000",
    rating: "4.8",
    duration: "Top Pick",
    isDiscount: "true",
    isAvailable: "true",
    location: "Gold Designer",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS2D1FBEAM80_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS2D1FBEAM80_2.jpg",
  },

  {
    id: 5,
    name: "Floral Gold Ring",
    category: "Gold",
    price: "₹41,500",
    rating: "4.4",
    duration: "In Stock",
    isDiscount: "false",
    isAvailable: "true",
    location: "Gold Essentials",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS3I1FJUAS85_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS3I1FJUAS85_2.jpg",
  },

  {
    id: 6,
    name: "Majestic Gold Ring",
    category: "Gold",
    price: "₹59,000",
    rating: "4.9",
    duration: "Premium",
    isDiscount: "false",
    isAvailable: "true",
    location: "Gold Royal",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS2A1FCRA951_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS2A1FCRA951_2.jpg",
  },

  // ---------------- DIAMOND ----------------
  {
    id: 7,
    name: "Elegant Diamond Ring",
    category: "Diamond",
    price: "₹95,000",
    rating: "4.8",
    duration: "Best Seller",
    isDiscount: "false",
    isAvailable: "true",
    location: "Diamond Collection",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D4I1FNLAA09_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D4I1FNLAA09_2.jpg",
  },

  {
    id: 8,
    name: "Crown Diamond Ring",
    category: "Diamond",
    price: "₹1,20,000",
    rating: "4.9",
    duration: "Premium",
    isDiscount: "true",
    isAvailable: "true",
    location: "Diamond Luxury",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D4B3FOUAA09_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D4B3FOUAA09_2.jpg",
  },

  {
    id: 9,
    name: "Princess Diamond Ring",
    category: "Diamond",
    price: "₹1,05,000",
    rating: "4.8",
    duration: "Top Pick",
    isDiscount: "false",
    isAvailable: "true",
    location: "Diamond Royale",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D2PTFYXAA09_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/50D2PTFYXAA09_2.jpg",
  },

  {
    id: 10,
    name: "Halo Diamond Ring",
    category: "Diamond",
    price: "₹98,000",
    rating: "4.7",
    duration: "In Stock",
    isDiscount: "false",
    isAvailable: "true",
    location: "Halo Collection",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS2D1FBEAM80_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS2D1FBEAM80_2.jpg",
  },

  {
    id: 11,
    name: "Rose Diamond Ring",
    category: "Diamond",
    price: "₹1,30,000",
    rating: "4.9",
    duration: "Trending",
    isDiscount: "true",
    isAvailable: "true",
    location: "Diamond Rose",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS3I1FJUAS85_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS3I1FJUAS85_2.jpg",
  },

  {
    id: 12,
    name: "Dual Band Diamond Ring",
    category: "Diamond",
    price: "₹1,15,000",
    rating: "4.6",
    duration: "In Stock",
    isDiscount: "false",
    isAvailable: "true",
    location: "Diamond Fashion",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS2A1FCRA951_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/HLS2A1FCRA951_2.jpg",
  },

  // ---------------- ENGAGEMENT ----------------
  {
    id: 13,
    name: "Promise Engagement Ring",
    category: "Engagement",
    price: "₹68,000",
    rating: "4.8",
    duration: "Trending",
    isDiscount: "true",
    isAvailable: "true",
    location: "Engagement Collection",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/503619FCBABAP1_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/503619FCBABAP1_2.jpg",
  },

  {
    id: 14,
    name: "Classic Engagement Ring",
    category: "Engagement",
    price: "₹72,000",
    rating: "4.7",
    duration: "In Stock",
    isDiscount: "false",
    isAvailable: "true",
    location: "Tanishq Romance",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502920FVEAAA00_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502920FVEAAA00_2.jpg",
  },

  {
    id: 15,
    name: "Solitaire Engagement Ring",
    category: "Engagement",
    price: "₹1,40,000",
    rating: "5.0",
    duration: "Premium",
    isDiscount: "false",
    isAvailable: "true",
    location: "Solitaire Love",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502417FCVAGA02_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502417FCVAGA02_2.jpg",
  },

  {
    id: 16,
    name: "Heart Engagement Ring",
    category: "Engagement",
    price: "₹75,000",
    rating: "4.8",
    duration: "Top Pick",
    isDiscount: "true",
    isAvailable: "true",
    location: "Love Bands",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502018FVBAAA02_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502018FVBAAA02_2.jpg",
  },

  {
    id: 17,
    name: "Couple Engagement Ring",
    category: "Engagement",
    price: "₹85,000",
    rating: "4.9",
    duration: "Trending",
    isDiscount: "false",
    isAvailable: "true",
    location: "Couple Rings",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502818FVBBAA09_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502818FVBBAA09_2.jpg",
  },

  {
    id: 18,
    name: "Diamond Band Engagement",
    category: "Engagement",
    price: "₹90,000",
    rating: "4.7",
    duration: "In Stock",
    isDiscount: "false",
    isAvailable: "true",
    location: "Band Style",

    imageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502418FCPAGA03_1.jpg",

    hoverimageSrc:
      "https://staticimg.tanishq.co.in/Tanishq/Catalog/502418FCPAGA03_2.jpg",
  },
];


// ---------------- EXTRA 12 PRODUCTS (19–30) ----------------
const extraProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: 19 + i,
  name: `Premium Ring ${i + 1}`,
  category: i % 3 === 0 ? "Gold" : i % 3 === 1 ? "Diamond" : "Engagement",
  price: `₹${45000 + i * 2500}`,
  rating: (4.4 + Math.random() * 0.6).toFixed(1),
  duration: "In Stock",
  isDiscount: i % 2 === 0 ? "true" : "false",
  isAvailable: "true",
  location: "Tanishq Collection",

  // Normal Image
  imageSrc: extraImages[i],

  // Auto Hover (_1 → _2)
  hoverimageSrc: extraImages[i].replace("_1", "_2"),
}));


// ---------- FINAL EXPORT ----------
export default [...NecklacesDetail, ...extraProducts];
