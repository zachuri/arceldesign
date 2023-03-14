import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d1-1.jpg",
    alt: "dental 1 1",
    desc: "",
  },
  {
    src: "/assets/dental/d1-2.jpg",
    alt: "dental 1 2",
    desc: "",
  },
  {
    src: "/assets/dental/d1-3.jpg",
    alt: "dental 1 3",
    desc: "",
  },
  {
    src: "/assets/dental/d1-4.jpg",
    alt: "dental 1 4",
    desc: "",
  },
  {
    src: "/assets/dental/d1-5.jpg",
    alt: "dental 1 5",
    desc: "",
  },
  {
    src: "/assets/dental/d1-6.jpg",
    alt: "dental 1 6",
    desc: "",
  },
  {
    src: "/assets/dental/d1-7.jpg",
    alt: "dental 1 7",
    desc: "",
  },
  {
    src: "/assets/dental/d1-8.jpg",
    alt: "dental 1 8",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "Center For Pediatric Dentistry",
  type: "Dental",
  client: "",
  size: "",
  location: "La Habra, California",
  completedYear: "",
  title: "",
  desc: "",
};

const COPLH = () => {
  return <ProjectInput info={info} images={images} />;
};

export default COPLH;
