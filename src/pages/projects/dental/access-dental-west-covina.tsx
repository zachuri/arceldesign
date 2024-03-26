import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next/types";
import ProjectInput from "../../../components/project-template/project-input";

const images = [
  {
    src: "/assets/dental/d5-1.jpg",
    alt: "dental 5 1",
    desc: "",
  },
  {
    src: "/assets/dental/d5-2.jpg",
    alt: "dental 5 2",
    desc: "",
  },
  {
    src: "/assets/dental/d5-3.jpg",
    alt: "dental 5 3",
    desc: "",
  },
  {
    src: "/assets/dental/d5-4.jpg",
    alt: "dental 5 4",
    desc: "",
  },
  {
    src: "/assets/dental/d5-5.jpg",
    alt: "dental 5 5",
    desc: "",
  },
];

const info = {
  index: 5,
  name: "Access Dental",
  type: "Dental",
  client: "Sarah Atendido, DMD",
  size: "1600 sq ft | 4 Chairs",
  location: "West Covina, California",
  completedYear: "2009",
  title: "A Splash of Nature...",
  desc: "This natured inspired haven, from the detailed fern leaves and twigs, to its warm earth-colored \
  walls and naturalistic panel dividers, bring the calming outside to the inside space. Such hints of nature, \
  even in the art, or through its splashes of blue on vases and rattan accessories, further imbue the \
  calamity of nature—a goal that was successfully applied to the design space.",
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

const ADWC: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput info={info} images={imgHashed} />;
};

export default ADWC;
