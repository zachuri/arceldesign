import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/corporate/c5-1.jpeg",
    alt: "corporate 5 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c5-2.jpeg",
    alt: "corporate 5 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c5-3.jpeg",
    alt: "corporate 5 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c5-4.jpeg",
    alt: "corporate 5 4",
    desc: "",
  },
];

const info = {
  index: 5,
  name: "Coast Travel Services, Inc.",
  type: "Corporate",
  client: "Anie Arciaga",
  size: "1200 sq ft",
  location: "Sherman Oaks, California",
  completedYear: "2011",
  title: "Instant Atmosphere.",
  desc: "Pared down and functional, but light and airy for this travel agency office. With contemporary furnishings and modern color scheme complete the coziness-like feel for the entire space.",
};

const TSG = () => {
  return <ProjectInput info={info} images={images} />;
};

export default TSG;
