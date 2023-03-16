import { GetStaticProps } from "next/types";
import ProjectInput from "../../../components/project-template/project-input";
import { getBlurhash } from "next-blurhash";

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

type DemoProps = {
  imgHashed: { src: string; hash: string; alt: string; desc: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < images.length; i++) {
    const hash = await getBlurhash(images[i]?.src as string);
    hashes[images[i]?.src as string] = hash;
  }

  const imgHashed = images
    .filter((img) => hashes[img.src] !== undefined)
    .map((img) => ({
      src: img.src,
      alt: img.alt,
      hash: hashes[img.src]!,
      desc: img.desc,
    }));

  return {
    props: {
      imgHashed,
    },
  };
};

const OC: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput info={info} images={imgHashed} />;
};

export default OC;
