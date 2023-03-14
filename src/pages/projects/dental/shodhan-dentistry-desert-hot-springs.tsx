import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d7-1.jpg",
    alt: "dental 7 1",
    desc: "",
  },
  {
    src: "/assets/dental/d7-2.jpg",
    alt: "dental 7 2",
    desc: "",
  },
  {
    src: "/assets/dental/d7-3.jpg",
    alt: "dental 7 3",
    desc: "",
  },
  {
    src: "/assets/dental/d7-4.jpg",
    alt: "dental 7 4",
    desc: "",
  },
];

const SDDHS = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Shodhan Dentistry</title>
        <meta name="description" content="Shodhan Dentistry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={7}
          designInfo={{
            name: "Shodhan Dentistry",
            type: "Dental",
            location: "Desert Hot Springs, California",
            completedYear: "2009",
          }}
          image={"/assets/dental/d7-1.jpg"}
        />
        <AboutDesign
          index={7}
          designDesc={{
            title: "Modest Red...",
            desc: "Modest accents of rich red color, dispersed throughout the space, promote a \
          consistent richness to the eye in this environment. The dental office embodies an elegant \
          and contemporary design, through its unique use of materials and artwork. Porcelain tiles \
          resembling hardwood flooring, connecting the space together, add a solid and sturdy feel, while adding tranquility through their horizontal layout.",
          }}
          designInfo={{
            name: "Shodan Dentistry",
            type: "Dental",
            client: "Dr. Harin Shodhan, Dr. Keyur Shodhan",
            size: "2165 sq ft / 5 chairs",
            location: "Redlands, CA",
            completedYear: "20011",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default SDDHS;
