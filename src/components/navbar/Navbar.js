"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      name: "Domů",
    },
    {
      id: 2,
      link: "/program",
      name: "Program",
    },
    {
      id: 3,
      link: "/ubytovani-parkovani",
      name: "Ubytování / Parkování",
    },
    {
      id: 5,
      link: "/kontakt",
      name: "Kontakt",
    },
  ];

  return (
    <div className='flex justify-between items-center h-16 w-full md:h-20 px-8 bg-[--primary-color] fixed nav'>
      <div>
        <h1 className='text-2xl md:text-5xl font-extralight tracking-tight text-[--secondary-color] ml-2'>
          <Link
            href='/'
            rel='noreferrer'>
            Svatba
          </Link>
        </h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className='nav-links px-4 cursor-pointer capitalize font-regular text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline'>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-100 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 right-0 w-[75%] h-screen bg-[--secondary-color] text-gray-100'>
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className='px-4 cursor-pointer text-center py-6 text-3xl'>
              <Link
                onClick={() => setNav(!nav)}
                href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

// const caveat = Caveat({
//   subsets: ["latin"],
//   variable: "--font-caveat",
// });
