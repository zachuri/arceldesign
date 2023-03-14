import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d10-1.jpg",
    alt: "dental 10 1",
    desc: "",
  },
  {
    src: "/assets/dental/d10-2.jpg",
    alt: "dental 10 2",
    desc: "",
  },
  {
    src: "/assets/dental/d10-3.jpg",
    alt: "dental 10 3",
    desc: "",
  },
  {
    src: "/assets/dental/d10-4.jpg",
    alt: "dental 10 4",
    desc: "",
  },
  {
    src: "/assets/dental/d10-5.jpeg",
    alt: "dental 10 5",
    desc: "",
  },
];

const OVDIWC = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Orlando Vales DDS Inc.</title>
        <meta name="description" content="Orlando Vales DDS. INC." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={10}
          designInfo={{
            name: "Orlando Vales, DDs, Inc.",
            type: "Dental",
            location: "West Covina, California",
            completedYear: "2010",
          }}
          image={"/assets/dental/d10-1.jpg"}
        />
        <AboutDesign
          index={10}
          designDesc={{
            title: "Sleek and Modern...",
            desc: "Bold hues of aqua envelop the space, promoting the subtle afterthought to the \
            masculine side of the practice. In addition, floral accent touches and curve framed mirrors, \
            hinting femininity, create a balance needed for the accommodation of all guests.",
          }}
          designInfo={{
            name: "Orlando Vales, DDs, Inc.",
            type: "Dental",
            client: "Orlando Vales, DDS.",
            size: "1177 sq ft / 3 chairs",
            location: "West Covina, CA",
            completedYear: "2010",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default OVDIWC;
