import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/corporate/c1-1.jpg",
    alt: "corporate 1 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-2.jpg",
    alt: "corporate 1 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-3.jpg",
    alt: "corporate 1 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-4.jpg",
    alt: "corporate 1 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-5.jpg",
    alt: "corporate 1 5",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-6.jpg",
    alt: "corporate 1 6",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-7.jpg",
    alt: "corporate 1 7",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-8.jpg",
    alt: "corporate 1 8",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-9.jpg",
    alt: "corporate 1 9",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-10.jpg",
    alt: "corporate 1 10",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-11.jpg",
    alt: "corporate 1 11",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-12.jpg",
    alt: "corporate 1 12",
    desc: "",
  },
  {
    src: "/assets/corporate/c1-13.jpg",
    alt: "corporate 1 13",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "Novaworld, Inc",
  type: "corporate",
  client: "Jenny Zhao & Rod Smith",
  size: "10,000 sq ft",
  location: "San Dimas, California",
  completedYear: "2014",
  title: "Harmonious Palette....",
  desc: "Bringing natural soothing elements to set a harmonious tone. By combining natural elements, and warm colors to the design, where the space is large and oversized, a tranquil setting begins to develop. \
    The idea of applying natural finishes to the design, such as natural stones to accent a feature wall and exotic maple veneer, including glass, the illusion of the outdoors becomes alive and brings with it a \
    sense of what nature instills upon humans--relaxation. \
    In order to further achieve a soothing environment, natural warm colors and warm neutrals were also applied, including a system that involved modular and efficient space planning.\
    Overall, the foundation of nature adds tranquility to the work environment, thus instilling efficiency and comfort in the workplace. The result is one that maximizes our clients desire for a successful business.",
};

const ADWC = () => {
  return <ProjectInput images={images} info={info} />;
};

export default ADWC;
