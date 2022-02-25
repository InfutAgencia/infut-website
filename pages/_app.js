import { GlobalStyle } from '../components/layout/Layout.elements';
import '../styles/globals.css';
import '../styles/fonts.css';
import Head from 'next/head';
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Infut" />
        <meta name="description" content="Infut Site" />
      </Head>
      <GlobalStyle />
      <GoogleAnalytics>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        <WhatsAppButton />
      </GoogleAnalytics>
    </>
  );
}

export default App;
