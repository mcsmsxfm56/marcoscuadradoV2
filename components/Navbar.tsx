import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[86px] flex items-center justify-center w-full fixed top-0 z-[999]">
      <Link href={"/about"}>
        <p className="mr-3 hover:underline hover:underline-offset-8">About</p>
      </Link>
      <Link href={"/"}>
        <p className="mr-3 hover:underline hover:underline-offset-8">Home</p>
      </Link>
      <Link href={"/Marcos-Cuadrado-Resume-english.pdf"} target="_blank">
        <button className="bg-teal-600 rounded-md p-1">Resume</button>
      </Link>
    </div>
  );
}
