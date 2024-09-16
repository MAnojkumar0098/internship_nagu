import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Blog | Contact</title>
      </Head>
      <Header />
      <main>
        <div className="max-width-95 margin-auto">
          <h1>Contact Us</h1>
          {/* Add contact form or details */}
        </div>
      </main>
      <Footer />
    </>
  );
}
