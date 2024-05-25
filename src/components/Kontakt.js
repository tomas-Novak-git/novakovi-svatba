import React from "react";
import Link from "next/link";

const Kontakt = () => {
  return (
    <div className='my-20 py-4 px-2 relative w-full bg-[#ef8f895e]'>
      <p className='text-center text-wrap text-xl'>
        V případě jakéhokoliv dotazu se na nás obraťe skrze
        <Link
          href={"/kontakt"}
          className='underline decoration-white underline-offset-4 cursor-pointer px-1 py-1 transition hover:bg-[--primary-color] hover:text-white'>
          Kontakt
        </Link>
        .
      </p>
    </div>
  );
};

export default Kontakt;
