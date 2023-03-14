import ProjectInput from '../../../components/project-template/project-input';

const images = [
  {
    src: "/assets/corporate/c4-1.jpg",
    alt: "corporate 4 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-2.jpg",
    alt: "corporate 4 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-3.jpg",
    alt: "corporate 4 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-4.jpg",
    alt: "corporate 4 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-5.jpg",
    alt: "corporate 4 5",
    desc: "",
  },
  {
    src: "/assets/corporate/c4-5.jpg",
    alt: "corporate 4 5",
    desc: "",
  },
];

const info = {
  index: 4,
  name: "The Showroom Gallery",
  type: "Corporate",
  client: "CGM Development, Inc.",
  size: "5,000 sq ft",
  location: "City of Industry, CA",
  completedYear: "2011",
  title: "Modern Sleek.",
  desc: "A modern and luxurious style comes together in this new Showroom | Gallery. \
  Introducing a neutral color palette of grayish and silverish with a punch of the purplish \
  hue tones from MILLIKEN Constantine 'Tessellate' the main carpet and color source of inspiration. \
  An architectural 'Sculptured Screens' from INTERLAM Company will feature as decorative hanging panels \
  in the conference area. Incorporating four divider faceted bead chain customized by SHIMMER SCREEN will \
  provide a sense of privacy around the conference area and create a gorgeous effect of the reflecting lights above. \
  The space comprises of five separate functional spaces; two separate seating areas, project galleries, \
  conference area and an ultra modern bar area for their clientele to entertainment. \
  ArcelDesign team delivered an exceptional new design concept that exceeded CGM's management and CDA's vision for their new gallery to enjoy.",
};

const TSG = () => {
  return (
    <ProjectInput images={images} info={info}/>
  );
};

export default TSG;
