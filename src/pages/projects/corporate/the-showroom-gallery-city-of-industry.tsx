import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/corporate/c4-1.jpg",
    alt: "corporate 4 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-2.jpg",
    alt: "corporate 4 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-3.jpg",
    alt: "corporate 4 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-4.jpg",
    alt: "corporate 4 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-5.jpg",
    alt: "corporate 4 5",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-5.jpg",
    alt: "corporate 4 5",
    desc: "",
  },
];

const info = {
  index: 4,
  name: "The Showroom Gallery",
  type: "Corporate",
  client: "CGM Development, Inc.",
  size: "5,000 sq ft",
  location: "City of Industry, CA",
  completedYear: "2011",
  title: "Modern Sleek.",
  desc: "A modern and luxurious style comes together in this new Showroom | Gallery. \
  Introducing a neutral color palette of grayish and silverish with a punch of the purplish \
  hue tones from MILLIKEN Constantine 'Tessellate' the main carpet and color source of inspiration. \
  An architectural 'Sculptured Screens' from INTERLAM Company will feature as decorative hanging panels \
  in the conference area. Incorporating four divider faceted bead chain customized by SHIMMER SCREEN will \
  provide a sense of privacy around the conference area and create a gorgeous effect of the reflecting lights above. \
  The space comprises of five separate functional spaces; two separate seating areas, project galleries, \
  conference area and an ultra modern bar area for their clientele to entertainment. \
  ArcelDesign team delivered an exceptional new design concept that exceeded CGM's management and CDA's vision for their new gallery to enjoy.",
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
