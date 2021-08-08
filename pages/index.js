import Head from "next/head";
import AboutUsSection from "../components/about-us-section/AboutUsSection";
import ContactForm from "../components/ContactForm/ContactForm";
import InstagramSection from "../components/instagram-section/InstagramSection";
import IntroSection from "../components/intro-section/IntroSection";
import MisionsSection from "../components/misions-section/MisionsSection";
import ServicesSection from "../components/services-section/ServicesSection";
import { getInstagramPosts } from "../lib/Instagram API/getPosts";
import { getInfutProjects } from "../lib/Projects/getInfutProjects";

export default function Home({ instagramPosts, projects }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="favicon/ico" href="/infut.ico" />
        <title>Infut</title>
      </Head>
      <IntroSection />
      <AboutUsSection />
      <ServicesSection />
      <MisionsSection projects={projects} />
      <InstagramSection instagramPosts={instagramPosts} />
      <ContactForm />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { posts } = await getInstagramPosts();
  const { projects } = await getInfutProjects();
  return {
    props: {
      instagramPosts: posts,
      projects,
    },
  };
}
