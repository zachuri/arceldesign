import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/corporate/c2-1.jpg",
    alt: "corporate 2 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c2-2.jpg",
    alt: "corporate 2 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c2-3.jpg",
    alt: "corporate 2 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c2-4.jpg",
    alt: "corporate 2 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c2-5.jpg",
    alt: "corporate 2 5",
    desc: "",
  },
  {
    src: "/assets/corporate/c2-6.jpg",
    alt: "corporate 2 6",
    desc: "",
  },
  {
    src: "/assets/corporate/c2-7.jpg",
    alt: "corporate 2 7",
    desc: "",
  },
];

const info = {
  index: 2,
  name: "CCM DEVELOPMENT INC.",
  type: "Corporate",
  client: "Peichin Lee ",
  size: "8,000 sq ft",
  location: "City of Industry, California",
  completedYear: "2011",
  title: "Personalized Glamour...",
  desc: 'Transforming the traditional look of the CGM corporate office with an ultra modern design,\
  our team carefully selected the appropriate color scheme. Inspired by Tri-kes "Chiang Mai - Amethyst - Purplish | Silverish"\
  as the color source of inspiration for the entire space, the color palette cohesively works with the carpet (Milliken "Public Reaction/Paste Up"). \
  The composition of both creates a smooth visual transition to all who enter. Introducing three colors on horizontal stripe layout for the selected \
  walls to provide a continuous flow to the space. The newly re-stained handrail black in color and balusters with silver paint, the vertical wallpaper, \
  and the custom crystal chandelier will feature a "modern glam" that everyone will enjoy.',
};

const CCMD = () => {
  return <ProjectInput info={info} images={images} />;
};

export default CCMD;
