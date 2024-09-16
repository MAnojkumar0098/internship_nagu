import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogPost from "./components/BlogPost";
import RelatedArticles from "./components/RelatedArticle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog | Home</title>
        <meta name="description" content="Blog Homepage" />
      </Head>
      <Header />
      <main>
        <BlogPost />
        <RelatedArticles />
      </main>
      <Footer />
    </>
  );
}
