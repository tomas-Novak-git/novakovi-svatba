import React from "react";
import Image from "next/image";
import Avatars from "@/components/Avatars/Avatars";
import topBranch from "/public/flowers/background-top.png";
import botBranch from "/public/flowers/background-bot.png";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Kontakt | Novákovi",
};

const page = () => {
  return (
    <>
      <Image
        src={topBranch}
        width={800}
        height={500}
        alt='branch decoration'
        className='absolute top-0 opacity-50 right-0 -z-30'
      />
      <main className='px-6 min-h-[100dvh] flex flex-col items-start justify-center'>
        <h1 className='pb-8 pt-8 text-4xl md:text-5xl self-center font-semibold text-black underline decoration-1 decoration-[--accent-color] underline-offset-8'>
          Kontakt
        </h1>
        <Avatars />
        <div className='self-center'>
          <h3 className='italic text-2xl md:text-5xl py-2 md:py-8 px-8 text-black drop-shadow-md shadow[--accent-color] rounded-sm '>
            Moc se na Vás těšíme!
          </h3>
        </div>
      </main>
      <Image
        src={botBranch}
        width={600}
        height={500}
        alt='branch decoration'
        className='absolute bottom-0 opacity-30 left-0 -z-30'
      />
      <Footer />
    </>
  );
};

export default page;
