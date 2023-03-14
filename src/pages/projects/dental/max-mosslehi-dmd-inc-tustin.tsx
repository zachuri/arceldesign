import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d12-1.png",
    alt: "dental 12 1",
    desc: "",
  },
  {
    src: "/assets/dental/d12-2.png",
    alt: "dental 12 2",
    desc: "",
  },
  {
    src: "/assets/dental/d12-3.png",
    alt: "dental 12 3",
    desc: "",
  },
  {
    src: "/assets/dental/d12-4.png",
    alt: "dental 12 4",
    desc: "",
  },
  {
    src: "/assets/dental/d12-5.png",
    alt: "dental 12 5",
    desc: "",
  },
];

const info = {
  index: 12,
  name: "Max Mosslehi, DMD, Inc.",
  type: "Dental",
  client: "Dr. Max Mosslehi",
  size: "2000 sq ft / 5 chairs ",
  location: "Tustin, California",
  completedYear: "2016",
  title: "Simply Natural",
  desc: "The natural colors we can’t live without… Earth tone color palette adds the look and feels \
  of nature to the entire space. The culcutta marble stone on the reception counter and the huge \
  abstract paintings organic pattern with rich brown and blue gives an intimate and tranquil feel for the entire dental office ",
};

const OVDIWC = () => {
  return <ProjectInput images={images} info={info} />;
};

export default OVDIWC;
