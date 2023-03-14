import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/d11-1.jpg",
    alt: "dental 11 1",
    desc: "",
  },
  {
    src: "/assets/dental/d11-2.jpg",
    alt: "dental 11 2",
    desc: "",
  },
  {
    src: "/assets/dental/d11-3.jpg",
    alt: "dental 11 3",
    desc: "",
  },
  {
    src: "/assets/dental/d11-4.jpg",
    alt: "dental 11 4",
    desc: "",
  },
  {
    src: "/assets/dental/d11-5.jpeg",
    alt: "dental 11 5",
    desc: "",
  },
];

const SDI = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Synergy Dental Implant</title>
        <meta name="description" content="Synergy Dental Implant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={11}
          designInfo={{
            name: "Synergy Dental Implant",
            type: "Dental",
            location: "West Covina, California",
            completedYear: "2011",
          }}
          image={"/assets/dental/d10-1.jpg"}
        />
        <AboutDesign
          index={11}
          designDesc={{
            title: "Synergy....",
            desc: "Synergy Dental Implant's space embodies a soothing and inviting design due to its\
            creative and appealing focal point, the reception area. The interlocking geometric shapes \
            that create a beautifully crafted curved reception (with inside lighting) reflect the \
            significance and quality of the center. From rich wood finishes to the natural stones, all \
            exude these natural elements in their highest quality, including the wood backdrop that frames \
            the Synergy logo. The flow of the colorful art throughout and the twigs and other organic décor \
            shapes, create a colorful and inviting Center.",
          }}
          designInfo={{
            name: "Synergy Dental Implant",
            type: "Dental",
            client: "Ruben Santana, DDS, MS",
            size: "1600 sq ft / 3 chairs / 1 surgical room",
            location: "West Covina, CA",
            completedYear: "2011",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default SDI;
