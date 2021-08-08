import { Container, GlobalStyle } from "../components/layout/Layout.elements";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Infut" />
        <meta name="description" content="Infut Site" />
      </Head>
      <GlobalStyle />
      <Navbar />

      <GoogleAnalytics>
        <Component {...pageProps} />
      </GoogleAnalytics>
    </>
  );
}

export default MyApp;
