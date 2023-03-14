import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/corporate/c7-1.jpg",
    alt: "corporate 7 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c7-2.jpg",
    alt: "corporate 7 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c7-3.jpg",
    alt: "corporate 7 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c7-4.jpg",
    alt: "corporate 7 4",
    desc: "",
  },
];

const info = {
  index: 7,
  name: "Ok Container, Inc.",
  type: "Corporate",
  client: "Ben Chou",
  size: "1100 sq ft",
  location: "West Covina, California",
  completedYear: "2010",
  title: "Transitional Styling",
  desc: "Transitional styling and finely crafted art pieces take center stage in this corporate \
  office. Color are carefully selected to communicate comfort and warmth. Each room treat \
  as sanctuary, offering calmness and serenity as what Mr. Chou envisioned.",
};

const OC = () => {
  return (
    <>
      <Head>
        <title>ARCELDESIGN, INC. | {info.name}</title>
        <meta name="description" content={info.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={info.index}
          designInfo={{
            name: info.name,
            type: info.type,
            location: info.location,
            completedYear: info.completedYear,
          }}
          image={images[0]?.src as string}
        />
        <AboutDesign
          index={info.index}
          designDesc={{
            title: info.title,
            desc: info.desc,
          }}
          designInfo={{
            name: info.name,
            type: info.type,
            client: info.client,
            size: info.size,
            location: info.location,
            completedYear: info.completedYear,
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default OC;
