import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";

export default function BlogPostPage() {
  return (
    <>
      <Head>
        <title>Blog | Post</title>
      </Head>
      <Header />
      <main>
        <BlogPost />
      </main>
      <Footer />
    </>
  );
}
