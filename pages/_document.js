import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOsrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;400;500&family=Proza+Libre:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
