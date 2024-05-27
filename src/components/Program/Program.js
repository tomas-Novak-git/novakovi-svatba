import React from "react";

const Program = ({ time, program }) => {
  return (
    <div className='flex flex-row justify-between items-end max-w-[600px] min-w-[300px] self-center pb-3 pt-2 px-2 rounded-md bg-slate-200 bg-opacity-30 shadow-sm'>
      <h3 className='text-2xl'>{time}</h3>
      <h3 className='text-xl'>{program}</h3>
    </div>
  );
};

export default Program;
