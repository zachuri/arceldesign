import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d8-1.jpg",
    alt: "dental 8 1",
    desc: "",
  },
  {
    src: "/assets/dental/d8-2.jpg",
    alt: "dental 8 2",
    desc: "",
  },
  {
    src: "/assets/dental/d8-3.jpg",
    alt: "dental 8 3",
    desc: "",
  },
  {
    src: "/assets/dental/d8-4.jpg",
    alt: "dental 8 4",
    desc: "",
  },
  {
    src: "/assets/dental/d8-5.jpg",
    alt: "dental 8 5",
    desc: "",
  },
];

const info = {
  index: 8,
  name: "Dental Care of Chino Hills",
  type: "Dental",
  client: "Dr. Bhavin Changela, DDs",
  size: "1100 sq ft / 4 chairs",
  location: "Chino Hills, California",
  completedYear: "2010",
  title: "Global Luxury...",
  desc: "The focal point of this dental office is centered on the onyx floor square medallion tiles. \
  This.fine-quartz rock has traces of earth, reflecting its solid and polished surface beautifully. \
  The décor of black leather studded chairs; vibrant art colors and some art deco inspired furnishings \
  create a traditional and vibrant aesthetic. The entire color scheme of rich green, brown and red \
  palettes, cohesively exude the energetic and vibrant feel within the dental office.",
};

const DCCHCH = () => {
  return <ProjectInput images={images} info={info} />;
};

export default DCCHCH;
