import Image from "next/image";

export default function About() {
  return (
    <div className="mt-[86px] bg-slate-900 min-h-screen">
      <div className="flex">
        <div className="flex-col">
          <p>
            Hello! My name is Marcos and i enjoy developing web pages that are
            fast and easy to use. My interesting in coding begin in 2015
            learning some HTML and CSS but i left it for a couple years and
            returned to coding in henry bootcamp in 2022.
          </p>{" "}
          <p>
            Since i finished the bootcamp in 2023 im looking to get a job as
            front-end developer and develop more projects for my portfolio
          </p>
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
        Tech skills: <li>Javascript</li> <li>Typescript</li>{" "}
        <li>Tailwind CSS</li> <li>Firebase auth</li>
        <li>PostgreSQL</li> <li>SQL</li> <li>MongoDB</li> <li>Mongoose</li>{" "}
        <li>Sequelize</li> <li>Redux Toolkit</li> <li>Redux Persistance</li>{" "}
        <li>React</li> <li>Express</li>
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
