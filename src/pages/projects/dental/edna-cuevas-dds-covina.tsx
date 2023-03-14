import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d2-1.jpg",
    alt: "dental 2 1",
    desc: "",
  },
  {
    src: "/assets/dental/d2-2.jpg",
    alt: "dental 2 2",
    desc: "",
  },
  {
    src: "/assets/dental/d2-3.jpg",
    alt: "dental 2 3",
    desc: "",
  },
  {
    src: "/assets/dental/d2-4.jpg",
    alt: "dental 2 4",
    desc: "",
  },
  {
    src: "/assets/dental/d2-5.jpg",
    alt: "dental 2 5",
    desc: "",
  },
  {
    src: "/assets/dental/d2-6.jpg",
    alt: "dental 2 6",
    desc: "",
  },
  {
    src: "/assets/dental/d2-7.jpg",
    alt: "dental 2 7",
    desc: "",
  },
];

const ECDC = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Edna Cuevas, DDS</title>
        <meta name="description" content="Edna Cuevas, DDS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={2}
          designInfo={{
            name: "Edna Cuevas, DDS",
            type: "Dental",
            location: "Covina, California",
            completedYear: "",
          }}
          image={"/assets/dental/d2-1.jpg"}
        />
        <AboutDesign
          index={2}
          designDesc={{
            title: "Title",
            desc: "Description",
          }}
          designInfo={{
            name: "Edna Cuevas, DDS",
            type: "Dental",
            client: "",
            size: "",
            location: "Covina, CA",
            completedYear: "",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default ECDC;
