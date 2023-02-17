import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import Navbar from "../components/navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
