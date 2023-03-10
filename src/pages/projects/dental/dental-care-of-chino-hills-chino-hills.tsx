import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/dental8/02.jpg",
    alt: "dental 8 2",
    desc: "",
  },
  {
    src: "/assets/dental/dental8/04.jpg",
    alt: "dental 8 4",
    desc: "",
  },
  {
    src: "/assets/dental/dental8/06.jpg",
    alt: "dental 8 6",
    desc: "",
  },
  {
    src: "/assets/dental/dental8/07b.jpg",
    alt: "dental 8 7b",
    desc: "",
  },
  {
    src: "/assets/dental/dental8/10a.jpg",
    alt: "dental 8 10a",
    desc: "",
  },
];

const DCCHCH = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Dental Care of Chino Hills</title>
        <meta
          name="description"
          content="Arcel Design/ Dental/ Dental Care of Chino Hills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={8}
          designInfo={{
            name: "Dental Care of Chino Hills",
            type: "Dental",
            location: "Chino Hills, California",
            completedYear: "2010",
          }}
          image={"/assets/dental/dental8/02.jpg"}
        />
        <AboutDesign
          index={8}
          designDesc={{
            title: "Global Luxury...",
            desc: "The focal point of this dental office is centered on the onyx floor square \
          medallion tiles. This.fine-quartz rock has traces of earth, reflecting its solid \
          and polished surface beautifully. The décor of black leather studded chairs; vibrant \
          art colors and some art deco inspired furnishings create a traditional and vibrant \
          aesthetic. The entire color scheme of rich green, brown and red palettes, cohesively exude",
          }}
          designInfo={{
            name: "Dental Care of Chino Hills",
            type: "Dental",
            client: "Dr. Bhavin Changela, DDs",
            size: "1100 sq ft / 4 chairs",
            location: "Redlands, CA",
            completedYear: "2010",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default DCCHCH;
