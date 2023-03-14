import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d3-1.jpg",
    alt: "dental 3 1",
    desc: "",
  },
  {
    src: "/assets/dental/d3-2.jpg",
    alt: "dental 3 2",
    desc: "",
  },
  {
    src: "/assets/dental/d3-3.jpg",
    alt: "dental 3 3",
    desc: "",
  },
  {
    src: "/assets/dental/d3-4.jpg",
    alt: "dental 3 4",
    desc: "",
  },
  {
    src: "/assets/dental/d3-5.jpeg",
    alt: "dental 3 5",
    desc: "",
  },
];

const info = {
  index: 3,
  name: "Comfort Dental",
  type: "Dental",
  client: "Julian Nguyen, DDS, MS",
  size: "1500 sq ft | 4 Chairs",
  location: "Pasadena, California",
  completedYear: "2013",
  title: "Modern Comfort....",
  desc: "Modern contemporary style, structure, and form combine harmoniously for this dental practice, creating an attractively ideal space, one minimal and therapeutic.",
};

const CDP = () => {
  return <ProjectInput images={images} info={info} />;
};

export default CDP;
