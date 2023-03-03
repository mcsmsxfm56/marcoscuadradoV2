import Image from "next/image";
import items from "../../public/Items.json";
export default function About() {
  return (
    <div className="mt-[86px] bg-slate-900 min-h-screen">
      <div className="flex">
        <div className="flex-col">
          <p>{items.items.about.description}</p>
        </div>
        <Image
          src={"/images/fotoperfil.jpg"}
          height={221} // Desired size with correct aspect ratio
          width={156} // Desired size with correct aspect ratio
          alt="Profile photo"
          className="rounded-md"
        />
      </div>

      <ul className="flex flex-col items-center list-disc">
        Tech skills:
        {items.items.about.tech.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
      <div className="flex flex-col items-center">
        <button className="bg-teal-600 rounded-md p-1 mb-3 w-[200px] mt-3">
          <a
            href="mailto:mcuadrado135@gmail.com"
            target="_blank"
            className="bg-teal-600"
          >
            Send me an email
          </a>
        </button>
        <button className="bg-teal-600 rounded-md p-1 mb-3 w-[200px]">
          <a
            href="https://www.linkedin.com/in/marcos-cuadrado-984791261/"
            target="_blank"
            className="bg-teal-600"
          >
            Linkedin
          </a>
        </button>
        <button className="bg-teal-600 rounded-md p-1 mb-3 w-[200px]">
          <a
            href="https://github.com/mcsmsxfm56"
            target="_blank"
            className="bg-teal-600"
          >
            Github
          </a>
        </button>
      </div>
    </div>
  );
}
