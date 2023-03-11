import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/dental4/Arcel_LDC+(2).jpg",
    alt: "dental 2",
    desc: "",
  },
  {
    src: "/assets/dental/dental4/Arcel_LDC+(11).jpg",
    alt: "dental 11",
    desc: "",
  },
  {
    src: "/assets/dental/dental4/Arcel_LDC+(12).jpg",
    alt: "dental 12",
    desc: "",
  },
  {
    src: "/assets/dental/dental4/Arcel_LDC+(14).jpg",
    alt: "dental 14",
    desc: "",
  },
  {
    src: "/assets/dental/dental4/Arcel_LDC+(15).jpg",
    alt: "dental 15",
    desc: "",
  },
];

const LDP = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Lincoln Dental</title>
        <meta
          name="description"
          content="Arcel Design/ Dental/ Lincoln Dental"
        />
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
          image={"/assets/dental/dental4/Arcel_LDC+(2).jpg"}
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
