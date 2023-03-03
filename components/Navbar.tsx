import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { locale, locales, push, asPath } = useRouter();
  //console.log(asPath); string / o /about
  const handleClick = () => {
    if (locale == "en-US") {
      push(asPath, undefined, { locale: locales![1] });
    }
    if (locale == "es-ES") {
      push(asPath, undefined, { locale: locales![0] });
    }
  };
  //locales es un array ['en-US', 'es-ES']
  //locale te dice cual es el actual idioma, puede ser 'en-US' o 'es-ES'
  return (
    <div className="h-[86px] flex items-center justify-center w-full fixed top-0 z-[999]">
      <Link href={"/about"}>
        <p className="mr-3 hover:underline hover:underline-offset-8">
          {locale == "en-US" ? "About" : "Sobre mi"}
        </p>
      </Link>
      <Link href={"/"}>
        <p className="mr-3 hover:underline hover:underline-offset-8">
          {locale == "en-US" ? "Home" : "Inicio"}
        </p>
      </Link>
      <Link
        href={
          locale == "en-US"
            ? "/Marcos-Cuadrado-Resume-english.pdf"
            : "/Marcos-Cuadrado-Curriculum-espanol.pdf"
        }
        target="_blank"
      >
        <button className="bg-teal-600 rounded-md p-1 mr-3">
          {locale == "en-US" ? "Resume" : "Curriculum"}
        </button>
      </Link>
      <button
        className="bg-teal-600 rounded-md p-1 mr-3"
        onClick={() => {
          handleClick();
        }}
      >
        {locale == "en-US" ? "Español" : "English"}
      </button>
    </div>
  );
}
