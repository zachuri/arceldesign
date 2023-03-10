import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/corporate/c6-1.jpg",
    alt: "corporate 6 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-2.jpg",
    alt: "corporate 6 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-3.jpg",
    alt: "corporate 6 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-4.jpg",
    alt: "corporate 6 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-5.jpg",
    alt: "corporate 6 5",
    desc: "",
  },
];

const info = {
  index: 5,
  name: "Access Denal",
  type: "Dental",
  client: "Sarah Atendido, DMD",
  size: "1600 sq ft | 4 Chairs",
  location: "West Covina, California",
  completedYear: "2009",
  title: "A Splash of Nature...",
  desc: "This natured inspired haven, from the detailed fern leaves and twigs, to its warm earth-colored \
  walls and naturalistic panel dividers, bring the calming outside to the inside space. Such hints of nature, \
  even in the art, or through its splashes of blue on vases and rattan accessories, further imbue the \
  calamity of nature—a goal that was successfully applied to the design space.",
};

const ADWC = () => {
  return <ProjectInput images={images} info={info} />;
};

export default ADWC;
