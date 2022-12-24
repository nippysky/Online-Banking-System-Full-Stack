import Head from "next/head";
import BankTabs from "../components/BankTabs";
import Expereince from "../components/Expereince";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>NOIR BANK</title>
        <meta name="description" content="Bank For All" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <main>
        <Hero />
        <Services />
        <BankTabs />
        <Expereince />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
