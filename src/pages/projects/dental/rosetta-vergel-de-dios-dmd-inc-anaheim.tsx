import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d9-1.jpg",
    alt: "dental 9 1",
    desc: "",
  },
  {
    src: "/assets/dental/d9-2.jpg",
    alt: "dental 9 2",
    desc: "",
  },
  {
    src: "/assets/dental/d9-3.jpg",
    alt: "dental 9 3",
    desc: "",
  },
  {
    src: "/assets/dental/d9-4.jpg",
    alt: "dental 9 4",
    desc: "",
  },
  {
    src: "/assets/dental/d9-5.jpg",
    alt: "dental 9 5",
    desc: "",
  },
];

const info = {
  index: 9,
  name: "Rosetta Vergel De Dios, DMD Inc.",
  type: "Dental",
  client: "Dr. Rosette Vergel de Dios",
  size: "2000 sq ft / 4 chairs",
  location: "Anaheim, California",
  completedYear: "2011",
  title: "Transformed...",
  desc: "A residential home becomes an attractive and charming dental office through this collaborative design. \
  The balance of the grid ceilings and widely arched entryways create separation of space, defining the different \
  areas within the dentistry. At the same time, the former residential hub becomes non-existent by the new \
  openness of the space. All new arches and soffits are reemphasized with warm color, to create a warm and welcoming feel.",
};

const RVDDDIA = () => {
  return <ProjectInput images={images} info={info} />;
};

export default RVDDDIA;
