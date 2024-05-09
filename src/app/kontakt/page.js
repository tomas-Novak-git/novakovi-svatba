import React from "react";

import Avatars from "@/components/Avatars/Avatars";

export const metadata = {
  title: "Kontakt | Novákovi",
};

const page = () => {
  return (
    <main className='pt-16 px-6 min-h-[100dvh] bg-gradient-to-br from-slate-50 via-slate-50 to-[--accent-color-opa] flex flex-col items-start justify-center'>
      <h1 className='self-center py-8 text-2xl font-regular text-[--secondary-color] underline decoration-1 decoration-[--accent-color] underline-offset-2'>
        Kontakt
      </h1>
      <article className='bg-[--primary-color-opa] self-center p-6 text-lg rounded-es-lg rounded-se-lg shadow'>
        <h2>Na něco jsme zapomněli?</h2>
        <h3>Nebo máte ještě doplňující dotaz?</h3>
        <p className='text-md font-extralight pt-4'>
          Rádi vše zodpovíme buď my s Haničkou, nebo naši skvělí svědci Emička a
          Honza.
        </p>
      </article>
      <Avatars />
      <div className='self-center'>
        <h3 className=' text-2xl py-8 text-[--secondary-color] drop-shadow-md shadow[--accent-color]'>
          Moc se na Vás těšíme!
        </h3>
      </div>
    </main>
  );
};

export default page;
