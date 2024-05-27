import React from "react";
import Image from "next/image";
import Lines from "/public/flowers/lines.png";
import Paragraf from "@/components/mainContent/informace-components/Paragraf";
import Hotels from "@/components/mainContent/UP-components/Hotels";
import Link from "next/link";
import Kontakt from "@/components/Kontakt";

export const metadata = {
  title: "Ubytování | Novákovi",
};

const page = () => {
  return (
    <>
      <div className='pt-16 px-6 min-h-[100dvh] max-w-[750px] mx-auto bg-gradient-to-br flex flex-col items-start '>
        <div className='py-32 relative self-center'>
          <h1 className='text-4xl md:text-5xl'>Ubytování a Parkování</h1>
          <Image
            src={Lines}
            width={400}
            height={200}
            alt='background line decoration'
            className='absolute bottom-[5%] -z-[1] opacity-100'
          />
        </div>
        <article className='flex flex-col self-center items-start gap-6'>
          <Paragraf heading={"Ubytování"}>
            Nad hlavním sálem divadla se nachází taneční sál, kde je možné se
            ubytovat s vlastní karimatkou a spacákem. V omezeném počtu je také
            možnost využít herecké šatny. Ty disponují koupelnou a záchody,
            takže se po ránu určitě dokážete domluvit a prostřídat. Další
            možností je postavit vlastní stan v rámci zahrady MS, nebo "u
            Nováků" na zahradě. Není to tak daleko, využití záchodů také není
            problém.
          </Paragraf>
          <Paragraf>
            Pokud by někdo chtěl více komfortu a soukromí ke spaní, níže najdete
            seznam, kde si můžete vybrat z ubytovacích zařízení v Ústí.
            <br />
            Počítejte ale, že si ho musíte sami zajistit i uhradit.
            <br />
            <span className='font-semibold'>Děkujeme že to chápete.</span>
          </Paragraf>
          <Hotels />
        </article>
        <article className='flex flex-col self-center items-start gap-6'>
          <Paragraf heading={"Parkování"}>
            Přímo u scény je pouze pár parkovacích míst, které kvůli organizaci
            a celkovému průběhu dne potřebujeme využít my. Na tomto{" "}
            <Link
              href={"https://en.mapy.cz/s/labefobale"}
              className='font-semibold underline transition hover:decoration-[#ff20141f]'>
              ODKAZU
            </Link>{" "}
            naleznete nejbližší možná parkoviště. V sobotní poledne přestává
            povinnost placení až do pondělního rána.
          </Paragraf>
        </article>
        <Kontakt />
      </div>
    </>
  );
};

export default page;
