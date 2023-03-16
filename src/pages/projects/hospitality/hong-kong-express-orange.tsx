import React from "react";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/hospitality/h2.jpg",
    alt: "hospitatliy h2 ",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "HONG KONG EXPRESS",
  type: "Hospitality",
  client: "",
  size: "",
  location: "Orange, California",
  completedYear: "2019",
  title: "",
  desc: "",
};

const HKEO = () => {
  return <ProjectInput images={images} info={info} />;
};

export default HKEO;
