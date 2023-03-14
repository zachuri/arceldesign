import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d9-1.jpg",
    alt: "dental 9 1",
    desc: "",
  },
  {
    src: "/assets/dental/d9-2.jpg",
    alt: "dental 9 2",
    desc: "",
  },
  {
    src: "/assets/dental/d9-3.jpg",
    alt: "dental 9 3",
    desc: "",
  },
  {
    src: "/assets/dental/d9-4.jpg",
    alt: "dental 9 4",
    desc: "",
  },
  {
    src: "/assets/dental/d9-5.jpg",
    alt: "dental 9 5",
    desc: "",
  },
];

const RVDDDIA = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Rosetta Vergel De Dios, DMD INC.</title>
        <meta name="description" content="Rosetta Vergel De Dios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={9}
          designInfo={{
            name: "Rosetta Vergel De Dios",
            type: "Dental",
            location: "Anaheim , California",
            completedYear: "2011",
          }}
          image="/assets/dental/d9-1.jpg"
        />
        <AboutDesign
          index={9}
          designDesc={{
            title: "Transformed...",
            desc: "A residential home becomes an attractive and charming dental office through \
            this collaborative design. The balance of the grid ceilings and widely arched entryways \
            create separation of space, defining the different areas within the dentistry. At the same \
            time, the former residential hub becomes non-existent by the new openness of the space. \
            All new arches and soffits are reemphasized with warm color, to create a warm and welcoming feel.",
          }}
          designInfo={{
            name: "Rosetta Vergel De Dios",
            type: "Dental",
            client: "Dr. Harin Shodhan, Dr. Keyur Shodhan",
            size: "2000 sq ft / 4 chairs",
            location: "Anaheim, CA",
            completedYear: "2011",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default RVDDDIA;
