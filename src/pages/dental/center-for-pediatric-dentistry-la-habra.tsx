import AboutDesign from "../../components/project-template/about-design";
import Contact from "../../components/project-template/contact";
import MastHead from "../../components/project-template/mast-head";
import images from "../../data/dental/dental1.json";

const COPLH = () => {
  return (
    <main>
      <MastHead
        index={1}
        designInfo={{
          name: "Nova World, Inc.",
          type: "Dental",
          location: "San Dimas, California",
          completedYear: "2014",
        }}
        image={"/assets/dental/dental1/IMG_6566.jpg"}
      />
      <AboutDesign
        index={1}
        designDesc={{
          title: "Harmonious Palette",
          desc: "Bringing natural soothing elements to set a harmonious tone. \
          By combining natural elements, and warm colors to the design, \
          where the space is large and oversized, a tranquil setting begins to develop.",
        }}
        designInfo={{
          name: "Nova World, Inc.",
          type: "Dental",
          client: "Jenny Zhao & Rod Smith",
          size: "10,000 sq ft",
          location: "San Dimas, CA",
          completedYear: "2014",
        }}
        images={images}
      />
      <Contact />
    </main>
  );
};

export default COPLH;
