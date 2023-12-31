import Footer from "@/components/Footer";
import Navigationbar from "@/components/Navigationbar";

import { Html, Head, Main, NextScript } from "next/document";
import { favicon_512 } from "../../public/images/figures";

export default function Document() {
  return (
    <Html lang="dk">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          rel="shortcut icon"
          href="/favicon/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta
          name="Webdesam dit webbureau"
          content="Webdesam er webbureauret for den seriøse virksomhed, der ønkser en professional digital tilstædeværelse"
        ></meta>
        <title>Webdesam</title>
      </Head>
      <body className=" m-4">
        {/* <Navigationbar className=" z-10"></Navigationbar> */}
        <Main />
        <NextScript />
        <Footer></Footer>
      </body>
    </Html>
  );
}
