import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d6-1.jpg",
    alt: "dental 6 1",
    desc: "",
  },
  {
    src: "/assets/dental/d6-2.jpg",
    alt: "dental 6 3",
    desc: "",
  },
  {
    src: "/assets/dental/d6-3.jpg",
    alt: "dental 6 4",
    desc: "",
  },
  {
    src: "/assets/dental/d6-4.jpg",
    alt: "dental 6 4",
    desc: "",
  },
];

const info = {
  index: 6,
  name: "Redlands Family Dental Center",
  type: "Dental",
  client: "Samir Tadha, DDS",
  size: "2165 sq ft / 5 chairs",
  location: "Redlands, California",
  completedYear: "2009",
  title: "Nature Therapy...",
  desc: 'The combination of having incorporated natural stones and wood tones in this design space creates \
  a cozy and “homier" feel, while instilling solidity. Together, all natural elements, hues and tones of warm \
  butterscotch and cooper create a pleasant and welcoming atmosphere. Large-scale furnishings also support \
  its state of grandness and fine quality while ensuring a welcoming feel.',
};

const RFDR = () => {
  return <ProjectInput images={images} info={info} />;
};

export default RFDR;
