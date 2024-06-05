import Link from "next/link";
import Image from "next/image";
import error from "../../public/404/giphy.gif";

export const metadata = {
  title: "Novákovi | 404 Chyba",
};

export default function NotFound() {
  return (
    <div className='h-[100dvh] max-w-[500px] mx-auto flex flex-col justify-center items-center py-8 bg-transparent'>
      <h1 className='text-red-800 text-4xl pb-4'>Fakin error: 404</h1>
      <Image
        src={error}
        alt='error 404'
        width={250}
        height={250}
      />
      <h2 className='py-4 text-xl'>Ale no tak Pavle, co tady děláš?</h2>
      <p className='text-xl'>Mazej zpátky a přestaň hledat díry.</p>
      <Link
        href='/'
        className='bg-slate-700 text-white py-2 px-4 mt-4'>
        Zpět
      </Link>
    </div>
  );
}
