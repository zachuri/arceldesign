import React from "react";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/hospitality/h3-1.jpg",
    alt: "hospitatliy h3 1",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "PANDA WOK  ",
  type: "Hospitality",
  client: "",
  size: "",
  location: "North Hollywood, California",
  completedYear: "2019",
  title: "",
  desc: "",
};

const PW = () => {
  return <ProjectInput images={images} info={info} />;
};

export default PW;
