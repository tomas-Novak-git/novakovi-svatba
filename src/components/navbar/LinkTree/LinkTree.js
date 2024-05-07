"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinkTree = () => {
  const pathName = usePathname();
  return (
    <ul className='absolute z-10 right-0 w-[50%] h-[100%] flex flex-col px-4 gap-4 items-center'>
      <li>
        <Link
          className={pathName === "/" ? "underline" : "hover:text-slate-50"}
          href='/'>
          Home
        </Link>
      </li>
      <li>
        <Link
          className={
            pathName === "/ubytovani" ? "underline" : "hover:text-slate-50"
          }
          href='/ubytovani'>
          Ubytování
        </Link>
      </li>
      <li>
        <Link
          className={
            pathName === "/program" ? "underline " : "hover:text-slate-50"
          }
          href='/program'>
          Program
        </Link>
      </li>
    </ul>
  );
};

export default LinkTree;
