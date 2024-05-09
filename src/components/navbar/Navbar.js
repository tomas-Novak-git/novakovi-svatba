"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const pathName = usePathname();
  const links = [
    {
      id: 1,
      link: "/",
      name: "Hl. Stránka",
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
    <div className='flex justify-between items-center h-16 w-full md:h-18 px-6 bg-[--primary-color-opa] absolute z-50 '>
      <div>
        <h1 className='text-2xl cursor-pointer md:text-4xl font-extralight tracking-tight text-[--secondary-color]'>
          <Link
            href='/'
            rel='noreferrer'>
            Novákovi
          </Link>
        </h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className={`px-2 lg:px-4 ${
              pathName === link ? "underline" : ""
            } cursor-pointer capitalize font-extralight text-lg lg:text-xl text-gray-700 hover:text-green-900 hover:underline decoration-2 decoration-[--accent-color] underline-offset-2
            duration-200`}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
      <div className='absolute right-4 cursor-pointer z-50 md:hidden'>
        <Hamburger
          rounded
          size={24}
          distance='sm'
          color={nav ? "#ffffff" : "#415940"}
          toggled={nav}
          toggle={setNav}
        />
      </div>
      <ul
        className={`flex flex-col justify-center items-center ease-in-out duration-300 ${
          nav ? "translate-x-0 " : "translate-x-full"
        } fixed z-40 top-0 right-0 w-[75%] h-screen bg-[--secondary-color-opa] text-gray-100`}>
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className={`px-2 cursor-pointer text-center ${
              pathName === link ? "underline" : ""
            } font-extralight py-2 text-xl hover:underline decoration-1 decoration-[--accent-color] underline-offset-2`}>
            <Link
              onClick={() => setNav(!nav)}
              href={link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

// const caveat = Caveat({
//   subsets: ["latin"],
//   variable: "--font-caveat",
// });
