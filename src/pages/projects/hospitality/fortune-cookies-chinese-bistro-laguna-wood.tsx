import React from "react";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/hospitality/h4-1.jpg",
    alt: "hospitatliy h4 1",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "FORTUIINE COOKIES CHINESE BISTRO",
  type: "Hospitality",
  client: "",
  size: "",
  location: "Laguna Wood, California",
  completedYear: "",
  title: "",
  desc: "",
};

const FCCB = () => {
  return <ProjectInput images={images} info={info} />;
};

export default FCCB;
