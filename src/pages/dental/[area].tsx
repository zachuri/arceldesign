import React from "react";
import MastHead from "../../components/project-template/mast-head";
import AboutDesign from "../../components/project-template/about-design";
import Contact from "../../components/project-template/contact";

interface Props {
  index: number;
  image: string;
  designDesc: {
    title: string;
    desc: string;
  };
  designInfo: {
    name: string;
    type: string;
    client: string;
    size: string;
    location: string;
    completedYear: string;
  };
  images: { src: string; alt: string; desc: string }[];
}

const Area: React.FC<Props> = ({
  index,
  image,
  designDesc,
  designInfo,
  images,
}) => {
  return (
    <>
      <MastHead
        index={0}
        designInfo={{
          name: "",
          type: "",
          client: "",
          size: "",
          location: "",
          completedYear: "",
        }}
        image=""
      />
      <AboutDesign
        designDesc={{
          title: "",
          desc: "",
        }}
        designInfo={{
          name: "",
          type: "",
          client: "",
          size: "",
          location: "",
          completedYear: "",
        }}
        images={[]}
      />
      <Contact />
    </>
  );
};

export default Area;
