import { type NextPage } from "next";
import Head from "next/head";
import Masthead from "../components/masthead";
import Navbar from "../components/navbar";
import Slider from "../components/slider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ARCELDESIGN, INC.</title>
        <meta name="description" content="ARCELDESIGN, INC." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]">
        <Navbar />
        <Slider />
      </div>
    </>
  );
};

export default Home;
