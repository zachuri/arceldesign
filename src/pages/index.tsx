import { type NextPage } from "next";
import Head from "next/head";
import Slider from "../components/slider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ARCELDESIGN, INC.</title>
        <meta name="description" content="ARCELDESIGN, INC." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
    </>
  );
};

export default Home;
