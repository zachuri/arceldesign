import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d10-1.jpg",
    alt: "dental 10 1",
    desc: "",
  },
  {
    src: "/assets/dental/d10-2.jpg",
    alt: "dental 10 2",
    desc: "",
  },
  {
    src: "/assets/dental/d10-3.jpg",
    alt: "dental 10 3",
    desc: "",
  },
  {
    src: "/assets/dental/d10-4.jpg",
    alt: "dental 10 4",
    desc: "",
  },
  {
    src: "/assets/dental/d10-5.jpeg",
    alt: "dental 10 5",
    desc: "",
  },
];

const info = {
  index: 10,
  name: "Orlando Vales, DDS, Inc.",
  type: "Dental",
  client: "Orlando Vales, DDS",
  size: "1117 sq ft / 3 chairs",
  location: "West Covina, California",
  completedYear: "2010",
  title: "Sleek and Modern...",
  desc: "Bold hues of aqua envelop the space, promoting the subtle afterthought to the masculine \
  side of the practice. In addition, floral accent touches and curve framed mirrors, \
  hinting femininity, create a balance needed for the accommodation of all guests."
};

const OVDIWC = () => {
  return <ProjectInput images={images} info={info} />;
};

export default OVDIWC;
