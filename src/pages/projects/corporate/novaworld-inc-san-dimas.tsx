import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/corporate/c1-1.jpg",
    alt: "corporate 5 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-2.jpg",
    alt: "corporate 5 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-3.jpg",
    alt: "corporate 5 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-4.jpg",
    alt: "corporate 5 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-5.jpg",
    alt: "corporate 5 5",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-6.jpg",
    alt: "corporate 5 6",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-7.jpg",
    alt: "corporate 5 7",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-8.jpg",
    alt: "corporate 5 8",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-9.jpg",
    alt: "corporate 5 9",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-10.jpg",
    alt: "corporate 5 10",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-11.jpg",
    alt: "corporate 5 11",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-12.jpg",
    alt: "corporate 5 12",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-13.jpg",
    alt: "corporate 5 13",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "Novaworld, Inc",
  type: "corporate",
  client: "Jenny Zhao & Rod Smith",
  size: "10,000 sq ft",
  location: "San Dimas, California",
  completedYear: "2014",
  title: "Harmonious Palette....",
  desc: "Bringing natural soothing elements to set a harmonious tone. By combining natural elements, and warm colors to the design, where the space is large and oversized, a tranquil setting begins to develop. \
    The idea of applying natural finishes to the design, such as natural stones to accent a feature wall and exotic maple veneer, including glass, the illusion of the outdoors becomes alive and brings with it a \
    sense of what nature instills upon humans--relaxation. \
    In order to further achieve a soothing environment, natural warm colors and warm neutrals were also applied, including a system that involved modular and efficient space planning.\
    Overall, the foundation of nature adds tranquility to the work environment, thus instilling efficiency and comfort in the workplace. The result is one that maximizes our clients desire for a successful business.",
};

const ADWC = () => {
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
          image={"/assets/corporate/c1-1.jpg"}
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

export default ADWC;
