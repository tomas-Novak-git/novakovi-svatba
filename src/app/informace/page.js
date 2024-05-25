import React from "react";
import Paragraf from "@/components/mainContent/informace-components/Paragraf";
import Image from "next/image";
import Link from "next/link";
import Lines from "/public/flowers/lines.png";
import Table from "@/components/mainContent/informace-components/Table";
import Kontakt from "@/components/Kontakt";

export const metadata = {
  title: "Informace | Novákovi",
};

const page = () => {
  return (
    <div className='min-h-[100dvh] mx-auto max-w-[750px] flex flex-col items-center justify-start'>
      <div className='py-32 relative'>
        <h1 className='text-4xl md:text-5xl'>Informace</h1>
        <Image
          src={Lines}
          width={400}
          height={200}
          alt='background line decoration'
          className='absolute bottom-[25%] -z-[1] opacity-100'
        />
      </div>
      <main>
        <Table />
        <Paragraf heading={"Místo konání"}>
          Celé to začne na Mírovém náměstí v Ústí nad Orlicí v{" "}
          <Link
            href='https://en.mapy.cz/s/federedare'
            className='underline decoration-pink-200 underline-offset-2 transition hover:text-[#ef8f895e]'>
            Obřadní síni
          </Link>
          . Následně se přes focení v parku pod kostelem přesuneme do{" "}
          <Link
            href='https://msuo.cz/'
            className='underline decoration-pink-200 underline-offset-2 transition hover:text-[#ef8f895e]'>
            Malé Scény
          </Link>
          , která je vzdálená 227m.
          <br /> To snad zvládneme ujít, ne?
          <br /> V MS bude připravené občerstvení, hudba a program pro zbytek
          dne. <br />V záložce{" "}
          <Link
            href='/program'
            className='underline decoration-pink-200 underline-offset-2 transition hover:text-[#ef8f895e]'>
            Program
          </Link>{" "}
          naleznete časový harmonogram. <br />{" "}
          <span className='mt-2'>
            Jelikož přímo u Scény není možné parkovat, v odkazech jsou možnosti
            parkování které jsou v sobotu od 12:00 zdarma a ve vzdálenosti do 5
            minut chůze od MS.
          </span>
        </Paragraf>
        <Paragraf heading={"Dress code"}>
          Nevěsta má bílý šaty a DIY sandály, ženich si bere i na obřad
          conversky. Nepotřebujeme vypadat jak ze svatebního magazínu, hlavně
          abychom si to užili a cítili se celou dobu komfortně. Pokud dámy
          preferují vysoké lodičky a super fancy róby a pánové oblek, klidně si
          je vezměte. My je ale po Vás nevyžadujeme. <br />
          PS: Na Malé scéně je případně k dispozici zázemí, kde se budete moct
          kdykoliv převléct do čehokoliv.
        </Paragraf>
        <Paragraf heading={"Děti a zvířata"}>
          Oslavu naší svatby si hlavně chceme užít s Vámi a chtěli bychom Vás
          proto požádat, aby Vaše ratolesti vyrazily k prarodičům/tetám a Vy se
          tak mohli naplno oddat svatbnímu veselí.
          <br />S námi jde do společného života také naše Korinka, která se
          úplně nemusí s ostatními psy, za to miluje lidi. Proto Vás prosíme,
          nechte své chlupáče doma, jelikož bychom ji chtěli mít ve Scéně s námi
          a neřešit nějaké rozbroje.
        </Paragraf>
        <Paragraf heading={"Dary"}>
          Pokud byste nás chtěli poctít svatebním darem, budeme vděčni za
          finanční příspěvek v obálce, který bude z praktických důvodů vhodnější
          než věcné dary. Děkujeme!
        </Paragraf>
        <Kontakt />
      </main>
    </div>
  );
};

export default page;
