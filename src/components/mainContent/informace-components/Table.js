import Link from "next/link";
import React from "react";
Link;

const adressData = [
  {
    id: 1,
    name: "Obřad",
    adress: "Mírové náměstí 10",
    link: "https://en.mapy.cz/s/federedare",
  },
  {
    id: 2,
    name: "M.Scéna",
    adress: "Havlíčkova 621",
    link: "https://en.mapy.cz/s/bopoputahu",
  },
  {
    id: 3,
    name: "Parking",
    adress: "Vícero možností",
    link: "https://en.mapy.cz/zakladni?x=16.396365&y=49.973818&ud=&ud=&ud=&l=1&ut=M%C3%ADrov%C3%A9%20n%C3%A1m%C4%9Bst%C3%AD&ut=u%20budovy%20po%C5%BE%C3%A1rn%C3%AD%20zbrojnice&ut=u%20budovy%20ZU%C5%A0&uc=9lga-xXOqpTtgWjgSvfYf&vlastni-body&z=16",
  },
  {
    id: 4,
    name: "Zahrada",
    adress: "u Nováků",
    link: "https://en.mapy.cz/s/nerosofeca",
  },
];

const Table = () => {
  return (
    <div className='flex flex-col items-center gap-2 py-6 mb-14 border border-r-transparent border-l-transparent border-t-[#ef8f895e] border-b-[#ef8f895e] rounded '>
      <div className='flex flex-row justify-between w-full px-6'>
        <h3 className='font-bold text-xl py-2 '>Místo</h3>
        <h3 className='font-bold text-xl py-2'>Adresa</h3>
        <h3 className='font-bold text-xl py-2'>Link</h3>
      </div>

      {adressData.map(({ id, name, adress, link }) => (
        <div
          key={id}
          className='flex flex-row justify-between w-full px-6'>
          <p className='text-sm md:text-lg'>{name}</p>
          <p className='text-sm md:text-lg'>{adress}</p>
          <p className='text-sm md:text-lg'>
            <Link
              href={link}
              className='underline decoration-pink-200 underline-offset-2 transition hover:text-[#ef8f895e]'>
              Adresa
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Table;
