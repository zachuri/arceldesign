import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/corporate/c6-1.jpg",
    alt: "corporate 6 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-2.jpg",
    alt: "corporate 6 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-3.jpg",
    alt: "corporate 6 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-4.jpg",
    alt: "corporate 6 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-5.jpg",
    alt: "corporate 6 5",
    desc: "",
  },
];

const info = {
  index: 6,
  name: "Arceldesign, Inc.",
  type: "Corporate",
  client: "Arcel R. Punsalang, CID",
  size: "800 sq ft",
  location: "City of Industry, California",
  completedYear: "2012",
  title: "Modern Form.",
  desc: 'Contemporary and stylish, this "Design Studio" is perfect for entertainment and personal \
  enjoyment while conceptualizing design for a client. The center ceiling soffit with semi-curve transition \
  down to the wall, paired with vibrant carpet enlivens the space while the black borders, the \
  decorative mirror-like wall partition, and grayish paint create an upscale polished appearance.',
};

const AICI = () => {
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

export default AICI;
