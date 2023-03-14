import ProjectInput from '../../../components/project-template/project-input';

const images = [
  {
    src: "/assets/corporate/c3-1.jpg",
    alt: "corporate 3 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c3-2.jpeg",
    alt: "corporate 3 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c3-3.jpg",
    alt: "corporate 3 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c3-4.jpg",
    alt: "corporate 3 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c3-5.jpg",
    alt: "corporate 3 5",
    desc: "",
  },
];

const info = {
  index: 3,
  name: "Diamond Star Office Condo",
  type: "Corporate",
  client: "CGM Development, Inc. ",
  size: "15,000 sq ft",
  location: "Diamond Bar, California",
  completedYear: "2013",
  title: "Timeless Elegance.",
  desc: 'This grand lobby with strong symmetry of beam and columns, reminiscent the "Ancient Greece" \
  known as the Colonnade denotes a long sequence of columns joined by their entablature emulated in this \
  space in a modern twist. The customized crystal chandeliers & crystal sconces, red carpet rich in color, \
  luscious wall treatments, and semi-curve wall crystal glass mosaic compliments the grandeur & elegance of the interiors.',
};

const DSOC = () => {
  return (
    <ProjectInput images={images} info={info}/>
  );
};

export default DSOC;
