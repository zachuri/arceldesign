import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d1-1.jpg",
    alt: "dental 1 1",
    desc: "",
  },
  {
    src: "/assets/dental/d1-2.jpg",
    alt: "dental 1 2",
    desc: "",
  },
  {
    src: "/assets/dental/d1-3.jpg",
    alt: "dental 1 3",
    desc: "",
  },
  {
    src: "/assets/dental/d1-4.jpg",
    alt: "dental 1 4",
    desc: "",
  },
  {
    src: "/assets/dental/d1-5.jpg",
    alt: "dental 1 5",
    desc: "",
  },
  {
    src: "/assets/dental/d1-6.jpg",
    alt: "dental 1 6",
    desc: "",
  },
  {
    src: "/assets/dental/d1-7.jpg",
    alt: "dental 1 7",
    desc: "",
  },
  {
    src: "/assets/dental/d1-8.jpg",
    alt: "dental 1 8",
    desc: "",
  },
];

const COPLH = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Nova World, Inc.</title>
        <meta name="description" content="Nova World, Inc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={1}
          designInfo={{
            name: "Nova World, Inc.",
            type: "Dental",
            location: "San Dimas, California",
            completedYear: "2014",
          }}
          image={"/assets/dental/d1-1.jpg"}
        />
        <AboutDesign
          index={1}
          designDesc={{
            title: "Harmonious Palette",
            desc: "Bringing natural soothing elements to set a harmonious tone. \
          By combining natural elements, and warm colors to the design, \
          where the space is large and oversized, a tranquil setting begins to develop.",
          }}
          designInfo={{
            name: "Nova World, Inc.",
            type: "Dental",
            client: "Jenny Zhao & Rod Smith",
            size: "10,000 sq ft",
            location: "San Dimas, CA",
            completedYear: "2014",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default COPLH;
