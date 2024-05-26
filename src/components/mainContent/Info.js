import React from "react";

const Info = () => {
  return (
    <div className='flex flex-col self-center items-center gap-1 mt-4 bg-white px-2 pb-2'>
      <p className='text-base md:text-lg ml-4'>červenec</p>

      <div className='flex flex-row justify-evenly items-center gap-4'>
        <p className='border-b-[1px] border-t-[1px] text-lg md:text-xl border-gray-600 px-2'>
          sobota
        </p>
        <p className='text-[#F8B200] text-3xl md:text-4xl mb-3'>20</p>
        <p className='border-b-[1px] border-t-[1px] text-lg md:text-xl border-gray-600 px-2'>
          13:00
        </p>
      </div>
      <p className='text-lg ml-4'>2024</p>
    </div>
  );
};

export default Info;
