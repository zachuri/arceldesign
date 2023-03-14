import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/corporate/c5-1.jpeg",
    alt: "corporate 5 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c5-2.jpeg",
    alt: "corporate 5 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c5-3.jpeg",
    alt: "corporate 5 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c5-4.jpeg",
    alt: "corporate 5 4",
    desc: "",
  },
];

const info = {
  index: 5,
  name: "Coast Travel Services, Inc.",
  type: "Corporate",
  client: "Anie Arciaga",
  size: "1200 sq ft",
  location: "Sherman Oaks, California",
  completedYear: "2011",
  title: "Instant Atmosphere.",
  desc: "Pared down and functional, but light and airy for this travel agency office. With contemporary furnishings and modern color scheme complete the coziness-like feel for the entire space.",
};

const TSG = () => {
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

export default TSG;
