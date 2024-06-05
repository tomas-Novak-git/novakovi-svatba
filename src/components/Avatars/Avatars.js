import React from "react";
import Image from "next/image";
import haniPic from "/public/Hanicka.png";
import tomPic from "/public/Tom.png";
import emiPic from "/public/emicka.png";
import hansPic from "/public/Hans.png";

const Avatars = () => {
  return (
    <article className='flex flex-col md:flex-row justify-center w-auto rounded-md self-center gap-6 py-4 px-6 bg-white bg-opacity-65'>
      <div className='flex  flex-col flex-wrap gap-4'>
        <div className='flex flex-row items-center justify-center relative z-0'>
          <Image
            priority
            src={haniPic}
            width={100}
            height={100}
            alt='Hanička'
            className='rounded-full border-2 border-[--accent-color] shadow-lg shadow-slate-300'
          />
          <div className='flex flex-col items-start pl-4'>
            <p className='text-2xl'>Hanička</p>
            <p className='text-lg pt-2 self-center font-extralight'>
              +420 777 296 180
            </p>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center relative z-0'>
          <Image
            priority
            src={tomPic}
            width={100}
            height={100}
            alt='Tomík'
            className='rounded-full border-2 border-[--accent-color] shadow-lg shadow-slate-300'
          />
          <div className='flex flex-col items-start pl-4'>
            <p className='text-2xl'>Tom</p>
            <p className='text-lg pt-2 self-center font-extralight'>
              +420 721 538 380
            </p>
          </div>
        </div>
      </div>
      <div className='flex  flex-col flex-wrap gap-4'>
        <div className='flex flex-row items-center justify-center relative z-0'>
          <Image
            priority
            src={emiPic}
            width={100}
            height={100}
            alt='Emička'
            className='rounded-full border-2 border-[--accent-color] shadow-lg shadow-slate-300'
          />
          <div className='flex flex-col items-start pl-4 '>
            <p className='text-2xl'>Emička</p>
            <p className='text-lg pt-2 self-center font-extralight'>
              +420 725 874 612
            </p>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center relative z-0'>
          <Image
            priority
            src={hansPic}
            width={100}
            height={100}
            alt='Honza'
            className='rounded-full border-2 border-[--accent-color] shadow-lg shadow-slate-300'
          />
          <div className='flex flex-col items-start pl-4'>
            <p className='text-2xl'>Honza</p>
            <p className='text-lg pt-2 self-center font-extralight'>
              +420 737 638 802
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Avatars;
