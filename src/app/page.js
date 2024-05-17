import React from "react";
import Image from "next/image";
import naseFoto from "../../public/photo/my.png";
import branch from "../../public/flowers/branch-half.png";
import leafs from "../../public/flowers/leafs.png";
import Names from "@/components/mainContent/Names";
import Info from "@/components/mainContent/Info";
import Navbar from "@/components/navbar/Navbar";
export const metadata = {
  title: "Novákovi",
};

export default function Home() {
  return (
    <>
      <div className='max-h-screen w-[500px] mx-auto flex flex-col justify-start items-start py-12 bg-transparent'>
        <div className='flex flex-row w-full self-start justify-between'>
          <div className='flex flex-col items-start gap-6 px-4 border-l-2 border-gray-200'>
            <p className='text-5xl'>20</p>
            <p className='text-5xl'>07</p>
            <p className='text-5xl'>24</p>
          </div>
          <div className='relative self-start flex flex-col items-center gap-2'>
            <Image
              unoptimized
              src={naseFoto}
              width={300}
              height={300}
              alt='Fotka nás'
              className='rounded-lg shadow-md shadow-black'
            />
            <p className='text-base pt-4'>Pozvánka na svatbu</p>
          </div>
          <div className='w-[83px]'></div>
        </div>
        <Names />
        <Info />
        <Image
          src={branch}
          width={200}
          height={200}
          alt='olive branch'
          className='-z-20 hidden md:flex md:right-8 lg:right-28  absolute top-8 opacity-75'
        />
        <Image
          src={leafs}
          width={400}
          height={400}
          alt='olive branch'
          className='-z-10 bottom-0 -left-40 md:-left-28 lg:-left-12 absolute overflow-hidden opacity-10'
        />
      </div>
    </>
  );
}
