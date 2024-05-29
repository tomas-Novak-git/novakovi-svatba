import React from "react";
import Image from "next/image";
import naseFoto from "../../public/photo/my.png";
import Names from "../components/mainContent/Names";
import Info from "../components/mainContent/Info";
import topBranch from "../../public/flowers/background-top.png";
import botBranch from "../../public/flowers/background-bot.png";

export const metadata = {
  title: "Novákovi",
};

export default function Home() {
  return (
    <>
      <Image
        src={topBranch}
        width={800}
        height={500}
        alt='branch decoration'
        className='absolute top-0 opacity-50 right-0 -z-30'
        priority
      />
      <div className='h-[100dvh] max-w-[500px] mx-auto flex flex-col justify-center items-start py-8 bg-transparent'>
        <div className='flex flex-row w-full self-center justify-center'>
          <div className='relative self-center flex flex-col basis-4/5 items-center gap-2'>
            <Image
              unoptimized
              src={naseFoto}
              width={250}
              height={250}
              alt='Fotka nás'
              className='rounded-lg shadow-md shadow-black'
              priority
            />
            <p className='text-base pt-4'>Pozvánka na svatbu</p>
          </div>
        </div>
        <Names />
        <Info />
      </div>
      <Image
        src={botBranch}
        width={600}
        height={500}
        alt='branch decoration'
        className='absolute bottom-0 opacity-30 left-0 -z-30'
      />
    </>
  );
}
