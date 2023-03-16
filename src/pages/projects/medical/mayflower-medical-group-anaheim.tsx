import React from "react";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/medical/m2-1.jpeg",
    alt: "hospitatliy m2 1",
    desc: "",
  },

  {
    src: "/assets/medical/m2-2.jpeg",
    alt: "hospitatliy m2 2",
    desc: "",
  },

  {
    src: "/assets/medical/m2-3.jpeg",
    alt: "hospitatliy m2 3",
    desc: "",
  },

  {
    src: "/assets/medical/m2-4.jpeg",
    alt: "hospitatliy m2 4",
    desc: "",
  },

  {
    src: "/assets/medical/m2-5.jpg",
    alt: "hospitatliy m2 5",
    desc: "",
  },
];

const info = {
  index: 2,
  name: "Mayflower Medical Group",
  type: "Medical",
  client: "",
  size: "",
  location: "Anaheim, California",
  completedYear: "",
  title: "",
  desc: "",
};

const MMGA = () => {
  return <ProjectInput images={images} info={info} />;
};

export default MMGA;
