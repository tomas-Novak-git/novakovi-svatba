import React from "react";
import Image from "next/image";
import haniPic from "/public/Hanicka.jpeg";
import tomPic from "/public/Tom.png";

const Avatars = () => {
  return (
    <article className='flex flex-wrap justify-evenly w-full self-center gap-3 py-4'>
      <div className='flex flex-col items-center justify-center relative z-0'>
        <p>Hanička</p>
        <Image
          src={haniPic}
          width={100}
          height={100}
          alt='Hanička'
          className='rounded-full border-2 border-[--accent-color] drop-shadow-lg shadow-[--accent-color]'
        />
        <p className='text-sm pt-2 font-extralight'>+420 777 296 180</p>
      </div>
      <div className='flex flex-col items-center justify-center relative z-0'>
        <p>Tom</p>
        <Image
          src={tomPic}
          width={100}
          height={100}
          alt='Tom'
          className='rounded-full drop-shadow-lg border-2 border-[--accent-color] shadow-[--accent-color]'
        />
        <p className='text-sm pt-2 font-extralight'>+420 721 538 380</p>
      </div>
      <div className='flex flex-col items-center justify-center relative z-0'>
        <p>Emička</p>
        <Image
          src={haniPic}
          width={100}
          height={100}
          alt='Emička'
          className='rounded-full drop-shadow-lg border-2 border-[--accent-color] shadow-[--accent-color]'
        />
        <p className='text-sm pt-2  font-extralight'>+420 725 874 612</p>
      </div>
      <div className='flex flex-col items-center justify-center relative z-0'>
        <p>Honza</p>
        <Image
          src={haniPic}
          width={100}
          height={100}
          alt='Hanička'
          className='rounded-full z-0 drop-shadow-lg border-2 border-[--accent-color] shadow-[--accent-color]'
        />
        <p className='text-sm pt-2  font-extralight'>+420 737 638 802</p>
      </div>
    </article>
  );
};

export default Avatars;
