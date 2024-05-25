import React from "react";

const Paragraf = ({ children, heading }) => {
  return (
    <article className='px-4'>
      <h2 className='py-8 text-4xl underline underline-offset-8 decoration-[#ef8f895e]'>
        {heading}
      </h2>
      <p className='max-w-[50ch] text-wrap text-md md:text-lg text tracking-wide font-normal'>
        {children}
      </p>
    </article>
  );
};

export default Paragraf;
