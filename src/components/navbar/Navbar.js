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
      link: "/informace",
      name: "Informace",
    },
    {
      id: 3,
      link: "/program",
      name: "Program",
    },
    {
      id: 4,
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
    <>
      <div
        className={`fixed right-2 md:right-6 top-2 md:top-6 cursor-pointer z-50 ${
          nav ? "bg-[#f5f5f5]" : "bg-white"
        } rounded-full border border-slate-300`}>
        <Hamburger
          rounded
          size={18}
          distance='md'
          color='#415940'
          toggled={nav}
          toggle={setNav}
        />
      </div>
      <ul
        className={`${
          nav ? "flex" : "hidden"
        } flex-col justify-center items-start py-4 px-4 ease-in-out duration-300 ${
          nav ? "translate-x-0 " : "translate-x-full"
        } fixed z-40 top-4 ${
          nav ? "right-4" : "right-0"
        } w-50% sm:w-[50%] md:w-[40%] lg:w-[30%] rounded shadow-md shadow-gray-600 bg-white border border-gray-300 text-gray-100`}>
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className={`px-2 cursor-pointer text-center ${
              pathName === link ? "underline" : ""
            } font-extralight py-2 text-xl text-gray-600 hover:underline decoration-1 decoration-[--accent-color] underline-offset-2`}>
            <Link
              onClick={() => setNav(!nav)}
              href={link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
