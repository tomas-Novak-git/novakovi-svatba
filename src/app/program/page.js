import React from "react";
import Program from "../../components/Program/Program";
import Link from "next/link";
import Image from "next/image";
import background from "/public/flowers/background.png";
import leafs from "/public/flowers/leafs.png";
import Kontakt from "@/components/Kontakt";

export const metadata = {
  title: "Program | Novákovi",
};

const programData = [
  {
    id: 1,
    time: "12:30",
    program: "Příjezd",
  },
  {
    id: 2,
    time: "13:00",
    program: "Obřad",
  },
  {
    id: 3,
    time: "13:30",
    program: "Skupinové focení",
  },
  {
    id: 4,
    time: "14:00",
    program: "Malá scéna",
  },
  {
    id: 5,
    time: "14:10",
    program: "Raut",
  },
  {
    id: 6,
    time: "15:00",
    program: "Focení skupinek",
  },
  {
    id: 7,
    time: "15:30",
    program: "Krájení dortu",
  },
  {
    id: 8,
    time: "17:00",
    program: "První tanec",
  },
  {
    id: 9,
    time: "18:00",
    program: "Loes, Honza, Tom",
  },
  {
    id: 10,
    time: "18:30",
    program: "Stříhání stužek",
  },
  {
    id: 11,
    time: "19:30",
    program: "the.strýc",
  },
  {
    id: 12,
    time: "21:00",
    program: "Hra pro hosty",
  },
  {
    id: 13,
    time: "21:00 + ",
    program: "Volná zábava",
  },
];

const page = () => {
  return (
    <>
      <div className='min-h-[100dvh] relative w-full flex flex-col mt-8 gap-4 items-center'>
        <div className='relative'>
          <Image
            src={background}
            width={200}
            height={200}
            alt='background design'
            className='absolute  -z-30 top-2 left-2'
          />
          <h1 className='text-5xl my-20'>Program</h1>
        </div>
        {programData.map(({ id, time, program }) => (
          <Program
            key={id}
            time={time}
            program={program}
          />
        ))}
        <Kontakt />
        <Image
          src={leafs}
          width={600}
          height={600}
          alt='olive branch'
          className='-z-10 hidden sm:block bottom-0 -left-40 md:-left-28 lg:-left-12 absolute overflow-hidden opacity-10'
        />
      </div>
    </>
  );
};

export default page;
