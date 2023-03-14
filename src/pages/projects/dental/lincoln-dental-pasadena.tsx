import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d4-1.jpg",
    alt: "dental 4 1",
    desc: "",
  },
  {
    src: "/assets/dental/d4-2.jpg",
    alt: "dental 4 1",
    desc: "",
  },
  {
    src: "/assets/dental/d4-3.jpg",
    alt: "dental 4 2",
    desc: "",
  },
  {
    src: "/assets/dental/d4-4.jpg",
    alt: "dental 4 4",
    desc: "",
  },
  {
    src: "/assets/dental/d4-5.jpg",
    alt: "dental 4 5",
    desc: "",
  },
];

const LDP = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Lincoln Dental</title>
        <meta name="description" content="Lincoln Dental" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={4}
          designInfo={{
            name: "Lincoln Dental",
            type: "Dental",
            location: "Pasadena, California",
            completedYear: "2010",
          }}
          image={"/assets/dental/d4-1.jpg"}
        />
        <AboutDesign
          index={4}
          designDesc={{
            title: "Modern Elegance...",
            desc: "Modern Elegance. Largely influenced by Japanese design, this space reflects a fusion of modern and Asian \
          through color and minimalism. The modern style is continuous throughout with sleek order, focus and functionality. \
          It's integrating geometric patterns and clean lines create a stable and serene environment. All colors combined are \
          vibrant and adjacent to a neutral gray tone, or pure whites, to help emanate its boldness and enhance the overall therapeutic visual for patients.",
          }}
          designInfo={{
            name: "Lincoln Dental",
            type: "Dental",
            client: "Dr. Walter Lam, DDS",
            size: "1300 sq ft",
            location: "Pasadena, CA",
            completedYear: "2010",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default LDP;
