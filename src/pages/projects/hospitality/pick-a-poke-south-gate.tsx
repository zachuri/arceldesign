import React from "react";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/hospitality/h5-1.jpeg",
    alt: "hospitatliy h5 1",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "HONG KONG EXPRESS",
  type: "Hospitality",
  client: "",
  size: "",
  location: "South Gate, California",
  completedYear: "",
  title: "",
  desc: "",
};

const HKEO = () => {
  return <ProjectInput images={images} info={info} />;
};

export default HKEO;
