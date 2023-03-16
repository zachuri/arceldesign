import React from "react";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/medical/m1-1.jpg",
    alt: "hospitatliy m1 1",
    desc: "",
  },

  {
    src: "/assets/medical/m1-2.jpg",
    alt: "hospitatliy m1 2",
    desc: "",
  },

  {
    src: "/assets/medical/m1-3.jpg",
    alt: "hospitatliy m1 3",
    desc: "",
  },

  {
    src: "/assets/medical/m1-4.jpeg",
    alt: "hospitatliy m1 4",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "Centrelake Imagin & Oncology Diagnostic Radiology",
  type: "Medical",
  client: "",
  size: "",
  location: "Anaheim, California",
  completedYear: "",
  title: "",
  desc: "",
};

const CIOA = () => {
  return <ProjectInput images={images} info={info} />;
};

export default CIOA;
