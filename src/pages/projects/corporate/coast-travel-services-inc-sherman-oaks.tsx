import { getBlurhash } from "next-blurhash";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";

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

const TSG: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput info={info} images={imgHashed} />;
};

export default TSG;
