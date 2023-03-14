import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d3-1.jpg",
    alt: "dental 3 1",
    desc: "",
  },
  {
    src: "/assets/dental/d3-2.jpg",
    alt: "dental 3 2",
    desc: "",
  },
  {
    src: "/assets/dental/d3-3.jpg",
    alt: "dental 3 3",
    desc: "",
  },
  {
    src: "/assets/dental/d3-4.jpg",
    alt: "dental 3 4",
    desc: "",
  },
  {
    src: "/assets/dental/d3-5.jpeg",
    alt: "dental 3 5",
    desc: "",
  },
];

const CDP = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Comfort Dental</title>
        <meta
          name="description"
          content="Arcel Design/ Dental/ Comfort Dental"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={3}
          designInfo={{
            name: "Comfort Dental",
            type: "Dental",
            location: "Pasadena, California",
            completedYear: "2013",
          }}
          image={"/assets/dental/d3-1.jpg"}
        />
        <AboutDesign
          index={3}
          designDesc={{
            title: "Modern Comfort....",
            desc: "Modern contemporary style, structure, and form combine harmoniously for this dental practice, creating an attractively ideal space, one minimal and therapeutic.",
          }}
          designInfo={{
            name: "Comfort Dental",
            type: "Dental",
            client: "Julian Nguyen, DDS, MS",
            size: "1500 sq ft",
            location: "Pasadena, CA",
            completedYear: "2013",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default CDP;
