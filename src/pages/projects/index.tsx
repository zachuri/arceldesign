import BoxGrid from "../../components/box-grid";

const images = [
  {
    src: "/assets/corporate/c1.jpg",
    alt: "corporate",
    href: "/corporate",
    address: "",
  },
  {
    src: "/assets/dental/dental1.jpg",
    alt: "dental",
    href: "/dental",
    address: "",
  },
  {
    src: "/assets/hospitality/h1.jpg",
    alt: "hospitality",
    href: "/hospitality",
    address: "",
  },
  {
    src: "/assets/medical/m1.jpg",
    alt: "medical",
    href: "/medical",
    address: "",
  },
  {
    src: "/assets/residential/r1.jpg",
    alt: "residential",
    href: "residential",
    address: "",
  },
];

const Projects = () => {
  return (
    <div>
      <BoxGrid images={images} title={"projects"} />
    </div>
  );
};

export default Projects;
