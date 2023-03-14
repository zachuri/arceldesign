import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/corporate/c3-1.jpg",
    alt: "corporate 3 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c3-2.jpeg",
    alt: "corporate 3 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c3-3.jpg",
    alt: "corporate 3 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c3-4.jpg",
    alt: "corporate 3 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c3-5.jpg",
    alt: "corporate 3 5",
    desc: "",
  },
];

const info = {
  index: 3,
  name: "Diamond Star Office Condo",
  type: "Corporate",
  client: "CGM Development, Inc. ",
  size: "15,000 sq ft",
  location: "Diamond Bar, California",
  completedYear: "2013",
  title: "Timeless Elegance.",
  desc: 'This grand lobby with strong symmetry of beam and columns, reminiscent the "Ancient Greece" \
  known as the Colonnade denotes a long sequence of columns joined by their entablature emulated in this \
  space in a modern twist. The customized crystal chandeliers & crystal sconces, red carpet rich in color, \
  luscious wall treatments, and semi-curve wall crystal glass mosaic compliments the grandeur & elegance of the interiors.',
};

const DSOC = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | {info.name}</title>
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
          image={"/assets/corporate/c3-1.jpg"}
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

export default DSOC;
