import React from "react";
import Image from "next/image";
import Avatars from "@/components/Avatars/Avatars";
import topBranch from "/public/flowers/background-top.png";
import botBranch from "/public/flowers/background-bot.png";

export const metadata = {
  title: "Kontakt | Novákovi",
};

const page = () => {
  return (
    <>
      <Image
        src={topBranch}
        width={1024}
        height={500}
        alt='branch decoration'
        className='absolute top-0 right-0 -z-30'
      />
      <main className='px-6 min-h-[100dvh] flex flex-col items-start justify-center'>
        <h1 className='pb-8 text-5xl self-center font-semibold text-black underline decoration-1 decoration-[--accent-color] underline-offset-8'>
          Kontakt
        </h1>
        <Avatars />
        <div className='self-center'>
          <h3 className='italic text-2xl md:text-5xl py-8 px-9 text-black drop-shadow-md shadow[--accent-color] rounded-lg  bg-white bg-opacity-65'>
            Moc se na Vás těšíme!
          </h3>
        </div>
      </main>
      <Image
        src={botBranch}
        width={1024}
        height={500}
        alt='branch decoration'
        className='absolute bottom-0 left-0 -z-30'
      />
    </>
  );
};

export default page;
