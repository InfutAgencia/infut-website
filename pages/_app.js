import { Container, GlobalStyle } from '../components/layout/Layout.elements';
import Navbar from '../components/navbar/Navbar';
import '../styles/globals.css';
import '../styles/fonts.css';
import Head from 'next/head';
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Infut" />
        <meta name="description" content="Infut Site" />
        {/* <link rel="alternate" hreflang="en" />
        <link rel="alternate" hreflang="en" /> */}
      </Head>
      <GlobalStyle />
      <GoogleAnalytics>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </GoogleAnalytics>
    </>
  );
}

export default App;
