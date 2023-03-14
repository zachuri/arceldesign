import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d5-1.jpg",
    alt: "dental 5 1",
    desc: "",
  },
  {
    src: "/assets/dental/d5-2.jpg",
    alt: "dental 5 2",
    desc: "",
  },
  {
    src: "/assets/dental/d5-3.jpg",
    alt: "dental 5 3",
    desc: "",
  },
  {
    src: "/assets/dental/d5-4.jpg",
    alt: "dental 5 4",
    desc: "",
  },
  {
    src: "/assets/dental/d5-5.jpg",
    alt: "dental 5 5",
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
          content="Access Dental"
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
          image={"/assets/dental/d5-1.jpg"}
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
