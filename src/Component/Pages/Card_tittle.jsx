import React from "react";

export default function Mokash({
  card_tittle1 = "Mokash's Collection",
  card_tittle2 = "Explore Our newly Launched Collection..... ",
  css1="m-0 p-0 bg-gradient-to-b from-white via-amber-50 to-yellow-100",
  css2 ="relative mt-3 text-[34px]",
  css3="relative mb-3 text-[25px] text-red-500"
}) {
  return (
    <div className={css1}>
      <p className={css2}>{card_tittle1}</p>
      <h5 className={css3}>
        {card_tittle2}
      </h5>
    </div>
  );
}


