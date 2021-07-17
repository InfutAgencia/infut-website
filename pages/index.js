import Instagram from "instagram-web-api";
import Head from "next/head";
import AboutUsSection from "../components/about-us-section/AboutUsSection";
import ContactForm from "../components/ContactForm/ContactForm";
import InstagramSection from "../components/instagram-section/InstagramSection";
import IntroSection from "../components/intro-section/IntroSection";
import MisionsSection from "../components/misions-section/MisionsSection";
import ServicesSection from "../components/services-section/ServicesSection";

export default function Home({ instagramPosts, projects }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="favicon/ico" href="/infut.ico" />
        <title>Home</title>
      </Head>
      <IntroSection />
      {/* <AboutUsSection /> */}
      <ServicesSection />
      <MisionsSection />
      <InstagramSection instagramPosts={instagramPosts} />
      <ContactForm />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const client = new Instagram({
    username: process.env.NEXT_PUBLIC_INSTAGRAM_USER,
    password: process.env.NEXT_PUBLIC_INSTAGRAM_PASS,
  });

  let posts = [];
  try {
    const data = await client.getPhotosByUsername({
      username: process.env.NEXT_PUBLIC_INSTAGRAM_USER,
    });
    if (data.user.edge_owner_to_timeline_media.count > 0) {
      posts = [
        data.user.edge_owner_to_timeline_media.edges[0],
        data.user.edge_owner_to_timeline_media.edges[1],
        data.user.edge_owner_to_timeline_media.edges[2],
      ];
    }
  } catch (error) {
    console.log("login error", error);
  }

  return {
    props: {
      instagramPosts: posts,
      projects: [],
    },
  };
}
