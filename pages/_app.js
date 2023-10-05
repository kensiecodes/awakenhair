import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Awaken Hair | Kensie Jack</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
