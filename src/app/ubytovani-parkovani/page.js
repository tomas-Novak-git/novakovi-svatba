import React from "react";

export const metadata = {
  title: "Ubytování | Novákovi",
};

const page = () => {
  return (
    <>
      <div className='pt-16 px-6 min-h-[100dvh] bg-gradient-to-br from-slate-50 via-slate-50 to-[--accent-color-opa] flex flex-col items-start '>
        <h1 className='text-2xl font-bold py-6 self-center'>
          Ubytování a Parkování
        </h1>
        <article className='flex flex-col self-center items-start gap-6  '>
          <h2 className='text-xl'>Ubytování</h2>
          <p className='max-w-[50ch]'>
            Nad hlavním sálem divadla se nachází taneční sál, kde je možné se
            ubytovat s vlastní karimatkou a spacákem. V omezeném počtu je také
            možnost využít herecké šatny. Ty disponují koupelnou a záchody,
            takže se po ránu určitě dokážete domluvit a prostřídat.
          </p>
          <p className='max-w-[50ch] md:self-end'>
            Pokud by někdo nezvládl hromadné bydlení či spacák, níže najdete
            seznam možných ubytování v Ústí.
            <br /> V tom případě si však spaní musíte uhradit samy. Doufáme že
            to chápete.
          </p>
        </article>
      </div>
    </>
  );
};

export default page;
