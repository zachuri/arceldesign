import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/dental5/ArcelDesign_Day2_1.jpg",
    alt: "dental 2",
    desc: "",
  },
  {
    src: "/assets/dental/dental5/ArcelDesign_Day2_2.jpg",
    alt: "dental 11",
    desc: "",
  },
  {
    src: "/assets/dental/dental5/ArcelDesign_Day2_3.jpg",
    alt: "dental 12",
    desc: "",
  },
  {
    src: "/assets/dental/dental5/EntryWay.jpg",
    alt: "dental 14",
    desc: "",
  },
  {
    src: "/assets/dental/dental5/ReceptionDesk.jpg",
    alt: "dental 15",
    desc: "",
  },
];

const ADWC = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Access Dental</title>
        <meta
          name="description"
          content="Arcel Design/ Dental/ Access Dental"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={5}
          designInfo={{
            name: "Access Dental",
            type: "Dental",
            location: "West Covina, California",
            completedYear: "2009",
          }}
          image={"/assets/dental/dental5/ArcelDesign_Day2_1.jpg"}
        />
        <AboutDesign
          index={5}
          designDesc={{
            title: "A Splash of Nature...",
            desc: "This natured inspired haven, from the detailed fern leaves and twigs, to its warm earth-colored \
          walls and naturalistic panel dividers, bring the calming outside to the inside space. Such hints of nature, \
          even in the art, or through its splashes of blue on vases and rattan accessories, further imbue the \
          calamity of nature—a goal that was successfully applied to the design space.",
          }}
          designInfo={{
            name: "Access Dental",
            type: "Dental",
            client: "Sarah Atendido, DMD",
            size: "1600 sq ft",
            location: "West Covina, CA",
            completedYear: "2009",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default ADWC;
