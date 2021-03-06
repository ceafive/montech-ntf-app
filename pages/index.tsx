import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../src/containers/Banner";
import Discover from "../src/containers/Discover";
import Features from "../src/containers/Features";
import Navbar from "../src/containers/Navbar";

import Script from "next/script";
import Tezos from "../src/containers/Tezos";
import NFTCollections from "../src/containers/NFTCollections";
import Newsletter from "../src/containers/Newsletter";
import Footer from "../src/containers/Footer";

const Home: NextPage = () => {
  return (
    <div className=" bg-brandBlue1">
      <Head>
        <title>Montech NFT App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css"
        />
      </Head>

      <main>
        <div className="container mx-auto">
          <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
          <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
          <Navbar />
          <Banner />
          <Features />
          <Discover />
          <Tezos />
        </div>
        <NFTCollections />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
