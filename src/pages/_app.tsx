import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Source_Code_Pro } from "next/font/google"; //importar fuente de google fonts
import Navbar from "components/Navbar";
//_app.tsx recibe todas las pages al renderizarse y les aplica estilos globales
//o titulos como en mi caso
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] }); //fuente google font
//el subset es obligatorio
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marcos Cuadrado</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={sourceCodePro.className}>
        {
          //main className aplica la fuente a toda la pagina
        }
        <Navbar />
        <div className="mt-[86px]">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
