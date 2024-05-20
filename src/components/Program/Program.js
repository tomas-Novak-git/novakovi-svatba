import React from "react";

const Program = ({ time, program }) => {
  return (
    <div className='flex flex-row justify-between items-end max-w-[600px] min-w-[300px] self-center py-3 px-2 rounded-md bg-slate-100 bg-opacity-50'>
      <h3 className='text-2xl'>{time}</h3>
      <h3 className='text-xl'>{program}</h3>
    </div>
  );
};

export default Program;
