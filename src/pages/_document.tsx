import { Html, Head, Main, NextScript } from "next/document";
//_document es como _app pero para el elemento head
//<Main /> y <NextScript /> son necesarios para el funcionamiento de la pagina, NO TOCAR!!!
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Portfolio of web developer Marcos Cuadrado"
        />
        <link rel="icon" href="/logomarcos.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
