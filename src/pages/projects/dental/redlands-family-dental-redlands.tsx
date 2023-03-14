import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d6-1.jpg",
    alt: "dental 6 1",
    desc: "",
  },
  {
    src: "/assets/dental/d6-2.jpg",
    alt: "dental 6 3",
    desc: "",
  },
  {
    src: "/assets/dental/d6-3.jpg",
    alt: "dental 6 4",
    desc: "",
  },
  {
    src: "/assets/dental/d6-4.jpg",
    alt: "dental 6 4",
    desc: "",
  },
];

const RFDR = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Redlands Family Dental Center</title>
        <meta name="description" content="Redlands Family Dental Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={6}
          designInfo={{
            name: "Redlands Family Dental Center",
            type: "Dental",
            location: "Redlands, California",
            completedYear: "2009",
          }}
          image={"/assets/dental/d6-1.jpg"}
        />
        <AboutDesign
          index={6}
          designDesc={{
            title: "Nature Therapy...",
            desc: 'The combination of having incorporated natural stones and wood tones in this design space creates a cozy and "homier" \
          feel, while instilling solidity. Together, all natural elements, hues and tones of warm butterscotch and cooper create a \
          pleasant and welcoming atmosphere. Large-scale furnishings also support its state of grandness and fine quality while ensuring a welcoming feel.',
          }}
          designInfo={{
            name: "Redlands Family Dental Center",
            type: "Dental",
            client: "Samir Tadha, DDS",
            size: "2165 sq ft / 5 chairs",
            location: "Redlands, CA",
            completedYear: "2009",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default RFDR;
