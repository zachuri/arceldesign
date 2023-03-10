import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact";
import MastHead from "../../../components/project-template/mast-head";
import images from "../../../data/dental/dental2.json";

const ECDC = () => {
  return (
    <>
      <Head>
        <title>ArcelDesign | Edna Cuevas, DDS</title>
        <meta
          name="description"
          content="Arcel Design/ Dental/ Edna Cuevas, DDS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={3}
          designInfo={{
            name: "Edna Cuevas, DDS",
            type: "Dental",
            location: "Covina, California",
            completedYear: "",
          }}
          image={"/assets/dental/dental2/IMG_6121.jpg"}
        />
        <AboutDesign
          index={3}
          designDesc={{
            title: "Title",
            desc: "Description",
          }}
          designInfo={{
            name: "Edna Cuevas, DDS",
            type: "Dental",
            client: "",
            size: "",
            location: "Covina, CA",
            completedYear: "",
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default ECDC;
