import React from "react";

const hotels = [
  {
    id: 1,
    nazev: "Hotel Uno",
    link: "https://hoteluno.cz/",
  },
  {
    id: 2,
    nazev: "Sport hotel",
    link: "http://www.sporthotel-tichaorlice.cz/pokoje.html",
  },
  {
    id: 3,
    nazev: "Penzion Quattro",
    link: "https://www.penzion-quattro.cz/",
  },
  {
    id: 4,
    nazev: "Nová Louže - apartmány",
    link: "https://www.nova-louze.cz/mini-hotel-v-usti-nad-orlici/",
  },
];

const Hotels = () => {
  return (
    <div className='ml-10'>
      <ul className='list-disc'>
        {hotels.map(({ id, nazev, link }) => (
          <li
            key={id}
            className='text-xl'>
            <a href={link}>{nazev}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
