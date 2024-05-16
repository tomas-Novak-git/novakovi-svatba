import React from "react";
import Rings from "./Rings";
const Info = () => {
  return (
    <>
      <div className='flex flex-col self-center pt-4 w-[500px]'>
        <div className='flex flex-col items-start justify-center self-center'>
          <h2 className='text-[40px] text-gray-700'>Hanka</h2>
          <p className='text-2xl ml-7'>&</p>
          <h2 className='text-[40px] text-gray-700'>Tomáš</h2>
        </div>
        <h3 className='italic text-5xl mt-2 self-center'>Novákovi</h3>
      </div>
    </>
  );
};

export default Info;
