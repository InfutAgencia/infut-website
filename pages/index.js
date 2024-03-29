import Head from 'next/head';
import AboutUsSection from '../components/about-us-section/AboutUsSection';
import ContactForm from '../components/ContactForm/ContactForm';
import InstagramSection from '../components/instagram-section/InstagramSection';
import IntroSection from '../components/intro-section/IntroSection';
import MisionsSection from '../components/misions-section/MisionsSection';
import Navbar from '../components/navbar/Navbar';
import ServicesSection from '../components/services-section/ServicesSection';
import { getInstagramPosts } from '../lib/Instagram API/getPosts';
import { getInfutProjects } from '../lib/Projects/getInfutProjects';
const Home = ({ instagramPosts, projects }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Infut Site" />
        <title>Infut</title>
        <link rel="icon" type="favicon/ico" href="/infut.ico" />
      </Head>

      <Navbar />
      <IntroSection />
      <AboutUsSection />
      <ServicesSection />
      <MisionsSection projects={projects} />
      <InstagramSection instagramPosts={instagramPosts} />
      <ContactForm />
    </>
  );
};

export default Home;

export async function getServerSideProps({ locale }) {
  const { posts } = await getInstagramPosts();
  const { projects } = await getInfutProjects();
  return {
    props: {
      instagramPosts: posts,
      projects
    }
  };
}
