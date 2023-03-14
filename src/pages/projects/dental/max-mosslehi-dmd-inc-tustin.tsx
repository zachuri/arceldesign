import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d12-1.png",
    alt: "dental 12 1",
    desc: "",
  },
  {
    src: "/assets/dental/d12-2.png",
    alt: "dental 12 2",
    desc: "",
  },
  {
    src: "/assets/dental/d12-3.png",
    alt: "dental 12 3",
    desc: "",
  },
  {
    src: "/assets/dental/d12-4.png",
    alt: "dental 12 4",
    desc: "",
  },
  {
    src: "/assets/dental/d12-5.png",
    alt: "dental 12 5",
    desc: "",
  },
];

const OVDIWC = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Max Mosslehi, D.D.M., Inc.</title>
        <meta name="description" content="Max Mosslehi, D.D.M., Inc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={12}
          designInfo={{
            name: "Max Mosslehi, D.D.M., Inc.",
            type: "Dental",
            location: "Tustin, California",
            completedYear: "2016",
          }}
          image={"/assets/dental/d12-1.png"}
        />
        <AboutDesign
          index={12}
          designDesc={{
            title: "Simply Natural...",
            desc: "The natural colors we can’t live without… Earth tone color palette adds the look and \
            feels of nature to the entire space. The culcutta marble stone on the reception counter and \
            the huge abstract paintings organic pattern with rich brown and blue gives an intimate and \
            tranquil feel for the entire dental office.",
          }}
          designInfo={{
            name: "Max Mosslehi, D.D.M., Inc.",
            type: "Dental",
            client: "Dr. Max Mosslehi",
            size: "2000 sq ft / 3 chairs",
            location: "Tustin, CA",
            completedYear: "2016",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default OVDIWC;
