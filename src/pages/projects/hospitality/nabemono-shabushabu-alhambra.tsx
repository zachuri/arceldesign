import React from "react";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/hospitality/h1-1.jpeg",
    alt: "hospitatliy h1 1",
    desc: "",
  },
  {
    src: "/assets/hospitality/h1-2.jpeg",
    alt: "hospitatliy h1 2",
    desc: "",
  },

  {
    src: "/assets/hospitality/h1-3.jpeg",
    alt: "hospitatliy h1 3",
    desc: "",
  },
  {
    src: "/assets/hospitality/h1-4.jpeg",
    alt: "hospitatliy h1 4",
    desc: "",
  },

  {
    src: "/assets/hospitality/h1-5.jpeg",
    alt: "hospitatliy h1 5",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "NABEMONO SHABUSHABU",
  type: "HOSPITALITY",
  client: "",
  size: "",
  location: "Alhabmbra, California",
  completedYear: "2019",
  title: "MODEN RESTURAUNT",
  desc: "NABEMONO SHABU-SHABU recently opened for a business located in the popular \
          food hub in the city of Alhambra created the expected set benchmark of modern \
         restaurant design drawing a millennial crowd, particularly the inset floor \
         tile laid diagonally serving as a “red carpet “ running continuously to the \
         back vertical wall. This eye-catching tile design consists of geometric shapes \
         and floral patterns repeated between the ornamental elements created by Porcenalosa \
         - USA this handcrafted mosaic tile. Each tile displays vintage and elegant design \
         with shades of antique silver serving as a focal point for the entire space.",
};

const NSA = () => {
  return <ProjectInput images={images} info={info} />;
};

export default NSA;
