import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/dental3/4.jpg",
    alt: "dental4",
    desc: "",
  },
  {
    src: "/assets/dental/dental3/5.jpg",
    alt: "dental5",
    desc: "",
  },
  {
    src: "/assets/dental/dental3/14a.jpg",
    alt: "dental4a",
    desc: "",
  },
  {
    src: "/assets/dental/dental3/cCD15.jpg",
    alt: "dental4a",
    desc: "",
  },
  {
    src: "/assets/dental/dental3/image-asset.jpeg",
    alt: "dental4a",
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
          index={2}
          designInfo={{
            name: "Comfort Dental",
            type: "Dental",
            location: "Pasadena, California",
            completedYear: "2013",
          }}
          image={"/assets/dental/dental3/4.jpg"}
        />
        <AboutDesign
          index={1}
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
