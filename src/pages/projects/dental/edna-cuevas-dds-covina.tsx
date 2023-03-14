import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d2-1.jpg",
    alt: "dental 2 1",
    desc: "",
  },
  {
    src: "/assets/dental/d2-2.jpg",
    alt: "dental 2 2",
    desc: "",
  },
  {
    src: "/assets/dental/d2-3.jpg",
    alt: "dental 2 3",
    desc: "",
  },
  {
    src: "/assets/dental/d2-4.jpg",
    alt: "dental 2 4",
    desc: "",
  },
  {
    src: "/assets/dental/d2-5.jpg",
    alt: "dental 2 5",
    desc: "",
  },
  {
    src: "/assets/dental/d2-6.jpg",
    alt: "dental 2 6",
    desc: "",
  },
  {
    src: "/assets/dental/d2-7.jpg",
    alt: "dental 2 7",
    desc: "",
  },
];

const info = {
  index: 2,
  name: "Edna Cuevas, DDS",
  type: "Dental",
  client: "",
  size: "",
  location: "Covina, California",
  completedYear: "",
  title: "",
  desc: "",
};

const ECDC = () => {
  return <ProjectInput images={images} info={info} />;
};

export default ECDC;
