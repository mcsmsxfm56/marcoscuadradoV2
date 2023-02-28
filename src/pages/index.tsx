import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <p className="text-teal-600 ml-6">Hello, my name is</p>
      <p className="text-6xl ml-6">Marcos Cuadrado.</p>
      <p className="text-5xl text-gray-600 ml-6">
        And im a front-end developer
      </p>
      <p className="ml-6">
        with experience building ecommerce's currently looking for work
      </p>
    </div>
  );
}
