import ProjectInput from '../../../components/project-template/project-input';

const images = [
  {
    src: "/assets/corporate/c7-1.jpg",
    alt: "corporate 7 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c7-2.jpg",
    alt: "corporate 7 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c7-3.jpg",
    alt: "corporate 7 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c7-4.jpg",
    alt: "corporate 7 4",
    desc: "",
  },
];

const info = {
  index: 7,
  name: "Ok Container, Inc.",
  type: "Corporate",
  client: "Ben Chou",
  size: "1100 sq ft",
  location: "West Covina, California",
  completedYear: "2010",
  title: "Transitional Styling",
  desc: "Transitional styling and finely crafted art pieces take center stage in this corporate \
  office. Color are carefully selected to communicate comfort and warmth. Each room treat \
  as sanctuary, offering calmness and serenity as what Mr. Chou envisioned.",
};

const OC = () => {
  return (
    <ProjectInput images={images} info={info}/>
  );
};

export default OC;
