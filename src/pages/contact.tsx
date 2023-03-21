import React from "react";
import { MainLayout } from "../components/layout";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>ARCELDESIGN, INC. | Contact</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="flex h-screen items-center justify-center">
          <div>
            <h1 className="py-5 text-4xl uppercase text-white">
              Contact Information
            </h1>
            <p className="py-5 text-xl text-white">
              <span className="font-bold">Address </span>| 382 Lemon Ave, #346,
              Walnut, CA 91789
            </p>
            <p className="py-5 text-xl text-white">
              <span className="font-bold">Office Phone Number </span>|
              909-837-2236
            </p>
            <p className="py-5 text-xl text-white">
              <span className="font-bold">Email Address </span>|
              arcel@arceldesign.com
            </p>
            <div className="flex flex-row items-center justify-center gap-5 py-5">
              <BsFacebook size={30} fill="white" />
              <BsInstagram size={30} fill="white" />
              <BsLinkedin size={30} fill="white" />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Contact;
