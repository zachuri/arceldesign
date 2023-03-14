import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d7-1.jpg",
    alt: "dental 7 1",
    desc: "",
  },
  {
    src: "/assets/dental/d7-2.jpg",
    alt: "dental 7 2",
    desc: "",
  },
  {
    src: "/assets/dental/d7-3.jpg",
    alt: "dental 7 3",
    desc: "",
  },
  {
    src: "/assets/dental/d7-4.jpg",
    alt: "dental 7 4",
    desc: "",
  },
];

const info = {
  index: 7,
  name: "Shodhan Dentistry",
  type: "Dental",
  client: "Dr. Harin Shodhan, Dr. Keyur Shodhan",
  size: "2400 sq ft / 7 chairs",
  location: "Desert Hot Springs, California",
  completedYear: "2009",
  title: "Nature Therapy...",
  desc: 'The combination of having incorporated natural stones and wood tones in this design space creates \
  a cozy and “homier" feel, while instilling solidity. Together, all natural elements, hues and tones of warm \
  butterscotch and cooper create a pleasant and welcoming atmosphere. Large-scale furnishings also support \
  its state of grandness and fine quality while ensuring a welcoming feel.',
};

const SDDHS = () => {
  return <ProjectInput images={images} info={info} />;
};

export default SDDHS;
