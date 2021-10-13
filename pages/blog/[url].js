import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar bg></Navbar>
      <h2>Blog with url: {router.query.url}</h2>
    </div>
  );
};

export default BlogPost;
