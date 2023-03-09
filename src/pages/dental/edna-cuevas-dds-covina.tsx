import AboutDesign from "../../components/project-template/about-design";
import Contact from "../../components/project-template/contact";
import MastHead from "../../components/project-template/mast-head";
import images from "../../data/dental/dental2.json";

const ECDC = () => {
  return (
    <main>
      <MastHead
        index={2}
        designInfo={{
          name: "Edna Cuevas, DDS",
          type: "Dental",
          location: "Covina, California",
          completedYear: "",
        }}
        image={"/assets/dental/dental2/IMG_6121.jpg"}
      />
      <AboutDesign
        index={2}
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
  );
};

export default ECDC;
