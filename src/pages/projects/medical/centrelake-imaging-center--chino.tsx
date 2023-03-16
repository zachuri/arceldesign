import React from "react";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/medical/m3-1.jpg",
    alt: "hospitatliy m3 1",
    desc: "",
  },

  {
    src: "/assets/medical/m3-2.jpg",
    alt: "hospitatliy m3 2",
    desc: "",
  },

  {
    src: "/assets/medical/m3-3.jpg",
    alt: "hospitatliy m3 3",
    desc: "",
  },
  {
    src: "/assets/medical/m3-4.jpg",
    alt: "hospitatliy m3 4",
    desc: "",
  },
  {
    src: "/assets/medical/m3-5.jpg",
    alt: "hospitatliy m3 5",
    desc: "",
  },
];

const info = {
  index: 3,
  name: "Centrelake Imaging Center Chino",
  type: "Medical",
  client: "",
  size: "",
  location: "Chino, California",
  completedYear: "",
  title: "",
  desc: "",
};

const MMGA = () => {
  return <ProjectInput images={images} info={info} />;
};

export default MMGA;
