import Image from "next/image";
import Link from "next/link";
import BoxGrid from "../components/box-grid";

const images = [
  { src: "/assets/corporate/c1.jpg", alt: "corporate" },
  { src: "/assets/dental/dental1.jpg", alt: "dental" },
  { src: "/assets/hospitality/h1.jpg", alt: "hospitality" },
  { src: "/assets/medical/m1.jpg", alt: "medical" },
  { src: "/assets/residential/r1.jpg", alt: "residential" },
];

const Projects = () => {
  return <BoxGrid images={images} />;
};

export default Projects;
