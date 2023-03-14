import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d11-1.jpg",
    alt: "dental 11 1",
    desc: "",
  },
  {
    src: "/assets/dental/d11-2.jpg",
    alt: "dental 11 2",
    desc: "",
  },
  {
    src: "/assets/dental/d11-3.jpg",
    alt: "dental 11 3",
    desc: "",
  },
  {
    src: "/assets/dental/d11-4.jpg",
    alt: "dental 11 4",
    desc: "",
  },
  {
    src: "/assets/dental/d11-5.jpeg",
    alt: "dental 11 5",
    desc: "",
  },
];

const info = {
  index: 11,
  name: "Synergy Dental Implant",
  type: "Dental",
  client: "Ruben Santana, DDS, MS ",
  size: "1600 sq ft / 3 chairs / 1 surgical room",
  location: "West Covina, California",
  completedYear: "2011",
  title: "Synergy...",
  desc: "Synergy Dental Implant's space embodies a soothing and inviting design due to its creative \
  and appealing focal point, the reception area. The interlocking geometric shapes that create a beautifully \
  crafted curved reception (with inside lighting) reflect the significance and quality of the center. From rich \
  wood finishes to the natural stones, all exude these natural elements in their highest quality, including the wood \
  backdrop that frames the Synergy logo. The flow of the colorful art throughout and the twigs and \
  other organic décor shapes, create a colorful and inviting Center."
};

const SDI = () => {
  return <ProjectInput images={images} info={info} />;
};

export default SDI;
