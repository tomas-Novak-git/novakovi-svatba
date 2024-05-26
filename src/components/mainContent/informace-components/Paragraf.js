import React from "react";

const Paragraf = ({ children, heading }) => {
  return (
    <article className='px-4'>
      {heading === undefined ? (
        ""
      ) : (
        <h2 className='py-8 text-4xl underline underline-offset-8 decoration-[#ff20141f]'>
          {heading}
        </h2>
      )}
      <p className='max-w-[50ch] py-4 text-wrap text-md md:text-lg text tracking-wide font-normal'>
        {children}
      </p>
    </article>
  );
};

export default Paragraf;
