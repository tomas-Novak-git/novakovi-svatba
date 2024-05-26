import React from "react";
import Rings from "./Rings";
const Info = () => {
  return (
    <>
      <div className='flex flex-col self-center pt-4 max-w-[500px]'>
        <div className='flex flex-col items-center justify-center self-center'>
          <h2 className='text-2xl md:text-4xl text-gray-700'>Hanka</h2>
          <p className='text-xl md:text-2xl'>&</p>
          <h2 className='text-2xl md:text-4xl text-gray-700'>Tomáš</h2>
        </div>
        <h3 className='italic text-4xl md:text-5xl mt-2 self-center'>
          Novákovi
        </h3>
      </div>
    </>
  );
};

export default Info;
