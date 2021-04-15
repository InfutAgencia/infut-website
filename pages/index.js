import Head from "next/head";
import InstagramSection from "../components/instagram-section/InstagramSection";
import IntroSection from "../components/intro-section/IntroSection";
import MisionsSection from "../components/misions-section/MisionsSection";
import ServicesSection from "../components/services-section/ServicesSection";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" type="favicon/ico" href="/infut.ico" />
        <title>Home</title>
      </Head>
      <IntroSection />
      <ServicesSection />
      <MisionsSection />
      <InstagramSection />
    </div>
  );
}
