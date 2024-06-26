import React from "react";
import Paragraf from "@/components/mainContent/informace-components/Paragraf";
import Image from "next/image";
import Link from "next/link";
import Lines from "/public/flowers/lines.png";
import Table from "@/components/mainContent/informace-components/Table";
import Kontakt from "@/components/Kontakt";
import Divider from "/public/flowers/lineDivider.svg";
import leafs from "/public/flowers/leafs.png";
export const metadata = {
  title: "Informace | Novákovi",
};

const page = () => {
  return (
    <div className='min-h-[100dvh] px-6 mx-auto max-w-[750px] flex flex-col items-center justify-start'>
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
      <main className='flex flex-col'>
        <Table />
        <Paragraf heading={"Místo konání"}>
          Celé to začne na Mírovém náměstí v Ústí nad Orlicí v{" "}
          <Link
            target='_blank'
            href='https://en.mapy.cz/s/federedare'
            className='underline decoration-pink-200 underline-offset-2 transition hover:text-[#ef8f895e]'>
            Obřadní síni
          </Link>
          . Následně se přes focení v parku pod kostelem přesuneme do{" "}
          <Link
            target='_blank'
            href='https://msuo.cz/'
            className='underline decoration-pink-200 underline-offset-2 transition hover:text-[#ef8f895e]'>
            Malé scény
          </Link>
          , která je vzdálená 227m.
          <br /> <span className='italic'>To snad zvládneme ujít, ne?</span>
        </Paragraf>
        <Paragraf>
          V MS bude připravené občerstvení, hudba a program pro zbytek dne.{" "}
          <br />V záložce{" "}
          <Link
            href='/program'
            className='underline decoration-pink-200 underline-offset-2 transition hover:text-[#ef8f895e]'>
            Program
          </Link>{" "}
          naleznete časový harmonogram. <br />{" "}
          <span className='mt-2'>
            Jelikož přímo u scény není možné parkovat, v odkazech nahoře jsou
            možnosti parkování, které jsou v sobotu od 12:00 zdarma a ve
            vzdálenosti do 5 minut chůze od MS.
          </span>
        </Paragraf>
        <Image
          src={Divider}
          alt='line divider'
          height={75}
          width={150}
          className='self-center pt-12'
        />
        <Paragraf heading={"Dress code"}>
          Nevěsta má bílý šaty a DIY sandály, ženich si bere i na obřad
          conversky(nejspíš). Nepotřebujeme vypadat jak ze svatebního magazínu,
          hlavně abychom si to užili a cítili se celou dobu komfortně. Pokud
          dámy preferují vysoké lodičky a super fancy róby a pánové oblek,
          klidně si je vezměte. My je ale po Vás nevyžadujeme. <br />
          PS: Na Malé scéně je případně k dispozici zázemí, kde se budete moct
          kdykoliv převléct do čehokoliv.
        </Paragraf>
        <Image
          src={Divider}
          alt='line divider'
          height={75}
          width={150}
          className='self-center pt-12'
        />
        <Paragraf heading={"Děti a psi"}>
          Chceme si svoji (snad!!!) jen jednu svatbu v životě společně s Vámi
          užít fakt naplno. Proto jsme se rozhodli pro svatbu jen s dospěláky,
          bez dětí. Výjimku má pouze nejbližší rodina. Díky, že to budete
          respektovat.
        </Paragraf>
        <Paragraf>
          Co se týče psích mazlíčků, ty nechte, prosím, taky doma. Bez jakékoliv
          výjimky. Naše hyperaktivní a lidi milující (pejsky bohužel not so
          much) fenka Korinka bude ve scéně přítomná po celou dobu s námi. A
          poslední, co v tenhle náš den chceme řešit, jsou natržený psí uši a
          návštěva veteriny.
        </Paragraf>
        <Paragraf>
          <span className='italic font-semibold'>
            Moc děkujeme, že respektujete naše rozhodnutí a zařídíte se podle
            nich.
          </span>
        </Paragraf>
        <Image
          src={Divider}
          alt='line divider'
          height={75}
          width={150}
          className='self-center pt-12'
        />
        <Paragraf heading={"Dary"}>
          Pokud byste nás chtěli poctít svatebním darem, budeme vděčni za
          finanční příspěvek v obálce, který bude z praktických důvodů vhodnější
          než věcné dary. Děkujeme!
        </Paragraf>
        <Kontakt />
        <Image
          src={leafs}
          width={400}
          height={400}
          alt='olive branch'
          className='-z-10 hidden sm:block bottom-0 -left-40 md:-left-28 lg:-left-12 absolute overflow-hidden opacity-10'
          priority
        />
      </main>
    </div>
  );
};

export default page;
