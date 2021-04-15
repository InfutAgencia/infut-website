import { Container, GlobalStyle } from "../components/layout/Layout.elements";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Infut" />
        <meta name="description" content="Infut Site" />
      </Head>
      <GlobalStyle />
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
